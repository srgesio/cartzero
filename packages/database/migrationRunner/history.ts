import { sql } from "drizzle-orm";
import type { MigrationMeta } from "drizzle-orm/migrator.utils";
import { connection } from "../index";
import type { MigrationStatus } from "./types";

type HistoryRow = {
	id: number;
	name: string | null;
	hash: string;
	created_at: string;
	applied_at: Date | string | null;
};

const toIsoString = (value: Date | string | null): string | null => {
	if (value === null) {
		return null;
	}

	return value instanceof Date
		? value.toISOString()
		: new Date(value).toISOString();
};

export const readAppliedMigrations = async (
	localMigrations: MigrationMeta[],
): Promise<MigrationStatus[]> => {
	const historyExists = await connection.db.execute<{ exists: boolean }>(
		sql`select to_regclass('drizzle.__drizzle_migrations') is not null as exists`,
	);

	if (!historyExists.rows[0]?.exists) {
		return [];
	}

	const history = await connection.db.execute<HistoryRow>(
		sql`select id, name, hash, created_at, applied_at from drizzle.__drizzle_migrations order by id asc`,
	);

	const localByName = new Map(
		localMigrations.map((migration) => [migration.name, migration] as const),
	);
	const localByHash = new Map(
		localMigrations.map(
			(migration) =>
				[
					`${migration.hash}:${String(migration.folderMillis)}`,
					migration,
				] as const,
		),
	);

	return history.rows.flatMap((row) => {
		const local =
			(row.name ? localByName.get(row.name) : undefined) ??
			localByHash.get(`${row.hash}:${row.created_at}`);

		if (!local) {
			return [];
		}

		return [
			{
				name: local.name,
				state: "applied" as const,
				appliedAt: toIsoString(row.applied_at),
			},
		];
	});
};

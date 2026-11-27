import { sql } from "drizzle-orm";
import { readMigrationFiles } from "drizzle-orm/migrator";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { connection } from "../index";
import { readAppliedMigrations } from "./history";
import { getMigrationsFolder } from "./migrationsFolder";
import type {
	MigrationOptions,
	MigrationRunResult,
	MigrationStatus,
} from "./types";

const MIGRATION_LOCK_ID = 1_128_352_084;

export const getMigrationStatus = async (
	options: MigrationOptions = {},
): Promise<MigrationStatus[]> => {
	const localMigrations = readMigrationFiles({
		migrationsFolder: getMigrationsFolder(options.migrationsFolder),
	});
	const applied = await readAppliedMigrations(localMigrations);
	const appliedNames = new Set(applied.map((migration) => migration.name));
	const pending = localMigrations
		.filter((migration) => !appliedNames.has(migration.name))
		.map((migration) => ({
			name: migration.name,
			state: "pending" as const,
			appliedAt: null,
		}));

	return [...applied, ...pending];
};

export const runMigrations = async (
	options: MigrationOptions = {},
): Promise<MigrationRunResult> => {
	const before = await getMigrationStatus(options);
	const appliedBefore = new Set(
		before
			.filter((migration) => migration.state === "applied")
			.map((migration) => migration.name),
	);

	await connection.db.transaction(async (tx) => {
		await tx.execute(sql`select pg_advisory_xact_lock(${MIGRATION_LOCK_ID})`);
		await migrate(tx, {
			migrationsFolder: getMigrationsFolder(options.migrationsFolder),
		});
	});

	const status = await getMigrationStatus(options);

	return {
		applied: status
			.filter(
				(migration) =>
					migration.state === "applied" && !appliedBefore.has(migration.name),
			)
			.map((migration) => migration.name),
		status,
	};
};

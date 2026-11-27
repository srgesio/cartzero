import { getMigrationStatus, runMigrations } from "./runner";

export const migrationRunner = {
	getStatus: getMigrationStatus,
	run: runMigrations,
};

export { getMigrationStatus, runMigrations } from "./runner";
export type {
	MigrationOptions,
	MigrationRunResult,
	MigrationStatus,
} from "./types";

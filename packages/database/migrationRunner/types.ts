export type MigrationOptions = {
	migrationsFolder?: string;
};

export type MigrationStatus = {
	name: string;
	state: "applied" | "pending";
	appliedAt: string | null;
};

export type MigrationRunResult = {
	applied: string[];
	status: MigrationStatus[];
};

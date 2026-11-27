import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const defaultMigrationsFolder = resolve(packageRoot, "migrations");

export const getMigrationsFolder = (override?: string): string => {
	const configured = override ?? process.env.MIGRATIONS_FOLDER;
	const folder = configured ? resolve(configured) : defaultMigrationsFolder;

	if (!existsSync(folder)) {
		throw new Error(
			`Pasta de migrations não encontrada: ${folder}. Defina MIGRATIONS_FOLDER.`,
		);
	}

	return folder;
};

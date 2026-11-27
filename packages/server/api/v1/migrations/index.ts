import { migrationRunner } from "@cartzero/database/migrationRunner";

const handleError = (error: unknown): Response =>
  Response.json(
    {
      error:
        error instanceof Error
          ? error.message
          : "Falha ao processar migrations",
    },
    { status: 500 },
  );

export const getMigrations = async (): Promise<Response> => {
  try {
    return Response.json(
      (await migrationRunner.getStatus()).filter(
        (migration) => migration.state === "pending",
      ),
      { status: 200 },
    );
  } catch (error) {
    return handleError(error);
  }
};

export const applyMigrations = async (): Promise<Response> => {
  try {
    return Response.json(
      (await migrationRunner.getStatus()).filter(
        (migration) => migration.state === "pending",
      ),
      { status: 200 },
    );
  } catch (error) {
    return handleError(error);
  }
};

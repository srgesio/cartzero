import { connection } from "@cartzero/database";
import { eq, count } from "drizzle-orm";
const { db, dbActivity } = connection;

export async function getApiStatus() {
  const updatedAt = new Date().toISOString();
  const versionResult = await db.execute<{ server_version: string }>(
    "SHOW server_version;",
  );
  const databaseVersionValue = versionResult.rows[0]?.server_version;

  const maxConnectionsResult = await db.execute<{ max_connections: string }>(
    "SHOW max_connections;",
  );
  const maxConnectionsValue = maxConnectionsResult.rows[0]?.max_connections;

  const openedConnectionsResult = await db
    .select({ openedConnections: count() })
    .from(dbActivity)
    .where(eq(dbActivity.datname, process.env.POSTGRES_DB!));

  const openedConnectionsValue = openedConnectionsResult[0]?.openedConnections;

  const apiStatusResponse = {
    updatedAt,
    dependencies: {
      database: {
        maxConnections: Number(maxConnectionsValue),
        openedConnections: openedConnectionsValue,
        version: databaseVersionValue,
      },
    },
  };
  return Response.json({ ...apiStatusResponse }, { status: 200 });
}

import { db } from "@cartzero/database";

export async function getApiStatus() {
  const updatedAt = new Date().toISOString();
  const openedConnections = db.$client.listeners.length;
  const maxConnections = db.$client.getMaxListeners();

  const apiStatusResponse = {
    updatedAt,
    database: {
      maxConnections: maxConnections,
      openedConnections: openedConnections ?? 0,
      version: "19.0",
    },
  };
  return Response.json({ ...apiStatusResponse }, { status: 200 });
}

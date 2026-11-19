import { test, expect } from "vitest";

const baseUrl = process.env.CARTZERO_ADMIN_URL || "http://localhost:3001";

test("Get to api/v1/status should return 200", async () => {
  const response = await fetch(`${baseUrl}/api/v1/status`);

  expect(response.status).toBe(200);

  const responseBody = await response.json();

  console.log("body==>", responseBody);

  expect(responseBody.updatedAt).toBeDefined();
  const parsedDate = new Date(responseBody.updatedAt);

  expect(parsedDate.toISOString()).toEqual(responseBody.updatedAt);

  expect(responseBody.database?.openedConnections).toBeDefined();
  expect(responseBody.database?.maxConnections).toBeDefined();
  expect(responseBody.database?.version).toBeDefined();
  expect(responseBody.database.openedConnections).toBeLessThanOrEqual(
    responseBody.database.maxConnections,
  );
});

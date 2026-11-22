import { test, expect } from "vitest";

const baseUrl = process.env.CARTZERO_ADMIN_URL || "http://localhost:3001";

test("Get to api/v1/status should return 200", async () => {
  const response = await fetch(`${baseUrl}/api/v1/status`);

  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log("body==>", responseBody);

  const { updatedAt, dependencies } = responseBody;

  expect(updatedAt).toBeDefined();
  const parsedDate = new Date(updatedAt);
  expect(parsedDate.toISOString()).toEqual(updatedAt);

  expect(dependencies).toBeDefined();

  const { database } = dependencies;
  expect(database).toBeDefined();

  const { version, maxConnections, openedConnections } = database;

  expect(version).toBeDefined();
  expect(version).toEqual("19rc2");
  expect(version).toBeTypeOf("string");

  expect(maxConnections).toBeDefined();
  expect(maxConnections).toBeTypeOf("number");
  expect(maxConnections).toEqual(100);

  expect(openedConnections).toBeDefined();
  expect(openedConnections).toBeTypeOf("number");
  expect(openedConnections).toEqual(1);
});

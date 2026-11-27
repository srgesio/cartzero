import { test, expect } from "vitest";

const baseUrl = process.env.CARTZERO_ADMIN_URL || "http://localhost:3001";

test("Get to api/v1/migrations should return 200", async () => {
  const response = await fetch(`${baseUrl}/api/v1/migrations`);

  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  console.log("body==>", responseBody);
});

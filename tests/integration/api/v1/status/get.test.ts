import { test, expect } from "vitest";

const baseUrl = process.env.CARTZERO_ADMIN_URL || "http://localhost:3001";

test("Get to api/v1/status should return 200", async () => {
  const response = await fetch(`${baseUrl}/api/v1/status`);

  expect(response.status).toBe(200);
});

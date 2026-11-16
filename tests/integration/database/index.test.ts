import { afterAll, expect, test } from "vitest";
import { db } from "../../../packages/database";

test("Connection with database should work", async () => {
  const result = await db.execute<{ sum: number[] }>("SELECT 1+1 as sum;");
  console.log("==>rows", result.rows);
});

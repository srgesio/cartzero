import { test } from "vitest";
import { connection } from "@cartzero/database";

const { db } = connection;

test("Connection with database should work", async () => {
  const result = await db.execute<{ sum: number[] }>("SELECT 1+1 as sum;");
  console.log("==>rows", result.rows);
});

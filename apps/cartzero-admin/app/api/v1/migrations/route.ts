import { applyMigrations, getMigrations } from "@cartzero/server";

export async function GET() {
  return await getMigrations();
}

export async function POST() {
  return await applyMigrations();
}

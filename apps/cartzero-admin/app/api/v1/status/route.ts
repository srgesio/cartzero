import { getApiStatus } from "@cartzero/server";

export async function GET() {
  return await getApiStatus();
}

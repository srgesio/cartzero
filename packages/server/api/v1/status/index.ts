export async function getApiStatus() {
  return Response.json({ message: "ok" }, { status: 200 });
}

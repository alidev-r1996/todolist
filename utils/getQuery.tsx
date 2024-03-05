export default function getQuery(req: Request, queryName: string) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get(queryName);
  return query;
}

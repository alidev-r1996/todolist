export default function getParams(req: Request) {
  return req.url.split("/").slice(-1).toString();
}

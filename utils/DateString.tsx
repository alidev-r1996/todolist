export default function DateString(date: string=''): string {
  return new Date().toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    weekday: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

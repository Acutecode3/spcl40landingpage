export function formatDate(date: Date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options as any).format(
    date
  );

  const [day, month, year] = formattedDate.split(" ");

  const formattedMonth =
    month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

  const result = `${day} ${formattedMonth} ${year}`;

  return result;
}

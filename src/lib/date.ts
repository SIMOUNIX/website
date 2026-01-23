export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  const normalizedDate = date.includes("T") ? date : `${date}T00:00:00`;
  const targetDate = new Date(normalizedDate);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let relative = "";

  if (yearsAgo > 0) {
    relative = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    relative = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    relative = `${daysAgo}d ago`;
  } else {
    relative = "Today";
  }

  const fullDate = targetDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${relative})`;
}

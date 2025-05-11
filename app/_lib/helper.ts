export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function calculateAge(birthDate: string) {
  const today = new Date();
  const birth = new Date(birthDate);

  if (isNaN(birth.getTime())) {
    return "تاریخ وارد شده معتبر نیست";
  }

  let years: number = today.getFullYear() - birth.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasBirthdayPassed) {
    years--;
  }

  const lastBirthday = new Date(
    hasBirthdayPassed ? today.getFullYear() : today.getFullYear() - 1,
    birth.getMonth(),
    birth.getDate()
  );

  const days = Math.floor(
    (Number(today) - Number(lastBirthday)) / (1000 * 60 * 60 * 24)
  );

  return {
    years: years,
    days: days,
  };
}

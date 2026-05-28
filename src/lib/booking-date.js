/**
 * Converts HeroUI / @internationalized/date values to an ISO string for the API.
 */
export function toBookingDateISO(dateValue) {
  if (!dateValue) return null;

  if (dateValue instanceof Date && !Number.isNaN(dateValue.getTime())) {
    return dateValue.toISOString();
  }

  if (typeof dateValue === "object" && "year" in dateValue) {
    const { year, month, day } = dateValue;
    return new Date(year, month - 1, day).toISOString();
  }

  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) return null;

  return parsed.toISOString();
}

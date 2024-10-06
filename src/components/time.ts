import { subMinutes } from "date-fns";
import { TZDate, tzOffset } from "@date-fns/tz";

const localTZ = "Europe/Zurich";

export function utcToLocalTime(date: Date): Date {
  const utc = new TZDate(date, "UTC");
  return subMinutes(utc, tzOffset(localTZ, utc)).withTimeZone(localTZ);
}

export function formatDate(local: Date): string {
  return local.toLocaleDateString("de-CH", {
    dateStyle: "medium",
    timeZone: localTZ,
  });
}

export function formatTime(local: Date): string {
  return local.toLocaleTimeString("de-CH", {
    timeStyle: "short",
    timeZone: localTZ,
  });
}

export function formatDateTime(local: Date): string {
  return local.toLocaleString("de-CH", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: localTZ,
  });
}

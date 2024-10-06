const locale = "de-CH";
const localTZ = "Europe/Zurich";

export function formatDate(local: Date): string {
  return local.toLocaleDateString(locale, {
    dateStyle: "medium",
    timeZone: localTZ,
  });
}

export function formatTime(local: Date): string {
  return local.toLocaleTimeString(locale, {
    timeStyle: "short",
    timeZone: localTZ,
  });
}

export function formatDateTime(local: Date): string {
  return local.toLocaleString(locale, {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: localTZ,
  });
}

export function loadEntries() {
  const data = localStorage.getItem("moodEntries");
  return data ? JSON.parse(data) : [];
}

export function saveEntries(entries) {
  localStorage.setItem("moodEntries", JSON.stringify(entries));
}
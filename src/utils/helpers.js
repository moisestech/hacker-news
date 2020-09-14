export function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}

export function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + " 🔗" : str;
}

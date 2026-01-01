// Typesetting logic for smart quotes, dashes, and interpuncts
export const typeset = (text) => {
  if (!text) return text;
  if (Array.isArray(text)) return text.map(t => typeset(t));
  return text
    .replace(/(\W|^)"/g, '$1“').replace(/"/g, '”') // Smart Quotes
    .replace(/'/g, '’') // Smart Apostrophes
    .replace(/(\d)-(\d)/g, '$1–$2') // En-dashes for ranges
    .replace(/ - /g, ' — ') // Em-dashes for breaks
    .replace(/ \/ /g, ' · '); // Slashes to Interpuncts
};

// Date comparison logic
export const isPast = (dateStr) => {
  const eventDate = new Date(dateStr);
  const today = new Date();
  return eventDate < today;
};
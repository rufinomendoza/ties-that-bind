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
  if (!dateStr) return false;
  
  // FIX: Handle ranges like "April 16–19, 2026"
  // This regex replaces "Number[Dash]Number" with just the second Number
  // "16–19" becomes "19", resulting in "April 19, 2026"
  const cleanDateStr = dateStr.replace(/(\d+)[–-](\d+)/, '$2');

  const eventDate = new Date(cleanDateStr);
  const today = new Date();
  
  // Optional: Reset time to ensure fair comparison
  today.setHours(0, 0, 0, 0);

  // Safety check: if date is still invalid, assume it's upcoming (false)
  if (isNaN(eventDate)) return false;

  return eventDate < today;
};
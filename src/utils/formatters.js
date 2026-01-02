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
  const cleanDateStr = dateStr.replace(/(\d+)[–-](\d+)/, '$2');

  const eventDate = new Date(cleanDateStr);
  const today = new Date();
  
  today.setHours(0, 0, 0, 0);

  if (isNaN(eventDate)) return false;

  return eventDate < today;
};

// NEW: Robust Date Parsing Helper
export const parseEventDate = (dateStr) => {
  if (!dateStr) return { month: '', day: '' };
  
  const parts = dateStr.split(' ');
  
  // Case 1: Standard "Month Day, Year" or "Month Day"
  // e.g. "February 6, 2026" -> parts[0]="February", parts[1]="6,"
  if (parts.length >= 2) {
    return {
      month: parts[0],
      // Remove comma from the day part if present
      day: parts[1].replace(',', '') 
    };
  }
  
  // Case 2: "TBD", "Spring 2026", or single words
  // Return the whole string as the main "day" display so it's large and visible
  return {
    month: '', 
    day: dateStr
  };
};
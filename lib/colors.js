// Generate a visually pleasant random pastel color using HSL
export function randomPastel(seed = Math.random()) {
  const h = Math.floor(seed * 360);
  const s = 70; // saturation
  const l = 80; // lightness
  return `hsl(${h} ${s}% ${l}%)`;
}

// Derive a readable text color (black for light backgrounds, white otherwise)
export function readableText(bgHsl) {
  // crude parse of hsl string: hsl(h s% l%)
  const match = /hsl\(\s*\d+\s+(\d+)%\s+(\d+)%\s*\)/.exec(bgHsl);
  const lightness = match ? Number(match[2]) : 50;
  return lightness > 60 ? '#111827' : '#F9FAFB';
}

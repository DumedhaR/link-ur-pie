export function cleanExtraSpaces(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

export function trimTextByWords(text: string, wordLimit: number) {
  const cleaned = cleanExtraSpaces(text);
  const words = cleaned.split(' ');
  const trimmed = words.length > wordLimit ? words.slice(0, wordLimit).join(' ') : cleaned;
  return trimmed;
}
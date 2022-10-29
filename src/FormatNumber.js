export default function formatNumber(string) {
  if (/^[^+]/.test(string)) {
    const c = string.replace('8', '7');
    return `+${(c).replace(/\D/g, '')}`;
  }
  return `+${(string).replace(/\D/g, '')}`;
}

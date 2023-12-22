export const highlightKeyword = (
  text: string,
  keyword: string
): string => {
  if (!keyword.trim()) {
    return text;
  }
  const regex = new RegExp(`(${keyword})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
};

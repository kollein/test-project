export default {
  toCapitalCase(text) {
    return (
      text && text.length && text.trim().toLowerCase()
        .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    ) || '';
  },
  toKebabCase(text) {
    return text.trim().toLowerCase().replaceAll(' ', '-') || '';
  },
};

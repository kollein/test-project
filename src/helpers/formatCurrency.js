export default (number, options) => {
  const config = {
    style: 'currency',
    currency: 'GBP',
    lang: 'en-EN',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  };

  const opt = { ...config, ...options };

  return parseFloat(number, 10).toLocaleString(opt.lang, {
    style: opt.style,
    currency: opt.currency,
    minimumFractionDigits: opt.minimumFractionDigits,
    maximumFractionDigits: opt.maximumFractionDigits,
  }).replace(/^\D+/g, '').trim();
};

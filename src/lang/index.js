import en from './en';
import ar from './ar';

function getMessages(locale) {
  // fallback to 'en'
  let messages = en;
  switch (locale) {
    case 'ar':
      messages = ar;
      break;

    default:
      break;
  }

  return messages;
}

export default function i18nHook(i18n) {
  const { locale } = i18n;
  const messages = getMessages(locale);
  i18n.mergeLocaleMessage(locale, messages);
}

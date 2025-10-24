import { en } from './en';
import { es } from './es';

export const translations = { en, es };

export function getTranslation(language) {
  return translations[language];
}
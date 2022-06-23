import { addMessages, init } from 'svelte-i18n';
import enUS from './locales/en-US';

import readSettings from '../settings';



function i18n(): void {
  addMessages('en-US', enUS);;
  init({
    fallbackLocale: 'en-US',
    initialLocale: 'en-US',
  });
}

export default i18n;
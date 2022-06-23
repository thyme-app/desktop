import { addMessages, init } from 'svelte-i18n';
import enUS from './locales/en-US';

import readSettings from '../settings';



async function i18n() {
  addMessages('en-US', enUS);;
  init({
    fallbackLocale: 'en-US',
    initialLocale: (await readSettings()).locale,
  });
}

export default i18n;
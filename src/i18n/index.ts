import Polyglot from "node-polyglot";
import en from "./locales/en.json";
import jaJP from "./locales/ja-JP.json";
import readSettings from "../settings";

const i18n = new Polyglot()
export default i18n;

export async function load() {
  const settings = readSettings();

  /*** The locale code
   * @example "en-US"
   */
  const locale = (await settings).locale;

  /*** The locale that Polyglot expects for formatting
   * @example "en"
   */
  let language: string;

  /** JSON object of translation keys and values */
  let dict;

  switch (locale) {
    case /en-/.test(locale) && locale:
      language = "en"
      dict = en;
      break;
    case 'ja-JP':
      language = "ja"
      dict = jaJP;
      break;
    default:
      language = "en"
      dict = en;
  }

  i18n.locale(language);
  i18n.extend({...en, ...dict});
}
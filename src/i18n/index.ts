import Polyglot from "node-polyglot";
import en from "./locales/en.json";
import readSettings from "../settings";

const i18n = new Polyglot()
export default i18n;

export async function load() {
  const settings = readSettings();
  const locale = (await settings).locale;
  i18n.locale(locale);
  i18n.extend(en);
}
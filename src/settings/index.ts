import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import toml from 'toml';

type Settings = {
  locale: string;
}

const fallback: Settings = {
  locale: 'en-US'
}

export default async function readSettings(): Promise<Settings> {
  const tomlString = await readTextFile('settings.toml', { dir: BaseDirectory.App })
  try {
    return toml.parse(tomlString);
  } catch (e) {
    console.error(`Failed to read settings.toml!! Using defaults. ${e}`);
    alert('Failed to read settings.toml!! Using defaults.');
    return fallback;
  }
}

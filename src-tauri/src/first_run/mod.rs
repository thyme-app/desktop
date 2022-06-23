use self::settings::Settings;
use std::{
    fs::{create_dir_all, OpenOptions},
    io::Write,
    ops::Deref,
    path,
    sync::Arc,
};
use sys_locale::get_locale;
use tauri::AppHandle;
use toml;
mod settings;

pub fn generate_settings(app: &Arc<AppHandle>) {
    let mut path =
        tauri::api::path::app_dir(app.config().deref()).unwrap_or_else(|| path::PathBuf::new());
    path.push("settings.toml");
    let prefix = path.parent().unwrap();
    create_dir_all(prefix).unwrap();

    let locale = get_locale().unwrap_or_else(|| String::from("en-US"));
    let settings = Settings { locale };

    let file = OpenOptions::new().write(true).create_new(true).open(&path);
    match file {
        Ok(mut f)=> {
            let toml = toml::to_string(&settings).unwrap_or_else(|_| String::from(""));
            f.write_all(toml.as_bytes()).unwrap();
        },
        Err(_e) => {} // If the file already exists, we don't care
     }
}

use serde::Serialize;
#[derive(Serialize)]
pub struct Settings {
    pub locale: String,
}

use axum::Extension;
use std::sync::Arc;
use tauri::{AppHandle, Manager};

pub async fn get(Extension(app): Extension<Arc<AppHandle>>) -> &'static str {
    // you have your app in the requst now
    app.emit_all("hello", "world").unwrap();
    "Hello, world!"
}

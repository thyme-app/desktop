#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::Arc;

use axum::{
    extract::Extension,
    handler::{self, Handler},
};
use parking_lot::Mutex;
use tauri::{App, AppHandle, Manager};

async fn root(Extension(app): Extension<Arc<Mutex<AppHandle>>>) -> &'static str {
    // you have your app in the requst now
    app.lock().emit_all("root", "amongus");
    "Hello"
}
#[tokio::main]
async fn main() {
    let context = tauri::generate_context!();
    let builder = tauri::Builder::default()
        .build(context)
        .expect("Failed to build");

    let app = Arc::new(Mutex::new(builder.handle()));

    tokio::spawn(async move {
        let router = axum::Router::new()
            .route("/", axum::routing::get(root))
            .layer(Extension(app));
        axum::Server::bind(&"0.0.0.0:50000".parse().unwrap())
            .serve(router.into_make_service())
            .await
            .unwrap();
    });

    builder.run(|_, _| ())
}

#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use axum::extract::Extension;
use std::sync::Arc;
mod first_run;
mod hello;

#[tokio::main]
async fn main() {
    let context = tauri::generate_context!();
    let builder = tauri::Builder::default()
        .build(context)
        .expect("Failed to build");

    let app = Arc::new(builder.handle());
    first_run::generate_settings(&app);
    tokio::spawn(async move {
        let router = axum::Router::new()
            .route("/", axum::routing::get(hello::get))
            .layer(Extension(app));

        axum::Server::bind(&"0.0.0.0:50000".parse().unwrap())
            .serve(router.into_make_service())
            .await
            .unwrap();
    });
    builder.run(|_, _| ())
}

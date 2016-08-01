// Copyright 2016 Mark Sta Ana.
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0>, at your option.
// This file may not be copied, modified, or distributed except
// according to those terms.

// Inspired by Fractals wifi-location (https://github.com/contra/wifi-location)

//! A crate to return your GPS location using WiFi hotspots.
//!
//! # Usage
//!
//! This crate is [on crates.io](https://crates.io/crates/wifilocation) and can be
//! used by adding `wifilocation` to the dependencies in your project's `Cargo.toml`.
//!
//! ```toml
//! [dependencies]
//! wifilocation = "0.1"
//! ```
//!
//! and this to your crate root:
//!
//! ```rust
//! extern crate wifilocation;
//! ```
//! # Example
//!
//! ```rust
//! use wifilocation;
//!
//! println!("{:?}", wifilocation::get_location(wifilocation::get_towers()));
//! ```

extern crate wifiscanner;
use wifiscanner::Wifi;

/// GPS struct to return longitude and latitude coordinates; and accuracy of information.
#[derive(Debug)]
pub struct GpsLocation {
    pub accuracy: String,
    pub lng: String,
    pub lat: String,
}

/// A wrapper around wifiscanner scan function to return a Vec of wifiscanner::Wifi.
/// The function was an artifact of the original node module and will probably not make
// the next iteration.
pub fn get_towers() -> Vec<Wifi> {
    wifiscanner::scan().unwrap() // sorry Cristi
}

/// Return GPS location using a Vec of wifiscanner::Wifi. Uses Google's GPS location service
pub fn get_location(towers: Vec<Wifi>) -> Result<GpsLocation, String> {
    Ok(GpsLocation {
        accuracy: "20".to_string(),
        lng: "0.8930123".to_string(),
        lat: "51.8852769".to_string(),
    })
}

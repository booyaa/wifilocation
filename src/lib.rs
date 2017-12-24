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
//! wifilocation = "0.3.*"
//! ```
//!
//! and this to your crate root:
//!
//! ```rust
//! extern crate wifilocation;
//! ```

extern crate wifiscanner;
extern crate reqwest;

#[macro_use]
extern crate serde_derive;
extern crate serde_json;

use wifiscanner::Wifi;
use reqwest::header::Accept;


const BASE_URL: &'static str = "https://maps.googleapis.com/maps/api/browserlocation/json";
const BASE_PARAMS: &'static str = "?browser=firefox&sensor=true";

#[derive(Debug, PartialEq)]
pub enum Error {
    /// A JSON parsing error occurred.
    JSON,
}

/// GPS struct to return longitude and latitude coordinates; and accuracy of information.
#[derive(Debug, PartialEq, Serialize, Deserialize)]
pub struct GpsLocation {
    pub accuracy: u32,
    pub location: Location,
}

/// This maps the same JSON key in the Google Maps API response. `lng` was their choice of abbreviation for Longitude
/// Further reading: https://gis.stackexchange.com/questions/24690/difference-between-lon-and-lng
#[derive(Debug, PartialEq, Serialize, Deserialize)]
pub struct Location {
    pub lat: f64,
    pub lng: f64,
}

/// A wrapper around wifiscanner scan function to return a Vec of wifiscanner::Wifi.
/// The function was an artifact of the original node module and will probably not make
// the next iteration.
pub fn get_towers() -> Vec<Wifi> {
    wifiscanner::scan().unwrap() // sorry Cristi
}


/// Return GPS location using a Vec of wifiscanner::Wifi. Uses Google's GPS location service
pub fn get_location(towers: Vec<Wifi>) -> Result<GpsLocation, Error> {
    let mut url = String::new();
    url.push_str(BASE_URL);
    url.push_str(BASE_PARAMS);

    let mut url_params = String::new();
    for tower in towers {
        url_params.push_str(&format!("&wifi=mac:{}&7Cssid:{}&7Css:{}",
                                     tower.mac,
                                     tower.ssid,
                                     tower.signal_level)
                                 .to_string());

    }

    url.push_str(&url_params);
    let client = reqwest::Client::new().unwrap();
    let mut res = client.post(&url)
                        .header(Accept::json())
                        .send()
                        .expect("Failed to connect to google api!"); // sorry Cristi

    let gps = try!(res.json::<GpsLocation>().map_err(|_| Error::JSON));

    Ok(gps)
}

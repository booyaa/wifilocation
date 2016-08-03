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
extern crate curl;

extern crate serde;
extern crate serde_json;

use serde_json::Value;

use wifiscanner::Wifi;
use curl::easy::{Easy, List};

#[doc(hidden)]
const BASE_URL: &'static str = "https://maps.googleapis.com/maps/api/browserlocation/json";
#[doc(hidden)]
const BASE_PARAMS: &'static str = "?browser=firefox&sensor=true";


/// GPS struct to return longitude and latitude coordinates; and accuracy of information.
#[derive(Debug)]
pub struct GpsLocation {
    pub accuracy: String,
    pub location: Location,
}

#[derive(Debug)]
pub struct Location {
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
    let mut handle = Easy::new();
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

    let encoded_params = handle.url_encode(url_params.as_bytes());
    url.push_str(&encoded_params);

    let mut list = List::new();
    list.append("Accept: application/json").unwrap();
    handle.post(true).unwrap();
    handle.post_field_size(0).unwrap();
    handle.http_headers(list).unwrap();

    let mut data = Vec::new();
    handle.url(&url.to_string()).unwrap();
    {
        let mut transfer = handle.transfer();
        transfer.write_function(|new_data| {
                    data.extend_from_slice(new_data);
                    Ok(new_data.len())
                })
                .unwrap();
        transfer.perform().unwrap();
    }

    let data_string = String::from_utf8(data.clone());
    let raw_json = data_string.unwrap().to_string();
    let raw: Value = serde_json::from_str(&raw_json).unwrap();

    let json_obj = raw.as_object().unwrap();

    let accuracy = json_obj.get("accuracy").unwrap();
    let location = json_obj.get("location").unwrap().as_object().unwrap();
    let lat = location.get("lat").unwrap();
    let lng = location.get("lng").unwrap();

    Ok(GpsLocation {
        accuracy: accuracy.to_string(),
        location: Location {
            lng: lng.to_string(),
            lat: lat.to_string(),
        },
    })
}

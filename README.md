# wifilocation

[![Build Status](https://travis-ci.org/booyaa/wifilocation.svg?branch=master)](https://travis-ci.org/booyaa/wifilocation)
[![Crates](https://img.shields.io/crates/v/wifilocation.svg)](https://crates.io/crates/wifilocation)
[![docs.rs](https://docs.rs/wifilocation/badge.svg)](https://docs.rs/wifilocation)
[![dependency status](https://deps.rs/repo/github/booyaa/wifilocation/status.svg)](https://deps.rs/repo/github/booyaa/wifilocation)

A crate to return your GPS location using WiFi hotspots.

Inspired by Fractals wifi-location (https://github.com/contra/wifi-location)

Full documentation can be found [here](https://docs.rs/wifilocation).

# Usage

This crate is [on crates.io](https://crates.io/crates/wifilocation) and can be
used by adding `wifilocation` to the dependencies in your project's `Cargo.toml`.

```toml
[dependencies]
wifilocation = "0.3"
```

and this to your crate root:

```rust
extern crate wifilocation;
```
# Example

```rust
use wifilocation;

println!("{:?}", wifilocation::get_location(wifilocation::get_towers()));
```

# Changelog
- 0.3.0 - simplified code after 1.15 stable release and switched from curl to reqwest

# How to contribute

see [CONTRIBUTING.md](/CONTRIBUTING.md)

# Copyright

Copyright 2016 Mark Sta Ana.

Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
http://www.apache.org/licenses/LICENSE-2.0> at your option. This file may not
be copied, modified, or distributed except according to those terms.


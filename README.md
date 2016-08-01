# Warning: subject to change!

# wifilocation

A crate to return your GPS location using WiFi hotspots.

Inspired by Fractals wifi-location (https://github.com/contra/wifi-location)

# Usage

This crate is [on crates.io](https://crates.io/crates/wifilocation) and can be
used by adding `wifilocation` to the dependencies in your project's `Cargo.toml`.

```toml
[dependencies]
wifilocation = "0.1"
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

# Copyright

Copyright 2016 Mark Sta Ana.

Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
http://www.apache.org/licenses/LICENSE-2.0> at your option. This file may not
be copied, modified, or distributed except according to those terms.

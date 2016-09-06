# bitbyte
Human-friendly bits and bytes (kilo, mega, giga, tera, peta)(bit/bytes)

### Basic Usage

    var byte = require('bitbyte')
  
    byte.toSI(1048576)
    => "1.05 MB"
  
    byte.toIEC(1048576)
    => "1.00 MiB"

Bytes only at the moment! Bits coming soon!

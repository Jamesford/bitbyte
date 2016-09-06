var expect = require('chai').expect
var bits = require('../index.js')

var bytes = {
  kb: 1024,
  mb: 1048576,
  gb: 1073741824,
  tb: 1099511627776,
  pb: 1125899906842624,
  eb: 1152921504606846976,
  zb: 1180591620717411303424,
  yb: 1208925819614629174706176
}

describe('toSI', function() {
  it('should convert '+ bytes.kb +' bytes to 1.02 kB', function() {
    var result = bits.toSI(bytes.kb)
    expect(result).to.equal('1.02 kB')
  })

  it('should convert '+ bytes.mb +' bytes to 1.05 MB', function() {
    var result = bits.toSI(bytes.mb)
    expect(result).to.equal('1.05 MB')
  })

  it('should convert '+ bytes.gb +' bytes to 1.07 GB', function() {
    var result = bits.toSI(bytes.gb)
    expect(result).to.equal('1.07 GB')
  })

  it('should convert '+ bytes.tb +' bytes to 1.10 TB', function() {
    var result = bits.toSI(bytes.tb)
    expect(result).to.equal('1.10 TB')
  })

  it('should convert '+ bytes.pb +' bytes to 1.13 PB', function() {
    var result = bits.toSI(bytes.pb)
    expect(result).to.equal('1.13 PB')
  })

  it('should convert '+ bytes.eb +' bytes to 1.15 EB', function() {
    var result = bits.toSI(bytes.eb)
    expect(result).to.equal('1.15 EB')
  })

  it('should convert '+ bytes.zb +' bytes to 1.18 ZB', function() {
    var result = bits.toSI(bytes.zb)
    expect(result).to.equal('1.18 ZB')
  })

  it('should convert '+ bytes.yb +' bytes to 1.21 YB', function() {
    var result = bits.toSI(bytes.yb)
    expect(result).to.equal('1.21 YB')
  })
})

describe('toIEC', function() {
  it('should convert '+ bytes.kb +' bytes to 1.00 KiB', function() {
    var result = bits.toIEC(bytes.kb)
    expect(result).to.equal('1.00 KiB')
  })

  it('should convert '+ bytes.mb +' bytes to 1.00 MiB', function() {
    var result = bits.toIEC(bytes.mb)
    expect(result).to.equal('1.00 MiB')
  })

  it('should convert '+ bytes.gb +' bytes to 1.00 GiB', function() {
    var result = bits.toIEC(bytes.gb)
    expect(result).to.equal('1.00 GiB')
  })

  it('should convert '+ bytes.tb +' bytes to 1.00 TiB', function() {
    var result = bits.toIEC(bytes.tb)
    expect(result).to.equal('1.00 TiB')
  })

  it('should convert '+ bytes.pb +' bytes to 1.00 PiB', function() {
    var result = bits.toIEC(bytes.pb)
    expect(result).to.equal('1.00 PiB')
  })

  it('should convert '+ bytes.eb +' bytes to 1.00 EiB', function() {
    var result = bits.toIEC(bytes.eb)
    expect(result).to.equal('1.00 EiB')
  })

  it('should convert '+ bytes.zb +' bytes to 1.00 ZiB', function() {
    var result = bits.toIEC(bytes.zb)
    expect(result).to.equal('1.00 ZiB')
  })

  it('should convert '+ bytes.yb +' bytes to 1.00 YiB', function() {
    var result = bits.toIEC(bytes.yb)
    expect(result).to.equal('1.00 YiB')
  })
})

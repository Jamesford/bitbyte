var exports = module.exports = {}

function getSuffix (power, e) {
  switch (power) {
    case 1000: // SI ( kB,MB,GB,TB,PB,EB,ZB,YB )
      return e ? 'kMGTPEZY'[--e] + 'B' : 'Bytes'
    case 1024: // IEC ( KiB,MiB,GiB,TiB,PiB,EiB,ZiB,YiB )
      return e ? 'KMGTPEZY'[--e] + 'iB' : 'Bytes'
  }
}

function fileSize (size, power) {
  var e = Math.log(size)/Math.log(power)|0
  var size = size/Math.pow(power, e)
  return size.toFixed(2) + ' ' + getSuffix(power, e)
}

// Systeme Internationale
exports.toSI = function (size) {
  return fileSize(size, 1000)
}

// International Electrotechnical Commission
exports.toIEC = function (size) {
  return fileSize(size, 1024)
}

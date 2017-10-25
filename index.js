const humanInterval = require('human-interval')
const fs = require('fs')

function pathIsFresh (filename, interval) {
  interval = interval || '1 hour'

  if (!fs.existsSync(filename)) return false

  const mtime = +(new Date(fs.statSync(filename).mtime))
  const int = humanInterval(interval)
  const now = Date.now()
  return mtime + int > now
}

module.exports = pathIsFresh

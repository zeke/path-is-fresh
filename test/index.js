require('chai').should()
const {describe, it} = require('mocha')
const pathIsFresh = require('..')
const {travel} = require('timekeeper')
const humanInterval = require('human-interval')
const tmp = require('tmp')
const file = tmp.fileSync().name

function travelForward (interval) {
  travel(new Date(Date.now() + humanInterval(interval)))
}

describe('pathIsFresh', () => {
  it('returns false for nonexistent files', () => {
    pathIsFresh('nonexistent/file').should.eq(false)
  })

  it('defaults freshness threshold to one hour', () => {
    pathIsFresh(file).should.eq(true)

    travelForward('59')
    pathIsFresh(file).should.eq(true)

    travelForward('61 minutes')
    pathIsFresh(file).should.eq(false)
  })

  it('accepts custom interval', () => {
    travelForward('5 years')
    pathIsFresh(file, '6 years').should.eq(true)
    pathIsFresh(file, '4 years').should.eq(false)
  })
})

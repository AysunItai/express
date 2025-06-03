'use strict'

const assert = require('assert')
const Layer = require('../../lib/router/layer')

describe('Layer', function () {
  it('should throw helpful error for invalid wildcard route', function () {
    assert.throws(() => {
      new Layer('/**', {}, function () {})
    }, /Express 5 requires named wildcards/)
  })
})

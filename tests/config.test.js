const expect = require('chai').expect
const config = require('../')

it('Test for basic config properties', () => {
  expect(config).to.be.a('object')
  expect(config.extends).to.equal('standard')
  expect(config.rules).to.be.a('object')
})

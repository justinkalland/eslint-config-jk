const expect = require('chai').expect
const eslint = require('eslint')

it('Load config with eslint to validate syntax', () => {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js'
  })

  const errorCount = cli.executeOnText('const foo = 1\nconst bar = function () {}\nbar(foo)\n').errorCount

  expect(errorCount).to.equal(0)
})

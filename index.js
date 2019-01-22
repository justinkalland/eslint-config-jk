module.exports = {
  extends: 'standard',
  plugins: [
    'no-only-tests'
  ],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'no-only-tests/no-only-tests': 'error'
  },
  overrides: [{
    files: [ 'tests/**', '*.test.js' ],
    env: { mocha: true }
  }]
}

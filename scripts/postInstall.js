#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const cwd = process.env.INIT_CWD || process.cwd()
const packageFile = path.join(cwd, 'package.json')

if (!fs.existsSync(packageFile)) {
  process.exit()
}

const packageJson = require(packageFile)
let packageChanged = false

if (packageJson.husky === undefined) {
  packageChanged = true
  packageJson.husky = {
    hooks: {
      'pre-commit': 'lint-staged'
    }
  }
}

if (packageJson['lint-staged'] === undefined) {
  packageChanged = true
  packageJson['lint-staged'] = {
    '*.js': 'eslint'
  }
}

if (packageJson.eslintConfig === undefined) {
  packageChanged = true
  packageJson.eslintConfig = {
    extends: 'jk'
  }
}

if (packageJson.scripts.lint === undefined) {
  packageChanged = true
  packageJson.scripts.lint = 'eslint .'
}

if (packageChanged) {
  const data = JSON.stringify(packageJson, null, 2) + '\n'
  fs.writeFileSync(packageFile, data)
}

#!/usr/bin/env node

const fs = require('fs')

const cwd = process.env.INIT_CWD || process.cwd()

const file = `${cwd}/.eslintrc.json`
const fileContents = '{"extends": "jk"}'

if (!fs.existsSync(file)) {
  fs.writeFileSync(file, fileContents)
}

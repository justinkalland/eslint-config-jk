# eslint-config-jk
The lint setup and config that I use in my projects (based on StandardJS).

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Setup
One package sets up everything needed for linting:
```
npm i eslint-config-jk --save-dev
```
- Installs eslint
- Installs the StandardJS eslint configs / plugins
- Adds [custom rules I like](https://github.com/justinkalland/eslint-config-jk/blob/master/index.js)
- Automatically creates `.eslintrc.json` (if it doesn't exist)

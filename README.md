# eslint-config-jk
The lint setup and config that I use in my projects. Basically StandardJS with a little extra, and linting on pre-commit.

## Setup
One package sets up everything needed for linting:
```
npm i eslint-config-jk --save-dev
```
- Installs [eslint](https://www.npmjs.com/package/eslint)
- Installs the StandardJS eslint configs / plugins
- Adds [custom rules and plugins I like](https://github.com/justinkalland/eslint-config-jk/blob/master/index.js)
- Installs [husky](https://www.npmjs.com/package/husky)
- Installs [lint-staged](https://www.npmjs.com/package/lint-staged)
- [Adds](https://github.com/justinkalland/eslint-config-jk/blob/master/scripts/postInstall.js) to `package.json` (if file exsists)
  - Eslint config option
  - Husky hook to lint on pre-commit

# Typescript Development Workflow

```bash
$ npm install --save-dev webpack webpack-cli typescript ts-loader
```

create `webpack.config.js`

create `tsconfig.json`

## Setup Testing

```bash
$ npm install --save-dev jest @types/jest ts-jest
```

Create **jest** configuration file `jest.config.js`.

```js
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
```

```bash
$ npm install --save-dev husky
```

In the `package.json` set up the event on which the task will act. In this case the pre-commit event, by adding the following.

```js
"husky": {
  "hooks": {
    "pre-commit": ""
  }
}
```

For the value of `"pre-commit"` set the CLI command for **jest** that we want to run.

Now we want to setup partial running of the test coverage so that it's not testing everything. Only what has been updated. Luckily **jest** with a little help from `lint-staged`, has functionality to only run the code in context of the commit.

```bash
$ npm install --save-dev lint-staged
```

In the `package.json` file define what actions should be triggered towards which parts of the code base. Also adding calling the `--findRelatedTests` option to `jest` will run the specific tests related to the files that are being committed.

```json
"lint-staged": {
  "src/**/*.ts": "jest --findRelatedTests"
}
```

Change the git hook so that it now uses `lint-staged`.

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.ts": "eslint && jest --findRelatedTests"
}
```

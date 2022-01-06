# Sample of Collboard module

Simple sample module for [Collboard.com](https://collboard.com/) created via [@collboard/modules-sdk](https://www.npmjs.com/package/@collboard/modules-sdk).

[![Use this template](https://raw.githubusercontent.com/collboard/docs/main/buttons/use-this-template.button.png)](https://github.com/collboard/module-sample-basic/generate)
[![License](https://img.shields.io/github/license/collboard/module-sample-basic.svg?style=flat)](https://raw.githubusercontent.com/collboard/module-sample-basic/master/LICENSE)
[![Test](https://github.com/collboard/module-sample-basic/actions/workflows/test.yml/badge.svg)](https://github.com/collboard/module-sample-basic/actions/workflows/test.yml)
[![Lint](https://github.com/collboard/module-sample-basic/actions/workflows/lint.yml/badge.svg)](https://github.com/collboard/module-sample-basic/actions/workflows/lint.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/collboard/module-sample-basic/badge.svg)](https://snyk.io/test/github/collboard/module-sample-basic)
[![Issues](https://img.shields.io/github/issues/collboard/module-sample-basic.svg?style=flat)](https://github.com/collboard/module-sample-basic/issues)

To start work, first `npm install` dependencies and then run `colldev` CLI util:

```bash
# Linux, WSL
colldev

# Windows, PowerShell
npx colldev
```

Colldev will automatically look into the [package.json](./package.json) find **main** entry *(it can be typescript or javascript file)*. And watch, build and serve changes to Collboard in development mode.

Then you open [Collboard in developer mode - dev.collboard.com](https://dev.collboard.com) and there you will see modules that you are working on.

Most of the modules make sense on the board (not the homepage) **so you will probably need to create a new board**.

These modules will be automatically installed & hot reloaded *(uninstalled+installed)* as you go.

Notice that boards+its contents created under development mode will be automatically erased after some time.


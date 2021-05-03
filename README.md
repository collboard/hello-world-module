# Sample of Collboard module

Simple sample module for [Collboard.com](https://collboard.com/) created via [@collboard/modules-sdk](https://www.npmjs.com/package/@collboard/modules-sdk).

To start work first `npm install` dependencies and then run `colldev` cli util:

```bash
colldev
```

This will automatically look into the [package.json](./package.json) find **main** entry *(it can be typescript or javascript file)*. And watch, build and serve changes to Collboard in development mode.

Then you open [Collboard in developer mode - dev.collboard.com](https://dev.collboard.com) and there you will see modules that you are working on.

Most of the modules makes sense on the board (not the homepage) **so you will probbably need to create new board**.

These modules will be automatically installed & hot reloaded *(uninstalled+installed)* as you go.

Notice that boards+its contents created under development mode will be automatically erased until some time.


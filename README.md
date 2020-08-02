# chrome-ext-with-cra-ts 
Chrome extension boilerplate with create-react-app and TypeScript

## Build

```
$ yarn build
```

## Build only background script

`yarn build` takes about 5 seconds even with the minimum configuration, because it executes production build by webpack.  
If you only want to build just background script, you can execute `yarn build-scripts` with few execution time.

```
$ yarn build-scripts
```

## Hot Reload
Thanks to [src/hot_reload.ts](https://github.com/mpppk/chrome-ext-with-cra-ts/blob/master/src/hot_reload.ts) (inspired by [xpl/crx-hotreload](https://github.com/xpl/crx-hotreload)), if you execute `yarn build` or `yarn build-scripts`, Chrome extension and active tab are reloaded automatically.
You can also reload actively by running `yarn reload`.
# patch-package in action

```sh
$ npm i -S typescript lodash
$ npm i -D ts-node rimraf
$ npm i -D app-node-env
$ npm i -D @types/node @types/lodash
# cjs 不支持 webpack tree-shaking, 只有 esm 才可以！
$ npm i -S lodash.tostring
$ npm i -D @types/lodash.tostring

# webpack plugin ???
$ npm i -S lodash-es
$ npm i -D @types/lodash-es

```

https://www.npmjs.com/package/@types/node

https://www.npmjs.com/package/@types/lodash

https://www.npmjs.com/package/rimraf

`lodash.tostring`

https://www.npmjs.com/package/lodash.tostring

https://www.npmjs.com/package/@types/lodash.tostring

`lodash-es`

https://www.npmjs.com/package/lodash-es

https://www.npmjs.com/package/@types/lodash-es



```sh
$ npm init -y

# $ tsc --init
$ npx tsc --init

```

## dev

```sh
# cjs
$ yarn dev
$ yarn app

$ npx ts-node ./src/index.ts
$ npx ts-node ./src/app.ts


# esm
$ yarn dev-esm
$ yarn app-esm

$ npx ts-node-esm ./src/index.ts
$ npx ts-node-esm ./src/app.ts

```

> fefs

https://typestrong.org/ts-node/docs/imports/

https://github.com/TypeStrong/ts-node/issues/1062#issuecomment-1094296803

https://github.com/xgqfrms/one-line-awesome-js-code/issues/1

https://www.cnblogs.com/xgqfrms/p/17242430.html#5160592


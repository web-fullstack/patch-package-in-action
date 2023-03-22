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
$ yarn dev
# $ yarn esm
$ yarn app

$ npx ts-node ./src/index.ts
$ npx ts-node ./src/app.ts

```
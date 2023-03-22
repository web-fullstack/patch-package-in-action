# patch

## lodash-es

1. toString.js ✅

/Users/xgqfrms-mm/Documents/github/patch-package-in-action/node_modules/lodash-es/toString.js

```js
function toString(value) {
  // return value == null ? '' : baseToString(value);
  // patch-package ✅
  // 实现原理: git diff, copy & recover
  const str = (value == null) ? '' : baseToString(value);
  console.log(`patch-package 🚀 str =`, str);
  return str;
}

```

## lodash

1. lodash.js ✅

/Users/xgqfrms-mm/Documents/github/patch-package-in-action/node_modules/lodash/lodash.js

```js
    function toString(value) {
      // return value == null ? '' : baseToString(value);
      // patch-package ✅
      // 实现原理: git diff, copy & recover
      const str = (value == null) ? '' : baseToString(value);
      console.log(`patch-package 👻 str =`, str);
      return str;
    }
```


2. toString.js ❌

/Users/xgqfrms-mm/Documents/github/patch-package-in-action/node_modules/lodash/toString.js

```js
function toString(value) {
  // return value == null ? '' : baseToString(value);
  // patch-package ✅
  // 实现原理: git diff, copy & recover
  const str = (value == null) ? '' : baseToString(value);
  console.log(`patch-package 👻 str =`, str);
  return str;
}

```

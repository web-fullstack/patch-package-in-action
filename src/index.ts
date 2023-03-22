
import _ from "lodash";
// import _, {toString} from "lodash";

const { toString } = _;

/*

SyntaxError: Named export 'toString' not found.
The requested module 'lodash' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'lodash';
const { toString } = pkg;

*/

/*

(node:19404) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/xgqfrms-mm/Documents/github/patch-package-in-action/src/index.ts:1
import _ from "lodash";
^^^^^^

SyntaxError: Cannot use import statement outside a module

*/

// ✅
// import toString from "lodash/toString";

// import toString from "lodash/tostring";
// const toString = require("lodash/toString");
// const toString = require('lodash.tostring');

// ❌
// import * as toString from "lodash/toString";

/*

could not find a declaration file for module 'lodash/toString'. '/Users/xgqfrms-mm/Documents/github/patch-package-in-action/node_modules/lodash/toString.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash/toString';`ts(7016)

This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export.ts(2497)

This module can only be referenced with ECMAScript imports/exports by turning on the 'allowSyntheticDefaultImports' flag and referencing its default export.ts(2497)

*/

type Obj = {
  [key: string]: any;
}

const obj: Obj = {
  name: 'xgqfrms',
  country: 'China',
  language: 'zh-hans',
};

const str1 = _.toString(obj);
const str2 = toString(obj);

console.log(`_.toString =`, str1);
console.log(`toString =`, str2);

export {}

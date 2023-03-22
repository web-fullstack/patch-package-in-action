
import {toString as ToString} from "lodash-es";

import toString from "lodash-es/toString";


type Obj = {
  [key: string]: any;
}

const obj: Obj = {
  name: 'xgqfrms',
  country: 'China',
  language: 'zh-hans',
};

const str1 = ToString(obj);
const str2 = toString(obj);

console.log(`ToString =`, str1);
console.log(`toString =`, str2);

export {}

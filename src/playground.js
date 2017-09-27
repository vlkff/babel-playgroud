'use strict';

import { Base }  from './Base.js';
import { say } from  './common.js';

/* Decorators showcase code */
let obj1 = new Base();
say('yo');
obj1.say();

// let obj = new DecoratorA(obj1);
// obj = new DecoratorB(obj);
// obj.say();

// export var show = function (msg) {
//   document.write(msg);
// }

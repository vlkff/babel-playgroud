import { say } from './common.js';

/* Base class definition */
function Base () {
}

Base.prototype.say = function () {
    say('I am a some class instance');
}

export {Base};

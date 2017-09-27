/* Decorators classes definitions */

/* Decorator class definition */
function Decorator(obj) {
  this._obj = obj;
}
Decorator.prototype = Object.create(Base.prototype);
Decorator.prototype.constructor = Decorator;


/* DecoratorA class definition */
function DecoratorA(obj) {
  Decorator.call(this, obj);
}
DecoratorA.prototype = Object.create(Decorator.prototype);
DecoratorA.prototype.constructor = DecoratorA;
DecoratorA.prototype.say = function () {
  this._obj.say();
  say('DecoratorA have what to say too');
}


/* DecoratorB class definition */
function DecoratorB(obj) {
  Decorator.call(this, obj);
}
DecoratorB.prototype = Object.create(Decorator.prototype);
DecoratorB.prototype.constructor = DecoratorB;
DecoratorB.prototype.say = function () {
  this._obj.say();
  say('DecoratorB have what to say too');
}
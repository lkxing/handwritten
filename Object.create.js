// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

function create(o) {
  function F() {}

  F.prototype = o;

  return new F();
}

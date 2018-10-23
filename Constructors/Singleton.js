// Этот паттерн позволяет убедиться что данный объект будет в единственном экземпляре.

// вариант с использованием функции конструктора
let instance = null;
function User(name, age) {
  if(instance) {
    return instance;
  };
  instance = this;
  this.name = name;
  this.age = age;

  return instance;
}
const user1 = new User('Piter', 21);
const user2 = new User('Jane', 25);
// и по факту это один и тот же пользователь 
console.log(user1 === user2); // они оба Piter 21

// вариант с использованием паттерна модуль
const singleton = (function() {
  let instance;

  function User(name, age) {
    this.name = name;
    this.age = age;
  };
  return {
    getUser: function(name, age) {
      if(!instance){
        instance = new User(name, age);
      };
      return instance;
    },
  };
}) ();

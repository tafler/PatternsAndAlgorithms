// Этот паттерн оборачивает объект и динамически изменяет его поведение.

// класс который будем оборачивать
class SimpleCoffee {
  getCost() {
    return 10;
  };
  getDescription() {
    return 'Simple Coffee';
  };
};

// декораторы
class MilkCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  };
  getCost() {
    return this.coffee.getCost() + 2;
  };
  getDescription() {
    return this.coffee.getDescription() + ', milk'
  };
};
class WhipCofee {
  constructor(coffee){
    this.coffee = coffee;
  };
  getCost() {
    return this.coffee.getCost() + 5;
  };
  getDescription() {
    return this.coffee.getDescription() + ', whip';
  };
};

// Собираем самый обычный кофе без декораторов
let someCoffee;
someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());
// теперь обернем кофе в декораторы с начинкой
someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new WhipCofee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

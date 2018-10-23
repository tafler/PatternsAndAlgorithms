// позволяет не засирать конструктор не всегда, нужным кодом.

//класс над которым будем издеваться
class Burger {
  constructor(builder) {
    this.size = builder.size;
    this.cheeze = builder.cheeze || false; // не всегда нужные поля(от которых и избавляемся)
    this.pepperoni = builder.pepperoni || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false; 
  };
};

// сама фабрика
class BurgerBuilder {
  constructor(size) { //оставляем в конструкторе только необходимые поля
    this.size = size;
  };
  addPepperoni() { // а необязательные добаваляем по необходимости.
    this.pepperoni = true;
    return this;
  };
  addLettuce() {
    this.lettuce = true;
    return this;
  };
  addCheeze() {
    this.cheeze = true;
    return this;
  };
  addTomato() {
    this.tomato = true;
    return this;
  };
  build() {
    return new Burger(this);
  };
};

// теперь собираем наш бургер
const burger = new BurgerBuilder(14);
burger.addCheeze();
burger.addPepperoni();
burger.addTomato();
burger.build();
console.log(burger);

// Паттерн Строитель нужен, если объект может существовать в разных вариациях или процесс инстанцирования состоит из нескольких шагов.
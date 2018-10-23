// есть метод roar у львов
class AfricanLion {
  roar() {
    console.log('ROARRRR');
  };
};
class AsianLion {
  roar() {
    console.log('RIOARRRI');
  };
};

// охотник может охотиться только на львов с методом roar
class Hunter {
  hunt(lion) {
    lion.roar();
  };
};

// есть пес с методом bark
class WildDog {
  bark() {
    console.log('BAARK');
  };
};

// сам адаптер, который через метод roar() вызывает наш метод собаки
class WildDogAdapter { 
  constructor(dog) {
    this.dog = dog;
  };
  roar() {
    this.dog.bark();
  };
};

// итог
const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);

// Этот паттерн оборачивает несовместимый с чем-то объект и делает его совместимым, не изменяя исходный код.

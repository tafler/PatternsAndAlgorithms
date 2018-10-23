// класс который будем множить
class WoodenDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  };
  getWidth() {
    return this.width;
  };
  getHeight() {
    return this.height;
  };
};

// сама фабрика
const DoorFactory = { 
  makeDoor: (width, height) => new WoodenDoor(width, height),
};

// использование
const door = DoorFactory.makeDoor(100, 200);

// вывод
console.log(`door width: ${door.width}, and height: ${door.height}`);

// Паттерн полезен, если создание объекта требует некоторой логики. Имеет смысл вынести повторяющийся код в отдельную Простую фабрику.


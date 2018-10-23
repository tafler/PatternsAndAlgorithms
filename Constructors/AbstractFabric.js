// данный паттерн группирует фабрики, связанные какой-то логикой
class WoodenDoor {
  getDescription() {
    console.log('the Wooden door');
  };
};
class IronDoor {
  getDescription() {
    console.log('the Iron Door');
  };
};

class Welder {
  getDescription() {
    console.log('i can only work with Iron Doors');
  };
};
class Carpenter {
  getDescription() {
    console.log('i can only work with Wooden Doors');
  };
};

// Данный паттерн объединяет плотника и деревянные двери, сталевара и железные.
class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  };
  makeExpert() {
    return new Carpenter();
  };
};

class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  };
  makeExpert() {
    return new Welder();
  };
};

// использование

woodenFactory = new WoodenDoorFactory();

door = woodenFactory.makeDoor();
expert = woodenFactory.makeExpert();

door.getDescription();
expert.getDescription();

// Паттерн полезен, когда есть несколько классов, зависящих друг от друга.
// Прокси обеспечивает какую-то дополнительную логику: ограничивает доступ к основному объекту, ведет логи или выполняет кэширование.

// интерфейс того что будем проксировать
class LabDoor {
  open() {
    console.log('door open');
  };
  close() {
    console.log('door close');
  };
};

// создаем прокси, и обеспечиваем безопасность нашей двери
class Security {
  constructor(door) {
    this.door = door;
  };

  open(password) {
    if(this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Sorry, almost close');
    };
  };

  authenticate(password) {
    return password === 'pass';
  };

  close() {
    this.door.close();
  };
};

// проверяем логику
const door = new Security(new LabDoor());
door.open();
door.open('invalid pass');
door.open('pass');
door.close();
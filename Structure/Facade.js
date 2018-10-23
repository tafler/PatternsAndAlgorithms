// Простой интерфейс к сложной системе – это и есть Фасад.
// создаем компьютер с кучей сложных методов
class Computer {  
  getElectricShock() {
    console.log('Ouch!');
  };
  makeSound() {
    console.log('Beep Beep!');
  };
  showLoadingScreen() {
    console.log('Loading...');
  };
  bam() {
    console.log('Ready to use!');
  };
  closeEverything() {
    console.log('Bup Bup Bzz Buzz!');
  };
  sooth() {
    console.log("ZzzzZzzz");
  };
  pullCurrent() {
    console.log('Haaaah!');
  };
};

// создаем простой фасад для нашего сложного компьютера.
class ComputerFacade {
  constructor(computer) {
    this.computer = computer;
  };
  turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  };
  turnOff() {
    this.computer.closeEverything();
    this.computer.sooth();
    this.computer.pullCurrent();
  };
};

// теперь использование компьютера стало куда проще
const computer = new ComputerFacade(new Computer());
computer.turnOn();
computer.turnOff();
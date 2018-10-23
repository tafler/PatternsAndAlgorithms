// Шаблон Компоновщик позволяет единообразно обрабатывать отдельные объекты и их группы.

// у нас имеются разрабы
class Developer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  };

  getName() {
    return this.name;
  };

  setSalary(salary) {
    this.salary = salary;
  };

  getSalary() {
    return this.salary;
  };

  getRoles() {
    return this.roles;
  };
  develop() {
    console.log('ok.. i`m codding');
  };
};

// и дизайнеры
class Designer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  };

  getName() {
    return this.name;
  };

  setSalary(salary) {
    this.salary = salary;
  };

  getSalary() {
    return this.salary;
  };

  getRoles() {
    return this.roles;
  };
  design() {
    console.log('ok.. i`m open paint');
  };
};

// и сама организация
class Organization {
  constructor() {
    this.employees = [];
  };
  addEmployee(employee) {
    this.employees.push(employee);
  };
  getNetSalaries() { // подсчитываем общую зарплату сотрудников
    let netSalaries = 0;

    this.employees.forEach(e => {
      netSalaries += e.getSalary();
    });

    return netSalaries;
  };
};

// считаем общую зп.
const john = new Developer('John', 300);
const jane = new Designer('Jane', 500);

const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log("Net Salaries: ", organization.getNetSalaries());
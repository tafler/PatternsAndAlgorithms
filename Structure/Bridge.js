// данный паттерн упрощает работу с состояниями.
// допустим есть вебсайт из 2 страничек, но в 5 вариантах цветов каждая.
// без моста пришлось бы создавать 5 вариантов первой и 5 вариантов второй страницы
// а с мостом создаем 2 страницы, принимающие на вход цвет.

// Паттерн Мост позволяет отделить реализацию от самого объекта и выстроить иерархию реализаций.

// создаем странички
class About{
  constructor(theme) {
    this.theme = theme;
  };
  getContent() {
    return 'About Page IN ' + this.theme.getColor();
  };
};
class Careers{
  constructor(theme) {
    this.theme = theme;
  };
  getContent() {
    return 'Career Page in ' + this.theme.getColor();
  };
};

// и цветовые схемы
class DarkTheme{
  getColor() {
    return 'Dark Black';
  };
};
class YellowTheme{
  getColor() {
    return 'Yellow limon';
  };
};
class AquaTheme{
  getColor() {
    return 'Deep Blue';
  };
};

// а вот их взаимодействие
const darkTheme = new DarkTheme();
const aquaTheme = new AquaTheme();

const about = new About(darkTheme);
const career = new Careers(aquaTheme);

console.log(about.getContent());
console.log(career.getContent());

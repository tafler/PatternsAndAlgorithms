// Паттерн скрывающий приватную информацию давая доступ лишь к тому, что решаил предоставить разработчик
// Так-же полезен для скрытия переменных и названий функций в своем пространстве имен

const Module = (function() {
  _privateMethod = () => { // знак _ вначале -показывает что метод приватный
    console.log('это приватный метож');
  };
  return {
    myMethod() {
      console.log('это публичный метод');
    },
  };
}) ();

// еще одна вариация данного паттерна - Открытый модуль

const OpenModule = (function() {
  let _privateVar = 'Peter';
  const publicVar = 'Hello WOrld';
  function _privateFunction() {
    console.log('Name: ' + _privateVar);
  };

  function publicSetName(name) {
    _privateVar = name;
  };
  function publicGetName() {
    _privateFunction();
  };

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName,
  };
}) ();
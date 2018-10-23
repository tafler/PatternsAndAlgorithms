// В этом паттерне один метод позволяет создавать различные классы

// классы для репликации
class Developer {
  askQuestions() {
    console.log('Asking about design patterns!');
  };
};
class CommunityExecutive {
  askQuestions() {
    console.log('Asking about community building!');
  };
};

// объединяющий класс
class HRManager {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

// дочерние классы, расширяют объединяющий
class DeveloperManager extends HRManager {
  makeInterviewer() {
    return new Developer();
  };
};
class MarketingManager extends HRManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
}

// использование
const DevManager = new DeveloperManager();
DevManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();

// Паттерн полезен, если логика работы подклассов одинаковая, но конкретный подкласс выясняется только во время выполнения программы.
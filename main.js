class Document {
  constructor(employeeName) {
    this.EmployeeName = employeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }

  // pushes 10 new documents to the office's documents array
  work(office) {
    for (let i = 0; i < 10; i++) {
      office.documents.push(new Document(this.name));
    }
  }
}

class Manager {
  constructor(name) {
    this.employees = [];
    this.name = name;
  }

  // pushes a new employee to the employees array
  hireEmployee(name) {
    this.employees.push(new Employee(name));
  }

  // invokes the employees Work function
  askEmployeesToWork(office) {
    this.employees.forEach((employee) => {
      employee.work(office);
    });
  }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }
    clean() {
        console.log("Clean");
    }
}


class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    // pushes a new cleaner to the cleaners array
    hireCleaner(name) {
        this.cleaners.push(new Cleaner(name));
    }

    // pushes a new manager to the managers array
    hireManager(name) {
        this.managers.push(new Manager(name));
    }

    // invokes the askEmployees function for all the managers, and the Clean function for all the cleaners
    startWorkDay() {
        this.managers.forEach((manager) => {
            manager.askEmployeesToWork(this);
        });
    }
}



class employee {
    constructor(name, age, salary) {
        this.empName = name;
        this.empAge = age;
        this.empSalary = salary;
    }

    info() {
        console.log(`Employee Data\n Name: ${this.empName}\n Age: ${this.empAge}\n Salary: ${this.empSalary}`);
    }
}

// manager class inherits properites and methods of employee class
class manager extends employee{

    info() {
        let ta = 1000;
        let pa = 300;
        let totalSalary = this.empSalary + ta + pa;

        console.log(`\n Manager Data\n Name: ${this.empName}\n Age: ${this.empAge}\n Salary: ${totalSalary}`);
    }
    
}


let a = new employee('Suresh', 21, 50000);
let b = new manager('Mahesh', 25, 90000);

a.info();
b.info();
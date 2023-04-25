

class employee {
    constructor(name) {
        this.empName = name;
        console.log('Constructor : Employee ');
    }

    info() {
        console.log('Employee Name : ' + this.empName);
    }
}

// manager class inherits properites and methods of employee class
class manager extends employee{

    // only call info() method of manager class, if not exist, then search on employee
    info() {

        // calling parent class info() method using  'super'  method
        super.info();
        
        console.log('Manager Name : ' + this.empName);  
    }
}


let a = new employee('Abhinav');
let b = new manager('Rajat');

a.info();
b.info();
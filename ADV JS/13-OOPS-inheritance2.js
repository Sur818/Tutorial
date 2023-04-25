

class employee {
    constructor(name) {
        console.log('Constructor : Employee ' + name);
    }
}

// manager class inherits properites and methods of employee class
class manager extends employee{
    constructor(name) {
        // super() method checks for constructor in the parent class
        super(name);
        console.log('Constructor : Manager ' + name);
    }
}


let a = new employee('Abhinav');
let b = new manager('Rajat');
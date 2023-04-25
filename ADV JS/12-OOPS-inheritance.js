

class employee {
    constructor() {
        console.log('Constructor : Employee');
    }
}

// manager class inherits properites and methods of employee class
class manager extends employee{

}


let a = new employee();
let b = new manager();
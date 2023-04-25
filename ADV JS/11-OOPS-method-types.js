
/*
    Three types of method:
        1. Constructor
        2. Prototype
        3. Static
*/

class student {
    
    // construtor method : called automatically when the object has created
    constructor(name) {
        console.log("Constructor function");
        this.studentName = name;
    }

    // prototype method : called when object call 
    hello() {
        console.log("Hello " + this.studentName);
    }
}

let a = new student();
let b = new student();

// calling prototype function
let c = new student('Pinku');
c.hello();

a.studentName = 'Abhinav';
a.hello();

b.hello();
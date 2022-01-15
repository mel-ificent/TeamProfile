const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
//returns the school of the inter
    getSchool(){
        return this.school;
    }
//returns 'Intern' for objects of the type Intern
    getRole(){
        return 'Intern';
    }

}
module.exports = Intern;
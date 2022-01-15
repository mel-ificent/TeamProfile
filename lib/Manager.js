const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
//returns the office number of the manager
    getNumber(){
        return this.officeNumber;
    }
//returns 'Manager' of objects of type 'Manager'
    getRole(){
        return 'Manager';
    }

}
module.exports = Manager;
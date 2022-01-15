class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }

    //returns the name of the employee
    getName(){
        return this.name;
    }

    //returns the employee id
    getId(){
        return this.id;
    }

    //returns the email of the employee
    getEmail(){
        return this.email;
    }

    //returns 'Employee' for objects of the Employee class
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;
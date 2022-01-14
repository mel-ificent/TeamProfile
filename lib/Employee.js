const inquirer = require("inquirer");
const { getNamespaceURI } = require("parse5/lib/tree-adapters/default");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName(){

    }

    getId(){

    }

    getEmail(){

    }

    getRole(){
        return 'Employee';
    }
}
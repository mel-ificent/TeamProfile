const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
//returns the Git Hub user name for the engineer
    getGitHub(){
        return this.github;
    }
//returns 'Engineer' for objects of type Engineer
    getRole(){
        return 'Engineer';
    }

}
module.exports = Engineer;
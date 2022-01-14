const inquirer = require("inquirer");
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

class Team{
    constructor(){
        this.teammates = [];
    }

initiateTeam(){
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the team manager's name?"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the team manager's employee id?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?",
        },
        {
            type: "input",
            name: "phone",
            message: "What is the team manager's office phone number?",
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add an additional team member?",
            choices: ['Engineer', 'Intern', 'No, my team is complete'],
        },
      ])
      .then(data => {
        //create new Team manager and add to team
        const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.phone);
        this.teammates.push(newManager);
        // Based on whether the manager adds another team member, execute the appropriate function
        if (data.addEmployee === 'Intern') {
          this.createIntern();
        } else if (data.addEmployee === 'Engineer'){
          this.createEngineer();
        }
        else{
            this.renderTeamProfile(this.teammates);
        }
      });

}

createIntern(){
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?"
        },
        {
            type: "number",
            name: "internId",
            message: "What is the intern's employee id?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add an additional team member?",
            choices: ['Engineer', 'Intern', 'No, my team is complete'],
        },
      ])
      .then(data => {
        //create new Team manager and add to team
        const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.school);
        this.teammates.push(newIntern);
        // Based on whether the manager adds another team member, execute the appropriate function
        if (data.addEmployee === 'Intern') {
          this.createIntern();
        } else if (data.addEmployee === 'Engineer'){
          this.createEngineer();
        }
        else{
            this.renderTeamProfile(this.teammates);
        }
      });

}

createEngineer(){
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?"
        },
        {
            type: "number",
            name: "engineerId",
            message: "What is the engineer's employee id?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?",
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add an additional team member?",
            choices: ['Engineer', 'Intern', 'No, my team is complete'],
        },
      ])
      .then(data => {
        //create new Team manager and add to team
        const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
        this.teammates.push(newEngineer);
        // Based on whether the manager adds another team member, execute the appropriate function
        if (data.addEmployee === 'Intern') {
          this.createIntern();
        } else if (data.addEmployee === 'Engineer'){
          this.createEngineer();
        }
        else{
            this.renderTeamProfile(this.teammates);
        }
      });

}

renderTeamProfile(team){


}

}

module.exports = Team;
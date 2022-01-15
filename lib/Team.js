const inquirer = require("inquirer");
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const fs = require('fs');

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
          message: "What is the team manager's name?",
          validate: (managerName) => {

            //checks whether the user entered a name
              if (managerName==='') {
                return "please enter a name";
              }
              return true;
          }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's employee id?",
            validate: (managerId) => {

              //checks whether the user entered a number for the employee ID, if not the user will receive an error message
                if (isNaN(managerId)|| managerId==='') {
                  return "please enter a number";
                }
                return true;
              },
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?",
            validate: (managerEmail) => {
                //checks the format of the entered email address, if it is not formatted correctly the user will receive an error message
                const check = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(managerEmail);
                if (!check || managerEmail===''){
                  return "please enter a valid email address";
                }
                return check;

            }
        },
        {
            type: "input",
            name: "number",
            message: "What is the team manager's office number?",
            validate: (number) => {

              //checks whether the user entered a number for the Office Number, if not the user will receive an error message
              if (isNaN(number)|| number==='') {
                return "please enter a number";
              }
              return true;
            },
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
        const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.number);
        this.teammates.push(newManager);
        // Based on whether the manager adds another team member, execute the appropriate function
        if (data.addEmployee === 'Intern') {
          this.createIntern();
        } else if (data.addEmployee === 'Engineer'){
          this.createEngineer();
        }
        else{
          this.renderTeamCards(this.teammates);
        }
      });

}

createIntern(){
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          validate: (internName) => {

            //checks whether the user entered a name
              if (internName==='') {
                return "please enter a name";
              }
              return true;
          }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's employee id?",
            validate: (internId) => {

              //checks whether the user entered a number for the employee ID, if not the user will receive an error message
                if (isNaN(internId)|| internId==='') {
                  return "please enter a number";
                }
                return true;
              },
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
            validate: (internEmail) => {
                //checks the format of the entered email address, if it is not formatted correctly the user will receive an error message
                const check = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(internEmail);
                if (!check || internEmail===''){
                  return "please enter a valid email address";
                }
                return check;

            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            validate: (internSchool) => {

              //checks whether the user entered a name
                if (internSchool==='') {
                  return "please enter a school";
                }
                return true;
            }
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
          this.renderTeamCards(this.teammates);
        }
      });

}

createEngineer(){
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          validate: (engineerName) => {

            //checks whether the user entered a name
              if (engineerName==='') {
                return "please enter a name";
              }
              return true;
          }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee id?",
            validate: (engineerId) => {

              //checks whether the user entered a number for the employee ID, if not the user will receive an error message
                if (isNaN(engineerId)|| engineerId==='') {
                  return "please enter a number";
                }
                return true;
              },
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            validate: (engineerEmail) => {
                //checks the format of the entered email address, if it is not formatted correctly the user will receive an error message
                const check = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(engineerEmail);
                if (!check || engineerEmail===''){
                  return "please enter a valid email address";
                }
                return check;

            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?",
            validate: (github) => {

              //checks whether the user entered a name
                if (github==='') {
                  return "please enter a GitHub username";
                }
                return true;
            }
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
            this.renderTeamCards(this.teammates);
        }
      });

}

renderTeamCards(team){
let teamCards='';
let i = 0;
team.forEach(() =>{
if(team[i].getRole()==='Manager'){
  teamCards+=
  `
  <div class="col p-4">
  <div class="card h-100">
      <div class="card-header gx-5 text-white bg-danger">
        <h5 class="card-title">${team[i].getName()}</h5>
        <p class="card-text"><i class="fas fa-briefcase"></i> ${team[i].getRole()}</p>
      </div>
      <div class="card-body gx-5">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${team[i].getId()}</li>
      <li class="list-group-item">Email: <a href = "mailto: ${team[i].getEmail()}">${team[i].getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${team[i].getNumber()}</li>
    </ul>
    </div>
  </div>
</div>
  `
  i++;
}
else if(team[i].getRole()==='Engineer'){
  teamCards+=
  `
  <div class="col p-4">
  <div class="card h-100">
      <div class="card-header gx-5 text-white bg-danger">
        <h5 class="card-title">${team[i].getName()}</h5>
        <p class="card-text"><i class="fas fa-laptop-code"></i> ${team[i].getRole()}</p>
      </div>
      <div class="card-body gx-5">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${team[i].getId()}</li>
      <li class="list-group-item">Email: <a href = "mailto: ${team[i].getEmail()}">${team[i].getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].getGitHub()}" target="_blank">${team[i].getGitHub()}</a></li>
    </ul>
    </div>
  </div>
</div>
  `
  i++;
}
else if(team[i].getRole()==='Intern'){
  teamCards+=
  `
  <div class="col p-4">
  <div class="card h-100">
      <div class="card-header gx-5 text-white bg-danger">
        <h5 class="card-title">${team[i].getName()}</h5>
        <p class="card-text"><i class="fas fa-graduation-cap"></i> ${team[i].getRole()}</p>
      </div>
      <div class="card-body gx-5">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${team[i].getId()}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${team[i].getEmail()}">${team[i].getEmail()}</a></li>
        <li class="list-group-item">School: ${team[i].getSchool()}</li>
      </ul>
      </div>
  </div>
</div>
  `
  i++
}

});


this.renderTeamProfile(teamCards);
}

renderTeamProfile(teamCards){
const htmlContent =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
  <title>Team Profile</title>
</head>
<body>
  <div class="container-fluid text-dark bg-warning">
    <div class="row gx-5">
      <div class="col p-3">
        <h1 class="text-center">Team Profile</h1>
      </div>
    </div>
  </div>
<div class="container">
<div class="row row-cols-1 row-cols-md-3 p-3">
${teamCards}
</div>
</div>
</body>
</html>`;

  fs.writeFile('./dist/index.html', htmlContent, (err) =>
  err ? console.log(err) : console.log('Successfully created index.html!')
);

}

}

module.exports = Team;
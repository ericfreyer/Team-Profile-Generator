const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
const cards = require("./user_cards");
start()


class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
class Manager{
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber
    }
}
class Intern{
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school
    }
}
class Engineer{
    constructor(name, id, email, userName){
        this.name = name;
        this.id = id;
        this.email = email;
        this.userName = userName
    }
}




function Inquirer() {
    const questions = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID number?",
        name: "id"
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }, {
        type: "list",
        message: "What is your position",
        choices: ["Manager", "Engineer", "Intern"],
        name: "position"
    }];

    return inquirer
        .prompt(questions);
}

function managerQuestions() {
    const questions = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }];

    return inquirer
        .prompt(questions);
}

function engineerQuestions() {
    const questions = [{
        type: "input",
        message: "What is your github?",
        name: "github"
    }];

    return inquirer
        .prompt(questions);
}

function internQuestions() {
    const questions = [{
        type: "input",
        message: "What school do you attend?",
        name: "school"
    }];

    return inquirer
        .prompt(questions);
}
async function start() {
    var employeeArr = [];
Inquirer()
    .then(function ({ name, id, email, position }) {
        if (position === "Manager") {
        managerQuestions()
            .then(function ({ officeNumber }) {
            this.Employee = new Manager(name, id, email, officeNumber, position);
            employeeArr.push(Employee);
            });
    } else if (position === "Engineer") {
        engineerQuestions()
            .then(function ({ github }) {
            this.Employee = new Engineer(name, id, email, github, position);
            employeeArr.push(Employee);
            });
    } else if (position === "Intern") {
        internQuestions()
            .then(function ({ school }) {
            this.Employee = new Intern(name, id, email, school, position);
            employeeArr.push(Employee);
            });
    }
    })
}





// create the team
// const generateTeam = team => {
//     ​
//         // create the manager html
//         const generateManager = manager => {
//             return `
//             <div class="card employee-card">
//             <div class="card-header">
//                 <h2 class="card-title">${manager.name()}</h2>
//                 <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.position()}</h3>
//             </div>
//             <div class="card-body">
//                 <ul class="list-group">
//                     <li class="list-group-item">ID: ${manager.id()}</li>
//                     <li class="list-group-item">Email: <a href="mailto:${manager.email()}}">${manager.email()}</a></li>
//                     <li class="list-group-item">Office number: ${manager.officeNumber()}}</li>
//                 </ul>
//             </div>
//         </div>
//             `;
//         };
//     ​
//         // create the html for engineers
//         const generateEngineer = engineer => {
//             return `
//             <div class="card employee-card">
//         <div class="card-header">
//             <h2 class="card-title">${engineer.name()}</h2>
//             <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.position()}</h3>
//         </div>
//         <div class="card-body">
//             <ul class="list-group">
//                 <li class="list-group-item">ID: ${engineer.id()}</li>
//                 <li class="list-group-item">Email: <a href="mailto:${engineer.email()}">${engineer.email()}</a></li>
//                 <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github()}" target="_blank" rel="noopener noreferrer">${engineer.github()}</a></li>
//             </ul>
//         </div>
//     </div>
//             `;
//         };
//     ​
//         // create the html for interns
//         const generateIntern = intern => {
//             return `
//             <div class="card employee-card">
//         <div class="card-header">
//             <h2 class="card-title">${intern.name()}</h2>
//             <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.position()}</h3>
//         </div>
//         <div class="card-body">
//             <ul class="list-group">
//                 <li class="list-group-item">ID: {{ id }}</li>
//                 <li class="list-group-item">Email: <a href="mailto:${intern.email()}">${intern.email()}</a></li>
//                 <li class="list-group-item">School: ${intern.school()}</li>
//             </ul>
//         </div>
//     </div>
//             `;
//         };
//     ​
//         const html = [];
//     ​
//         html.push(team
//             .filter(employee => employee.position() === "Manager")
//             .map(manager => generateManager(manager))
//         );
//         html.push(team
//             .filter(employee => employee.position() === "Engineer")
//             .map(engineer => generateEngineer(engineer))
//             .join("")
//         );
//         html.push(team
//             .filter(employee => employee.position() === "Intern")
//             .map(intern => generateIntern(intern))
//             .join("")
//         );
//     ​
//         return html.join("");
//     ​
//     }
//     ​start()
//     // export function to generate entire page
//     module.exports = team => {
//     ​
//         return `
//         <!DOCTYPE html>
//     <html lang="en">
//     ​
//     <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//         <title>My Team</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//         <link rel="stylesheet" href="style.css">
//         <script src="https://kit.fontawesome.com/c502137733.js"></script>
//     </head>
//     ​
//     <body>
//         <div class="container-fluid">
//             <div class="row">
//                 <div class="col-12 jumbotron mb-3 team-heading">
//                     <h1 class="text-center">My Team</h1>
//                 </div>
//             </div>
//         </div>
//         <div class="container">
//             <div class="row">
//                 <div class="team-area col-12 d-flex justify-content-center">
//                     ${generateTeam(team)}
//                 </div>
//             </div>
//         </div>
//     </body>
//     </html>
//         `;
//     };

   
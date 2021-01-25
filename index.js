const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
const cards = require("./user_cards");



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

start()
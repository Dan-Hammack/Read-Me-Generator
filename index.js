const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generate.js");

function askQuestions(){
    inquirer.prompt([
                {
            type: "input",
            message: "what would you like to name this project?",
            name: "name"
        },
                {
            type: "input"
            message: "how would you like to describe this project?",
            name: "description"
        },
                {
            type: "input"
            message: "how would someone install your project?",
            name: "installation"
        },
                {
            type: "input"
            message: "how would a user run this project?",
            name: "usage"
        },
                {
            type: "input"
            message: "enter the names of anyone who contributed to this project",
            name: "conribution"
        },
                        {
            type: "checkbox"
            message: "select a license, if none please hit enter",
            choices: [
                "MIT",
                "Apache",
                "ISC"
            ],
            name: "license"
        },
                {
            type: "input",
            message: "what is your github username?",
            name: "github"
        },
                {
            type: "input",
            message: "what is your email?",
            name: "email"
        },
                {
            type: 
            message: 
            name:
        },
                {
            type: 
            message: 
            name:
        },
        
    ])

    function getLicense(answers) {
        let badge = "";
    if (answers.promptFileUserLicense === "MIT") {
        licenseURL = "https://opensource.org/licenses/MIT";
    }
}
function generateMarkdown(answers) {
    getLicense(answers)

    return'# ${answers.promptFileName}

    ![](https://img.shields.io/badge/License-${licenseImg})

    ## Table of Contents
    1.  [Desciption](#description)
    2.  [Installation](#installation)
    3.  [Usage](#usage)
    4.  [License] (#license)
    5.  [Contirbution] (#contribution)
    6.  [Questions] (#questions)

    ## Description
    This generates ReadMes quickly and easily

    ## Installation Instructions
    Clone the repo to your local devicePixelRatio
    
    ## Usage Information 
    node index

    ## License
    MIT

    ## Contirbutors
    Dan Hammack

    ## Questions
    Contact Me:

    Github: [https://github.com/Dan-Hammack] (https://github.com/Dan-Hammack)
    Email: [danhamma@gmail.com] (danhamma@gmail.com)
}

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generate");
const util = require("util")



//function promptUser(){
    //return inquirer.prompt([
const questions = [
                {
            type: "input",
            message: "what would you like to name this project?",
            name: "name",
        },
                {
            type: "input",
            message:"how would you like to describe this project?",
            name: "description"
        },
                {
            type: "input",
            message: "how would someone install your project?",
            name: "installation"
        },
                {
            type: "input",
            message: "how would a user run this project?",
            name: "usage"
        },
                {
            type: "input",
            message: "enter the names of anyone who contributed to this project",
            name: "conribution"
        },
                        {
            type: "checkbox",
            message: "select a license, if none please hit enter",
            name: "license",
            choices: [
                "MIT",
                "Apache",
                "ISC"
            ],
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
        }
        
    ]//);
//}

    function getLicense(answers) {
        let badge = "";
    if (answers.promptFileUserLicense === "MIT") {
        licenseURL = "[MIT License](https://spdx.org/licenses/MIT.html)";
    } else if (answers.promptFileUserLicense === "Apache") {
        licenseURL = "[Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    } else if (answers.promptFileUserLicense === "ISC")
        licenseURL = "[ISC License](https://spdx.org/licenses/ISC.html)";

    }

function writeToFile(fileName, answers) {
    fs.writeToFile(fileName, answers, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log ("Success!");
    })
}


function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        writeToFile("Readme" ,generateMarkdown(answers));
    })
}

const generate = (answers) => 

`

# ${answers.title}

## Table of Contents
1.  [Desciption](#description)
2.  [Installation](#installation)
3.  [Usage](#usage)
4.  [License] (#license)
5.  [Contirbution] (#contribution)
6.  [Questions] (#questions)
### Description
${answers.description}
### Installation Instructions
${answers.description}    
### Usage Information 
${answers.installation}
### License
${answers.license}
### Contirbutors
${answers.contribution}
### Questions
${answers.questions}
### Github
[https://github.com/Dan-Hammack] (https://github.com/Dan-Hammack)
### Email [danhamma@gmail.com] (danhamma@gmail.com)
`

init();
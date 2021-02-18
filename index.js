const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generate");
const axios = require("axios");


const questions = [
                {
            type: "input",
            message: "what would you like to name this project?",
            name: "name"
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
        
    ]

    function getLicense(answers) {
        let badge = "";
    if (answers.promptFileUserLicense === "MIT") {
        licenseURL = "[MIT License](https://spdx.org/licenses/MIT.html)";
    } else if (answers.promptFileUserLicense === "Apache") {
        licenseURL = "[Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    } else if (answers.promptFileUserLicense === "ISC")
        licenseURL = "[ISC License](https://spdx.org/licenses/ISC.html)";

    }


function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
    axios
      .get("https://api.github.com/users/" + answers.username)
      .then(response => {
        console.log(response);
        var imageURL = response.data.avatar_url;
        answers.image = imageURL;
        console.log(imageURL);
        fs.writeFile("README.md", generateMarkdown(answers), function(err) {
          if (err) {
            throw err;
          }
        });
      });
  });
}

init();


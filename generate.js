const { getMaxListeners } = require("process");

let licenseURL;
let licenseImg;

function getLicense(answers) {
    if (answers.promptFileUserLicense === "MIT License") {
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
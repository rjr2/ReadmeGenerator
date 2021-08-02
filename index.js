const badges = require('./badge.js')

const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a detailed description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation instructions:',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Usage guidlines:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Credits:',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Type of license?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'Contribution guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Test instructions:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Your email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Your github profile:',
            name: 'github',
        },
    ])
    .then((response) => {

        console.log(response.license);

       const markDown = `
# ${response.title}

## Description
        
${response.description}

## Table of Contents 
       
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
        
${response.install}

## Usage
        
${response.usage}
            
## Credits
        
${response.credits}

## License
        
${badges[response.license.toUpperCase()] || response.license}
        
## Contribution Guidelines

${response.contribution}
        
## Tests
        
${response.test}

## Questions

I can be reached at ${response.email} for any questions reagarding this application.
Please visit ${response.github} for more information`

        createFile(markDown)
        console.log(badges[response.license])
    });


function createFile(markDown) {
    fs.writeFile("README.md", markDown, (error, data) =>
        error ? console.error(error) : console.log("README Generated!")
    );

}

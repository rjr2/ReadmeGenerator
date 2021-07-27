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

        const markDown = 


        createFile(markDown)
    });


function createFile(markDown) {
    fs.writeFile("README.md", markDown, (error, data) =>
        error ? console.error(error) : console.log("Successful")
    );

}

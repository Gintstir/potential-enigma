const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user-WORK HERE NEXT!!
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of this project? (Required)',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project (Required)',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTableOfContents',
        message: 'Would you like your README to include a Table of Contents to make navigations easier?',
        default: true,
    }


];

// function to write README file
function writeToFile(answers) {
    fs.writeFile('README.md', generateMarkdown(answers), err => {
        if(err) throw new Error(err);

        console.log('Page created! Check out Readme.md in this directory to see it!');
    });
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(answers => {
    writeToFile(answers)
})

}

// function call to initialize program
init();
    
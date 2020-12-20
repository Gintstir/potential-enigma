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
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)',
        validate: projectInstallationInput => {
            if (projectInstallationInput) {
                return true;
            } else {
                console.log('Please enter the steps needed to run and/or install your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include a screenshot when prompted. (Required)',
        validate: projectUsageInput => {
            if (projectUsageInput) {
                return true;
            } else {
                console.log('Please enter instructions and examples for use!');
            }
        }    
    },
    {
        type: 'input',
        name: 'altText',
        message: 'Please enter a brief "alt text" for your screenshot! (Required)',
        validate: projectAltTextInput => {
            if (projectAltTextInput) {
                return true;
            } else {
                console.log('Please enter a brief alt text for your image!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'please enter the relative file path for the image you would like to include. (Required)',
        validate: projectImagePathInput => {
            if (projectImagePathInput) {
                return true;
            } else {
                console.log('You must enter the relative file path for your image!');
                return false;
            }
        }
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
    
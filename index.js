const { POINT_CONVERSION_COMPRESSED } = require('constants');
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user-WORK HERE NEXT!!
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Hi! Welcome to the README generator. Let's start simple- What's your name?",
        validate: projectNameInput => {
            if (projectNameInput) {
            return true;
            } else {
                console.log('Please enter your Name!');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: projectGithubInput => {
            if (projectGithubInput) {
                return true;            
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: projectEmailInput => {
            if (projectEmailInput) {
                return true;
            } else {
                console.log('Please enter a your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of this project?',
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
        message: 'Enter a description of your project.',
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
        message: 'What are the steps required to install your project?',
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
        message: 'Provide instructions and examples for use. Include a screenshot when prompted.',
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
        message: 'Please enter a brief "alt text" for your screenshot!',
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
        message: 'please enter the relative file path for the image you would like to include.',
        validate: projectImagePathInput => {
            if (projectImagePathInput) {
                return true;
            } else {
                console.log('You must enter the relative file path for your image!');
                return false;
            }
        }
    },   
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide a guideline of how you would like other developers to contribute to your project.',
        validate: projectContributeInput => {
            if (projectContributeInput) {
                return true;
            } else {
                console.log('Please provide a contribution guide for other developers.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What kind of tests should other developers use and how should then be run?',
        validate: projectTestInput => {
            if (projectTestInput) {
                return true;
            } else {
                console.log("Please let other developers know what tests should be run and how!");
                return false;
            }
        }
        
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose a license from the following list to protect your project's contributors and users.",
        choices: ['MIT', 'GPL~v2', 'Apache~2.0', 'GPL~v3', 'BSD~v3--Clause', 'ISC', 'Perl']
    },
    {
        type: 'input',
        name: 'licenseLink',
        message: 'Please provide a link for the license you have chosen. Example: https://opensource.org/licenses/MIT - Thankyou!'
    },
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
    
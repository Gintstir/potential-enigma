// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ![badge](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)      

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
   
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  > ### Screenshots <br> ![${data.altText}](${data.screenshot})

  ## License 

  Copyright © ${data.name}, ${new Date().getFullYear()}.  All Rights Reserved.

  This Project is licensed under the **[${data.license}](${data.licenseLink})** license.


           
`;
}

module.exports = generateMarkdown;

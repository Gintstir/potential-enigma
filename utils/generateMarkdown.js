// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}** ![badge](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)      

  ## **Description**

  ${data.description}

  ## **Table of Contents**

  * *[Installation](#installation)*
  * *[Usage](#usage)*
  * *[Contributing](#contributing)*
  * *[Tests](#tests)*
  * *[Questions](#questions)*
  * *[License](#license)*
  
   
  ## **Installation**

  ${data.installation}

  ## **Usage**

  ${data.usage}
  
  ### *Screenshots*
  
  > ![${data.altText}](${data.screenshot})

  ## **Contributing**

  ${data.contributing}

  ## **Tests**  
  
  ${data.tests}

  ## **Questions**

  For any questions, comments, or feedback please feel free to reach out: <br>
  - [Github](https://github.com/${data.github}) 
  - <${data.email}>

  ## **License** 

  Copyright © ${data.name}, ${new Date().getFullYear()}.  All Rights Reserved.

  This Project is licensed under the **[${data.license}](${data.licenseLink})** license.


           
`;
}

module.exports = generateMarkdown;

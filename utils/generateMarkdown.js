// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}          

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
   
  ## Installation

  > ${data.installation}

  ## Usage

  > ${data.usage}
  >
  >> ### Screenshots <br> ![${data.altText}](${data.screenshot})
           
`;
}

module.exports = generateMarkdown;

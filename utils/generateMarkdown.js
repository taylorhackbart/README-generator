//ask all the questions
//start generating the readme file
    //loop process 
    //what item of the readme am i writing rn
    // (subhead, link etc)
//call that function and pass in the data it needs, and get back markdown code
//add markdown code to the readme file

// function to generate markdown for README
function renderLicenseBadge (license){
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } return "";
}
function renderLicenseLink (license){
  if (license !== "none"){
    return (`\n*[license](#license)
    `)
  } return "";
}
function renderLicenseSection(license){
  if (license !== "none"){
    return (`## License
    
    This project is licensed under the ${license} license.`)
  }
}


function generateMarkdown(response) {


  return `# ${response.title}
  ${renderLicenseBadge(response.license)}
  ## Description

  ${response.description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  ${renderLicenseLink(response.license)}

  *[Contributing](#contributing)

  *[Questions](#questions)

  *[Tests](#tests)


  ## Installation

  To install necessary dependencies, run the following command:
  ${response.installation}

  ## Usage

  ${response.usage}

  ## License

  ${renderLicenseSection(response.license)}

  ## Contributing
  ${response.contributing}

  ## Tests

  To run tests, run the following command:
  ${response.tests}

  ## Questions

  If you have any questions about the repo, contact me directly at ${response.email}
  You can find more of my work at [${response.github}](https://github/com/${response.github})
 
  `;
}

module.exports = generateMarkdown;

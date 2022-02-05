// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseId=license
  switch(licenseId) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT'
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0'
    case 'IBM':
      return 'https://opensource.org/licenses/IPL-1.0'
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
    case 'Unlicensed':
      return 'http://unlicense.org/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license){
  return `
  ## license
  ${renderLicenseLink(license)}`
}
else{
  return ``
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description:\ 
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
## Installation\ 
the following dependencies need to be installed to run the application properly:
${data.install}
## Usage:\ 
${data.usage}
## Contributors:\ 
* ${data.contributors}

## License:<br/>
${data.license}`
;
}

module.exports = generateMarkdown;

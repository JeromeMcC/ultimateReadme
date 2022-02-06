

function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'https://opensource.org/licenses/MIT'`;
      break;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'https://opensource.org/licenses/MPL-2.0'`;
      break;
    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'https://opensource.org/licenses/IPL-1.0'`;
      break;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'https://opensource.org/licenses/Apache-2.0'`;
      break;
    case 'Unlicensed':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'http://unlicense.org/'`
      break;
    case 'none':
      return ``
  }
}


function renderLicenseLink(license) {
  if(license==='none'){
    return ""
  }else {
    return`* [License](#license)`
  }
  
}


function renderLicenseSection(license) {
if (license==='none'){
  return ``
}
else{
  return `
## License
  ${license}
  ${renderLicenseBadge(license)}`
}
}


function generateMarkdown(data) {
  return `# ${data.title}
  
## Description:\ 
${data.description}
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
${renderLicenseLink(data.license)}
* [Test](#test)
* [Questions](#questions)

## Installation\ 
The following dependencies need to be installed to run the application properly:\
${data.install}

## Usage:\ 
${data.usage}

## Contribution
Contributors:${data.contributing}

${renderLicenseSection(data.license)}

## Test:
${data.test}

## Questions:\ 
For any additional questions or issues you encounter; please contact me via email at ${data.email} or visit my GitHub at [${data.username}](https://github.com/${data.username}/).
`
;
}

module.exports = generateMarkdown;

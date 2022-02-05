const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
const markdownGenerator = require('./utils/generateMarkdown')

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project called?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project about?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What do you need to run your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project being used?',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'list your contributors if any',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Is your project under any license',
    },
  ]);
};

//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// generateReadme = ({ title, description, install, usage, contributors, license }) =>
//   `# ${title} 

// ## Description:\ 
// ${description}
// ## Table of Contents
// * [Installation](#installation)
// * [Usage](#Usage)
// * [Contributors](#Contributors)
// * [License](#License)
// ## Installation:\ 
// ${install}
// ## Usage:\ 
// ${usage}
// ## Contributors:\ 
// * ${createListofContributors()}

// ## License:<br/>
// ${license}`

//  function createListofContributors(contributors) {
//    var contributorsArr = contributors.split(',');
//    contributorsArr.forEach ((item,index) => {
//      console.log(contributors, contributorsArr[0])
//      return contributorsArr[0]
  
       
//    });
  
//   }
  
// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', markdownGenerator(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
};

init();

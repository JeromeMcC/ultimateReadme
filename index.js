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
      message: 'What is your project about? what does it do? describe it.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the installation instructions? What needs to be installed for this to run?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project being used?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who else helped create this project?',
    },
    {
            type: 'list',
            message: 'Is your project under a license?',
            name: 'license',
        choices:
                [
                    {
                        name: 'MIT',
                    },
                    {
                        name: 'Mozilla',
                    },
                    {
                        name: 'IBM',
                    },
                    {
                        name: 'Apache',
                    },
                    {
                        name: 'Unlicensed',
                    },
                    {
                        name: 'none',
                    },
                ],
        },
        {
          type: 'input',
          name: 'test',
          message: 'The following is needed to run a test on this application',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your Email?',
        },
        {
          type: 'input',
          name: 'username',
          message: 'What is your GitHub username?',
        },
  ]);
};


  
// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', markdownGenerator(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
};

init();

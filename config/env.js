const fs = require('fs');
const inquirer = require('inquirer');
const yaml = require('js-yaml');

const configFile = fs.readFileSync('./config.yml', 'utf8');
const configFileObject = yaml.safeLoad(configFile);
const options = Object.keys(configFileObject);

inquirer
  .prompt([
    {
        type: 'list',
        name: 'env',
        message: 'Choose enviorment',
        choices: options
    }
  ]).then(answers => {
    let data = {
      "development": configFileObject[answers.env]
    };

    let yamlStr = yaml.safeDump(data);
    fs.writeFileSync('custom_config.yml', yamlStr, 'utf8');
  })
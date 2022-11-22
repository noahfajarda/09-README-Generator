// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// ACCESS THE VARIABLES CREATED IN 'questions' IN 'index.js'
function generateMarkdown(data) {
    return `# ${data.title}

    List of bages if you need it: https://naereen.github.io/badges/
    making a good readme: https://www.makeareadme.com/
    ${data.license ? data.license : ""}

## Description
${data.description}



`;
}

module.exports = generateMarkdown;

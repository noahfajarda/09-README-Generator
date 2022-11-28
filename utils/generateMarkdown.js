// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderExtraBadges(badges) {
    var allExtraBadges = "";
    for (var i = 0; i < badges.length; i++) {
        allExtraBadges += " " + badges[i];
    }
    return allExtraBadges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// ACCESS THE VARIABLES CREATED IN 'questions' IN 'index.js'
function generateMarkdown(data) {
    return `# ${data.projectTitle}

## License(s):
${data.projectLicense ? data.projectLicense : ""}
${renderExtraBadges(data.projectBadges)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributions](#contributions)
- [Authors & Acknowledgement](#authors-&-acknowledgement)
- [Additional Info](#additional-information)
- [Contact Information](#contact-information)

## Description

${data.projectDescription}

## Installation

${data.projectInstallation}

## Usage

${data.projectUsage}

## Support

${data.projectSupport}

## Contributions

${data.projectContributions} 

## Authors & Acknowledgement

${data.projectAcknowledgement} 

## Additional Information

${data.projectAdditionalInfo} 

## Contact Information:
- Github: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = {
    generateMarkdown,
};

function renderLicenseBadge(license) {
  if (!license) return '';
  // Logic to return the appropriate badge for each license
  switch (license) {
      case 'MIT':
          return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'GPL v3':
          return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'Apache 2.0':
          return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case 'BSD 3-Clause':
          return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      default:
          return '';
  }
}

function renderLicenseLink(license) {
  if (!license) return '';
  // Logic to return the appropriate link for each license
  switch (license) {
      case 'MIT':
          return '(https://opensource.org/licenses/MIT)';
      case 'GPL v3':
          return '(https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache 2.0':
          return '(https://opensource.org/licenses/Apache-2.0)';
      case 'BSD 3-Clause':
          return '(https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return '';
  }
}

function renderLicenseSection(license) {
  if (!license) return '';
  return `## License\nThis project is licensed under the ${license} License. ${renderLicenseLink(license)}`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me via [GitHub](https://github.com/${data.githubUsername}) or email at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;

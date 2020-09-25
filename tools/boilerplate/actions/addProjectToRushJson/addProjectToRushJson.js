function addProjectToRushJson(projectType) {
  return {
    type: 'modify',
    path: '../../rush.json',
    pattern: /("projects":\s*\[)/,
    template: `$1\n
    {
      "packageName": "pcln-{{kebabCase componentName}}",
      "projectFolder": "${projectType}/{{kebabCase componentName}}",
      "reviewCategory": "${projectType}",
      "shouldPublish": true
    },
`,
  }
}

module.exports = addProjectToRushJson

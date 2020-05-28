module.exports = function (plop) {
  plop.setGenerator('core', {
    description: 'Create new core component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Please enter component name (ProperCase)',
      },
      {
        type: 'input',
        name: 'htmlTag',
        message: 'Optional: please enter HTML tag name (e.g. div)',
        default: 'div',
      },
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'plop-templates/core/**',
        destination: 'packages/core/src/{{properCase componentName}}',
        base: 'plop-templates/core',
      },
      `Your component is ready! Don't forget to re-export it from packages/core/src/index.js.`,
    ],
  })

  plop.setGenerator('package', {
    description: 'Create new package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Please enter component name (ProperCase)',
      },
    ],
    actions: [
      {
        type: 'addMany',
        base: 'plop-templates/package',
        destination: 'packages/{{kebabCase componentName}}',
        path: '{{componentName}}.js',
        templateFiles: 'plop-templates/package/**',
        stripExtensions: ['hbs'],
      },
    ],
  })
}

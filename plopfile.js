module.exports = function(plop) {
  plop.setGenerator('core', {
    description: 'Create new core component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Please enter component name (ProperCase)'
      },
      {
        type: 'input',
        name: 'htmlTag',
        message: 'Please enter HTML tag name (e.g. div)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/core/src/{{componentName}}.js',
        templateFile: 'plop-templates/core/Component.js.hbs'
      },
      {
        type: 'add',
        path: 'packages/core/test/{{componentName}}.js',
        templateFile: 'plop-templates/core/Test.js.hbs'
      },
      {
        type: 'add',
        path: 'packages/core/storybook/{{componentName}}.js',
        templateFile: 'plop-templates/core/Story.js.hbs'
      }
    ]
  })

  plop.setGenerator('package', {
    description: 'Create new package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Please enter component name (ProperCase)'
      }
    ],
    actions: [
      {
        type: 'addMany',
        base: 'plop-templates/package',
        destination: 'packages/{{kebabCase componentName}}',
        path: '{{componentName}}.js',
        templateFiles: 'plop-templates/package/**',
        stripExtensions: ['hbs']
      }
    ]
  })
}

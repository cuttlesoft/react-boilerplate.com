/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a wrapper component for a Grommet base component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Grommet component? (The new component will have the same name.)',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    // Generate export file
    const actions = [
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/index.js',
        templateFile: './wrapper_component/index.js.hbs',
        abortOnFail: true,
      },
      // Generate ComponentName.js
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.js',
        templateFile: './wrapper_component/WrapperComponent.js.hbs',
        abortOnFail: true,
      },
      // Generate Component.doc.js
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.doc.js',
        templateFile: './wrapper_component/WrapperComponent.doc.js.hbs',
        abortOnFail: true,
      },
      // Generate Component.test.js
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.test.js',
        templateFile: './wrapper_component/WrapperComponent.test.js.hbs',
        abortOnFail: true,
      },
      // Generate Component.stories.js
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/stories/{{properCase name}}.stories.js',
        templateFile: './wrapper_component/WrapperComponent.stories.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'format',
      path: '/components/',
    });

    return actions;
  },
};

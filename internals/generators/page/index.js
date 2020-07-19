/**
 * Page Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a page component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'EmptyPage',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or page with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantHelmet',
      default: false,
      message: 'Do you want to include Helmet for managing site meta-data, such as <title>?',
    },
    {
      type: 'confirm',
      name: 'connectToStore',
      default: true,
      message:
        'Do you want to connect this page to store?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load resources asynchronously?',
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}/{{properCase name}}.js',
        templateFile: './page/Page.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}/index.js',
        templateFile: './page/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}/{{properCase name}}.styles.js',
        templateFile: './page/Page.styles.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../cypress/integration/{{properCase name}}.spec.js',
        templateFile: './page/Page.spec.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/{{properCase name}}.messages.js',
        templateFile: './page/Page.messages.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}/{{properCase name}}.loadable.js',
        templateFile: './component/Component.loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'format',
      path: '/pages/',
    });

    return actions;
  },
};

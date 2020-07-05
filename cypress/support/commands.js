// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// ***********************************************

import '@testing-library/cypress/add-commands'
import 'cypress-plugin-snapshots/commands'

Cypress.Commands.add(
  'login',
  (username = 'engineering@cuttlesoft.com', password = 'password123') => {
    // Mock the login request
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://0.0.0.0:8000/api/v1/login/',
      status: 200,
      response: 'fixture:login-valid-credentials.json',
    })

    // Navigate to the login page
    cy.visit('/login')

    // Input credentials and submit the form
    cy.get('input[name=email]').type(username)
    cy.get('input[name=password]').type(password)
    cy.get('form').submit()

    // After logging in, we're automatically redirected to the dashboard
    cy.url().should('include', '/dashboard')
    cy.get('h2').should('contain', 'Dashboard')
  },
)

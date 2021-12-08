/// <reference types="cypress" />

import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When(/^I visit the dashboard \(unauthenticated\)$/, () => {
  cy.visit('/dashboard')
})

Then(/^I get redirected to the login page$/, () => {
  // Ensure that two Login items are shown, one for the header and one for the button
  cy.findAllByText('Login').then(requiredText => {
    expect(requiredText.length).to.equal(2)
  })

  cy.url().should('include', 'login')
})

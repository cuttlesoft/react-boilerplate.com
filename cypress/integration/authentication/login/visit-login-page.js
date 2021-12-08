/// <reference types="cypress" />

import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When(/^I visit Login Page$/, () => {
  cy.visit('/login')
})

Then(/^The login page renders$/, () => {
  cy.url()
    .should('include', '/login')
    .then(() => {
      cy.document().toMatchImageSnapshot()
    })

  // Ensure that two Login items are shown, one for the header and one for the button
  cy.findAllByText('Login').then(requiredText => {
    expect(requiredText.length).to.equal(2)
  })
})

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/// <reference types="cypress" />

export {}

declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here
      // login(email: string, password: string): Chainable<void>
    }
  }
}

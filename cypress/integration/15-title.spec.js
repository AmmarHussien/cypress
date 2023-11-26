/// <reference types="cypress" />

it('get title command', ()=>{
    cy.visit('cypress/index.html') 

    cy.title().should('eql','Cypress Tutorials')
})
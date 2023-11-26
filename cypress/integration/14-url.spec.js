/// <reference types="cypress" />

it('get url command', ()=>{
    cy.visit('cypress/index.html') 

    cy.url().should('contain','/cypress/index')
})
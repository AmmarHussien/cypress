/// <reference types="cypress" />

it('get cookies command', ()=>{
    cy.visit('cypress/index.html')

    cy.getCookie('course').should("have.property", 'value', 'cypress')

})

it('set cookies command', ()=>{
    cy.visit('cypress/index.html')

    cy.setCookie('level','all levels')

})


it('get all cookies command', ()=>{
    cy.visit('cypress/index.html')

    cy.getCookies().should('have.length', 2)

})
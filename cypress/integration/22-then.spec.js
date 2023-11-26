/// <reference types="cypress" />
it('then command', ()=>{
    cy.visit('cypress/index.html')

    //cy.get("#welcome").invoke('text').should('eql','Welcome to Cypress Tutorials')

    cy.get("#welcome").invoke('text').then( text => {
        cy.log(text)
    })
})
/// <reference types="cypress" />
it('expect command', ()=>{
    cy.visit('cypress/index.html')

    cy.get("#welcome").invoke('text')
    .then(returnText => {
        expect(returnText)
        .to.eql('Welcome to Cypress Tutorials')
    })
})
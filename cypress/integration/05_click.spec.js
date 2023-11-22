/// <reference types="cypress" />

it('click command', ()=>{
    cy.visit('cypress/index.html')
    
    //cy.get('.invoice-button').last().click()
    cy.get('.invoice-button').click({
        multiple : true
    })
    cy.get('.hidden-button').click({
        force : true
    })
})
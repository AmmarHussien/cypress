/// <reference types="cypress" />
it('async command', ()=>{

    let message = 'Hello'

    cy.visit('cypress/index.html')

    cy.get("#welcome").invoke('text').then(text => {
        message = text
        
    }).then(() => {
        cy.log(message)
    })
   
    
})
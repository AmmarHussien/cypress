it('check command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('#Nuts').check()
    cy.get('#Fries').check()

    cy.get('#Tester').check()

    cy.get('#Fries').uncheck()
})
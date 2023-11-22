it('select command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('#courses').select('wdiocourse')
})
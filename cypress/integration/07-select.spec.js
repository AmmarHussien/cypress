it('type command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('#courses').select('wdiocourse')
})
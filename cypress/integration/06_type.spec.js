it('type command', ()=>{
    cy.visit('cypress/index.html')
    
    cy.get('#inputEmail').type('test@test.com{enter}')

    cy.get('#coverdInput').type('test@test.com{enter}', {force: true, delay: 1000,})
})
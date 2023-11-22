it('focus click command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('.focus').focus()
   
})


it.only('blur click command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('.focus').focus()
    cy.get('.focus').blur()
})
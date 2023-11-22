it('Right click command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('[value="Click me"]').rightclick()
   
})
it('hover command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('.trigger').trigger('mouseover')
   
})

it.only('hover command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('.trigger').trigger('mouseover')
    cy.get('.trigger').trigger('mouseout')
   
})
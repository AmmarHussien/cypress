it('hover command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('.trigger').trigger('mouseover')
})

it('hover command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('.trigger').trigger('mouseover')
    cy.get('.trigger').trigger('mouseout')
})


it.only('long bress command', ()=>{
    cy.visit('cypress/index.html') 

    cy.get('.trigger').trigger('mouseover')
    cy.get('.trigger').trigger('mousedown')
    cy.wait(5000)
    cy.get('.trigger').trigger('mouseup')
})
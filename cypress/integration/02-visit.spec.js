it('visit the website',()=>{
    cy.log('visit the website')
    cy.visit('/search', {
        qs: {
            q:'cypress',
        }
    })
})
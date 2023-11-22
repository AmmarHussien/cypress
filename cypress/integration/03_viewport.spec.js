['iphone-8','ipad-mini','macbook-15'].forEach(viewport => {
    it('open website in deffered views', ()=>{
        cy.viewport(viewport)
        cy.visit('cypress/index.html')
    })
})


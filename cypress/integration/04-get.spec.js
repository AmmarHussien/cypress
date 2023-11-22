

it('find element by tag name' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('button')
})


it('find element by id' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('#courses')
})

it('find element by class name' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('.course-list')
})

it('find element by class name' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('.list5.mobile')
})

it('find element by attribute' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('[name=Developer]')
})

it('find elemments' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('h1').first();
    cy.get('h1').eq(3);
    cy.get('h1').last();
    cy.get('li').filter(".web");
    cy.get('.course-list').children('');
    cy.get('.course-list').children('.mobile');
    cy.get('.course-list').children().filter('.web');
})

it('find elemments' ,  ()=> {
    cy.visit('cypress/index.html')
    
    cy.get('.course-list').children();    
    cy.get('.course-list').find('.web');
})

it('find elemments' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('.list1.web').parent();
})

it('find elemments' ,  ()=> {
    cy.visit('cypress/index.html')
  
    cy.get('.list1.web').parents();
})

it('find elemments' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('.list1.web').siblings();
    cy.get('.list1.web').siblings().eq(5);
    cy.get('.list1.web').siblings('.web');
    cy.get('.list1.web').siblings('.web').eq(4);
})

it('find elemments' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.contains('users')
})

it.only('find elemments' ,  ()=> {
    cy.visit('cypress/index.html')

    cy.get('.list4')
})
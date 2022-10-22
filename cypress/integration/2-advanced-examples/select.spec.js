///<reference types ="cypress"/>

// it('verify the drop down one',function(){

//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get('input[name="username"]').type('Admin')
//     cy.get('input[name="password"]').type('admin123')
//     cy.get('button[type="submit"]').click()
    
//     cy.get('img[alt="client brand banner"]').should('be.visible')
//     cy.contains('Employee Information').should('be.visible')
//     cy.get('h5[class]').should('be.visible').and('have.text','Employee Information')
// })

// it.only('verify the multiple check box with unchecked() function',function(){
//     cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('input[type=checkbox]').check(['option-1','option-2','option-3','option-4'])
// })

it.only('verify the select functionality via text',function(){
    cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('#dropdowm-menu-1').select('Paython').should('have.value','paython')
})
// it.only('verify the select functionality via value attribute',function(){
//     cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     cy.get('#dropdowm-menu-1').select('paython').should('have.text','Paython')
// })

// })
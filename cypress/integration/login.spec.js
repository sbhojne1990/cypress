///<reference types = "cypress"/>

// Test scenario    
describe('TS_01 Verify the login functionalty', function () {

    it('TC_01 check with valid credentiial', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('Admin')

        cy.get('input[name="password"]').type('admin123')

        cy.get('button[type="submit"]').click()

        cy.get('img[alt="client brand banner"]').should('be.visible')

    })
    it('TC_01 check with invalid credential', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('aadmin')

        cy.get('input[type="password"]').type('AAdmin12')

        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','invalid credential ')








    })
})
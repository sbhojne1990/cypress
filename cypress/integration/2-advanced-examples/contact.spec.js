///<reference types ="cypress"/>

describe("verify the contact form",function(){
    it.only("validate the successfuly submited the form",function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('shriram')
        cy.get('input[name="last_name"]').type('Bhojne')
        cy.get('input[name="email"]').type('sbhojne1990@gmail.com')
        cy.get('textarea[name="message"]').type('Learning Js')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
    it('validate the form with incorrect email address',function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Shriram')
        cy.get('input[name="last_name"]').type('Bhojne')
        cy.get('name="email"').type('sbhojne1990gmail.com')
        cy.get('textarea[name="message"]').type('Learning Js')
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain','Error:invalid Email Address')

    })

it('validate the form with click on reset button',function(){
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]').type('Shriram')
    cy.get('input[name="last_name"]').type('Bhojne')
    cy.get('input[name="email"]').type('sbhojne1990@gmail.com')
    cy.get('textarea[name="message"]').type('Learning Js')
    cy.get('input[type="reset"]').click()

    cy.get('input[name="first_name"]').should('have.text',"")
    cy.get('input[name="last_name"]').should('have.text',"")
    cy.get('input[name="email"]').should('have text',"")
    cy.get('textarea[name="message"]').should('have.text',"")
})

it('Validate theheadingof contact form',function(){
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('h2[name="contactme"').should('be.visible')
    cy.get('h2[name="contactme"').should('be.text','CONTACT US')

})
it('validate the heading of contactus form',function(){
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('h2[name="contactme"]').as('headingC')
    cy.get('heading@C').should('be.visible')
    cy.get('heading@C').should('be.text','CONTACT US')
})
})

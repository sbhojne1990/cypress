import cypress from "cypress"

export class Login {

    elements = {

        username:"#user-name",
        password:"#password",
        loginButton:"#login-button"
    }
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }

    login(){
        cy.get(this.elements.username).type("standard_user")
        cy.get(this.elements.password).type("secret_sauce")
        cy.get(this.elements.loginButton).click()
    }


}
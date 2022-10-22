

///<reference types = "cypress"/>
describe('verify the iframe in cypress',function(){
    const getIframebody = (id)=>{
        return cy.get(`#${id}`).its('0.contentDocument.body').then(cy.wrap)
    }
    it('verify the iframe via jquerry',function(){
    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
   // cy.get('a[href="index.html"]').should('have.text','Home')
    // find the ifram
    // Reach the body of iframe documentary body
    // then reach out to element

    cy.get('#frame').then(function($el){
       // cy.log($el)
       let body = $el.contents().find('body')
       cy.wrap(body).as('bdy')
       cy.get('@bdy').find('a[href="index.html"]').should('have.text','Home')
    })




    })





    it.only('verify the iframe via javascript',function(){
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
    
        cy.get('#frame').then(function(el){
            cy.log(el)
            cy.log(el[0].contentDocument.body)
            let body = el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            getIframebody('frame').find('a[href="index.html"]').should('have.text','Home')

        })

    })
})
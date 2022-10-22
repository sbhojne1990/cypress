///<reference types = "cypress"/>

describe('verify the GET Comment ,POST Comment,PUT Comment Using intercaept concept',function(){
    it('Verify he GetComment xhr call ',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getcomment')
        cy.get('.network-comment').should('contain',`laudantium enim quasi est`)
        
    }) 

    it('Verify he GetComment xhr call ',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()

        cy.wait('@getcomment').then(function({response,request}){
          //  cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.keys(['postId','id','name','email','body'])
            expect(request.method).to.eq('GET')
            cy.get('.network-comment').should('have.text',response.body.body)
        })
    })

        it('Verify he PostComment xhr call ',function(){
            cy.intercept({
                method:"POST",
                url:"https://jsonplaceholder.cypress.io/comments"
            }).as('postcomment')
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Post Comment').click()
    
            cy.wait('@postcomment').then(function({response,request}){
              //  cy.log(response)
                //cy.log(request)
                expect(response.statusCode).to.eq(201)
                expect(response.body).to.keys(['id','name','email','body'])
                expect(request.method).to.eq('POST')
                cy.get('.network-post-comment').should('have.text','POST successful!')
        //cy.get('.network-comment').should('contain',`laudantium enim quasi est`)
        
    })
})



it('Verify he GetComment xhr call ',function(){
    cy.intercept({
        method:"GET",
        url:"https://jsonplaceholder.cypress.io/comments/1"
},
{
    
        
        body:{
           "postId": 1,
            "name":"RaM",
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "SHRIRAM"
          }
    
        }
    ).as('getcomment')
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.contains('Get Comment').click()

    cy.wait('@getcomment').then(function({response,request}){
      //  cy.log(response)
        //cy.log(request)
        expect(response.statusCode).to.eq(200)
        expect(response.body).to.keys(['postId','id','name','email','body'])
        expect(request.method).to.eq('GET')
        cy.get('.network-comment').should('have.text',response.body.body)
    })
})
})
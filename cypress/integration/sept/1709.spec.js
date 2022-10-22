///<reference types = "cypress"/>

describe('Verify the GET PUT POST DELETE API',function(){

    let accessToken = 'A21AALGAL4WuV-a672jCS1BpMys-ha-n-oDMGg6Ne0q5xLreblVgT3-NnTXh2xw8-XjX5oBQ1EAf1c3ODsK0LebI3EB95KVgA'
    it('verify the go rest -GET API',function(){
        cy.request({
            method:'GET', 
            url:"https://gorest.co.in/public/v2/users",
           
            headers:{
                'Authorization':'Bearer ${accessToken}'
            }
        }).then(function(response){
            // expect(response.status).to.eq(200)
            // expect(response.body.length)
            //expect(response.duration).to.be.lessThan(700)
           // response.body.forEach(element => {
             //   expect(element).to.have.keys(['id','name','email','gender','status'])
               // cy.log(element)
            //    response.body.forEach(element =>{
            //        expect(element.id).not.to.null
            //        expect(element.name).not.to.null
            //        expect(element.email).not.to.null
            //        expect(element.status).not.to.null
            //        expect(element.gender).not.to.null
            //    })
                
            });
        
        
        })

    })
    it('Verify the  create user API for go rest',function(){
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            email:'tenaali.ramakrishna@15ce.com',
            status:'active'
        }).then(function(response){
            cy.log(response)
        })
    })
///<reference types = "cypress"/>

describe('fileupload option in cypress',function(){
    it('Verify the fileupload option in cypress',function(){
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let youFile = 'pppp.txt';
        cy.get('#fileUpload').attachfile(youFile)
    })
})
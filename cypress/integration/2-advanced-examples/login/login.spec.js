import {Login} from "../pages/login"

describe('Verify the Login functionality',function(){

    let login = new Login()
    it('Verify the valid credential',function(){
        login.navigate()
        login.login()
    })


})
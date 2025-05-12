import { registerPage} from "../pages/registerPage"
const registerobj = new registerPage()
//const registerObj = new registerPage ()
import registerData from '../fixtures/registerData.json'

//describe('cypress test automation'),() => {

//it('register flow', () => {
  //  registerObj.visitUrl()
  //  registerObj.enterfirstname(registerData.enterfirstname)
   // registerObj.enterlastname(registerData.enterlastname)
   // registerObj.enteremail(registerData.enteremail)
   // registerObj.entertelephone(registerData.entertelephone)
   // registerObj.enterpassword(registerData.password)
   // registerObj.enterprivacy()
  //  registerObj.clickcontinue() 

//})


//}

describe('cypress test automation', () => {
  it('works', () => {
     const randomEmail = `user_${Date.now()}@example.com`
    cy.log('Hello world')
      cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
   // registerobj.openURL()
   registerobj.enterfirstname(registerData.firstname)
   registerobj.enterlastname(registerData.lastname)
   registerobj.enteremail(randomEmail)
   registerobj.entertelephone(registerData.telephone)
   registerobj.enterpassword(registerData.password)
   registerobj.enterprivacy()
   registerobj.clickcontinue()
  })
})
import { registerPage } from '../../pages/registerPage'
const registerobj = new registerPage()
import registerData from '../../fixtures/registerData.json'
describe('cypress test automation', () => {
  it('Register User', () => {
     const randomEmail = `user_${Date.now()}@example.com`
    cy.log('Hello world')
   
   registerobj.openURL()
   registerobj.enterfirstname(registerData.firstname)
   registerobj.enterlastname(registerData.lastname)
   registerobj.enteremail(randomEmail)
   registerobj.entertelephone(registerData.telephone)
   registerobj.enterpassword(registerData.password)
   registerobj.enterprivacy()
   registerobj.clickcontinue()
  })
})
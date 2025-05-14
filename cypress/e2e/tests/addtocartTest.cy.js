import { homePage } from "../../pages/homePage"
const landingPageObj = new homePage
import testData from "../../fixtures/testData.json"


describe('Add to cart', ()=>{

 before(() => {
   cy.login(testData.login.username, testData.login.password)
})

after(() => {
    cy.log('Tests completed...cleaning up.')
    landingPageObj.cartDropdownVisible()
    landingPageObj.removeItem()
})

it('item to cart', ()=>{
  
   landingPageObj.searchProduct(testData.product.productname)
   landingPageObj.addToCart() 
   landingPageObj.verifysuccessmessage().should('contain', testData.message.successMessage).and('contain', testData.product.productname)
})
})
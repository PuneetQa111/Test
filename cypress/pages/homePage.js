export class homePage {
weblocators={
search_input: '.form-control.input-lg',
click_search: '.btn.btn-default.btn-lg',
product: 'img[title="MacBook"]',
addtocart: 'Add to Cart',
successmessage : 'div.alert.alert-success.alert-dismissible',
cart : '#cart',
dropdownbox : 'ul.dropdown-menu.pull-right',
removebutton : 'button[title="Remove"]'
}

searchProduct(productname)
{cy.get(this.weblocators.search_input).type(productname)
 cy.get(this.weblocators.click_search).click()
}

addToCart() 
{cy.contains(this.weblocators.addtocart).first().click()
}

verifysuccessmessage()
{return cy.get(this.weblocators.successmessage)
}

cartDropdownVisible()
{cy.get(this.weblocators.cart).should('be.visible').click()
}

removeItem()
{cy.get(this.weblocators.removebutton).click()
}

}
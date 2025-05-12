export class registerPage {

weblocators={
firstname : '#input-firstname',
lastname : '#input-lastname',
email : '#input-email',
telephone : '#input-telephone',
password : '#input-password',
confirmpassword : '#input-confirm',
privacycheckbox : 'input[type="checkbox"]',
continuebutton : 'input[type="submit"]'
}

openURL() {
 cy.visit(Cypress.env('url'))}

enterfirstname(Fname)
{cy.get(this.weblocators.firstname).type(Fname)}

enterlastname(Lname)
{cy.get(this.weblocators.lastname).type(Lname)}

enteremail(email)
{cy.get(this.weblocators.email).type(email)}

entertelephone(telephone)
{cy.get(this.weblocators.telephone).type(telephone)}


enterpassword(pwd)
{cy.get(this.weblocators.password).type(pwd)
 cy.get(this.weblocators.confirmpassword).type(pwd)
}

enterprivacy()
{cy.get(this.weblocators.privacycheckbox).click()}

clickcontinue(){
    cy.get(this.weblocators.continuebutton).click()
}

}
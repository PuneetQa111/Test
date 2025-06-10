describe('API cypress automation', () => {

    function generateRandomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + "@gmail.com"
    return email
    }

  it('POST CAL JSON', () => {

    let emailAddress = generateRandomEmail()
    cy.log("***** email is *****" + emailAddress)
     cy.request({
     method: 'POST',
     url : 'https://gorest.co.in/public/v2/users' ,
     headers : {
        Authorization :'Bearer dbe99b4da750460acec7767c8ba44193fd4f4909d183622bd02a4c01810c3f06'

     },
     body:{
    "name":"test1",
    "email": emailAddress,
    "gender": "female",
    "status" : "active"
    }

   }).then((response)=> {
    expect(response.status).to.equal(201)
    expect(response.body).has.property("name","test1")
    expect(response.body).has.property("gender", "female")
    expect(response.body).has.property( "status" , "active")
    expect(response.body.id).to.not.be.null;
   })
}) 
})
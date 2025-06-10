describe('API automation', () => {
  it('Get Users info', () => {
     cy.request({
     method: 'GET',
     url : 'https://gorest.co.in/public/v2/users' ,
     Headers : {Authorization :"Bearer e8929b0e4783ae39264b36c246e5ec6c3bd7f60022494b6c3dbe61eb8addbea7"},

   })
   .then((response)=>{
       cy.log(JSON.stringify(response)) //print the body or response of the request , convert object response into json
       expect(response.status).to.equal(200)
   })
  })


  it('Get single user info', () => {
    cy.request({
        method:'GET',
        url: 'https://gorest.co.in/public/v2/users/7939465',
        Headers : {Authorization :"Bearer e8929b0e4783ae39264b36c246e5ec6c3bd7f60022494b6c3dbe61eb8addbea7"},
    })
    .then((response)=>{
         expect(response.status).to.equal(200)
         expect(response.body.id).to.equal(7939465)
    })
  })

  it('Invalid endpoint - negative use case', () => {
    cy.request({
        method:'GET',
        url: 'https://gorest.co.in/public/v2/user',
        Headers : {Authorization :"Bearer e8929b0e4783ae39264b36c246e5ec6c3bd7f60022494b6c3dbe61eb8addbea7"},
        failOnStatusCode: false
    })
    .then((response)=>{
         expect(response.status).to.equal(404)
         
    })
  })

  
  it('Invalid user - negative use case', () => {
    cy.request({
        method:'GET',
        url: 'https://gorest.co.in/public/v2/users/123456',
        Headers : {Authorization :"Bearer e8929b0e4783ae39264b36c246e5ec6c3bd7f60022494b6c3dbe61eb8addbea7"},
        failOnStatusCode: false
    })
    .then((response)=>{
         expect(response.status).to.equal(404)
         
    })
  })
})
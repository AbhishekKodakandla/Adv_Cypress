//******************************   Rest API Testing.                                */


describe('Topic20_Suite', () => {

    //************************** GET API *********************************************
    it('Topic20_TestCase-GET API', () => {

        cy.request('GET', 'https://reqres.in/api/users/2').then(response => {
            cy.log(response.body.data.id)
            expect(response.status).to.be.equal(200)
            expect(response.body.data.first_name).to.be.equal('Janet')

        })
    })
    //********************************************************************************


    //************************** POST API *********************************************
    it('Topic20_TestCase-POST_API_Method1', () => {
        let payloadData = '{"name": "Trainer","job": "leader"}'
        cy.request('POST', 'https://reqres.in/api/users', payloadData).then(response => {
            expect(response.status).to.be.equal(201)
            expect(response.body.name).not.exist
            expect(response.body.createdAt).contain('2023')

        })
    })

    it('Topic20_TestCase-POST_API_Method2', () => {

        let payloadData = '{"name": "Trainer","job": "leader"}'

        cy.request(
            {
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: payloadData,
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                expect(response.status).to.be.equal(201)
                expect(response.body.name).equals('Trainer')
                expect(response.body.createdAt).contain('2023')
            })
    })
    //********************************************************************************


    //************************** PUT API *********************************************
    it('Topic20_TestCase-PUTAPI_Method1', () => {
        let payloadData = '{"name": "Trainer","job": "Manager"}'
        cy.request('PUT', 'https://reqres.in/api/users/2', payloadData).then(response => {

            expect(response.status).to.be.equal(200)
            expect(response.body.updatedAt).contain('2023')
            expect(response.body.name).not.exist

        })
    })

    it('Topic20_TestCase-PUT_API_Method2', () => {

        let payloadData = '{"name": "Trainer","job": "Manager"}'

        cy.request(
            {
                method: 'PUT',
                url: 'https://reqres.in/api/users/2',
                body: payloadData,
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                expect(response.status).to.be.equal(200)
                expect(response.body.job).equals('Manager')
                expect(response.body.updatedAt).contain('2023')
            })
    })
    //********************************************************************************


    //************************** DELETE API *********************************************
    it('Topic20_TestCase-DELETE API', () => {

        cy.request('DELETE', 'https://reqres.in/api/users/2').then(response => {

            expect(response.status).to.be.equal(204)

        })
    })
    //********************************************************************************
    it('DeviceLoginAPI', () => {


        cy.request(
            {
                method: 'GET',
                url: 'https://client-api-uat.ideyalabs.com/api/v3/client/device-login',
                headers: { 'Device': 'STB', 'UID': 'd076580d3464' }
            }).then(response => {
                expect(response.status).to.be.equal(200)
                cy.log(response.body.data.device.token)

                let token = response.body.data.device.token
                cy.writeFile("cypress/fixtures/token.txt", token)

                cy.request(
                    {
                        method: 'GET',
                        url: 'https://client-api-uat.ideyalabs.com/api/v2/composer/configuration',
                        headers: { 'Authorization': 'Bearer ' + token }
                    }).then(response => {
                        expect(response.status).to.be.equal(200)
                        cy.log(response.body.data)


                    })
            })

            
/* *****************************   
Rerunning testcase n number of times in addition to first execution if it fails                             
*/
 

describe('Topic21_Suite', () => {
    let i = 0
    //Following testcase will run 1 + 5 times if 1st run fails
    // 1-Default Run
    // 2-Additional runs 5 times if testcase fails 
    it('Topic21-GET API',{retries:5} , () => {
        i = i + 1
        cy.request('GET','https://reqres.in/api/users/2').then(response=>{
            cy.log(response.body.data.id)
            expect(response.status).to.be.equal(196 + i)
            expect(response.body.data.first_name).to.be.equal('Janet')

        })
    })



    it('Topic21-Delete API', () => {
      
        cy.request('DELETE','https://reqres.in/api/users/2').then(response=>{
            
            expect(response.status).to.be.equal(204)
            
        })
    })
  })
  
  

    })

})


// ==> https://github.com/bahmutov/cypress-repeat
// ==> Alternatively this plugin also can be used 

// npx cypress run --spec cypress/e2e/*.cy.js
  
// npx cypress run --spec cypress/e2e/*.cy.js --headed

// npx cypress run --spec cypress/e2e/*.cy.js --headed --browser chrome

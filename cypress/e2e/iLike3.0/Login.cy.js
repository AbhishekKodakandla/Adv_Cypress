/// <reference types="Cypress" />
describe('Login scenarios', function () {
    beforeEach(function(){
        cy.fixture('LoginData').then(function(data){
            this.data=data
            console.log(data)
        })
    })
    it('Admin is enterning valid username and password to login', function () {
            cy.visit("https://qa-sr2-ovp.ideyalabs.com/authentication/login")
            cy.get('.form-horizontal > :nth-child(1) > .form-control').type(this.data.validUsername);
            cy.get('input[formcontrolname=password]').type(this.data.validPassword);
            // cy.get('i[ng-reflect-ng-class="[object Object]"').click()
            // cy.get('input[type=checkbox]').check()
            // cy.get('input[type=checkbox]').uncheck()
            cy.get('div[style="text-align: center;"]').click()

            cy.contains('Login Successful').should('be.visible')
    })
    it('Admin is trying to login with invalid username and password', function () {
        cy.visit("https://qa-sr2-ovp.ideyalabs.com/authentication/login?")
        cy.get('.form-horizontal > :nth-child(1) > .form-control').type(this.data.invalidUsername)
        cy.get('input[formcontrolname=password]').type(this.data.invalidPassword)
        cy.get('div[style="text-align: center;"]').click()
        cy.contains('Username or Password is Incorrect').should('be.visible')
    })
    it('Verify required username and password text field message', function () {
        cy.visit("https://qa-sr2-ovp.ideyalabs.com/authentication/login")
        cy.get('.form-horizontal > :nth-child(1) > .form-control').type(this.data.validUsername).clear()
        cy.get('input[formcontrolname=password]').type(this.data.validPassword).clear()
        cy.get('div[style="text-align: center;"]').click()
        cy.contains('Required Username').should('be.visible')
        cy.contains('Required Password').should('be.visible')
    })
    it('Verify min and max validation for username and password', function () {
        cy.visit("https://qa-sr2-ovp.ideyalabs.com/authentication/login")
        cy.get('.form-horizontal > :nth-child(1) > .form-control').type('ab')
        cy.get('input[formcontrolname=password]').type('0')
        cy.contains('Username Should be at Least 3 Characters.').should('be.visible')
        cy.get('.form-horizontal > :nth-child(1) > .form-control').type('abaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.contains('Username Should not be More Than 50 Characters').should('be.visible')
        cy.contains('Password Should be at Least 6 Characters').should('be.visible')
        cy.get('input[formcontrolname=password]').type('01234567890-98765432134567890-987654324567890-9876543567890-987')
        cy.contains('Password Should not be More Than 50 Characters').should('be.visible')
    })
    // it('Forgot password', function(){
    //     cy.visit("https://qa-sr2-ovp.ideyalabs.com/authentication/login")
    //     cy.get('a[id=to-recover]').click()
    //     cy.get('.col-12 > .form-control').type('abhhi')
    //     cy.get(':nth-child(2) > .col-12 > .btn').click()
    //     cy.contains('Password Has Replaced With New One, Please Follow The Instructions From Email :').should('be.visible')
    // })
    it('Forgot password - Back to login scenario', function () {
        cy.visit('https://qa-sr2-ovp.ideyalabs.com/authentication/login')
        cy.get('a[id=to-recover]').click()
        cy.get(':nth-child(3) > .col-12 > .btn').click()
        cy.get('a[id=to-recover]').should('be.visible')
    })
})
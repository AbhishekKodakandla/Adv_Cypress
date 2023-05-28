/*
Mobile page testing in desktop browser by passing agent header in visit method
*/

 describe('Topic08-Suite', () => 
{
  it('Topic08-TestCase_Method1', () => {
    cy.visit('https://www.youtube.com',{
      headers:{ 'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'}
  	})

    cy.wait(5000)
    cy.visit('https://www.youtube.com')  // Desktop page
    cy.wait(5000)
  })


//----- Sometimes following method won't work
it('Topic08-TestCase_Method2', () => {
  cy.visit('https://www.youtube.com', {
    onBeforeLoad: (win) => {
      Object.defineProperty(win.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
      });    
     }
   })
 })

})
 /*

 const { downloadFile }9. Theoratical Concepts of Mobile App Automation in Cypress
        ==> https://www.cypress.io/blog/2020/07/08/end-to-end-testing-mobile-apps-with-ionic-and-cypress/
        ==> https://docs.cypress.io/faq/questions/general-questions-faq#Do-you-support-native-mobile-apps
        ==> https://github.com/ionic-team/ionic-react-conference-app

Cypress.Commands.add('swipeLeft', () => {
    cy.get('.swiper-slide-active')
      .trigger('mousedown', {position: "right"})
      .trigger('mousemove', {clientX: 100, clientY: 275})
      .trigger('mouseup', {force: true})
  })


      Testing of Mobile App within browser which got developed using Ionic Framework.
        https://github.com/ionic-team/ionic-react-conference-app

      For Iconic cupport in Cypress refer the following:
      		==> https://www.cypress.io/blog/2020/07/08/end-to-end-testing-mobile-apps-with-ionic-and-cypress/
          ==> https://docs.cypress.io/faq/questions/general-questions-faq#Do-you-support-native-mobile-apps
          ==> https://github.com/ionic-team/ionic-react-conference-app




      Kindly follow the following steps only on linux machine:
      --------------------------------------------------------------------------------------
      1. Install ==> npm install -g ionic

      2. Create a folder by name "IonicMobileApp"

      3. Download following zip file and extract it to "IonicMobileApp" folder
          ==> https://github.com/ionic-team/ionic-react-conference-app/archive/refs/heads/main.zip

      4. Open the terminal & navigate to extracted folder where package.json is existing & run "npm install"

      5. From the terminal (from project root where package.json file exists) run 
          To start localhost:8100 page of mobile app
            ==> ionic serve
                  

  */


/***************************************************************
 * 
 *  Complete Ionic Cypress Integration sample cypress project code can be found in
 *      https://github.com/ceceliacreates/ionic-cypress
 * 
**************************************************** */


//*********************** Sample Script Looks like the following */

/*

    describe('Topic09-Suite', () => 
    {
      beforeEach(() => {
        cy.viewport('iphone-5')
      })

      it('Topic09-TestCase', () => {
        cy.visit('http://localhost:8100/tutorial')

        //swipeLeft() is a custom command whose declaration were defined in commands.ts & index.d.ts
        cy.swipeLeft()  
        cy.swipeLeft()
        cy.swipeLeft()
        cy.contains("Continue").click()


      })
    })

*/





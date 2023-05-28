import { Script } from "vm"

/* # Requirement
 #		==> Able to add 2 numbers

 #*********************************************************************
// #User Story:
// #	As a User
// #		I should be provided with an interface where I can provide numbers
// #   So That
// #		I can add 2 numbers
// #*********************************************************************

// #---- Calculator Feature
// Feature: Calculator Add Features
// 	This feature file consists of all calc operations related to add
// 	Operations: add, subtract, multiply, divide, exponential

// 	Scenario: Adding two number_Level1
// 		Given User got access to calculator
// 		When User enters the first number
// 		And User selects addition symbol
// 		And User enters the second number
// 		And User selects equals button
// 		Then Calculator should display sum of those numbers

// 	Scenario: Adding two number_Level2
// 		Given User got access to calculator
// 		When User clicks on the first number
// 		And User clicks on + symbol
// 		And User clicks the second number
// 		And User clicks on equals button
// 		Then Calculator should display sum of those numbers

// 	Scenario: Adding two number_Level3
// 		Given User got access to calculator
// 		When User clicks on the button with label "5"
// 		And User clicks on the button with label "+" symbol
// 		And User clicks on the button with label "8"
// 		And User clicks on the button with label "="
// 		Then Calculator should display "13" as result

// 	Scenario: Adding two number_Level4
// 		Given User got access to calculator
// 		When User clicks on the first number
// 			| first numer | 10 |
// 		And User clicks on the following symbol
// 			| symbol | + |
// 		And User clicks the second number
// 			| second numer | 20 |
// 		And User clicks on equals button
// 		Then Calculator should display "30" as sum of those numbers

// 	@ddt
// 	Scenario Outline: Adding two number_Level5
// 		Given User got access to calculator
// 		When User clicks on the button with label "<firstnum>"
// 		And User clicks on the button with label "+" symbol
// 		And User clicks on the button with label "<secondnum>"
// 		And User clicks on the button with label "="
// 		Then Calculator should display "<result>" as result

// 		Examples:
// 			|	firstnum	|	secondnum	|	result	|
// 			|	10			|	20			|	30		|
// 			|	50			|	-30			|	20		|
// 			|	-5			|	-1			|	-6		|


// 	@ddt
// 	Scenario Outline: Adding two number_Level6
// 		Given User got access to calculator
// 		When User enters as per "<expression>"
// 		And User clicks on equal button
// 		Then Calculator should display "<result>" as result

// 		Examples:
// 			|	expression			|	result		|
// 			|	10	+ 10			|	20			|
// 			|	50 + 5 + 20 		|	75			|
// 			|	1 + 2 + 3 + 5 + -1	|	10			|

[14: 42] Dr.Chikkanna T G(Trainer)(Guest)



#------This feature file consists of all Testcases related to Login

Feature: Login Funtionality



Background:


          Given User is on "chrome" browser and nagivated to "https://....."

@valid


Scenario: Valid Login Test


          When User enters "user123" and "abcd@123"


          And Clicks on Login Button

          Then Login should be successful


          And Message "Welcome to user123" should be displayed



@invalid


Scenario: Invalid Login Test


          When User enters "userXYZ" and "abcd@123"


          And Clicks on Login Button

          Then Login should be failed


          And Message "Invalid Username or password. Retry again" should be displayed



@blank


Scenario: Blank field Login Test


          When User enters "user123" and ""


          And Clicks on Login Button

          Then Login should be failed


          And Message "Password required. Retry again" should be displayed

/*
    Cucumber - Cypress Integration Configurations:
    =====================================================

    1. Install the following:
            npm install --save-dev @badeball/cypress-cucumber-preprocessor
            npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
            npm install --save-dev @shelex/cypress-allure-plugin
            npm install --save-dev esbuild
            npm install --save-dev multiple-cucumber-html-reporter
            npm install -g allure-commandline --save-dev

    2. Add the following "scripts" node in package.json 
            "scripts": {
                "cypress:runner": "cypress open --e2e --browser chrome --headed",
                "cypress:execution": "cypress run --spec cypress/e2e/features/*",
                "cypress:execution-tags": "cypress run --browser chrome --headed --env tags=@sanity --config video=false",
                "cypress:execution-allure": "cypress run --browser chrome --env allure=true,tags=@sanity --config video=false" ,
                "allure:clear": "rm -r allure-results/ allure-report cypress/screenshots || true",
                "allure:report": "allure generate allure-results --clean -o allure-report",
                "allure:history": "mv -f allure-report/history allure-results/history && rm -r allure-report || true"
            },  
            
    3. create cucumber-html-report.js file in the root of project folder and add the following:
                    const report = require("multiple-cucumber-html-reporter");
                    report.generate({
                    jsonDir: "jsonlogs", // ** Path of .json file
                    reportPath: "./reports/cucumber-htmlreport.html",
                    metadata: {
                        browser: {
                        name: "chrome",
                        version: "XX",
                        },
                        device: "Local test machine",
                        platform: {
                        name: "Windows",
                        version: "11",
                        },
                    },
                    });

        4. Add the following to cypress.config.js/ts
                    const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
                    const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
                    const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
                    const allureWriter = require("@shelex/cypress-allure-plugin/writer");

                    async function setupNodeEvents(on, config) {
                        await preprocessor.addCucumberPreprocessorPlugin(on, config);

                        on(
                            "file:preprocessor",
                            createBundler({
                            plugins: [createEsbuildPlugin.default(config)],
                            })
                        );
                        allureWriter(on, config);

                        // Make sure to return the config object as it might have been modified by the plugin.
                        return config;
                    },

                    e2e: {
                            setupNodeEvents,
                            specPattern: "cypress/e2e/features/*.feature",
                            //baseUrl: "https://www.amazon.in",
                            chromeWebSecurity: false,
                            env: {
                            allureReuseAfterSpec: true,
                            },
                    },

            5. Add the following to support/e2e.js|ts
                    import '@shelex/cypress-allure-plugin';

            6. Create following 2 folders 
                        1. features             - inside cypress/e2e
                        2. step_definitions     - inside cypress/support

            7. Create a .feature file inside cypress/e2e/features

            8. Create StepDefs.js|ts inside cypress/support/step_definitions

            9. Running Cucumber Feature files
                    Method-1:  Using Cypress Runner Window
                                npx cypress open 
                                Select .feature file listed in browser
                                
                    Method-2:  Using Cypress CLI
                                npx cypress run --spec cypress/e2e/Features/*.feature

                    Method-3:  Using scripts configured in package.json
                                npm run cypress:execution

           10. To Run along with allure report generation:
            - Allure Report (Run following commands only in powershell):
                        - Open PowerShell in desktop as admin and run the following command:
                                ==> Set-ExecutionPolicy RemoteSigned
                        - Open power shell as terminal in IDE and run the following
                                - npm run cypress:execution-allure
                                - npm run allure:report
                                - allure open


*/
// Command to Execute only sanity test Script:-
// npx cypress run --spec cypress/e2e/features/Amazon1.feature --browser chrome --headed --env tags=@sanity --config video=false

// npx cypress run --spec cypress/e2e/features/Amazon1.feature --browser chrome --headed --env tags=@sanity --config video=false

// npx cypress run --spec cypress/e2e/features/Amazon1.feature --browser chrome --headed --env tags="@smoke or @sanity" --config video=false
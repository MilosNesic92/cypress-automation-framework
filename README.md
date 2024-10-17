# Cypress Automation

Cypress automation test project by Milos Nesic.


# Setting up Cypress and Running the tests

**Prerequisites**

Before setting up the project, ensure you have the following installed:

  Node.js (v12 or higher)
  Download it from nodejs.org.


1. Install Project Dependencies
    - Ensure that you are in the root directory of your project. Run the following command to install the required dependencies:
      Use the Following Command: **npm install**

2. Install Cypress
    - Run the following commpand in your terminal in order to install Cypress:
      **npm install cypress --save-dev**

3. Once Cypress is installed, you can open Cypress Test Runner by typing the following command in your Terminal:
   
     **npx cypress open**
   
   This will open the Cypress Test Runner, where you can see and execute your tests interactively.

4. Alternatively, you can run Cypress in headless mode, which is useful for Continuous Integration (CI) environments or faster test execution:
    **npx cypress run**

Usefull Cypress Commands:

Run Cypress tests in Headless mode: **npx cypress run** 

Run Cypress tests in Headless mode using Edge browser: **npx cypress run --headless --browser edge**

Run Cypress tests in Headless mode using Chrome browser: **npx cypress run --headless --browser chrome**

Run Cypress tests in Headed mode using Edge browser: **npx cypress run --headed --browser edge**

Run Cypress tests in Headed mode using Chrome browser: **npx cypress run --headed --browser chrome**

Run a specific test file: **npx cypress run --spec "cypress/integration/test_file_name.js"**


**Important note**

If Cypress does not open, try the following solutions: 
  - Ensure all packages are installed correctly: npm install
  - if "cypress open" command fails, try using "npx" to ensure you're using correct version: npx cypress open


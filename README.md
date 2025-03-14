# POS Shipment Quote Calculator

This project is a Cypress-based Web end-to-end testing suite for the POS Shipment Quote Calculator.

It includes:
1. Postman collection
2. E2E Web UI Test

## Project Structure

```
cypress.config.js
package.json
cypress/
  e2e/
    my_pos.cy.js
  pages/
    RateCalculatorPage.js
  support/
    commands.js
    e2e.js
postman-collection/
  POS_MY_COLLECTION.postman_collection.json
```

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using npm:

    ```sh
    npm install
    ```

## Running Tests

To run the Cypress tests, use the following commands:

This will open the Cypress Test Runner, where you can run the tests interactively.

  ```sh
  npx cypress open
  ```

This will run all tests in headless mode.

  ```sh
  npx cypress run
  ```

This will run all tests in headed mode to View the execution.

  ```sh
  npx cypress run --headed 
  ```


## Test Details

### End-to-End Test

The main end-to-end test is located in [cypress/e2e/my_pos.cy.js](cypress/e2e/my_pos.cy.js). This test verifies that a user can calculate the shipment quote from Malaysia to India.

    Test Case 1: Verify user can calculate the shipment quote from Malaysia to India.
        o Step 1: User go to https://pos.com.my/send/ratecalculator
        o Step 2: User enter “Malaysia” as “From” country, and enter “35600” as the postcode.
        o Step 3: User enter “India” as “To” country, and leave the postcode empty.
        o Step 4: User enter 1 as the “Weight”, and user press Calculate.
        o Step 5: Verify user can see multiple quotes and shipments options available.

### Page Object

The page object for the Rate Calculator is implemented in [cypress/pages/RateCalculatorPage.js](cypress/pages/RateCalculatorPage.js). 

Locate -> Interact -> Assert

It includes methods to find locators, interact with the Rate Calculator page, such as visiting the page, entering the postcode, selecting the destination country, entering the weight, and verifying the shipment options.

## Postman Collection

The project includes a Postman collection located in [postman-collection/POS_MY_COLLECTION.postman_collection.json](postman-collection/POS_MY_COLLECTION.postman_collection.json).


This collection contains:
  1. GET API request to get all countries, 
  2. POST API request get state name by postcode.
  3. POST API resquest to check prices by From postcode, ToPostcode, weight.

Download and Import collection to the Postman client, Run the postman requests individually.

## Configuration

The Cypress configuration is defined in [cypress.config.js](cypress.config.js). You can modify this file to change the configuration options for Cypress.

## Dependencies

- Cypress: ^14.2.0
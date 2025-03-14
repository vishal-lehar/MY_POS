import RateCalculatorPage from '../pages/RateCalculatorPage';

describe('MY-POS Shipment Quote Calculation', () => {

  // Test Case 1: Verify user can calculate the shipment quote from Malaysia to India.

  it('Verify user can calculate the shipment quote from Malaysia to India.', () => {

    // Step 1: User go to https://pos.com.my/send/ratecalculator
    RateCalculatorPage.visitPage();

    // Step 2.1: Verify “Malaysia” as “From” country.
    RateCalculatorPage.verifyFromCountry('Malaysia');

    // Step 2.2: User enter “35600” as the postcode.
    RateCalculatorPage.enterFromPostCode('35600');

    // Step 3: User enter “India” as “To” country, and leave the postcode empty.
    RateCalculatorPage.enterToCountry('India');

    // Step 4.1: User enter 1 as the “Weight”.
    RateCalculatorPage.enterWeight('1');

    // Step 4.2: User press Calculate.
    RateCalculatorPage.clickCalculate();

    // Step 5: Verify user can see multiple quotes and shipments options available.
    RateCalculatorPage.verifyShipmentOptions();

  });
  
});
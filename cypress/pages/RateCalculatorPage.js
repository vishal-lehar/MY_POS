class RateCalculatorPage {
    // Visit Main Page and go to Shipment Calculator View.
    visitPage() {
      cy.visit('https://pos.com.my/send/ratecalculator');

      cy.get(".calculator-container").scrollIntoView().should("be.visible");
    }
  
    // Verify From Country hardcoded as "Malaysia"
    verifyFromCountry(country) {
        cy.get('.country-container') 
          .should('contain.text', country);
    }

    // Enter a Postcode from Malaysia
    enterFromPostCode(postcode) {
        cy.get('[formcontrolname="postcodeFrom"]')
            .should("be.visible")
            .click({ force: true })
            .type(postcode);
    }
  
    // Select To Country from dropdown
    enterToCountry(country) {
        cy.get("#mat-input-0")
            .clear({ force: true })
            .type(country, { delay: 200 })
            .type("{enter}")
            .wait(1000)
            .get(".mdc-list-item")
            .click({ force: true });
    }
  
    // Enter Weight value
    enterWeight(weight) {
        cy.get('[formcontrolname="itemWeight"]').clear({ force: true }).type(weight);
    }
  
    // Click calculate button
    clickCalculate() {
        cy.contains("Calculate").click({ force: true });
    }
  
    // Assertion - Ensure list of multiple prices visible under "Your Qoute"
    verifyShipmentOptions() {
        cy.contains("Your Quote");
        cy.contains("Select a quote to start booking your shipment", {
            timeout: 5000,
        }).scrollIntoView().should("be.visible");
    
        cy.get('a[href="https://send.pos.com.my/home?lg=en"]')
            .should('have.length.gte', 1);
    }
  }
  
  export default new RateCalculatorPage();
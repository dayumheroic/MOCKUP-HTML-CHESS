'use strict';

(function () {
  // Initialize form and wizard variables
  const wizardPropertyListing = document.querySelector('#wizard-property-listing');

  if (wizardPropertyListing) {
    const wizardNextBtns = Array.from(wizardPropertyListing.querySelectorAll('.btn-next'));
    const wizardPrevBtns = Array.from(wizardPropertyListing.querySelectorAll('.btn-prev'));

    // Stepper Initialization
    const stepper = new Stepper(wizardPropertyListing, {
      linear: false // Free movement between steps
    });

    // Event listeners for Next buttons
    wizardNextBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission
        stepper.next(); // Move to the next step without validation
      });
    });

    // Event listeners for Previous buttons
    wizardPrevBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission
        stepper.previous(); // Move to the previous step
      });
    });
  }



})();

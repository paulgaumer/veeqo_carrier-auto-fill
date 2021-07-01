let addCarrierButton = document.getElementById('addCarrier');

addCarrierButton.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: enterFedexData,
  });
});

function enterFedexData() {
  /**
   * SELECTORS
   */
  const keyField = document.querySelector('#carrier-form__key');
  const accountField = document.querySelector('#carrier-form__account-number');
  const passwordField = document.querySelector('#carrier-form__password');
  const meterField = document.querySelector('#carrier-form__meter');
  const contactNameField = document.querySelector(
    '#carrier-form__contact-name'
  );
  const contactPhoneField = document.querySelector(
    '#carrier-form__contact-phone'
  );

  /**
   * FILL IN VALUES
   */
  keyField.value = '';
  accountField.value = '';
  passwordField.value = '';
  meterField.value = '';
  contactNameField.value = '';
  contactPhoneField.value = '';
}

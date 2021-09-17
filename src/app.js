const storageType = localStorage;
const consentPropertyName = 'jdc_consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentProptertyName, true);

window.onload = () => {
  if (shouldShowPopup()) {
    const consent = confirm(
      'Agree to the terms and conditions of this beautiful page?'
    );
    if (consent) {
      saveToStorage();
    }
  }
};

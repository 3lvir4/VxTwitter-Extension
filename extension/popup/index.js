function toggleExtendedOptions() {
   chrome.storage.sync.get(["extendedOptionsState"]).then(result => {
      const currentState = result.extendedOptionsState;
      chrome.storage.sync.set({ 'extendedOptionsState': !currentState });
   });
}

window.addEventListener('DOMContentLoaded', () => {
   const extendedOptionsToggleSwitch = document.getElementById('extendedOptions');
   extendedOptionsToggleSwitch.nextElementSibling.classList.add('no-transition'); // remove toggle switch animation

   chrome.storage.sync.get(["extendedOptionsState"])
      .then(result => {
         extendedOptionsToggleSwitch.checked = result.extendedOptionsState;
      })
      .then(() => {
         setTimeout(() => {extendedOptionsToggleSwitch.nextElementSibling.classList.remove('no-transition')},100); // reassign toggle switch animation
      })

   extendedOptionsToggleSwitch.addEventListener('change', toggleExtendedOptions);
})
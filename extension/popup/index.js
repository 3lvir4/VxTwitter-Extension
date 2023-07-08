function toggleExtendedOptions() {
   chrome.storage.sync.get(["extendedOptionsState"]).then(result => {
      const currentState = result.extendedOptionsState;
      chrome.storage.sync.set({ 'extendedOptionsState': !currentState });
   });
}

window.addEventListener('DOMContentLoaded', () => {
   const extendedOptionsToggleSwitch = document.getElementById('extendedOptions');
   extendedOptionsToggleSwitch.addEventListener('change', toggleExtendedOptions);

   // goofy timeout to prevent getting value before default set of the state
   setTimeout(() => {
      chrome.storage.sync.get(["extendedOptionsState"]).then(result => {
         extendedOptionsToggleSwitch.checked = result.extendedOptionsState;
      });
   },100);  
})
chrome.runtime.onInstalled.addListener(() => {
   chrome.storage.sync.set({ extendedOptionsState: false }); // extended options disabled by default
}); 



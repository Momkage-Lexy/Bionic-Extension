const checkbox = document.getElementById("toggleFont");

chrome.storage.sync.get(["fontEnabled"], (result) => {
  checkbox.checked = result.fontEnabled || false;
});

checkbox.addEventListener("change", () => {
  chrome.storage.sync.set({ fontEnabled: checkbox.checked }, () => {
    chrome.tabs.reload(); // Reload page to re-trigger content.js
  });
});

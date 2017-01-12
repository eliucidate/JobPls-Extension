/*
Given the name of a beast, get the URL to the corresponding image.
*/
/*
Listen for clicks in the popup.

If the click is on one of the beasts:
  Inject the "beastify.js" content script in the active tab.

  Then get the active tab and send "beastify.js" a message
  containing the URL to the chosen beast's image.

If it's on a button wich contains class "clear":
  Reload the page.
  Close the popup. This is needed, as the content script malfunctions after page reloads.
*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("job")) {
    var chosenBeast = e.target.textContent;

    browser.tabs.executeScript(null, {
      file: "/content_scripts/jobify.js"
    });

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {});
    });
  }
  else if (e.target.classList.contains("settings")) {
    browser.runtime.openOptionsPage();
	window.close();
    return;
  }
});

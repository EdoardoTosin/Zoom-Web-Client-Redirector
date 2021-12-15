// Block render of cookie notices before loading the page
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details)
    return {cancel: true};
  },
  {urls: // DOMAINS BLOCKLIST
    [
		  "*://*.cdn.cookielaw.org/*"
		]
  },
  ["blocking"]
);

/*
var element = document.querySelector('div.onetrust-banner-sdk');
element.parentElement.removeChild(element);
*/

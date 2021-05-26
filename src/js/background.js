var storage = chrome.storage.sync;
if (!storage) storage = chrome.storage.local;

// Change Icon, Toggle and localStorage to true/on.
function setRedirectOn(){
  storage.set({'toggle': "true"});
  document.getElementById('toggle').setAttribute("checked","");
  chrome.browserAction.setIcon({
      path: {
        "16": "../icons/16x16.png",
        "32": "../icons/32x32.png",
        "48": "../icons/48x48.png",
        "64": "../icons/64x64.png",
        "128": "../icons/128x128.png",
        "256": "../icons/256x256.png"
      }
  });
};

// Change Icon, Toggle and localStorage to false/off.
function setRedirectOff(){
  storage.set({'toggle': "false"});
  document.getElementById('toggle').removeAttribute("checked");
  chrome.browserAction.setIcon({
      path: {
        "16": "../icons/16x16-off.png",
        "32": "../icons/32x32-off.png",
        "48": "../icons/48x48-off.png",
        "64": "../icons/64x64-off.png",
        "128": "../icons/128x128-off.png",
        "256": "../icons/256x256-off.png"
      }
  });
};

// Set redirect option on if toggle is not set
chrome.storage.sync.get('toggle', function(items) {
  var toggle = items.toggle;
  if (typeof toggle === "undefined") {
    setRedirectOn();
  }
});

// When the popup page load it checks the stored option and change toggle and icon set.
document.body.onload = function() {
  storage.get("toggle", function(items) {
    console.log('Load to: ' + items.toggle);
    if (items.toggle!='undefined' && items.toggle=="false")
      setRedirectOff();
    else {
      setRedirectOn();
    }
  });
}

// Change localStorage "toggleStatus" value and extension icon when checkbox change state.
function saveOption() {
  if (document.getElementById('toggle').checked){
    setRedirectOn();
  }
  else{
    setRedirectOff();
  }
  storage.get("toggle", function(items) {
    console.log('Set to: ' + items.toggle);
  });
};

// If toggle change state it calls changeElem function.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#toggle').addEventListener('change', saveOption);
});

var storage = chrome.storage.sync;
if (!storage) storage = chrome.storage.local;

// Change Icon, Toggle and chrome.storage to true/on.
function setRedirectorOn(){
  storage.set({'toggle': "true"});
  document.getElementsByClassName("switch")[0].title = "Enabled";
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

// Change Icon, Toggle and chrome.storage to false/off.
function setRedirectorOff(){
  storage.set({'toggle': "false"});
  document.getElementsByClassName("switch")[0].title = "Disabled";
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

// If toggle is not set, it creates it and load icon set.
chrome.storage.sync.get('toggle', function(items) {
  var toggle = items.toggle;
  if (typeof toggle === "undefined") {
    setRedirectorOn();
  }
});

// On dashboard load it checks chrome.storage toggle value and set the switch button and icon set accordingly.
document.body.onload = function() {
  storage.get("toggle", function(items) {
    //console.log('Load to: ' + items.toggle);
    if (items.toggle!='undefined' && items.toggle=="false")
      setRedirectorOff();
    else {
      setRedirectorOn();
    }
  });
}

// Change chrome.storage "toggle" value and extension icon when checkbox change state.
function saveOption() {
  if (document.getElementById('toggle').checked){
    setRedirectorOn();
  }
  else{
    setRedirectorOff();
  }
  /*
  storage.get("toggle", function(items) {
  console.log('Set to: ' + items.toggle);
  });
  */
};

// If toggle change state it calls saveOption function.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#toggle').addEventListener('change', saveOption);
});

var browser = (window.browser)? window.browser : window.chrome;

if( typeof document.querySelector('#toggle') !== 'undefined') {
    //its not dead
}

// When page load it calls changeLocal function and print text in console.
window.addEventListener("load", function(event) {
    console.log("Zoom WC Redirector finished loading!");
    changeLocal();
    /*
    browser.storage.local.set({"key": 'value'});
    var savedvalue = "false";
    browser.storage.local.get(['key'], function(result) {savedvalue = result.key});
    console.log(savedvalue);
    */
});

// Load checkbox status based on localStorage last state.
document.addEventListener("load", function(event) {
  var existing = window.localStorage.getItem('toggleStatus');
  var data = existing ? existing + '' : "true";
  window.localStorage.setItem("toggleStatus", data);
  if (data=="true"){
    setRedirectOn();
  }
  else{
    setRedirectOff();
  }
});

// If toggle change state it calls changeElem function.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#toggle').addEventListener('change', changeToggle);
});

// Change localStorage "toggleStatus" value and extension icon when checkbox change state.
function changeToggle() {
  if (document.getElementById('toggle').checked){
    setRedirectOn();
  }
  else{
    setRedirectOff();
  }
};

// Change checkbox status based on lodalStorage "toggleStatus" value
function changeLocal(){
  if (window.localStorage.getItem("toggleStatus")!="false"){
    setRedirectOn();
  }
  else if (window.localStorage.getItem("toggleStatus")=="false"){
    setRedirectOff();
  }
};

// Change Icon, Toggle and localStorage to true/on.
function setRedirectOn(){
  window.localStorage.setItem("toggleStatus", "true");
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
  window.localStorage.setItem("toggleStatus", "false");
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

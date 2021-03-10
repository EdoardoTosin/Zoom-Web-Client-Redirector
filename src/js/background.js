// Load checkbox status based on localStorage last state.
window.addEventListener("load", function(event) {
  var existing = localStorage.getItem('toggleStatus');
  var data = existing ? existing + '' : true;
  localStorage.setItem("toggleStatus", data);
  if (data=="true"){
    document.getElementById('toggle').setAttribute("checked", "");
  }
  else{
    document.getElementById('toggle').removeAttribute("checked");
  }
});

// Change localStorage "toggleStatus" value and extension icon when checkbox change state.
function changeToggle() {
  if (document.getElementById('toggle').checked){
    browser.browserAction.setIcon({
        path: {
          "16": "../icons/16x16.png",
          "32": "../icons/32x32.png",
          "48": "../icons/48x48.png",
          "64": "../icons/64x64.png",
          "128": "../icons/128x128.png",
          "256": "../icons/256x256.png"
        }
    });

    localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
  }
  else{

    browser.browserAction.setIcon({
        path: {
          "16": "../icons/deactivated/16x16.png",
          "32": "../icons/deactivated/32x32.png",
          "48": "../icons/deactivated/48x48.png",
          "64": "../icons/deactivated/64x64.png",
          "128": "../icons/deactivated/128x128.png",
          "256": "../icons/deactivated/256x256.png"
        }
    });

    localStorage.setItem("toggleStatus", false);
    document.getElementById('toggle').removeAttribute("checked");
  }
};

// If toggle change state it calls changeElem function.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#toggle').addEventListener('change', changeToggle);
});

// Change checkbox status based on lodalStorage "toggleStatus" value
function changeLocal(){
  if (localStorage.getItem("toggleStatus")=="true"){
    // Unused conditions: localStorage.getItem("toggleStatus")==undefined || localStorage.getItem("toggleStatus")===null
    localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
  }
  else if (localStorage.getItem("toggleStatus")=="false"){
    document.getElementById('toggle').removeAttribute("checked");
  }
};

// When page load it calls changeLocal function and print text in console.
window.addEventListener("load", function(event) {
    console.log("Finished loading!");
    changeLocal();
});

// Replace */j/* on zoom domain with */wc/join/*
(function redirect(){
    if (window.location.pathname.substring(0,3) == "/j/" && localStorage.getItem('toggleStatus')=="true") {
      const domain = window.location.hostname;
      const path = "/wc/join/" + window.location.pathname.substring(3);
      window.location.href = "https://" + domain + path;
    }
})();

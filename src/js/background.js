//var status = "false";

// When page load it calls changeLocal function and print text in console.
window.addEventListener("load", function(event) {
    console.log("Zoom WC Redirector finished loading!");
    changeLocal();
});

// Load checkbox status based on localStorage last state.
document.addEventListener("load", function(event) {
  var existing = window.localStorage.getItem('toggleStatus');
  var data = existing ? existing + '' : true;
  window.localStorage.setItem("toggleStatus", data);
  if (data=="true"){
    document.getElementById('toggle').setAttribute("checked", "");
    setOnIcon();
    //status = "true";
  }
  else{
    document.getElementById('toggle').removeAttribute("checked");
    setOffIcon();
    //status = "false";
  }
});

// If toggle change state it calls changeElem function.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#toggle').addEventListener('change', changeToggle);
});

// Change localStorage "toggleStatus" value and extension icon when checkbox change state.
function changeToggle() {
  if (document.getElementById('toggle').checked){
    setOnIcon();
    window.localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
    //status = "true";
  }
  else{
    setOffIcon();
    window.localStorage.setItem("toggleStatus", false);
    document.getElementById('toggle').removeAttribute("checked");
    //status = "false";
  }
};

// Change checkbox status based on lodalStorage "toggleStatus" value
function changeLocal(){
  if (window.localStorage.getItem("toggleStatus")!="false"){
    // Unused conditions: localStorage.getItem("toggleStatus")==undefined || localStorage.getItem("toggleStatus")===null
    setOnIcon();
    window.localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
    //status = "true";
  }
  else if (window.localStorage.getItem("toggleStatus")=="false"){
    setOffIcon();
    document.getElementById('toggle').removeAttribute("checked");
    //status = "false";
  }
};

// Change Icon with activate set.
function setOnIcon(){
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

// Change Icon with deactivate set.
function setOffIcon(){
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

// Replace */j/* on zoom domain with */wc/join/*
(function redirect(){
  if (/*localStorage.getItem("toggleStatus")=="true" && */window.location.pathname != null && window.location.pathname.substring(0,3) == "/j/") {
    const domain = window.location.hostname;
    const path = "/wc/join/" + window.location.pathname.substring(3);
    window.location.href = "https://" + domain + path;
  }
})();

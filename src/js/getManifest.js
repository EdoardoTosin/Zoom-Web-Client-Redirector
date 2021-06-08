var addonVersion = chrome.runtime.getManifest().version;
var addonName = chrome.runtime.getManifest().name;
var homePage = chrome.runtime.getManifest().homepage_url;

// Load manifest data into popup.html when opened.
document.addEventListener("DOMContentLoaded", function() {
  //console.log(addonName + ' v' + addonVersion);
  
  // Load addon name
  document.getElementById("addon-name").innerHTML = (addonName.substr(0,8) + '<br>' + addonName.substr(9,26));
  // Load href links & version
  document.getElementById("changelog").href = homePage + '/blob/main/CHANGELOG.md';
  document.getElementById("issue-tracker").href = homePage + '/issues';
  document.getElementById("source-code").href = homePage;
  document.getElementById("addon-version").innerHTML = ('v' + addonVersion);
  document.getElementById("addon-version").href = homePage + '/releases/tag/v' + addonVersion;
});

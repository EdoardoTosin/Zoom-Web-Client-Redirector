const homePage = chrome.runtime.getManifest().homepage_url;
const addonVersion = 'v' + chrome.runtime.getManifest().version;
const changelogURL = homePage + '/blob/main/CHANGELOG.md';
const issue_trackerURL = homePage + '/issues';

// Load manifest data into popup.html when opened.
document.addEventListener("DOMContentLoaded", function() {
  //console.log(addonName + ' v' + addonVersion);

  // Load href links & version
  document.getElementById("changelog").href = changelogURL;
  document.getElementById("changelog").title = changelogURL;
  document.getElementById("issue_tracker").href = issue_trackerURL;
  document.getElementById("issue_tracker").title = issue_trackerURL;
  document.getElementById("source_code").href = homePage;
  document.getElementById("source_code").title = homePage;
  document.getElementById("addon_version").textContent = addonVersion;
});

// Open clickable links
window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
    window.close();
  }
})

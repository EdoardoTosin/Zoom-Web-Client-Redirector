const homePage = chrome.runtime.getManifest().homepage_url;
const addonVersion = chrome.runtime.getManifest().version;

// Load manifest data into popup.html when opened.
document.addEventListener("DOMContentLoaded", function() {
  //console.log(addonName + ' v' + addonVersion);

  // Load href links & version
  document.getElementById("changelog").href = homePage + '/blob/main/CHANGELOG.md';
  document.getElementById("issue-tracker").href = homePage + '/issues';
  document.getElementById("source-code").href = homePage;
  document.getElementById("addon-version").textContent = ('v' + addonVersion);
});

// Open clickable links
window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
    window.close();
  }
})

// Setting & info pages
document.addEventListener('DOMContentLoaded', function() {
  $('.btn').addEventListener('click', function() {
    browser.tabs.create({ url: document.getElementById(this.id).href });
    //window.open(document.getElementById(this.id).href);
    window.close();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  optionPage.addEventListener('click', function() {
    browser.runtime.openOptionsPage();
    window.close();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  infoPage.addEventListener('click', function() {
    browser.tabs.create({ url: chrome.runtime.getURL("../html/info.html") });
    window.open("../html/info.html","_self")
    //window.close();
  });
});

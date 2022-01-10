var storage = chrome.storage.sync;
if (!storage) storage = chrome.storage.local;

// Replace */j/* in the url with */wc/join/*
(function redirect(){
  storage.get("toggle", function(items) {
      //console.log(items.toggle);
      if (items.toggle=="true" && window.location.pathname!=null && window.location.pathname.substring(0,3).match(/[/]{1}[A-Za-z]{1}[/]{1}/)){
        var domain = window.location.hostname;
        var path = "/wc/join/" + window.location.pathname.substring(3) + window.location.search;
        window.location.href = "https://" + domain + path;
      }
  });
})();

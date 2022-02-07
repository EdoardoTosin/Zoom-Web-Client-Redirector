var storage = chrome.storage.sync;
if (!storage) storage = chrome.storage.local;

// Replace */j/* in the url with */wc/join/*
(function redirect(){
  storage.get("toggle", function(items) {
      //console.log(items.toggle);
      if (items.toggle=="true" && window.location.pathname!=null && window.location.pathname.substring(0,3).match(/[/]{1}[a-zA-Z]{1}[/]{1}/)){
        if (window.location.pathname.substring(1,2)=='j'){
          substr = "/wc/join/";
        }
        else {
          substr = "/wc/start/";
        }
        window.location.href = "https://" + window.location.hostname + substr + window.location.pathname.substring(3) + window.location.search;
      }
  });
})();

var storage = chrome.storage.sync;
if (!storage) storage = chrome.storage.local;

// Replace */j/* on zoom domain with */wc/join/*
(function redirect(){
  storage.get("toggle", function(items) {
      //console.log(items.toggle);
      if (items.toggle=="true" && window.location.pathname!=null && window.location.pathname.substring(0,3) == "/j/"){
        var domain = window.location.hostname;
        var path = "/wc/join/" + window.location.pathname.substring(3);
        window.location.href = "https://" + domain + path;
      }
  });
})();

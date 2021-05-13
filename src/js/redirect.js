// Replace */j/* on zoom domain with */wc/join/*
(function redirect(){
  chrome.storage.sync.get("toggle", function(items) {
      if (!chrome.runtime.error) {
        if (items.toggle=="true" && window.location.pathname != null && window.location.pathname.substring(0,3) == "/j/"){
          const domain = window.location.hostname;
          const path = "/wc/join/" + window.location.pathname.substring(3);
          window.location.href = "https://" + domain + path;
        }
      }
  });
})();

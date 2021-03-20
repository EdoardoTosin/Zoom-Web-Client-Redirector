// Replace */j/* on zoom domain with */wc/join/*
(function redirect(){
  if (/*window.localStorage.getItem("toggleStatus")=="true" && */window.location.pathname != null && window.location.pathname.substring(0,3) == "/j/") {
    const domain = window.location.hostname;
    const path = "/wc/join/" + window.location.pathname.substring(3);
    window.location.href = "https://" + domain + path;
  }
})();

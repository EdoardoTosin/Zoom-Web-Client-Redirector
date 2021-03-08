
//Replace */j/* on zoom domain with */wc/join/*
(function redirect() {
    if (window.location.pathname.substring(0,3) == "/j/" && document.getElementById('toggle')) {
      const domain = window.location.hostname;
      const path = "/wc/join/" + window.location.pathname.substring(3);
      window.location.href = "https://" + domain + path;
    }
})();

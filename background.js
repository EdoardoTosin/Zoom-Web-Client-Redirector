
(function() {
    if (window.location.pathname.substring(0,3) == "/j/"){
      const domain = window.location.hostname;
      const path = "/join/wc/" + window.location.pathname.substring(3);
      window.location.href = "https://" + domain + path;
    }
})();



if (localStorage.getItem('toggleStatus') != true && localStorage.getItem('toggleStatus') != false) {
  localStorage.setItem("toggleStatus", true);
}

var checkbox = document.getElementById('toggle');
checkbox.addEventListener('change', function() {
  if (this.checked) {
    checkbox.checked = true;
    localStorage.setItem("toggleStatus", true);
    this.setAttribute("checked", "checked");
  }
  else {
    checkbox.checked = false;
    localStorage.setItem("toggleStatus", false);
    this.removeAttribute("checked");
  }
})();

if (localStorage.getItem('toggleStatus') == true){
  redirect();
}

//Replace */j/* on zoom domain with */wc/join/*
(function redirect() {
    if (window.location.pathname.substring(0,3) == "/j/") {
      const domain = window.location.hostname;
      const path = "/wc/join/" + window.location.pathname.substring(3);
      window.location.href = "https://" + domain + path;
    }
})();

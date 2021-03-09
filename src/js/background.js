

if (localStorage.getItem('toggleStatus') == false){
  localStorage.setItem("toggleStatus", false);
  document.getElementById('toggle').removeAttribute("checked");
}
else if (localStorage.getItem('toggleStatus') != false){
  localStorage.setItem("toggleStatus", true);
  document.getElementById('toggle').setAttribute("checked", "");
}

var checkbox = document.getElementById('toggle');
checkbox.addEventListener("change", function(){
  if (this.checked){
    this.checked = true;
    localStorage.setItem("toggleStatus", true);
    this.setAttribute("checked", "");
  }
  else{
    this.checked = false;
    localStorage.setItem("toggleStatus", false);
    this.removeAttribute("checked");
  }
});

if (localStorage.getItem('toggleStatus') == true){
  redirect();
}

//Replace */j/* on zoom domain with */wc/join/*
(function redirect(){
    if (window.location.pathname.substring(0,3) == "/j/") {
      const domain = window.location.hostname;
      const path = "/wc/join/" + window.location.pathname.substring(3);
      window.location.href = "https://" + domain + path;
    }
})();

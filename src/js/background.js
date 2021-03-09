
//var checkbox = document.getElementById('toggle');
//var local = localStorage.getItem('toggleStatus');

function changeStatus() {
  if (document.getElementById('toggle').checked){
    alert("Change State to checked");
    document.getElementById('toggle').checked = true;
    localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
  }
  else{
    alert("Change State to unchecked");
    document.getElementById('toggle').checked = false;
    localStorage.setItem("toggleStatus", false);
    document.getElementById('toggle').removeAttribute("checked");
  }
};

function changeState(){
  document.getElementById('toggle').addEventListener("change", changeStatus());
};

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

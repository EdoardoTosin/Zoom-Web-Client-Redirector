window.addEventListener("load", function(event) {
  var existing = localStorage.getItem('toggleStatus');
  var data = existing ? existing + '' : true;
  localStorage.setItem("toggleStatus", data);
  if (data=="true"){
    document.getElementById('toggle').setAttribute("checked", "");
  }
  else{
    document.getElementById('toggle').removeAttribute("checked");
  }
});

function changeElem() {
  if (document.getElementById('toggle').checked){
    localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
  }
  else{
    localStorage.setItem("toggleStatus", false);
    document.getElementById('toggle').removeAttribute("checked");
  }
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#toggle').addEventListener('change', changeElem);
});

function changeLocal(){
  if (localStorage.getItem("toggleStatus")=="true"){
    // Unused conditions: localStorage.getItem("toggleStatus")==undefined || localStorage.getItem("toggleStatus")===null
    localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
  }
  else if (localStorage.getItem("toggleStatus")=="false"){
    document.getElementById('toggle').removeAttribute("checked");
  }
};

window.addEventListener("load", function(event) {
    console.log("Finished loading!");
    changeLocal();
});

//Replace */j/* on zoom domain with */wc/join/*
(function redirect(){
    if (window.location.pathname.substring(0,3) == "/j/" && localStorage.getItem('toggleStatus')=="true") {
      const domain = window.location.hostname;
      const path = "/wc/join/" + window.location.pathname.substring(3);
      window.location.href = "https://" + domain + path;
    }
})();

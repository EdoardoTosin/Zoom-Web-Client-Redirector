
//var checkbox = document.getElementById('toggle');
//var local = localStorage.getItem('toggleStatus');

function changeStatus() {
  if (document.getElementById('toggle').checked){
    document.getElementById('toggle').checked = true;
    localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
  }
  else{
    document.getElementById('toggle').checked = false;
    localStorage.setItem("toggleStatus", false);
    document.getElementById('toggle').removeAttribute("checked");
  }
};

function changeState(){
  document.getElementById('toggle').addEventListener("change", changeStatus());
};
/*
if (localStorage.getItem('toggleStatus') == true){
  redirect();
};
*/
//Replace */j/* on zoom domain with */wc/join/*
(function redirect(){
    if (window.location.pathname.substring(0,3) == "/j/" && localStorage.getItem('toggleStatus') != false) {
      const domain = window.location.hostname;
      const path = "/wc/join/" + window.location.pathname.substring(3);
      window.location.href = "https://" + domain + path;
    }
})();

function changeLocal(){
  if (localStorage.getItem("toggleStatus") != false){
    localStorage.setItem("toggleStatus", true);
    document.getElementById('toggle').setAttribute("checked","");
  }
  else {
    document.getElementById('toggle').removeAttribute("checked");
  }
};

window.addEventListener("load", function(event) {
    console.log("Tutte le risorse hanno terminato il caricamento!");
    changeLocal();
});

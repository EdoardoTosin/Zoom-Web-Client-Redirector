// ==UserScript==
// @name         Zoom Web Client Redirector
// @namespace    https://zoom.us
// @version      1.3.1
// @description  Redirect Zoom meetings to the web client version
// @author       Edoardo Tosin
// @license      MIT License
// @include      /https:\/\/([a-z0-9\-]+\.)?zoom\.us\/([j])\/([0-9]+).*/
// @grant        none
// ==/UserScript==


(function redirect() {
    if (window.location.pathname.substring(0,3) == "/j/"){
      const domain = window.location.hostname;
      const path = "/wc/join/" + window.location.pathname.substring(3);
      window.location.href = "https://" + domain + path;
    }
})();

// ==UserScript==
// @name         Zoom Web Client Redirector
// @namespace    https://zoom.us
// @version      1.1
// @description  Redirect Zoom meetings to the web client version
// @author       Edoardo Tosin
// @include      /https:\/\/([a-z0-9\-]+\.)?zoom\.us\/([j])\/([0-9]+).*/
// @grant        none
// ==/UserScript==


(function() {
    const link = window.location.href.match(/https:\/\/([a-z0-9\-]+\.)?zoom\.us\/([j])\/([0-9]+).*/);
    const prefix = link[1] || "";
    const postfix = link[2] === "j" ? "join/" + link[3] : link[3] + "/start";
    window.location.href = "https://" + prefix + "zoom.us/wc/" + postfix;
})();

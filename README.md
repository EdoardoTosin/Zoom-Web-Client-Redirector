<h1 align="center">
<sub>
<img  src="https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/blob/main/src/icons/256x256.png" height="38" width="38">
</sub>
Zoom Web Client Redirector
</h1>

<p align="center">
<a href="https://addons.mozilla.org/firefox/addon/zoom-web-client-redirector"><img src="https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/blob/main/docs/firefox-widget.png" alt="Get Zoom Web Client Redirector for Firefox" height="72" ></a> 
<a href="https://chrome.google.com/webstore/detail/zoom-web-client-redirecto/ommndciompclncigoffdnipifnfnaclj"><img src="https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/blob/main/docs/chrome-widget.png" alt="Get Zoom Web Client Redirector for Chromium" height="72" ></a>
<a href="https://microsoftedge.microsoft.com/addons/detail/kfpmepjfaolgcgabdmbpkfnicejbiggn"><img src="https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/blob/main/docs/edge-widget.png" alt="Get Zoom Web Client Redirector for Microsoft Edge" height="72" ></a>
</p>

## Table of contents

* [Summary](#summary)
* [Description](#description)
* [Installation](#installation)
* [Dashboard](#dashboard)
* [Screen example](#screen-example)
* [Privacy policy](#privacy-policy)
* [Permissions](#permissions)
* [Release History](#release-history)
* [License](#license)

## Summary

A web extension that redirects zoom meetings to the web client version.

## Description

This project was intended to make it easier to redirect Zoom meetings links to the web client page.  
This browser addon works by replacing a portion of the url with `*/wc/join/*` so that it loads the meeting joining page. For example `https://zoom.us/j/0123456789` would be converted to `https://zoom.us/wc/join/0123456789`.  
The web client is preferable over the desktop app because of the restriction that web browsers places on web pages, protecting your computer against malicious attacks and unauthorized access of your machine.  
For more information about best practices for securing your Zoom meetings read this blog post: [10 tips for Zoom security and privacy](https://www.kaspersky.com/blog/zoom-security-ten-tips/34729).

## Installation

- [Mozilla Firefox (v2.6.3)](https://addons.mozilla.org/firefox/addon/zoom-web-client-redirector)
- [Google Chrome (v2.6.3)](https://chrome.google.com/webstore/detail/zoom-web-client-redirecto/ommndciompclncigoffdnipifnfnaclj)
- [Microsoft Edge (coming soon)](https://microsoftedge.microsoft.com/addons/detail/kfpmepjfaolgcgabdmbpkfnicejbiggn)

## Dashboard

<p align="center">
  <img src="docs/popup.jpg" align="center" alt="image">
</p>

## Screen example

<p align="center">
  <a><img src="docs/screen.jpg" align="center" alt="image">
</p>

## Privacy policy

Zoom Web Client Redirector does **NOT** collect any data of any kind.

## Permissions

```
"permissions": [
  "storage",
  "*://*.zoom.us/*",
  "*://*.zoomgov.us/*"
],
```

- ``storage`` is used to save locally the state of the button placed in the popup user interface.  
- ``*://*.zoom.us/*`` and ``*://*.zoomgov.us/*`` are necessary to get the url and modify it to redirect to the web client page.

## Release History

See the [releases pages](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/releases) for a history of releases and highlights for each release.

## License

Copyright (c) 2021 Edoardo Tosin

This software is released under the terms of the GNU General Public License v3.0. See the [LICENSE](https://raw.githubusercontent.com/EdoardoTosin/Zoom-Web-Client-Redirector/main/LICENSE) file for further information.

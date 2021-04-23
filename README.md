<h1 align="center">
  <sub>
    <img  src="https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/blob/main/src/icons/256x256.png" height="38" width="38">
  </sub>
  Zoom Web Client Redirector
</h1>

<p align="center">
  <a href="https://addons.mozilla.org/firefox/addon/zoom-web-client-redirector">
    <img src="docs/widgets/firefox-widget.png" alt="Get Zoom WC Redirector for Firefox" width=25%></a> 
  <a href="https://chrome.google.com/webstore/detail/zoom-web-client-redirecto/ommndciompclncigoffdnipifnfnaclj">
    <img src="docs/widgets/chrome-widget.png" alt="Get Zoom WC Redirector for Chromium" width=25%></a>
  <a href="https://microsoftedge.microsoft.com/addons/detail/kfpmepjfaolgcgabdmbpkfnicejbiggn">
    <img src="docs/widgets/edge-widget.png" alt="Get Zoom WC Redirector for Microsoft Edge" width=25%></a>
</p>
<p align="center">
  <img alt="Mozilla Add-on" src="https://img.shields.io/amo/v/zoom-web-client-redirector?label=Firefox&logo=Firefox&style=for-the-badge"/>
  <img alt="Chrome Web Store" src="https://img.shields.io/chrome-web-store/v/ommndciompclncigoffdnipifnfnaclj?label=chrome&logo=google-chrome&style=for-the-badge">
  <img alt="Edge Store" src="https://img.shields.io/badge/dynamic/json?label=Edge&logo=microsoft-edge&style=for-the-badge&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fkfpmepjfaolgcgabdmbpkfnicejbiggn"/>
  <img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/EdoardoTosin/Zoom-Web-Client-Redirector?color=success&include_prereleases&label=GitHub&logo=GitHub&style=for-the-badge"/>
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/edoardotosin/Zoom-Web-Client-Redirector?style=for-the-badge"/>
  <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/edoardotosin/Zoom-Web-Client-Redirector/total?style=for-the-badge"/>
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

A browser extension that redirects zoom meetings to the web client version.

## Description

This project was intended to make it easier to redirect Zoom meetings links to the web client page.  
This browser addon works by replacing a portion of the url with `*/wc/join/*` so that it loads the meeting joining page. For example `https://zoom.us/j/0123456789` would be converted to `https://zoom.us/wc/join/0123456789`.  
The web client is preferable over the desktop app because of the restriction that web browsers places on web pages, protecting your computer against malicious attacks and unauthorized access of your machine.  
For more information about best practices for securing your Zoom meetings read this blog post: [10 tips for Zoom security and privacy](https://www.kaspersky.com/blog/zoom-security-ten-tips/34729).

## Installation

- [Mozilla Firefox](https://addons.mozilla.org/firefox/addon/zoom-web-client-redirector)
- [Google Chrome](https://chrome.google.com/webstore/detail/zoom-web-client-redirecto/ommndciompclncigoffdnipifnfnaclj)
- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/kfpmepjfaolgcgabdmbpkfnicejbiggn)

## Dashboard

<p align="center">
  <img src="docs/dashboard/on.png" align="center" alt="On"><img src="docs/dashboard/off.png" align="center" alt="Off"></img>
</p>

## Screen example

<p align="center">
  <a align="left"><img src="docs/screeshots/before.png" width=49% alt="Before"></a>
  <a align="right"><img src="docs/screeshots/after.png" width=49% alt="After"></a>
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

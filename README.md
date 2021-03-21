<h1 align="center">
<sub>
<img src="src/icons/48x48.png" vertical-align="bottom" width="32" height="32" alt="image">
</sub>
Zoom Web Client Redirector
</h1>

## Table of contents

* [Summary](#summary)
* [Description](#description)
* [Install Addon](#install-addon)
* [Privacy policy](#privacy-policy)
* [Permissions](#permissions)
* [Release History](#release-history)
* [License](#license)

## Summary

Simple addon that redirects zoom meetings to the web client version.

## Description

This project was intended make it easier to redirect Zoom meetings links to the web client page.  
The web client is preferable over the desktop app because of the restriction that web browsers place on websites.  
For more information about best practices for securing your Zoom meetings read this blog post: [10 tips for Zoom security and privacy](https://www.kaspersky.com/blog/zoom-security-ten-tips/34729).

## Install Addon

* [Mozilla Firefox](https://addons.mozilla.org/firefox/addon/zoom-web-client-redirector/)
* ~~Google Chrome~~ (in review phase)
* ~~Microsoft Edge~~ (in review phase)

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

- ``storage`` is used to save locally the last state of the toggle in the popup menu.
- ``*://*.zoom.us/*`` and ``*://*.zoomgov.us/*`` are necessary to get the url and modify it to redirect to the web client page.

## Release History

See the [releases pages](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/releases) for a history of releases and highlights for each release.

## License

[MIT](https://raw.githubusercontent.com/EdoardoTosin/Zoom-Web-Client-Redirector/main/LICENSE)

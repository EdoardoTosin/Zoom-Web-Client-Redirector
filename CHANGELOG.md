# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.8.5](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.8.5) - 2022-01-10

### Fixed

- Redirecting links now include queries (like ?wpk= or ?pwd=).

## [2.8.4](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.8.4) - 2021-10-31

### Changed

- Improved dashboard style.

### Fixed

- Hyperlinks are now clickable in chromium browsers too (require tabs permission).

## [2.8.3](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.8.3) - 2021-09-19

### Changed

- Corrected `zoomgov.us` domain with `zoomgov.com`.
- Match any single letter between "/*/" instead of just "/j/".

## [2.8.2](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.8.2) - 2021-09-01

### Changed

- Changed variables inside getManifest.js to `const`.
- Minor popup menu style changes.

## [2.8.1](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.8.1) - 2021-06-08

### Changed

- Improved dashboard text readability.
- Commented test code inside toggle.js and redirect.js.

### Added

- Extension version now present on top of the title, inside the dashboard.

## [2.8.0](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.8.0) - 2021-05-26

### Fixed

- Addon does not redirect on Mozilla Firefox ([issue \#12](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/issues/12)).

## [2.7.3](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.7.3) - 2021-05-14

### Fixed

- Redirect to the correct page before zoom page asks to download the client.

### Unchanged

- Redirect not fully working on Mozilla Firefox.

## [2.7.2](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.7.2) - 2021-05-14

### Fixed

- Redirect function not always working.

### Unchanged

- Redirect not fully working on Mozilla Firefox.

## [2.7.1](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.7.1) - 2021-05-13

### Fixed

- Redirect function not always working.

## [2.7.0](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.7.0) - 2021-05-12

### Added

- Support Firefox for Android.

### Changed

- New extension icon.
- Minimum version of Firefox to support: 79.0.
- Improved dashboard readability.

### Fixed

- Minor issues on Firefox (API warnings unresolved since version [2.6.0](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.6.0)):
  - "storage.sync" can cause issues when loaded temporarily.
  - runtime.error is not supported.

## [2.6.5](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.6.5) - 2021-04-01

### Changed

- Updated link and text in the popup menu.
- Added bottom margin in the popup menu.

## [2.6.4](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.6.4) - 2021-03-29

### Fixed

- Fixed cross-browser compatibility issue.

## [2.6.3](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.6.3) - 2021-03-24

### Fixed

- Fixed redirect not working after installation without opening the user interface.

## [2.6.1](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.6.1) - 2021-03-22

### Changed

- Removed unnecessary permissions (://.zoom.com/* and ://.zoomgov.com/*).

## [2.6.0](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/v2.6.0) - 2021-03-22

### Added

- Implemented toggle switch to control extension redirect functionality.
- Extension icon changes based on toggle switch status.

## [1.3.1](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/1.3.1) - 2021-03-07

### Fixed

- Fixed wrong path from "/join/wc/" to "/wc/join/".

## [1.3.0](https://github.com/EdoardoTosin/Zoom-Web-Client-Redirector/tree/1.3.0) - 2021-03-07

### Added

- Added compatibility with zoomgov.us and other zoom related subdomains.

### Fixed

- Removed script inside html that caused violation of the Content Security Policy.

# TextAlive App API

TextAlive App API is the JavaScript API for developing **web applications that show lyrics synchronized with the music playback (lyric apps)** -- as opposed to lyric videos in which each frame is statically rendered as an image.

This API allows the applications to retrieve music scene descriptions of a musical piece on the web, such as beat timings, repetitive segments, etc. It also allows retrieving lyrics information, such as lyrics text, timings of each character being vocalized, and morphological analysis results.

The API decouples the applications from concrete musical pieces by introducing abstract data types of music scene descriptions and lyrics. The applications can synchronize to the musical pieces registered to [TextAlive](https://textalive.jp).

For the English overview of the TextAlive project, please refer to [the academic project page](https://junkato.jp/textalive/).

**日本語は [README.md](https://github.com/TextAliveJp/textalive-app-api/blob/main/README.md) にあります。**

[![npm version](https://img.shields.io/npm/v/textalive-app-api)](https://www.npmjs.com/package/textalive-app-api) [![Join the chat at https://gitter.im/textalive-app-api/community](https://badges.gitter.im/textalive-app-api/community.svg)](https://gitter.im/textalive-app-api/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![TextAlive](https://i.gyazo.com/f202c89bb21d0ee24c5213565fe7d1b0.png)

## Usage

TextAlive App API can be used by `script` tags in an HTML document or by installing the npm package `textalive-app-api`.

The primary entry point to the API features is the [`Player`](https://developer.textalive.jp/packages/textalive-app-api/classes/player.html) class. To use it, you would need an application token that can be retrieved in the [TextAlive for Developers](https://developer.textalive.jp) website. Please note that all of the API documents are bi-lingual -- written in both Japanese and English.

### `script` tags

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/textalive-app-api/dist/index.js"></script>
```

The global variable `TextAliveApp` is defined after these lines of code. The API components can be retrieved through the variable e.g., `const { Player } = TextAliveApp;`.

### npm install

```sh
npm install textalive-app-api
```

The API components can be retrieved through the `import` (or `require`) statement e.g., `import { Player } from "textalive-app-api";`.

## References

- [TextAlive App API tutorial](https://developer.textalive.jp/app)
- [API reference](https://developer.textalive.jp/packages/textalive-app-api)
- [GitHub sample code](https://github.com/TextAliveJp)

Please reach out to the developer team using [GitHub Issues](https://github.com/TextAliveJp/textalive-app-api/issues?q=is%3Aissue) or [Gitter chat](https://gitter.im/textalive-app-api/community). Also, please refer to the [TextAlive for Developers](https://developer.textalive.jp) website.

---

&copy; AIST TextAlive Project 2020-2021

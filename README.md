# TextAlive App API

TextAlive App API は、 **音楽に合わせてタイミングよく歌詞が動く Web アプリケーション（リリックアプリ）** を開発できる JavaScript 用のライブラリです。

この API を使うと、Web 上の楽曲のサビやビートなどの楽曲地図情報を取得したり、Web 上の歌詞のタイミング情報を取得したりできるようになります。そして、一曲のために作り込んだ演出はもちろんのこと、 [TextAlive](https://textalive.jp/) に登録されている様々な楽曲に合わせて動作する演出をプログラミングできます。

**English version available in [README.en.md](https://github.com/TextAliveJp/textalive-app-api/blob/main/README.en.md).**

[![npm version](https://img.shields.io/npm/v/textalive-app-api)](https://www.npmjs.com/package/textalive-app-api) [![Join the chat at https://gitter.im/textalive-app-api/community](https://badges.gitter.im/textalive-app-api/community.svg)](https://gitter.im/textalive-app-api/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![TextAlive](https://i.gyazo.com/f202c89bb21d0ee24c5213565fe7d1b0.png)

## 使い方

TextAlive App API は `script` タグで Web サイトに読み込んだり、 npm パッケージ `textalive-app-api` をインストールすることで使えるようになります。

ほとんどの機能のエントリーポイントになる `Player` クラスの説明は [こちら](https://developer.textalive.jp/packages/textalive-app-api/classes/Player.html) にあります。このクラスを利用するには [TextAlive for Developers Web サイト](https://developer.textalive.jp) から開発者登録を行い、アプリトークンを取得する必要があります。詳しくは Web サイトをご覧ください。

### `script` タグによる読み込み

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/textalive-app-api/dist/index.js"></script>
```

グローバル変数 `TextAliveApp` が定義されるので、 `const { Player } = TextAliveApp;` のように必要なコンポーネントを呼び出して使います。

### npm パッケージのインストール

```sh
npm install textalive-app-api
```

`import { Player } from "textalive-app-api";` のように必要なコンポーネントをインポートして使います。

## 開発者向けドキュメント

- [TextAlive App API チュートリアル](https://developer.textalive.jp/app)
- [API リファレンス](https://developer.textalive.jp/packages/textalive-app-api)
- [GitHub サンプルコード](https://github.com/TextAliveJp)
- [TextAlive App API の開発履歴 (Scrapbox)](https://scrapbox.io/textalive/TextAlive_App_API%E3%81%AE%E9%96%8B%E7%99%BA%E5%B1%A5%E6%AD%B4)

技術的に分からないことやバグ報告などがあれば、 [GitHub Issues](https://github.com/TextAliveJp/textalive-app-api/issues?q=is%3Aissue) か [Gitter Chat](https://gitter.im/textalive-app-api/community) までお願いいたします。
[TextAlive for Developers トップページ](https://developer.textalive.jp) もぜひご覧ください。

---

&copy; AIST TextAlive Project 2020-2024

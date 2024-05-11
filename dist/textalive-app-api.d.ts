import { sortedIndex } from "sortedindex";

/**
 * **Basic timer**
 *
 * もっともシンプルな {@link Timer} の実装:
 *
 * - 音源を再生しません
 * - デバッグ時などに有用です
 *
 * The simplest {@link Timer} implementation:
 *
 * - No audio elements are embedded (thus no sound playback)
 * - Useful for debugging
 * @public
 */
export declare class BasicTimer implements Timer {
  /** @inheritDoc */
  get wait(): number;
  set wait(val: number);
  /** @inheritDoc */
  get isPlaying(): boolean;
  /** @inheritDoc */
  get position(): number;
  constructor();
  /** @inheritDoc */
  initialize({ player, updater, emitter }: TimerInitOptions): Promise<void>;
  /** @inheritDoc */
  play(): void;
  /** @inheritDoc */
  stop(): void;
  /** @inheritDoc */
  pause(): void;
  /** @inheritDoc */
  seek(time: number): void;
  /** @inheritDoc */
  dispose(): void;
}

/**
 * ビート情報 / Beat info
 */
declare class Beat extends SongMapElement implements IBeat {
  /** @inheritDoc */
  startTime: number;
  /** @inheritDoc */
  get endTime(): number;
  /** @inheritDoc */
  length: number;
  /** @inheritDoc */
  position: number;
  /** @inheritDoc */
  previous: Beat;
  /** @inheritDoc */
  next: Beat;
  /** @inheritDoc */
  index: number;
  constructor();
}

/**
 * @param t - Timing [0, 1]
 */
declare function bounceIn(t: number): number;

/**
 * @param t - Timing [0, 1]
 */
declare function bounceInOut(t: number): number;

/**
 * @param t - Timing [0, 1]
 */
declare function bounceOut(t: number): number;

/**
 * 文字 / Character
 * @public
 */
declare class Char extends TextUnit implements IChar {
  constructor(data: CharData);
  get parent(): Word;
  get previous(): Char;
  get next(): Char;
  get text(): string;

  set font(val: Font);
  get font(): Font;
  set fontFamily(val: string);
  get fontFamily(): string;
  set fontStyle(val: string);
  get fontStyle(): string;
  set fontSize(val: number);
  get fontSize(): number;
  set color(val: Color);
  get color(): Color;
  getType(): number;
}

/**
 * @public
 */
export declare interface CharData extends UnitData, FontData {
  char?: string;
}

/**
 * コード進行の情報 / Chord info
 */
declare class Chord extends SongMapElement implements IChord {
  /** @inheritDoc */
  startTime: number;
  /** @inheritDoc */
  endTime: number;
  /** @inheritDoc */
  name: string;
  /** @inheritDoc */
  previous: Chord;
  /** @inheritDoc */
  next: Chord;
  /** @inheritDoc */
  index: number;
  constructor();
}

/**
 * @param t - Timing [0, 1]
 */
declare function circIn(t: number): number;

/**
 * @param t - Timing [0, 1]
 */
declare function circInOut(t: number): number;

/**
 * @param t - Timing [0, 1]
 */
declare function circOut(t: number): number;

/**
 * **Color**
 *
 * 色情報 / Color info
 * @public
 */
export declare class Color implements IColor {
  /** @inheritDoc */
  a: number;
  /** @inheritDoc */
  r: number;
  /** @inheritDoc */
  g: number;
  /** @inheritDoc */
  b: number;
  constructor(color?: string | number | IColor);
  /** @inheritDoc */
  get value(): number;
  set value(val: number);
  get valueArgb(): number;
  get valueRgb(): number;
  get hexRgb(): string;
  get hexA(): string;
  /** @inheritDoc */
  get rgb(): string;
  /** @inheritDoc */
  get cssRgb(): string;
  /** @inheritDoc */
  get rgba(): string;
  /** @inheritDoc */
  get argb(): string;
  /** @inheritDoc */
  get cssRgba(): string;
  /** @inheritDoc */
  eq(color: Color): boolean;
  /** @inheritDoc */
  toString(withAlpha?: boolean): string;
  /** @inheritDoc */
  from(color?: string | number | IColor): void;
  /** @inheritDoc */
  fromString(color: string): void;
  /** @inheritDoc */
  fromNumber(val: number, withAlpha?: boolean): void;
}

/**
 * @public
 */
declare interface ColorData {
  type: "Color";
  /**
   * All values range from 0 to 255
   */
  value: {
    a: number;
    r: number;
    g: number;
    b: number;
  };
}

/**
 * データ読み込みルーチンに関するイベントのリスナ
 *
 * Event listener for data loading procedures
 * @public
 */
export declare type DataLoaderListener = VideoLoaderListener &
  SongLoaderListener &
  TextLoaderListener &
  FontLoaderListener;

/**
 * データURLのBase64エンコードされた文字列を復号
 *
 * Decode a data URL that encodes UTF-8 string in Base64 format
 * @param url - URL
 * @public
 */
export declare function dataUrlToString(url: string): string;

export declare interface DecomposedProps {
  x?: number;
  y?: number;
  scaleX?: number;
  scaleY?: number;
  skewX?: number;
  skewY?: number;
  rotation?: number;
}

/**
 * **Ease**
 *
 * イージング関数のコレクション:
 *
 * - `CreateJS` というライブラリのオープンソース実装をお借りしています
 * - {@link https://www.createjs.com/demos/tweenjs/tween_sparktable} に分かりやすいデモがあります
 *
 * Collection of easing functions:
 * - Inherited from an open-source library implementation `CreateJS`
 * - See {@link https://www.createjs.com/demos/tweenjs/tween_sparktable} for live demonstrations
 *
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2010 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * @public
 */
export declare class Ease {
  static linear: typeof linear;
  static get: typeof get;
  static getPowIn: typeof getPowIn;
  static getPowOut: typeof getPowOut;
  static getPowInOut: typeof getPowInOut;
  static quadIn: (input: number) => number;
  static quadOut: (input: number) => number;
  static quadInOut: (input: number) => number;
  static cubicIn: (input: number) => number;
  static cubicOut: (input: number) => number;
  static cubicInOut: (input: number) => number;
  static quartIn: (input: number) => number;
  static quartOut: (input: number) => number;
  static quartInOut: (input: number) => number;
  static quintIn: (input: number) => number;
  static quintOut: (input: number) => number;
  static quintInOut: (input: number) => number;
  static sineIn: typeof sineIn;
  static sineOut: typeof sineOut;
  static sineInOut: typeof sineInOut;
  static getBackIn: typeof getBackIn;
  static backIn: (input: number) => number;
  static getBackOut: typeof getBackOut;
  static backOut: (input: number) => number;
  static getBackInOut: typeof getBackInOut;
  static backInOut: (input: number) => number;
  static circIn: typeof circIn;
  static circOut: typeof circOut;
  static circInOut: typeof circInOut;
  static bounceIn: typeof bounceIn;
  static bounceOut: typeof bounceOut;
  static bounceInOut: typeof bounceInOut;
  static getElasticIn: typeof getElasticIn;
  static elasticIn: (input: number) => number;
  static getElasticOut: typeof getElasticOut;
  static elasticOut: (input: number) => number;
  static getElasticInOut: typeof getElasticInOut;
  static elasticInOut: (input: number) => number;
}

/**
 * @param objects - 時刻付きオブジェクトの配列 / Array of sorted timed objects
 * @param time - 時刻 [ms] / Time [ms]
 * @param options - 探索オプション / Find options
 * @returns 指定された時刻に存在するオブジェクトを返す / Returns the object at the specified timing
 * @public
 */
export declare function findTimedObject<T extends TimedObject>(
  objects: T[],
  time: number,
  options?: FindTimedObjectOptions
): T;

/**
 * 時刻付きオブジェクトの探索オプション
 *
 * Find options for sorted timed objects
 * @public
 */
export declare type FindTimedObjectOptions =
  | {
      /**
       * 指定された場合、探索対象の時刻とこの時刻情報がなす区間と重複する時刻付きオブジェクトを返す
       *
       * When specified, find an object that overlaps with the specified range rather than the timing
       */
      endTime?: number;
    }
  | {
      /**
       * 指定された場合、時刻付きオブジェクトは必ずしも探索対象の時刻を含んでいなくてもよい（二分探索の結果をそのまま返す）
       *
       * When specified, an object does not need to contain the specified timing (result from the binary tree search is always returned)
       */
      loose?: boolean;
    };

/**
 * @param sortedArray - 時刻付きオブジェクトの配列 / Array of sorted timed objects
 * @param startTime - 開始時刻 [ms] / Start time [ms]
 * @param endTime - 終了（現在）時刻 [ms] / End (current) time [ms]
 * @returns 指定された時区間に存在するオブジェクトを返す / Returns the objects in the specified time range
 * @public
 */
export declare function findTimedObjectsInRange<T extends TimedObject>(
  sortedArray: T[],
  startTime: number,
  endTime: number
): TimedObjectsInRange<T>;

declare class Font implements IFont {
  constructor(family?: string, size?: number, style?: string);
  get family(): string;
  get size(): number;
  get style(): string;
  deriveFamily(family: string): Font;
  deriveStyle(style: string): Font;
  deriveSize(size: number): Font;
  clone(): Font;
  eq(font: Font): boolean;
  toString(scaleFactor?: number): string;
}

/**
 * @public
 */
export declare interface FontData {
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: string;
}

/**
 * フォント情報
 *
 * Font info
 * @public
 */
export declare interface FontInfo {
  /**
   * フォントのキー (文字列ID)
   *
   * Font key (string ID)
   */
  key: string;
  /**
   * 英語フォントファミリー名
   *
   * English font family name
   */
  en: string;
  /**
   * 日本語フォントファミリー名
   *
   * Japanese font family name
   */
  ja?: string;
  /**
   * CSSのURL
   *
   * URL of the CSS file
   */
  url?: string;
  /**
   * CSSのURL (頻出文字のみを抽出したサブセット)
   *
   * URL of the CSS file (Subset fonts for frequently-used chars)
   */
  compactUrl?: string;
  /**
   * モリサワ TypeSquare フォントか否か
   *
   * Whether this font is provided by Morisawa TypeSquare or not
   */
  typesquare?: boolean;
  /**
   * Google Fonts フォントか否か
   *
   * Whether this font is provided by Google Fonts or not
   */
  google?: boolean;

  /**
   * フォントのグループ名
   *
   * Optional font group name
   */
  group?: string;
}

/**
 * @public
 */
export declare interface FontLoaderListener {
  /**
   * フォントが読み込まれたときに呼ばれる
   *
   * Called when fonts are loaded
   * @param fonts - 読み込まれたフォントの一覧
   * @param reason - 失敗したときの理由 / Reason for failures (if any)
   */
  onFontsLoad?(fonts: FontInfo[], reason?: FontLoadingError): void;
}

/**
 * @public
 */
export declare interface FontLoadingError extends Error {
  /**
   * 読み込みに失敗したフォントの一覧 / Fonts that could not be loaded
   */
  fonts: FontInfo[];
}

/**
 * Mimics the simple -100 to 100 easing in Adobe Flash/Animate.
 * @param amount - A value from -1 (ease in) to 1 (ease out) indicating the strength and direction of the ease.
 */
declare function get(amount: number): (input: number) => number;

/**
 * Configurable "back in" ease.
 * @param amount - The strength of the ease.
 */
declare function getBackIn(amount: number): (input: number) => number;

/**
 * Configurable "back in out" ease.
 * @param amount - The strength of the ease.
 */
declare function getBackInOut(amount: number): (input: number) => number;

/**
 * Configurable "back out" ease.
 * @param amount - The strength of the ease.
 */
declare function getBackOut(amount: number): (input: number) => number;

/**
 * Configurable elastic ease.
 * @param amplitude
 * @param period
 */
declare function getElasticIn(
  amplitude: number,
  period: number
): (input: number) => number;

/**
 * Configurable elastic ease.
 * @param amplitude
 * @param period
 */
declare function getElasticInOut(
  amplitude: number,
  period: number
): (input: number) => number;

/**
 * Configurable elastic ease.
 * @param amplitude
 * @param period
 */
declare function getElasticOut(
  amplitude: number,
  period: number
): (input: number) => number;

/**
 * Configurable exponential ease.
 * @param pow - The exponent to use (ex. 3 would return a cubic ease).
 */
declare function getPowIn(pow: number): (input: number) => number;

/**
 * Configurable exponential ease.
 * @param pow - The exponent to use (ex. 3 would return a cubic ease).
 */
declare function getPowInOut(pow: number): (input: number) => number;

/**
 * Configurable exponential ease.
 * @param pow - The exponent to use (ex. 3 would return a cubic ease).
 */
declare function getPowOut(pow: number): (input: number) => number;

/**
 * ビート情報 / Beat info
 * @public
 */
export declare interface IBeat extends TimedObject {
  /** @inheritDoc */
  readonly endTime: number;
  /** ビート間隔 [ms] / Duration [ms] */
  readonly duration: number;
  /**
   * 指定された楽曲中の位置をこのビート中の位置 `[0, 1]` にマッピングして返す
   *
   * Returns the position in this beat [0, 1]
   * @param time - 楽曲中の位置 / Position in a song
   */
  progress(time: number): number;
  /** 小節中のビート数 / Number of beats in a bar */
  length: number;
  /** 小節中のビート位置 / Index in the bar */
  position: number;
  /** 前のビート / Previous beat */
  previous: IBeat;
  /** 次のビート / Next beat */
  next: IBeat;
  /** 楽曲中のビート位置 / Index of this beat in the song */
  index: number;
}

/**
 * 文字 / Character
 * @public
 */
export declare interface IChar extends ITextUnit {
  /** @inheritDoc */
  readonly parent: IWord;
  /** @inheritDoc */
  readonly previous: IChar;
  /** @inheritDoc */
  readonly next: IChar;
}

/**
 * コード進行の情報 / Chord info
 * @public
 */
export declare interface IChord extends TimedObject {
  /** コード進行の継続時間 [ms] / Duration [ms] */
  readonly duration: number;
  /**
   * 指定された楽曲中の位置をこのコード進行中の位置 `[0, 1]` にマッピングして返す
   *
   * Returns the position in this chord [0, 1]
   * @param time - 楽曲中の位置 / Position in a song
   */
  progress(time: number): number;
  /** コード進行 / Chord */
  name: string;
  /** 前のコード / Previous chord */
  previous: IChord;
  /** 次のコード / Next chord */
  next: IChord;
  /** 楽曲中のコード進行位置 / Index of this chord in the song */
  index: number;
}

/**
 * 色情報
 *
 * Color info
 * @public
 */
export declare interface IColor {
  /** 透明度 / Alpha */
  a: number;
  /** 赤 / Red */
  r: number;
  /** 緑 / Green */
  g: number;
  /** 青 / Blue */
  b: number;
  /** 色情報の 32 bit 表現 / Color info in 32 bit integer */
  value: number;
  /** 色情報の16進数表現 (RGB) / Hex string (RGB) */
  readonly rgb: string;
  /** 色情報のCSS互換表現 (RGB; e.g., rgba(17,34,51)) / Color info in CSS-compatible format (RGB; e.g., rgba(17,34,51)) */
  readonly cssRgb: string;
  /** 色情報の16進数表現 (RGBA; e.g., #11223300) / Hex string (RGBA; e.g., #11223300) */
  readonly rgba: string;
  /** 色情報の16進数表現 (ARGB; e.g., 0x00112233) / Hex string (ARGB; e.g., 0x00112233) */
  readonly argb: string;
  /** 色情報のCSS互換表現 (RGBA; e.g., rgba(17,34,51,0)) / Color info in CSS-compatible format (RGBA; e.g., rgba(17,34,51,0)) */
  readonly cssRgba: string;
  /**
   * @param color - 色情報 / Color
   * @returns 色情報が一致するか否か / Whether the specified color info matches the current info
   */
  eq(color: IColor): boolean;
  /**
   * 色情報の文字列表現を得る
   *
   * Retrieve string representation of this color info
   * @param withAlpha - 透明度付きにするか否か / Whether to include alpha value or not
   */
  toString(withAlpha?: boolean): string;
  /**
   * 色情報をセットする
   *
   * Set color info
   * @param color - 色情報 / Information source
   */
  from(color: string | number | IColor): void;
  /**
   * 16進数で表された文字情報の色情報をセットする
   *
   * Set color info (Hex string RGB or RGBA e.g., #123 or #11223300)
   * @param color - 色情報の文字列表現 / Information source in string
   */
  fromString(color: string): void;
  /**
   * 色情報をセットする
   *
   * Set color info
   * @param val - 色情報の数値表現 (32 bit ARGB または 24 bit RGB) / Information source in number (32 bit ARGB or 24 bit RGB)
   * @param withAlpha - 透明度付きか否か / Whether alpha value is included or not
   */
  fromNumber(val: number, withAlpha?: boolean): void;
}

/**
 * 読み込まれている音楽地図や歌詞などの情報にアクセスするためのインタフェース
 *
 * This interface provides access to song map and lyrics information.
 * @public
 */
export declare interface IDataLoader extends ISongExplorer {
  /** TextAlive サービスのURL / TextAlive website url */
  readonly permalink: string;

  /** 楽曲情報 / Song info */
  readonly song: Song;

  /** 音楽地図情報 / Song map info */
  readonly songMap: ISongMap;
  /**
   * 歌詞の発声タイミング推定ID / Lyrics timing estimation ID
   * @deprecated Use {@link LyricsInfo.id} property instead
   */
  readonly lyricsId: number;
  /** 歌詞の発声タイミング情報 / Lyrics timing info */
  readonly lyrics: LyricsInfo;
  /** 歌詞の情報 / Lyrics info */
  readonly lyricsBody: LyricsBody;
  /**
   * 歌詞テキスト / Lyrics text
   * @deprecated Use {@link LyricsBody.text} property instead
   */
  readonly text: string;
  /** フォントの読み込みステータス / Font loading status */
  readonly fonts: IFontLoader;
}

/**
 * フォント情報
 *
 * Font info
 * @public
 */
export declare interface IFont {
  /** フォントファミリー / Font family */
  readonly family: string;
  /** フォントサイズ / Font size */
  readonly size: number;
  /** フォントのスタイル / Font style */
  readonly style: string;
  /**
   * フォントファミリーだけ変更したフォント情報を生成する
   *
   * Derive font info with the specified font family
   * @param family - フォントファミリー / Font family
   */
  deriveFamily(family: string): IFont;
  /**
   * フォントサイズだけ変更したフォント情報を生成する
   *
   * Derive font info with the specified font size
   * @param size - フォントサイズ / Font size
   */
  deriveSize(size: number): IFont;
  /**
   * フォントのスタイルだけ変更したフォント情報を生成する
   *
   * Derive font info with the specified font style
   * @param style - フォントのスタイル / Font style
   */
  deriveStyle(style: string): IFont;
  /**
   * フォント情報を複製する
   *
   * Clone this font info
   */
  clone(): IFont;
  /**
   * @param font - フォント情報 / Font
   * @returns フォント情報が一致するか否か / Whether the specified font info matches the current info
   */
  eq(font: IFont): boolean;
  /**
   * @param scaleFactor - Scale factor to multiply the size info [px]
   * @returns フォント情報のCSS用文字列表現 / CSS text that represents this font info
   */
  toString(scaleFactor?: number): string;
}

/**
 * @public
 */
export declare interface IFontLoader {
  /**
   * 読み込みに失敗したフォントの一覧 / List of fonts failed to load
   */
  readonly failed: FontInfo[];
  /**
   * 読み込まれたフォントの一覧 / List of fonts succeeded to load
   */
  readonly loaded: FontInfo[];
  /**
   * 読み込みプロセスの有無 / Whether fonts are currently loaded or not
   */
  isLoading(): boolean;
  /**
   * フォントを読み込む
   *
   * Load fonts
   * @param fonts - フォント名の一覧 / List of font family names
   * @returns 読み込めたフォントの一覧 / List of fonts suceeded to load
   */
  load(fonts: (string | FontInfo)[]): Promise<FontInfo[]>;
  /**
   * 利用可能なすべてのフォントを読み込む
   *
   * Load all available fonts
   * @returns 読み込めたフォントの一覧 / List of fonts suceeded to load
   */
  loadAll(): Promise<FontInfo[]>;
}

/**
 * @public
 */
export declare interface IMatrix2D {
  /**
   * Position (0, 0) in a 3x3 affine transformation matrix.
   */
  a: number;
  /**
   * Position (0, 1) in a 3x3 affine transformation matrix.
   */
  b: number;
  /**
   * Position (1, 0) in a 3x3 affine transformation matrix.
   */
  c: number;
  /**
   * Position (1, 1) in a 3x3 affine transformation matrix.
   */
  d: number;
  /**
   * Position (2, 0) in a 3x3 affine transformation matrix.
   */
  tx: number;
  /**
   * Position (2, 1) in a 3x3 affine transformation matrix.
   */
  ty: number;
  /**
   * Appends the specified matrix properties to this matrix. All parameters are required.
   * This is the equivalent of multiplying `(this matrix) * (specified matrix)`.
   * @param a
   * @param b
   * @param c
   * @param d
   * @param tx
   * @param ty
   * @returns This matrix. Useful for chaining method calls.
   */
  append(
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number
  ): IMatrix2D;
  /**
   * Appends the specified matrix to this matrix.
   * This is the equivalent of multiplying `(this matrix) * (specified matrix)`.
   * @param matrix
   * @returns This matrix. Useful for chaining method calls.
   */
  appendMatrix(matrix: IMatrix2D): IMatrix2D;
  /**
   * Generates matrix properties from the specified display object transform properties, and appends them to this matrix.
   * For example, you can use this to generate a matrix representing the transformations of a display object:
   *
   * ```
   * 	var mtx = new createjs.Matrix2D();
   * 	mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
   * ```
   * @param x
   * @param y
   * @param scaleX
   * @param scaleY
   * @param rotation
   * @param skewX
   * @param skewY
   * @param regX - Optional.
   * @param regY - Optional.
   * @returns This matrix. Useful for chaining method calls.
   */
  appendTransform(
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    rotation: number,
    skewX: number,
    skewY: number,
    regX?: number,
    regY?: number
  ): IMatrix2D;
  /**
   * Returns a clone of the Matrix2D instance.
   * @returns a clone of the Matrix2D instance.
   */
  clone(): IMatrix2D;
  /**
   * Copies all properties from the specified matrix to this matrix.
   * @param matrix - The matrix to copy properties from.
   * @returns This matrix. Useful for chaining method calls.
   */
  copy(matrix: IMatrix2D): IMatrix2D;
  /**
   * Decomposes the matrix into transform properties (x, y, scaleX, scaleY, and rotation). Note that these values
   * may not match the transform properties you used to generate the matrix, though they will produce the same visual
   * results.
   * @param target - The object to apply the transform properties to. If null, then a new object will be returned.
   * @returns The target, or a new generic object with the transform properties applied.
   */
  decompose(target?: DecomposedProps): DecomposedProps;
  /**
   * Returns true if this matrix is equal to the specified matrix (all property values are equal).
   * @param matrix - The matrix to compare.
   */
  equals(matrix: IMatrix2D): boolean;
  /**
   * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
   * @returns This matrix. Useful for chaining method calls.
   */
  identity(): IMatrix2D;
  /**
   * Inverts the matrix, causing it to perform the opposite transformation.
   * @returns This matrix. Useful for chaining method calls.
   */
  invert(): IMatrix2D;
  /**
   * Returns true if the matrix is an identity matrix.
   */
  isIdentity(): boolean;
  /**
   * Prepends the specified matrix properties to this matrix.
   * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
   * All parameters are required.
   * @param a
   * @param b
   * @param c
   * @param d
   * @param tx
   * @param ty
   * @returns This matrix. Useful for chaining method calls.
   */
  prepend(
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number
  ): IMatrix2D;
  /**
   * Prepends the specified matrix to this matrix.
   * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
   * For example, you could calculate the combined transformation for a child object using:
   *
   * ```
   * 	var o = myDisplayObject;
   * 	var mtx = o.getMatrix();
   * 	while (o = o.parent) {
   * 		// prepend each parent's transformation in turn:
   * 		o.prependMatrix(o.getMatrix());
   * 	}
   * ```
   * @param matrix
   * @returns This matrix. Useful for chaining method calls.
   */
  prependMatrix(matrix: IMatrix2D): IMatrix2D;
  /**
   * Generates matrix properties from the specified display object transform properties, and prepends them to this matrix.
   * For example, you could calculate the combined transformation for a child object using:
   *
   * ```
   *  var o = myDisplayObject;
   *  var mtx = new createjs.Matrix2D();
   *  do  {
   *  	// prepend each parent's transformation in turn:
   *  	mtx.prependTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
   *  } while (o = o.parent);
   * ```
   * @param x
   * @param y
   * @param scaleX
   * @param scaleY
   * @param rotation
   * @param skewX
   * @param skewY
   * @param regX - Optional.
   * @param regY - Optional.
   * @returns This matrix. Useful for chaining method calls.
   */
  prependTransform(
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    rotation: number,
    skewX: number,
    skewY: number,
    regX?: number,
    regY?: number
  ): IMatrix2D;
  /**
   * Applies a clockwise rotation transformation to the matrix.
   * @param angle - The angle to rotate by, in degrees. To use a value in radians, multiply it by `180/Math.PI`.
   * @returns This matrix. Useful for chaining method calls.
   */
  rotate(angle: number): IMatrix2D;
  /**
   * Applies a scale transformation to the matrix.
   * @param x - The amount to scale horizontally. E.G. a value of 2 will double the size in the X direction, and 0.5 will halve it.
   * @param y - The amount to scale vertically.
   * @returns This matrix. Useful for chaining method calls.
   */
  scale(x: number, y: number): IMatrix2D;
  /**
   * Sets the specified values on this instance.
   * @param a - Specifies the a property for the new matrix.
   * @param b - Specifies the b property for the new matrix.
   * @param c - Specifies the c property for the new matrix.
   * @param d - Specifies the d property for the new matrix.
   * @param tx - Specifies the tx property for the new matrix.
   * @param ty - Specifies the ty property for the new matrix.
   * @returns This instance. Useful for chaining method calls.
   */
  setValues(
    a?: number,
    b?: number,
    c?: number,
    d?: number,
    tx?: number,
    ty?: number
  ): IMatrix2D;
  /**
   * Applies a skew transformation to the matrix.
   * @param skewX - The amount to skew horizontally in degrees. To use a value in radians, multiply it by `180/Math.PI`.
   * @param skewY - The amount to skew vertically in degrees.
   * @returns This matrix. Useful for chaining method calls.
   */
  skew(skewX: number, skewY: number): IMatrix2D;
  /**
   * Returns a string representation of this object.
   * @returns a string representation of the instance.
   */
  toString(): string;
  /**
   * Transforms a point according to this matrix.
   * @param x - The x component of the point to transform.
   * @param y - The y component of the point to transform.
   * @param pt - An object to copy the result into. If omitted a generic object with x/y properties will be returned.
   * @returns This matrix. Useful for chaining method calls.
   */
  transformPoint(x: number, y: number, pt?: IPoint | any): IPoint;
  /**
   * Translates the matrix on the x and y axes.
   * @param x
   * @param y
   * @returns This matrix. Useful for chaining method calls.
   */
  translate(x: number, y: number): IMatrix2D;
}

/**
 * フレーズ / Phrase
 * @public
 */
export declare interface IPhrase extends ITextUnit {
  /** @inheritDoc */
  readonly children: IWord[];
  /** @inheritDoc */
  readonly previous: IPhrase;
  /** @inheritDoc */
  readonly next: IPhrase;
  readonly wordCount: number;
  readonly charCount: number;
  readonly firstWord: IWord;
  readonly firstChar: IChar;
  readonly lastWord: IWord;
  readonly lastChar: IChar;
  findIndex(unit: IWord | IChar): number;
}

/**
 * **IPlayer**
 *
 * Player の機能を抽象化したインタフェースです。
 *
 * This interface provides abstraction of the Player features.
 * @public
 */
export declare interface IPlayer {
  /**
   * プレイヤーの初期化オプション
   *
   * Player options
   */
  readonly options: PlayerOptions;
  /**
   * リリックアプリの状態
   *
   * Lyric app status
   */
  readonly app: IPlayerApp;
  /**
   * 読み込み済みの音楽地図など楽曲に関する情報
   *
   * Current song map and other information related to the musical piece
   */
  readonly data: IDataLoader;

  /**
   * 動画オブジェクト
   *
   * Current video object
   */
  readonly video: IVideo;

  /**
   * 音源メディアの配置先となるDOM要素
   *
   * Media element
   *
   * @see {@link IPlayer.banner}
   */
  mediaElement: HTMLElement;
  /**
   * 音源メディアの直接の配置先となるDOM要素
   *
   * Media source element
   */
  readonly mediaSourceElement: HTMLElement;
  /**
   * 音源などに関するバナーの配置先となるDOM要素
   *
   * Media banner element
   */
  readonly mediaBannerElement: HTMLElement;
  /**
   * 現在の音源メディアの再生位置 [ms]
   *
   * Current media position [ms]
   */
  readonly mediaPosition: number;
  /**
   * 現在の動画の再生位置 [ms]
   *
   * Current video position [ms]
   */
  readonly videoPosition: number;
  /**
   * 動画の描画間隔 [ms]
   *
   * A time window between rendering frames [ms]
   *
   * @see {@link IPlayer.fps}
   */
  wait: number;
  /**
   * フレームレート [フレーム数/秒]
   *
   * Framerate [frames per sec]
   *
   * @see {@link IPlayer.wait}
   */
  fps: number;

  /**
   * 動画（楽曲情報や歌詞など）が読み込み中か否か
   *
   * Whether the video (song, lyrics, etc.) is being loaded or not
   */
  readonly isLoading: boolean;
  /**
   * 動画再生中か否か
   *
   * Whether the video is being played or not
   */
  readonly isPlaying: boolean;

  /**
   * 動画シーク中か否か
   *
   * - `true` のとき 1) {@link PlayerEventListener.onTimeUpdate} イベントは発火せず 2) {@link IPlayer.mediaPosition} は描画タスクをトリガーせずに更新され続けます
   * - シークバーの実装で利用されます
   *
   * Whether the seeking operation is ongoing on or not
   *
   * - When this property is `true`, 1) {@link PlayerEventListener.onTimeUpdate} event is not emitted and 2) {@link IPlayer.mediaPosition} is updated without rendering a new frame
   * - Intended to be used by a seekbar implementation
   */
  readonly isVideoSeeking: boolean;
  /**
   * Player の情報を表示する `IPlayerBanner` インスタンスです。
   *
   * A banner instance that shows the player info.
   */
  readonly banner: IPlayerBanner;
  /**
   * Player の音源の再生状態を管理する `Timer` インスタンスです。
   *
   * A timer instance that controls the player status.
   */
  readonly timer: Timer;
  /**
   * 音量 [0-100]
   *
   * Volume [0-100]
   */
  volume: number;
  /**
   * イベントリスナを登録する
   *
   * Add event listener
   * @param listener - イベントリスナ / Event listener
   */
  addListener(listener: PlayerListener): void;
  /**
   * イベントリスナを削除する
   *
   * Remove event listener
   * @param listener - イベントリスナ / Event listener
   * @returns 削除の成否 / Whether the listener was successfully removed or not
   */
  removeListener(listener: PlayerListener): boolean;

  /**
   * 楽曲URLに基づいて音楽地図などを読み込み、動画データを生成する
   *
   * Generate video data from song URL
   *
   * @param songUrl - 楽曲URL / Song URL
   * @param options - オプション / Optional data to build the video object
   * @returns 動画オブジェクト / Video object
   */
  createFromSongUrl(
    songUrl: string,
    options?: PlayerVideoOptions
  ): Promise<IVideo>;
  /**
   * 楽曲パス（URLから `http://` などのプロトコル部分を除いたもの）に基づいて音楽地図などを読み込み、動画データを生成する
   *
   * Generate video data from song path
   *
   * @param songPath - 楽曲パス / Song path
   * @param options - オプション / Optional data to build the video object
   * @returns 動画オブジェクト / Video object
   */
  createFromSongPath(
    songPath: string,
    options?: PlayerVideoOptions
  ): Promise<IVideo>;

  /**
   * テキストからダミーの音楽地図情報と動画データを生成する
   *
   * Generate video data from text
   * @param text - テキスト / Text to show
   * @param options - オプション / Optional data to build the video object
   * @returns 動画オブジェクト / Video object
   */
  createFromText(text: string, options?: PlayerVideoOptions): Promise<IVideo>;
  /**
   * 動画情報を表すデータ（{@link VideoData}）から動画データを生成する
   *
   * Generate video data from JSON
   * @param json - 動画情報 / JSON data to be converted to a video
   * @param options - オプション / Optional data to build the video object
   * @returns 動画オブジェクト / Video object
   */
  createFromJSON(
    json: VideoData,
    options?: PlayerVideoOptions
  ): Promise<IVideo>;

  /**
   * 楽曲中のサビに関する情報を取得する
   *
   * Get chorus parts in the current song
   *
   * @see {@link IDataLoader.getChoruses}
   * @returns サビ情報（見つからなければ空の配列） / Chorus parts (empty array if not found)
   */
  getChoruses(): IRepetitiveSegment[];
  /**
   * 指定された位置のサビ情報を取得する
   *
   * Find a chorus part that overlaps with the specified timing
   *
   * @see {@link IDataLoader.findChorus}
   * @param time - 位置 [ms] / Position [ms]
   * @param options - 取得オプション / Optional parameters for finding a chorus part
   * @returns サビ情報（見つからなければ `null`） / Chorus part info (`null` if not found)
   */
  findChorus(time: number, options?: PlayerFindOptions): IRepetitiveSegment;
  /**
   * @deprecated Use of {@link IPlayer.findChorusBetween} is deprecated - find a chorus part with {@link IPlayer.findChorus} instead.
   */
  findChorusBetween(startTime: number, endTime: number): IRepetitiveSegment;
  /**
   * 指定された時区間のサビ情報の変化を取得する
   *
   * Look for chorus part transitions in the specified time range
   *
   * @see {@link IDataLoader.findChorusChange}
   * @param startTime - 時区間の開始位置 [ms] / Start position [ms]
   * @param endTime - 時区間の終了位置 [ms] / End position [ms]
   * @returns サビ情報の変化 / Chorus part transitions
   */
  findChorusChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IRepetitiveSegment>;
  /**
   * 楽曲中のビートに関する情報を取得する
   *
   * Get beats in the current song
   *
   * @see {@link IDataLoader.getBeats}
   * @returns ビート情報（見つからなければ空の配列） / Beats (empty array if not found)
   */
  getBeats(): IBeat[];
  /**
   * 指定された位置のビート情報を取得する
   *
   * Find beat that overlaps with the specified timing
   *
   * @see {@link IDataLoader.findBeat}
   * @param time - 位置 [ms] / Position [ms]
   * @param options - 取得オプション / Optional parameters for finding beat
   * @returns ビート情報（見つからなければ `null`） / Beat info (`null` if not found)
   */
  findBeat(time: number, options?: PlayerFindOptions): IBeat;
  /**
   * 指定された時区間のビート情報の変化を取得する
   *
   * Look for beat transitions in the specified time range
   *
   * @see {@link IDataLoader.findBeatChange}
   * @param startTime - 時区間の開始位置 [ms] / Start position [ms]
   * @param endTime - 時区間の終了位置 [ms] / End position [ms]
   * @returns ビート情報の変化 / Beat transitions
   */
  findBeatChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IBeat>;
  /**
   * 楽曲中のコード進行に関する情報を取得する
   *
   * Get chord info in the current song
   *
   * @see {@link IDataLoader.getChords}
   * @returns コード進行の情報（見つからなければ空の配列） / Chord info (empty array if not found)
   */
  getChords(): IChord[];
  /**
   * 指定された位置のコード進行を取得する
   *
   * Find chord that overlaps with the specified timing
   *
   * @see {@link IDataLoader.findChord}
   * @param time - 位置 [ms] / Position [ms]
   * @param options - 探索オプション / Optional parameters for finding chord
   * @returns コード進行（見つからなければ `null`） / Chord info (`null` if not found)
   */
  findChord(time: number, options?: PlayerFindOptions): IChord;
  /**
   * 指定された時区間のコード進行の変化を取得する
   *
   * Look for chord progressions in the specified time range
   *
   * @see {@link IDataLoader.findChordChange}
   * @param startTime - 時区間の開始位置 [ms] / Start position [ms]
   * @param endTime - 時区間の終了位置 [ms] / End position [ms]
   * @returns コード進行の変化 / Chord progressions
   */
  findChordChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IChord>;

  /**
   * 指定された位置の声量を取得する
   *
   * - 取得するには、あらかじめプレイヤー初期化オプション {@link PlayerOptions.vocalAmplitudeEnabled} を `true` にセットしておく必要があります
   * - 返値は 0 以上 {@link IPlayer.getMaxVocalAmplitude} で取得できる最大値以下の値
   *
   * Get vocal amplitude at the specified timing
   *
   * - Constructor option {@link PlayerOptions.vocalAmplitudeEnabled} needs to be `true`
   * - Return value ranges from 0 to the maximum value that can be retrieved by {@link IPlayer.getMaxVocalAmplitude}
   *
   * @see {@link IDataLoader.getVocalAmplitude}
   * @param time - 位置 [ms] / Position [ms]
   * @returns 声量
   */
  getVocalAmplitude(time: number): number;
  /**
   * 楽曲中の最大声量を取得する
   *
   * - 取得するには、あらかじめプレイヤー初期化オプション {@link PlayerOptions.vocalAmplitudeEnabled} を `true` にセットしておく必要があります
   *
   * Get maximum vocal amplitude
   *
   * - Constructor option {@link PlayerOptions.vocalAmplitudeEnabled} needs to be `true`
   *
   * @see {@link IDataLoader.getMaxVocalAmplitude}
   * @returns 最大声量
   */
  getMaxVocalAmplitude(): number;
  /**
   * 指定された位置のV/A空間中の座標を取得する
   *
   * - 取得するには、あらかじめプレイヤー初期化オプション {@link PlayerOptions.valenceArousalEnabled} を `true` にセットしておく必要があります
   *
   * Get valence arousal value at the specified timing
   *
   * - Constructor option {@link PlayerOptions.valenceArousalEnabled} needs to be `true`
   *
   * @see {@link IDataLoader.getValenceArousal}
   * @param time - 位置 [ms] / Position [ms]
   * @returns 座標値
   */
  getValenceArousal(time: number): ValenceArousalValue;
  /**
   * V/A空間中の座標遷移の中央値を取得する
   *
   * - 取得するには、あらかじめプレイヤー初期化オプション {@link PlayerOptions.valenceArousalEnabled} を `true` にセットしておく必要があります
   *
   * Get median valence arousal value throughout the song
   *
   * - Constructor option {@link PlayerOptions.valenceArousalEnabled} needs to be `true`
   *
   * @see {@link IDataLoader.getMedianValenceArousal}
   * @returns 座標値
   */
  getMedianValenceArousal(): ValenceArousalValue;

  /**
   * 動画の再生位置を指定する
   *
   * Try setting video position
   * @param position - 再生位置 [ms] / Video position [ms]
   */
  setVideoPosition(position: number): Promise<number>;
  /**
   * 楽曲の再生を開始する
   *
   * Start playing music
   * @returns 開始の成否
   */
  requestPlay(): boolean;
  /**
   * 楽曲の再生を停止する（一時停止したうえで先頭に巻き戻しする）
   *
   * Stop playing music (pause and then seek the beginning)
   * @returns 停止の成否
   */
  requestStop(): boolean;
  /**
   * 楽曲の再生を一時停止する
   *
   * Pause playing music
   * @returns 一時停止の成否
   */
  requestPause(): boolean;
  /**
   * 楽曲の再生位置を指定する
   *
   * Seek specified position in the current media
   * @param position - 再生位置 [ms] / Media position [ms]
   */
  requestMediaSeek(position: number): boolean;
  /**
   * 動画のシーク操作を始める
   *
   * - {@link IPlayer.isVideoSeeking} を `true` にします
   * - シーク操作開始後は {@link Timer} が {@link PlayerEventListener.onTimeUpdate} を呼ばなくなります
   *
   * Start video seeking operation
   * - This will set {@link IPlayer.isVideoSeeking} `true`
   * - After calling this method, {@link Timer} does not trigger {@link PlayerEventListener.onTimeUpdate}
   */
  startVideoSeek(): void;
  /**
   * 動画のシーク操作を終える
   *
   * - {@link IPlayer.isVideoSeeking} を `false` にします
   * - シーク操作終了後は {@link Timer} が {@link PlayerEventListener.onTimeUpdate} を呼ぶようになります
   *
   * End video seeking operation
   * - This will set {@link IPlayer.isVideoSeeking} `false`
   * - After calling this method, position updates by {@link Timer} trigger {@link PlayerEventListener.onTimeUpdate} again
   */
  endVideoSeek(): void;

  /**
   * 動画の現在のフレームを強制的に再描画する
   *
   * Force rendering current frame
   * @returns 動画の現在位置 [ms] / Video position [ms]
   */
  requestStageUpdate(): Promise<number>;
  /**
   * プレイヤーを破棄する
   *
   * Dispose this player
   */
  dispose(): void;
}

/**
 * リリックアプリの情報
 *
 * Lyric app information
 * @public
 */
export declare interface IPlayerApp {
  /**
   * リリックアプリのオプション
   *
   * Lyric app options
   */
  readonly options: PlayerAppOptions;
  /**
   * アプリの名前
   *
   * Name of this application
   */
  name: string;
  /**
   * アプリ作者の名前
   *
   * Name of the author of this application
   */
  author: string;
  /**
   * アプリの状態
   *
   * Status of this application
   */
  status: number;
  /**
   * TextAlive API サーバの情報
   *
   * TextAlive server info
   */
  readonly server: PlayerAppServer;
  /**
   * TextAlive のホストに接続されているか否か
   *
   * Whether this app is connected to the TextAlive host or not
   */
  readonly managed: boolean;
  /**
   * TextAlive のホストに接続されている場合、その情報
   *
   * TextAlive host information
   */
  readonly host: PlayerAppHost;
  /**
   * クエリパラメタまたはTextAliveホストにより指定されている再生対象の楽曲URL
   *
   * - アプリは起動時にクエリパラメタを調べ、楽曲が指定されていれば自動的に {@link IPlayer.createFromSongUrl} で楽曲情報の読み込みを開始します（ホストに接続されていても、クエリパラメタによる指定がなければ空になります）
   * - アプリがTextAliveホストに接続されると、ホストの指示により楽曲が上書きされることがあります（この後に {@link PlayerAppListener.onAppMediaChange} イベントが呼ばれます）
   *
   * Song url specified by the query parameter or updated by the media message
   *
   * - During the initialization of this app, it automatically looks for the song URL in the query parameter. When the song URL is specified, it loads the song by calling {@link IPlayer.createFromSongUrl}.
   * - When the app is connected to a host, the host might overwrite the song URL, resulting in the {@link PlayerAppListener.onAppMediaChange} event.
   */
  readonly songUrl: string;
  /**
   * クエリパラメタまたはTextAliveホストにより指定されている楽曲データの読み込みオプション
   *
   * Options to load song data specified by the query parameter or updated by the media message
   */
  readonly songOptions: PlayerAppSongOptions;
  /**
   * ホストから指定されているパラメタの現在値
   *
   * Current parameter values
   */
  readonly parameters: ParameterValues;
  /**
   * ホストへの接続中か否か
   *
   * Whether the player is trying to connect to a host
   */
  readonly isConnecting: boolean;
  /**
   * ホストへの接続を試みる
   *
   * - 親フレームに 5 回までメッセージを送信する
   * - 返事を 200 [ms] まで待つ
   * - 最大で計 1 [s] 待つ
   *
   * Try connecting to a host
   *
   * - posts message to the parent frame for 5 times at most
   * - waits for the ack response for 200 [ms]
   * - takes up to 1 [s] to complete
   */
  connect(): Promise<boolean>;
}

/**
 * **IPlayerBanner**
 *
 * Player の情報を表示する `IPlayerBanner` インスタンスです。Webブラウザで実行されると以下のようなDOM要素が生成されます。
 *
 * - CSSクラス `textalive-banner` を持つ {@link IPlayer.mediaElement} の子要素になります
 * - TextAliveサービスサイトへのリンクになっているアイコンを子要素に持ちます
 * - 楽曲配信元へのリンクになっているCSSクラス `song` を持つアンカーを子要素に持ちます
 * - 歌詞配信元へのリンクになっているCSSクラス `lyrics` を持つアンカーを子要素に持ちます
 *
 * A banner instance that shows the player info. When executed in a web browser, the banner is shown as a DOM element with the following conditions.
 *
 * - The banner is shown as a child element of {@link IPlayer.mediaElement} with the CSS class `textalive-banner`
 * - The banner contains an icon link to the TextAlive website
 * - The banner contains an anchor to the song URL with the CSS class `song`
 * - The banner also contains an anchor to the lyrics URL with the CSS class `lyrics`
 * @public
 */
declare interface IPlayerBanner {
  readonly domEnabled: boolean;
  position: PlayerBannerPosition;
  rounded: boolean;
  bordered: boolean;
  shadowed: boolean;
  background: string;
  color: string;
}

/**
 * @public
 */
export declare interface IPoint {
  /**
   * X position.
   */
  x: number;
  /**
   * Y position.
   */
  y: number;
  /**
   * Returns a clone of the Point instance.
   * @returns a clone of the Point instance.
   */
  clone(): IPoint;
  /**
   * Copies all properties from the specified point to this point.
   * @param point - The point to copy properties from.
   * @returns This point. Useful for chaining method calls.
   */
  copy(IPoint: IPoint): IPoint;
  /**
   * Sets the specified values on this instance.
   * @param x - X position.
   * @param y - Y position.
   * @returns This instance. Useful for chaining method calls.
   */
  setValues(x?: number, y?: number): IPoint;
  /**
   * Returns a string representation of this object.
   * @returns a string representation of the instance.
   */
  toString(): string;
}

/**
 * 描画ユニット:
 *
 * - TextAlive における画面描画処理の最小単位
 * - 種類（フレーズ、単語、文字、グラフィック）を {@link getType} で取得できる
 * - 前後のユニットを {@link previous} と {@link next} で取得できる
 * - （存在する場合）親要素と子要素の一覧をそれぞれ {@link parent} と {@link children} で取得できる
 * - 開始時刻、終了時刻、その差分を {@link startTime} {@link endTime} および {@link duration} で取得できる
 *
 * Rendering unit:
 *
 * - The base interface for all rendering unit implementations in TextAlive
 * - {@link getType} returns the implementation type (phrase, word, character, or graphic)
 * - {@link previous} and {@link next} return the previous and next unit
 * - {@link parent} and {@link children} return the parent unit and the list of child units (if applicable)
 * - {@link startTime} and {@link endTime} return the timing information and {@link duration} returns the duration i.e. `endTime` - `startTime`
 *
 * @see {@link TimedObject}
 * @public
 */
export declare interface IRenderingUnit extends TimedObject {
  readonly parent: IRenderingUnit;
  readonly children: IRenderingUnit[];
  readonly previous: IRenderingUnit;
  readonly next: IRenderingUnit;
  /** 描画ユニットの長さ [ms] / Duration of this rendering unit [ms] */
  readonly duration: number;

  /**
   * このプロパティに関数が定義されているとき、 TextAlive の通常動作（割り当て済みテンプレートの `animate` 関数を呼ぶ）はスキップされ、この関数が呼ばれる
   *
   * When `animate` function is defined, TextAlive default behavior (call `animate` functions of all assigned template instances) is suppressed and this function is called instead
   */
  animate: RenderingUnitFunction;
  /**
   * 指定された楽曲中の位置をこの描画ユニット中の位置 `[0, 1]` にマッピングして返す
   *
   * Returns the position in this rendering unit [0, 1]
   * @param time - 楽曲中の位置 / Position in a song
   */
  progress(time: number): number;

  /**
   * この描画ユニットの種類 / Type of this rendering unit
   * @see {@link UnitTypes}
   */
  getType(): number;
  /**
   * この描画ユニットの文字表現 / String representation of this rendering unit
   */
  toString(): string;
}

/**
 * サビなどの繰り返し区間の情報 / Repetitive segment info (e.g., chorus segment)
 * @public
 */
export declare interface IRepetitiveSegment extends TimedObject {
  /** 繰り返し区間の継続時間 [ms] / Duration [ms] */
  readonly duration: number;
  /**
   * 指定された楽曲中の位置をこの繰り返し区間中の位置 `[0, 1]` にマッピングして返す
   *
   * Returns the position in this repetitive segment [0, 1]
   * @param time - 楽曲中の位置 / Position in a song
   */
  progress(time: number): number;
  /** 前の繰り返し区間 / Previous repetitive segment */
  previous: IRepetitiveSegment;
  /** 次の繰り返し区間 / Next repetitive segment */
  next: IRepetitiveSegment;
  /** 楽曲中の繰り返し区間の位置 / Index of this repetitive segment in the song */
  index: number;
}

/**
 * 全繰り返し区間の情報 / Information of all repetitive segments
 * @public
 */
export declare interface IRepetitiveSegments {
  /** サビかどうか / Whether this repetitive segment info is chorus part or not */
  chorus: boolean;
  /** 繰り返し区間の継続時間 / Duration */
  duration: number;
  /** 繰り返し区間の配列 / Array of repetitive segments */
  segments: IRepetitiveSegment[];
}

/**
 * 読み込まれている音楽地図の情報にアクセスするためのインタフェース
 *
 * This interface provides access to song map information etc.
 * @public
 */
declare interface ISongExplorer {
  /**
   * 楽曲中のサビに関する情報を取得する
   *
   * Get chorus parts in the current song
   * @returns サビ情報（見つからなければ空の配列） / Chorus parts (empty array if not found)
   */
  getChoruses(): IRepetitiveSegment[];
  /**
   * 指定された位置のサビ情報を取得する
   *
   * Find a chorus part that overlaps with the specified timing
   * @param time - 位置 [ms] / Position [ms]
   * @param options - 取得オプション / Optional parameters for finding a chorus part
   * @returns サビ情報（見つからなければ `null`） / Chorus part info (`null` if not found)
   */
  findChorus(time: number, options?: PlayerFindOptions): IRepetitiveSegment;
  /**
   * @deprecated Use of {@link ISongExplorer.findChorusBetween} is deprecated - find a chorus part with {@link ISongExplorer.findChorus} instead.
   */
  findChorusBetween(startTime: number, endTime: number): IRepetitiveSegment;
  /**
   * 指定された時区間のサビ情報の変化を取得する
   *
   * Look for chorus part transitions in the specified time range
   *
   * @param startTime - 時区間の開始位置 [ms] / Start position [ms]
   * @param endTime - 時区間の終了位置 [ms] / End position [ms]
   * @returns サビ情報の変化 / Chorus part transitions
   */
  findChorusChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IRepetitiveSegment>;
  /**
   * 楽曲中のビートに関する情報を取得する
   *
   * Get beats in the current song
   * @returns ビート情報（見つからなければ空の配列） / Beats (empty array if not found)
   */
  getBeats(): IBeat[];
  /**
   * 指定された位置のビート情報を取得する
   *
   * Find beat that overlaps with the specified timing
   * @param time - 位置 [ms] / Position [ms]
   * @param options - 取得オプション / Optional parameters for finding beat
   * @returns ビート情報（見つからなければ `null`） / Beat info (`null` if not found)
   */
  findBeat(time: number, options?: PlayerFindOptions): IBeat;
  /**
   * 指定された時区間のビート情報の変化を取得する
   *
   * Look for beat transitions in the specified time range
   *
   * @param startTime - 時区間の開始位置 [ms] / Start position [ms]
   * @param endTime - 時区間の終了位置 [ms] / End position [ms]
   * @returns ビート情報の変化 / Beat transitions
   */
  findBeatChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IBeat>;
  /**
   * 楽曲中のコード進行に関する情報を取得する
   *
   * Get chord info in the current song
   * @returns コード進行の情報（見つからなければ空の配列） / Chord info (empty array if not found)
   */
  getChords(): IChord[];
  /**
   * 指定された位置のコード進行を取得する
   *
   * Find chord that overlaps with the specified timing
   * @param time - 位置 [ms] / Position [ms]
   * @param options - 探索オプション / Optional parameters for finding a chord
   * @returns コード進行（見つからなければ `null`） / Chord info (`null` if not found)
   */
  findChord(time: number, options?: PlayerFindOptions): IChord;
  /**
   * 指定された時区間のコード進行の変化を取得する
   *
   * Look for chord progressions in the specified time range
   *
   * @param startTime - 時区間の開始位置 [ms] / Start position [ms]
   * @param endTime - 時区間の終了位置 [ms] / End position [ms]
   * @returns コード進行の変化 / Chord progressions
   */
  findChordChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IChord>;

  /**
   * 指定された位置の声量を取得する
   *
   * Get vocal amplitude at the specified timing
   *
   * - このメソッドを使うには {@link Player} の初期化オプション（{@link PlayerOptions#vocalAmplitudeEnabled} を `true` にする必要があります
   * - To use this method, {@link Player} constructor option {@link PlayerOptions#vocalAmplitudeEnabled} needs to be `true`
   *
   * @param time - 位置 [ms] / Position [ms]
   * @returns 声量
   * @see {@link PlayerOptions}
   */
  getVocalAmplitude(time: number): number;
  /**
   * 楽曲中の最大声量を取得する
   *
   * Get maximum vocal amplitude
   *
   * - このメソッドを使うには {@link Player} の初期化オプション（{@link PlayerOptions#vocalAmplitudeEnabled} を `true` にする必要があります
   * - To use this method, {@link Player} constructor option {@link PlayerOptions#vocalAmplitudeEnabled} needs to be `true`
   *
   * @returns 最大声量
   * @see {@link PlayerOptions}
   */
  getMaxVocalAmplitude(): number;
  /**
   * 指定された位置のV/A空間中の座標を取得する
   *
   * Get valence arousal value at the specified timing
   *
   * - このメソッドを使うには {@link Player} の初期化オプション（{@link PlayerOptions#valenceArousalEnabled} を `true` にする必要があります
   * - To use this method, {@link Player} constructor option {@link PlayerOptions#valenceArousalEnabled} needs to be `true`
   *
   * @param time - 位置 [ms] / Position [ms]
   * @returns 座標値
   * @see {@link PlayerOptions}
   */
  getValenceArousal(time: number): ValenceArousalValue;
  /**
   * V/A空間中の座標遷移の中央値を取得する
   *
   * Get median valence arousal value throughout the song
   *
   * - このメソッドを使うには {@link Player} の初期化オプション（{@link PlayerOptions#valenceArousalEnabled} を `true` にする必要があります
   * - To use this method, {@link Player} constructor option {@link PlayerOptions#valenceArousalEnabled} needs to be `true`
   *
   * @returns 座標値
   * @see {@link PlayerOptions}
   */
  getMedianValenceArousal(): ValenceArousalValue;
}

/**
 * 音楽地図の情報
 *
 * Song map info
 * @public
 */
export declare interface ISongMap {
  /**
   * ビート
   *
   * Beat
   */
  readonly beats: IBeat[];
  /**
   * コード進行
   *
   * Chord
   */
  readonly chords: IChord[];
  /**
   * 繰り返し区間
   *
   * Repetitive segments
   */
  readonly segments: IRepetitiveSegments[];

  /**
   * 音楽地図のリビジョンID
   */
  revisions: {
    /**
     * コード進行の情報のリビジョンID / Chord info revision ID
     */
    chordId?: number;
    /**
     * ビート情報のリビジョンID / Beat info revision ID
     */
    beatId?: number;
    /**
     * サビなどの繰り返し区間のリビジョンID / Repetitive segment revision ID
     */
    repetitiveSegmentId?: number;
  };
}

/**
 * 文字列がBase64エンコードされたデータURLかどうか判別
 *
 * Detect whether the specified string represents a data URL that encodes UTF-8 string in Base64 format
 * @param url - URL
 * @public
 */
export declare function isStringEncodedDataUrl(url: string): boolean;

declare interface ITemplateClass {
  className: string;
  id: number;
  script: string;
}

/**
 * 文字ユニット / Text unit
 * @public
 */
export declare interface ITextUnit extends IRenderingUnit {
  /**
   * 文字ユニットに含まれるプレーンテキスト / Plain text contained in this text unit
   */
  readonly text: string;
}

/**
 * 動画（描画ユニット {@link IRenderingUnit} を格納する入れ物）
 *
 * Video (A container for {@link IRenderingUnit} objects)
 * @public
 */
export declare interface IVideo extends TimedObject {
  readonly phrases: IPhrase[];
  readonly words: IWord[];
  readonly chars: IChar[];

  duration: number;
  readonly startTime: number;
  readonly endTime: number;

  readonly phraseCount: number;

  readonly wordCount: number;
  readonly charCount: number;

  readonly firstPhrase: IPhrase;
  readonly firstWord: IWord;
  readonly firstChar: IChar;

  readonly lastPhrase: IPhrase;
  readonly lastWord: IWord;
  readonly lastChar: IChar;

  /**
   * 指定された位置を `[0, 1]` にマッピングして返す
   *
   * Returns the position in [0, 1]
   * @param time - 位置 / Position in this video
   */
  progress(time: number): number;

  /**
   * 指定したインデックスのフレーズを取得する / Get phrase with the specified index
   * @param index フレーズのインデックス / Phrase index
   */
  getPhrase(index: number): IPhrase;
  /**
   * 指定したインデックスの単語を取得する / Get word with the specified index
   * @param index 単語のインデックス / Word index
   */
  getWord(index: number): IWord;
  /**
   * 指定したインデックスの文字を取得する / Get character with the specified index
   * @param index 文字のインデックス / Phrase index
   */
  getChar(index: number): IChar;

  /**
   * 指定した描画オブジェクトのインデックスを取得する / Get index of the specified rendering unit
   * @param unit 描画オブジェクト / Rendering unit
   * @returns インデックス / Index
   */
  findIndex(unit: IRenderingUnit): number;

  /**
   * 指定した再生位置のフレーズを取得する / Get phrase object in the current video
   * @param time - position [ms]
   * @param options - optional parameters for finding phrase
   */
  findPhrase(time: number, options?: FindTimedObjectOptions): IPhrase;
  /**
   * 指定された時区間のフレーズ発声情報を取得する
   *
   * Look for phrases in the specified time range
   */
  findPhraseChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IPhrase>;
  /**
   * 指定した再生位置の単語を取得する / Get word object in the current video
   * @param time - position [ms]
   * @param options - optional parameters for finding word
   */
  findWord(time: number, options?: FindTimedObjectOptions): IWord;
  /**
   * 指定された時区間の単語発声情報を取得する
   *
   * Look for words in the specified time range
   */
  findWordChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IWord>;
  /**
   * 指定した再生位置の文字を取得する / Get character object in the current video
   * @param time - position [ms]
   * @param options - optional parameters for finding character
   */
  findChar(time: number, options?: FindTimedObjectOptions): IChar;
  /**
   * 指定された時区間の文字発声情報を取得する
   *
   * Look for characters in the specified time range
   */
  findCharChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IChar>;
}

/**
 * 単語 / Word
 * @public
 */
export declare interface IWord extends ITextUnit {
  /** @inheritDoc */
  readonly parent: IPhrase;
  /** @inheritDoc */
  readonly children: IChar[];
  /** @inheritDoc */
  readonly previous: IWord;
  /** @inheritDoc */
  readonly next: IWord;
  /**
   * 品詞
   *
   * Part-of-speech
   *
   * - N: 名詞 (Noun)
   * - PN: 代名詞 (ProNoun)
   * - V: 動詞 (Verb)
   * - R: 副詞 (adveRb)
   * - J: 形容詞 (adJective)
   * - A: 連体詞 (Adnominal adjective)
   * - P: 助詞 (Particle)
   * - M: 助動詞 (Modal)
   * - W: 疑問詞 (Wh)
   * - D: 冠詞 (Determiner)
   * - I: 接続詞 (conjunction)
   * - U: 感動詞 (Interjection)
   * - F: 接頭詞 (preFix)
   * - S: 記号 (Symbol)
   * - X: その他 (other)
   */
  readonly pos: string;
  /**
   * 品詞（英語ならNLTK、日本語ならMeCabの判定結果）
   *
   * Raw part-of-speech data (NLTK result for English and MeCab result for Japanese)
   */
  readonly rawPos: string;
  /**
   * 言語（`en`: 英語、`ja`: 日本語）
   */
  readonly language: string;

  readonly charCount: number;
  readonly firstChar: IChar;
  readonly lastChar: IChar;
  findIndex(unit: IChar): number;
}

/**
 * @param t - Timing [0, 1]
 */
declare function linear(t: number): number;

/**
 * 読み込みルーチンに関するイベントのリスナ
 *
 * Event listener for various loading procedures
 * @public
 */
export declare type LoaderListener = DataLoaderListener &
  BackgroundGraphicsListener &
  TemplateListener;

/**
 * 歌詞テキスト
 *
 * Lyrics body
 * @public
 */
export declare interface LyricsBody {
  text: string;
  artist?: {
    name: string;
    url?: string;
  };
  name?: string;
  url?: string;
}

/**
 * 歌詞発声タイミングの推定結果
 *
 * Results of lyrics timing estimation
 * @public
 */
export declare interface LyricsInfo extends LyricsTimingInfo {
  /**
   * 歌詞発声タイミングのID
   */
  id: number;
  /**
   * 歌詞発声タイミングの訂正情報
   *
   * Lyrics diff info
   */
  diff: {
    id: number;
  };
  /**
   * Songle で推定中か否か
   *
   * Songle analysis processing status
   */
  processing?: boolean;
  /**
   * Songle での推定が失敗したか否か
   *
   * Songle analysis failure status
   */
  failed?: boolean;
}

/**
 * 歌詞発声タイミングの情報
 *
 * Lyrics timing information
 * @public
 */
export declare interface LyricsTimingInfo {
  /**
   * 歌詞URL
   *
   * Lyrics url
   */
  url: string;
}

/**
 * **Matrix2D**
 *
 * Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
 *
 * This matrix can be visualized as:
 *
 * ```
 * 	[ a  c  tx
 * 	  b  d  ty
 * 	  0  0  1  ]
 * ```
 *
 * Note the locations of b and c.
 *
 * ---
 *
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2017 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * @public
 */
export declare class Matrix2D implements IMatrix2D {
  /** @inheritDoc */
  a: number;
  /** @inheritDoc */
  b: number;
  /** @inheritDoc */
  c: number;
  /** @inheritDoc */
  d: number;
  /** @inheritDoc */
  tx: number;
  /** @inheritDoc */
  ty: number;
  /**
   * @param a - Specifies the a property for the new matrix.
   * @param b - Specifies the b property for the new matrix.
   * @param c - Specifies the c property for the new matrix.
   * @param d - Specifies the d property for the new matrix.
   * @param tx - Specifies the tx property for the new matrix.
   * @param ty - Specifies the ty property for the new matrix.
   */
  constructor(
    a?: number,
    b?: number,
    c?: number,
    d?: number,
    tx?: number,
    ty?: number
  );
  /** @inheritDoc */
  setValues(
    a?: number,
    b?: number,
    c?: number,
    d?: number,
    tx?: number,
    ty?: number
  ): Matrix2D;
  /** @inheritDoc */
  append(
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number
  ): Matrix2D;
  /** @inheritDoc */
  prepend(
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number
  ): Matrix2D;
  /** @inheritDoc */
  appendMatrix(matrix: Matrix2D): Matrix2D;
  /** @inheritDoc */
  prependMatrix(matrix: Matrix2D): Matrix2D;
  /** @inheritDoc */
  appendTransform(
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    rotation: number,
    skewX: number,
    skewY: number,
    regX: number,
    regY: number
  ): Matrix2D;
  /** @inheritDoc */
  prependTransform(
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    rotation: number,
    skewX: number,
    skewY: number,
    regX: number,
    regY: number
  ): Matrix2D;
  /** @inheritDoc */
  rotate(angle: number): Matrix2D;
  /** @inheritDoc */
  skew(skewX: number, skewY: number): Matrix2D;
  /** @inheritDoc */
  scale(x: number, y: number): Matrix2D;
  /** @inheritDoc */
  translate(x: number, y: number): Matrix2D;
  /** @inheritDoc */
  identity(): Matrix2D;
  /** @inheritDoc */
  invert(): Matrix2D;
  /** @inheritDoc */
  isIdentity(): boolean;
  /** @inheritDoc */
  equals(matrix: Matrix2D): boolean;
  /** @inheritDoc */
  transformPoint(x: number, y: number, pt: Point): Point;
  /** @inheritDoc */
  decompose(target?: DecomposedProps): DecomposedProps;
  /** @inheritDoc */
  copy(matrix: Matrix2D): Matrix2D;
  /** @inheritDoc */
  clone(): Matrix2D;
  /** @inheritDoc */
  toString(): string;
  /**
   * Multiplier for converting degrees to radians. Used internally by Matrix2D.
   */
  static readonly DEG_TO_RAD: number;
  /**
   * An identity matrix, representing a null transformation.
   */
  static readonly identity: Matrix2D;
}

/**
 * リリックアプリ、スタイル、テンプレートで調整可能なパラメタ値の型情報
 *
 * Type definition for parameter values that can be customized in lyric apps, styles, and templates
 * @public
 */
export declare type ParameterValue = IColor | string | number | boolean;

/**
 * @public
 */
export declare interface ParameterValues {
  [name: string]: ParameterValue;
}

/**
 * リリックアプリ、スタイル、テンプレートで調整可能なパラメタ
 *
 * Parameters that can be customized in lyric apps, styles, and templates
 * @public
 */
export declare interface ParameterWidget {
  /**
   * パラメタの名前
   *
   * Name of this parameter variable
   */
  name: string;
  /**
   * ユーザに提示するパラメタの名前
   *
   * Human-readable representation of this varible
   */
  title?: string | RegionalText;

  /**
   * パラメタの種類（例: `Slider`）
   *
   * Type of this variable (e.g. `Slider`)
   */
  className?: string;
  /**
   * パラメタのオプション（例: {@link ParameterWidget.className} が `Slider` のとき `[0, 100]` で値域 `0` から `100` のスライダーウィジェットが出現）
   *
   * Options for constructing a parameter widget parsed from description e.g. `[0, 100]`
   */
  params?: (
    | boolean
    | number
    | string
    | [boolean | number | string, string?]
    | {
        [value: string]: string;
      }
  )[];

  /**
   * パラメタの初期値
   *
   * Initial value for this parameter variable
   */
  initialValue?: ParameterValue;
}

/**
 * TextAlive の動画データを上書きする情報
 *
 * Optional data to overwrite TextAlive video data
 * @public
 */
export declare interface PartialVideoEntry {
  /**
   * 歌詞ID
   *
   * - `-1`: 最新の歌詞情報が使われる
   * - `0`: 歌詞情報を読み込まない
   * - それ以外: 指定されたIDの歌詞情報が使われる
   *
   * Lyrics ID
   *
   * - `-1`: Latest lyrics info is used
   * - `0`: No lyrics info will be loaded
   * - Or otherwise, the specified lyrics info is used
   */
  lyricId?: number;
  /**
   * 歌詞訂正ID / Lyrics diff ID
   */
  lyricDiffId?: number;
  /**
   * コード進行の情報のリビジョンID / Chord info revision ID
   */
  chordId?: number;
  /**
   * ビート情報のリビジョンID / Beat info revision ID
   */
  beatId?: number;
  /**
   * サビなどの繰り返し区間のリビジョンID / Repetitive segment revision ID
   */
  repetitiveSegmentId?: number;

  /**
   * 動画の実データ / Video data
   */
  json?: VideoData;
}

/**
 * フレーズ / Phrase
 * @public
 */
declare class Phrase extends TextUnit implements IPhrase {
  constructor(video: Video, data: PhraseData);

  get children(): Word[];
  get previous(): Phrase;
  get next(): Phrase;
  get video(): Video;
  get startTime(): number;
  get endTime(): number;
  get wordCount(): number;
  get charCount(): number;
  get firstWord(): Word;
  get lastWord(): Word;
  get firstChar(): Char;
  get lastChar(): Char;
  getWord(index: number): Word;
  getChar(index: number): Char;
  addWord(w: Word): Word;
  findIndex(unit: Word | Char): number;
  getType(): number;
}

/**
 * @public
 */
export declare interface PhraseData extends UnitData {
  words: WordData[];
}

/**
 * **Player**
 *
 * TextAlive App API を用いてプログラミングするときのエントリーポイント:
 *
 * - TextAlive App API の主要クラスの一つです
 * - 楽曲の音楽地図、歌詞テキスト、歌詞の発声タイミングなどを読み込む機能を持ちます
 * - 楽曲再生時の映像演出などマルチメディアのプログラミングに必要な API を提供します
 *
 * This class serves as an entry point to its API:
 *
 * - One of the primary classes of TextAlive App API
 * - Song map, lyrics text, and its vocalized timing information are loaded within this class instance
 * - APIs useful for multimedia performance synchronized with music playback are provided through this class
 * @public
 */
export declare class Player implements IPlayer {
  /** @inheritDoc */
  get options(): PlayerOptions;

  /** @inheritDoc */
  get app(): IPlayerApp;

  /** @inheritDoc */
  get data(): IDataLoader;

  /** @inheritDoc */
  get video(): Video;

  /** @inheritDoc */
  get mediaElement(): HTMLElement;
  set mediaElement(element: HTMLElement);

  /** @inheritDoc */
  get mediaSourceElement(): HTMLElement;

  /** @inheritDoc */
  get mediaBannerElement(): HTMLElement;

  /** @inheritDoc */
  get mediaPosition(): number;

  /** @inheritDoc */
  get videoPosition(): number;

  /** @inheritDoc */
  get wait(): number;
  set wait(val: number);
  /** @inheritDoc */
  get fps(): number;
  set fps(val: number);

  /** @inheritDoc */
  get isLoading(): boolean;
  /** @inheritDoc */
  get isPlaying(): boolean;

  /** @inheritDoc */
  get isVideoSeeking(): boolean;

  /** @inheritDoc */
  get banner(): IPlayerBanner;

  /** @inheritDoc */
  get timer(): Timer;

  /** @inheritDoc */
  set volume(val: number);
  get volume(): number;

  /**
   * @param options - プレイヤーの初期化オプション / player options
   * @see {@link IPlayer.options}
   */
  constructor(options?: PlayerOptions);

  /** @inheritDoc */
  addListener(listener: PlayerListener): void;
  /** @inheritDoc */
  removeListener(listener: PlayerListener): boolean;

  /** @inheritDoc */
  createFromSongUrl(
    songUrl: string,
    options?: PlayerVideoOptions
  ): Promise<Video>;

  /** @inheritDoc */
  createFromSongPath(
    songPath: string,
    options?: PlayerVideoOptions
  ): Promise<Video>;

  /** @inheritDoc */
  createFromText(text: string, options?: PlayerVideoOptions): Promise<Video>;

  /** @inheritDoc */
  createFromJSON(json: VideoData, options?: PlayerVideoOptions): Promise<Video>;

  /** @inheritDoc */
  getChoruses(): IRepetitiveSegment[];
  /** @inheritDoc */
  findChorus(time: number, options?: PlayerFindOptions): IRepetitiveSegment;
  /** @inheritDoc */
  findChorusBetween(startTime: number, endTime: number): IRepetitiveSegment;
  /** @inheritDoc */
  findChorusChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IRepetitiveSegment>;
  /** @inheritDoc */
  getBeats(): IBeat[];
  /** @inheritDoc */
  findBeat(time: number, options?: PlayerFindOptions): IBeat;
  /** @inheritDoc */
  findBeatChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IBeat>;
  /** @inheritDoc */
  getChords(): IChord[];
  /** @inheritDoc */
  findChord(time: number, options?: PlayerFindOptions): IChord;
  /** @inheritDoc */
  findChordChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<IChord>;

  /** @inheritDoc */
  getVocalAmplitude(time: number): number;
  /** @inheritDoc */
  getMaxVocalAmplitude(): number;
  /** @inheritDoc */
  getValenceArousal(time: number): ValenceArousalValue;
  /** @inheritDoc */
  getMedianValenceArousal(): ValenceArousalValue;

  /**
   * @deprecated Use of {@link Player.setMediaElement} is deprecated - set value with {@link IPlayer.mediaElement} property instead.
   */
  setMediaElement(element: HTMLElement): void;

  /** @inheritDoc */
  setVideoPosition(position: number): Promise<number>;
  /**
   * @deprecated Use of {@link Player.setMediaPosition} is deprecated - request setting media position with {@link IPlayer.requestMediaSeek} instead.
   */
  setMediaPosition(position: number): Promise<void>;
  /** @inheritDoc */
  requestPlay(): boolean;
  /** @inheritDoc */
  requestStop(): boolean;
  /** @inheritDoc */
  requestPause(): boolean;
  /** @inheritDoc */
  requestMediaSeek(position: number): boolean;
  /** @inheritDoc */
  startVideoSeek(): void;
  /** @inheritDoc */
  endVideoSeek(): void;

  /** @inheritDoc */
  requestStageUpdate(): Promise<number>;

  /** @inheritDoc */
  dispose(): void;
}

/**
 * TextAlive のホストに関する情報
 * @public
 */
export declare interface PlayerAppHost {
  /**
   * バージョン番号
   */
  version: string;
}

/**
 * リリックアプリ関連のイベント
 *
 * Lyric app-related events
 * @public
 */
export declare interface PlayerAppListener {
  /**
   * TextAlive App API サーバとの接続時に呼ばれる
   * @param app - TextAlive App API サーバに関する情報 / TextAlive app API server info
   * @param error - エラーメッセージ / Error message
   */
  onAppLoad?(app: IPlayerApp, error?: string): void;
  /**
   * リリックアプリ ホストとの接続時に呼ばれる
   *
   * Called when connection to a lyric app host is established
   * @param app - リリックアプリのホストに関する情報 / Lyric app host info
   */
  onAppReady?(app: IPlayerApp): void;
  /**
   * リリックアプリのパラメタが更新されたときに呼ばれる
   *
   * Called when a parameter value of this lyric app is updated
   * @param name - パラメタ名 / Parameter name
   * @param value - パラメタ値 / Parameter value
   */
  onAppParameterUpdate?(name: string, value: ParameterValue): void;
  /**
   * リリックアプリの再生すべき楽曲URLが変更されたときに呼ばれる
   *
   * Called when a media URL to play is updated
   * @param songUrl - 楽曲URL / Song URL
   * @param videoPromise - 動画オブジェクトと {@link Timer} の準備が整ったときに解決される Promise オブジェクト / A promise to resolve after the video object and {@link Timer} gets ready
   */
  onAppMediaChange?(songUrl: string, videoPromise?: Promise<IVideo>): void;
}

/**
 * リリックアプリのオプション
 *
 * Lyric app options
 * @public
 */
export declare interface PlayerAppOptions {
  /**
   * アプリの開発者用トークン
   *
   * Application token
   */
  token: string;
  /**
   * アプリの名前
   *
   * Name of this application
   * @deprecated This value will be automatically retrieved from TextAlive API server.
   */
  appName?: string;
  /**
   * アプリ作者の名前
   *
   * Name of the author of this application
   * @deprecated This value will be automatically retrieved from TextAlive API server.
   */
  appAuthor?: string;
  /**
   * アプリの調整可能なパラメタ一覧
   *
   * List of parameters
   */
  parameters?: ParameterWidget[];
}

/**
 * TextAlive App APIサーバに関する情報
 * @public
 */
declare interface PlayerAppServer {
  /**
   * バージョン番号
   */
  version?: string;
  /**
   * メッセージ
   */
  message?: string;
  /**
   * エラーメッセージ
   */
  error?: string;
}

/**
 * リリックアプリ向けの楽曲データ読み込みオプション
 *
 * Options to load song data in a lyric app
 * @see {@link PlayerVideoOptions}, {@link PartialVideoEntry}
 * @public
 */
declare interface PlayerAppSongOptions {
  /**
   * 歌詞ID / Lyrics ID
   */
  lyricId?: number;
  /**
   * 歌詞訂正ID / Lyrics diff ID
   */
  lyricDiffId?: number;
  /**
   * 歌詞テキストの読み込み元
   *
   * Source URL of lyrics text
   */
  altLyricsUrl?: string;
  /**
   * 歌詞テキストの読み込み時に直接アクセスを試みる
   *
   * - 歌詞テキストの読み込み元がCORSリクエストに対応している必要があります
   * - 失敗した場合、通常のアクセス方法を用います
   *
   * Access lyrics text directly
   *
   * - URL of lyrics text needs to support CORS access
   * - When failed, the default method is used
   */
  lyricsDirectAccess?: boolean;
  /**
   * コード進行の情報のリビジョンID / Chord info revision ID
   */
  chordId?: number;
  /**
   * ビート情報のリビジョンID / Beat info revision ID
   */
  beatId?: number;
  /**
   * サビなどの繰り返し区間のリビジョンID / Repetitive segment revision ID
   */
  repetitiveSegmentId?: number;
}

export declare type PlayerBannerPosition =
  | "top"
  | "top left"
  | "top right"
  | "bottom"
  | "bottom left"
  | "bottom right"
  | "left"
  | "left top"
  | "left bottom"
  | "right"
  | "right top"
  | "right bottom"
  | "embed"
  | null;

/**
 * Player のイベント
 *
 * Player events
 * @public
 */
export declare interface PlayerEventListener {
  /**
   * 動画オブジェクトの準備が整ったときに呼ばれる
   *
   * Called when a video object is constructed
   * @param v - 動画オブジェクト / Video object
   */
  onVideoReady?(v: IVideo): void;
  /**
   * 動画を再生するための {@link Timer} の準備が整ったときに呼ばれる
   *
   * Called when {@link Timer} is ready for playback
   * @param timer - Timer オブジェクト / Timer object
   */
  onTimerReady?(timer: Timer): void;

  /**
   * 音源メディアの配置先となるDOM要素が変更されたときに呼ばれる
   *
   * Called when the media element is updated
   * @param el - 音源メディアの配置先となるDOM要素 / Media element
   */
  onMediaElementSet?(el: HTMLElement): void;

  /**
   * 音量が変更されたときに呼ばれる
   *
   * Called when the player volume is updated
   * @param volume - 音量 / Volume [0-100]
   */
  onVolumeUpdate?(volume: number): void;
  /**
   * 動画の再生位置が変更されたときに呼ばれる
   *
   * Called when the playback position is updated
   * @param position - 再生位置 [ms]
   */
  onTimeUpdate?(position: number): void;
  /**
   * 動画の再生位置が変更されたときに呼ばれる（あまりに頻繁な発火を防ぐため一定間隔に間引かれる）
   *
   * Called when the playback position is updated (throttled)
   * @param position - 再生位置 [ms]
   */
  onThrottledTimeUpdate?(position: number): void;
  /**
   * 楽曲の再生位置が変更されたときに呼ばれる
   *
   * Called when the media playback position is updated
   * @param position - 再生位置 [ms]
   */
  onMediaSeek?(position: number): void;
  /**
   * 動画のシーク操作が始まったときに呼ばれる
   *
   * Called when the seeking operation starts
   */
  onVideoSeekStart?(): void;
  /**
   * 動画のシーク操作が行われたときに呼ばれる
   *
   * Called when the video position is updated
   * @param position - 再生位置 [ms]
   */
  onVideoSeek?(position: number): void;
  /**
   * 動画のシーク操作が終わったときに呼ばれる
   *
   * Called when the seeking operation ends
   */
  onVideoSeekEnd?(): void;
  /**
   * 再生が始まったときに呼ばれる
   *
   * Called when the playback starts
   */
  onPlay?(): void;
  /**
   * 再生が一時停止されたときに呼ばれる
   *
   * Called when the playback is paused
   */
  onPause?(): void;
  /**
   * 再生が停止されたときに呼ばれる
   *
   * Called when the playback stops
   */
  onStop?(): void;
  /**
   * 楽曲の再生位置がユーザ操作によって変更されたときに呼ばれる
   *
   * Called when the media playback position is manually updated
   * @param position - 再生位置 [ms]
   */
  onSeek?(position: number): void;
  /**
   * 楽曲の再生位置変更が完了したときに呼ばれる
   *
   * Called when the media playback position is successfully updated after {@link onSeek}
   * @param position - 再生位置 [ms]
   */
  onSeekComplete?(position: number): void;
  /**
   * プレイヤーが破棄されるときに呼ばれる
   *
   * Called when the player is disposed
   */
  onDispose?(): void;
}

/**
 * @see {@link FindTimedObjectOptions}
 * @public
 */
export declare type PlayerFindOptions = FindTimedObjectOptions;

/**
 * Player に関するさまざまなイベントのリスナ
 *
 * Event listener for Player
 * @public
 */
export declare type PlayerListener = PlayerEventListener &
  PlayerAppListener &
  LoaderListener;

/**
 * TextAlive ロゴ (SVGタグ)
 *
 * TextAlive logo as a SVG tag
 *
 * - `.bg`: background
 * - `.fg`: foreground
 */
export declare const PlayerLogoImage =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><style>.bg{fill:#1f4391;}.fg{fill:#fff;}</style></defs><g class="logo-sq"><rect class="bg" x="-20" y="-20" width="240" height="240"/><g class="textalive-logo-art"><path class="fg" d="M97.33,130.81V142a3,3,0,0,0,4.78,2.41l56.81-42.09a3,3,0,0,0,0-4.81l-8.33-6.14Z"/><path class="fg" d="M137.14,81.43l-35-25.84A3,3,0,0,0,97.33,58v52.92Z"/><path class="fg" d="M51,55H80.33a2,2,0,0,1,2,2V71.67a0,0,0,0,1,0,0H51a2,2,0,0,1-2-2V57A2,2,0,0,1,51,55Z"/><path class="fg" d="M44.83,107.5h56.33a2,2,0,0,1,2,2v12.67a2,2,0,0,1-2,2H44.83a0,0,0,0,1,0,0V107.5A0,0,0,0,1,44.83,107.5Z" transform="translate(189.83 41.84) rotate(90)"/></g></g></svg>';

/**
 * {@link Timer} が音源の再生位置情報を更新する際に呼び出すコールバック関数の型情報
 *
 * Type definition for a callback function used by {@link Timer} to update the current music playback position
 * @public
 */
export declare type PlayerMediaPositionUpdateFunction = (
  position: number
) => Promise<number>;

/**
 * Player の初期化オプション
 *
 * Player initialization options
 *
 * @see {@link IPlayer}
 * @public
 */
export declare interface PlayerOptions {
  /**
   * リリックアプリの情報; このプロパティがセットされていると、再生メディアをURLのクエリパラメタから取得したり、アプリのホストとの接続を試みたりします。
   *
   * Lyric app options. When this property is set, the player parses query string to gain initial media information and tries communicating with the app host.
   */
  app?: PlayerAppOptions;
  /**
   * Player の音源の再生状態を管理する `Timer` インスタンスです。
   *
   * A timer instance that controls the player status.
   */
  timer?: Timer;

  /**
   * 音源メディアの配置先となるDOM要素; 音源を埋め込むコンテナとして利用されるDOM要素です。
   *
   * A HTML element to host media elements.
   */
  mediaElement?: HTMLElement | string;
  /**
   * 音源メディアの関連情報を表示する位置; 指定がなければ `embed` と見なされ、メディア直下に表示されます。
   *
   * Banner position.
   */
  mediaBannerPosition?: PlayerBannerPosition;

  /**
   * 時刻のアップデートイベントが発行されすぎるのを防ぐために使われるスロットリング機構の発行間隔です。
   *
   * An interval for emitting throttled events [ms].
   * @see {@link PlayerEventListener.onThrottledTimeUpdate}
   */
  throttleInterval?: number;
  /**
   * 歌詞テキストの読み込みを諦めるタイムアウト時刻です。指定しないか `0` を指定した場合はタイムアウトしません。
   *
   * Timeout for fetching lyrics text [ms].
   */
  lyricsFetchTimeout?: number;
  /**
   * 読み込むフォントの一覧を指定できます。 `null` が指定されると、利用可能なすべてのフォントが読み込まれます。
   *
   * A list of font families to load. When `null` is set, all available fonts are loaded.
   */
  fontFamilies?: (FontInfo | string)[];

  /**
   * 声量情報を取得するか否か
   *
   * Whether to load vocal amplitude data or not
   */
  vocalAmplitudeEnabled?: boolean;
  /**
   * V/A空間の座標値を取得するか否か
   *
   * Whether to load valence arousal data or not
   */
  valenceArousalEnabled?: boolean;
}

/**
 * TextAliveの動画オブジェクトを構築するためのオプション
 *
 * Optional data to build the video object
 * @public
 */
export declare interface PlayerVideoOptions {
  /**
   * 動画データ
   *
   * Video data
   */
  video?: PartialVideoEntry;

  /**
   * 歌詞テキストの読み込み元
   *
   * Source URL of lyrics text
   */
  altLyricsUrl?: string;
}

/**
 * **Point**
 *
 * Represents a point on a 2 dimensional x / y coordinate system.
 *
 * ---
 *
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2017 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * @public
 */
export declare class Point implements IPoint {
  /** @inheritDoc */
  x: number;
  /** @inheritDoc */
  y: number;
  /**
   * @param x - X position.
   * @param y - Y position.
   */
  constructor(x?: number, y?: number);
  /** @inheritDoc */
  setValues(x?: number, y?: number): Point;
  /** @inheritDoc */
  copy(point: Point): Point;
  /** @inheritDoc */
  clone(): Point;
  /** @inheritDoc */
  toString(): string;
}

/**
 * @public
 */
declare type PropValueData = boolean | number | string | ColorData;

/**
 * 多言語対応文字列
 *
 * - TextAlive の表示言語に応じて表示が切り替わる
 * - 現状、 `ja` キーで日本語、 `en` キーで英語の表記を指定可能
 *
 * String type with multi-language support (`ja` for Japanese and `en` for English)
 * @public
 */
export declare type RegionalText = {
  [lang: string]: string;
};

/**
 * 描画ユニット:
 *
 * - TextAlive における画面描画処理の最小単位
 * - 種類（フレーズ、単語、文字、グラフィック）を {@link getType} で取得できる
 * - 前後のユニットを {@link previous} と {@link next} で取得できる
 * - （存在する場合）親要素と子要素の一覧をそれぞれ {@link parent} と {@link children} で取得できる
 * - 開始時刻、終了時刻、その差分を {@link startTime} {@link endTime} および {@link duration} で取得できる
 *
 * Rendering unit:
 *
 * - The base interface for all rendering unit implementations in TextAlive
 * - {@link getType} returns the implementation type (phrase, word, character, or graphic)
 * - {@link previous} and {@link next} return the previous and next unit
 * - {@link parent} and {@link children} return the parent unit and the list of child units (if applicable)
 * - {@link startTime} and {@link endTime} return the timing information and {@link duration} returns the duration i.e. `endTime` - `startTime`
 *
 * @see {@link TimedUnit}
 * @public
 */
declare class RenderingUnit extends TimedUnit implements IRenderingUnit {
  animate: RenderingUnitFunction;
  get video(): Video;
  get parent(): RenderingUnit;
  get children(): RenderingUnit[];
  get previous(): RenderingUnit;
  get next(): RenderingUnit;
  get startTime(): number;
  get endTime(): number;
  get duration(): number;

  getType(): number;
  toString(): string;
}

/**
 * 定期的に呼び出される描画用関数 / Rendering function that runs periodically
 * @public
 */
export declare type RenderingUnitFunction = (
  now: number,
  u: IRenderingUnit
) => void;

/**
 * サビなどの繰り返し区間の情報 / Repetitive segment info (e.g., chorus segment)
 */
declare class RepetitiveSegment
  extends SongMapElement
  implements IRepetitiveSegment
{
  /** @inheritDoc */
  startTime: number;
  /** @inheritDoc */
  endTime: number;
  /** @inheritDoc */
  previous: RepetitiveSegment;
  /** @inheritDoc */
  next: RepetitiveSegment;
  /** @inheritDoc */
  index: number;
  constructor();
}

declare interface RepetitiveSegments extends IRepetitiveSegments {
  /** @inheritDoc */
  segments: RepetitiveSegment[];
}

/**
 * @param t - Timing [0, 1]
 */
declare function sineIn(t: number): number;

/**
 * @param t - Timing [0, 1]
 */
declare function sineInOut(t: number): number;

/**
 * @param t - Timing [0, 1]
 */
declare function sineOut(t: number): number;

/**
 * 楽曲のメタ情報
 * @public
 */
export declare interface Song {
  /**
   * 楽曲コード (ID)
   *
   * Unique string ID
   */
  code: string;
  /**
   * 楽曲タイトル
   *
   * Song title
   */
  name: string;

  /**
   * 楽曲の再生時間長 [s]
   *
   * - この値は低精度です
   * - 演出に利用する値は必ず Player インスタンスから取得してください
   *
   * Song duration [s]
   *
   * - This value is error-prone
   * - Gain more precise value from Player instance
   */
  length: number;
  /**
   * 楽曲のパーマリンクURL
   *
   * Permalink URL
   */
  permalink: string;

  /**
   * アーティスト情報
   *
   * Artist info
   */
  artist: {
    /**
     * アーティスト名
     */
    name: string;
  };

  /**
   * 作成日時
   *
   * Created date
   */
  created_at: string;
  /**
   * 更新日時
   *
   * Updated date
   */
  updated_at: string;
}

/**
 * Songle 楽曲情報
 * @public
 */
declare interface SongleSong {
  song: Song;
}

/**
 * **Songle timer**
 *
 * Songle API を利用した {@link Timer} の実装:
 *
 * - コンストラクタのオプション {@link SongleTimerOptions} で `accessToken` などを指定することで Songle Sync 対応になります
 * - {@link PlayerEventListener.onTimerReady} イベントが呼ばれたら {@link SongleTimer.songlePlayer} プロパティで Songle API の `Player` インスタンスにアクセスできます
 *
 * A {@link Timer} implementation using Songle API:
 *
 * - Constructor option {@link SongleTimerOptions} with `accessToken` property enables Songle Sync
 * - After {@link PlayerEventListener.onTimerReady} event is emitted, {@link SongleTimer.songlePlayer} will provide Songle API `Player` instance
 *
 * @see {@link https://api.songle.jp/}
 * @public
 */
export declare class SongleTimer implements Timer {
  private options;

  wait: number;
  constructor(options?: SongleTimerOptions);
  /**
   * Songleのプレイヤーインスタンスです。
   *
   * @see {@link https://api.songle.jp/references/javascript#Player}
   */
  get songlePlayer(): SonglePlayer;
  /** @inheritDoc */
  get isPlaying(): boolean;
  /**
   * Songle Sync の機能が有効化されているか否か
   *
   * Whether Songle Sync feature is enabled or not
   *
   * @see {@link https://api.songle.jp/sync}
   */
  get withSync(): boolean;
  /** @inheritDoc */
  get position(): number;
  /** @inheritDoc */
  initialize({
    player,
    updater,
    emitter,
    altSourceUrl: altUrl,
  }: TimerInitOptions): Promise<void>;

  /** @inheritDoc */
  play(): void;
  /** @inheritDoc */
  stop(): void;
  /** @inheritDoc */
  pause(): void;
  /** @inheritDoc */
  seek(time: number): void;

  /** @inheritDoc */
  dispose(): void;
}

/**
 * {@link SongleTimer} の初期化オプション
 *
 * Options for instantiating {@link SongleTimer}
 * @public
 */
export declare interface SongleTimerOptions {
  /**
   * 音源を貼り付けるか否か
   *
   * Whether to embed audio source or not
   */
  headless?: boolean;
  /**
   * Songle Syncのアクセストークン
   *
   * Access token for Songle Sync
   *
   * @see {@link https://api.songle.jp/sync}
   */
  accessToken?: string;
  /**
   * Songle Syncのシークレットトークン
   *
   * Secret token for Songle Sync
   *
   * @see {@link https://api.songle.jp/sync}
   */
  secretToken?: string;

  /**
   * Songle APIのエントリーポイント
   * - `import Songle from "songle-api"` のようにして得られるオブジェクト
   * - 指定しなければ自動的に dynamic import または script タグの挿入によって読み込まれる
   *
   * Songle API entrypoint
   * - The object that can be gained by calling `import Songle from "songle-api"`
   * - If not specified, Songle API gets initialized automatically through dynamic import or <script> tag insertion
   *
   * @see {@link https://api.songle.jp}
   */
  songle?: Songle;
}

/**
 * @public
 */
export declare interface SongLoaderListener {
  /**
   * 楽曲の基本情報が読み込まれたときに呼ばれる
   *
   * Called when song is loaded
   * @param song - 楽曲情報 / Song info
   * @param reason - 失敗したときの理由 / Reason for failures (if any)
   */
  onSongLoad?(song: SongleSong, reason?: Error): void;
  /**
   * 楽曲地図が読み込まれたときに呼ばれる
   *
   * Called when song map is loaded
   * @param songMap - 楽曲地図 / Song map
   * @param reason - 失敗したときの理由 / Reason for failures (if any)
   */
  onSongMapLoad?(songMap: ISongMap, reason?: Error): void;

  /**
   * 声量の情報が読み込まれたときに呼ばれる
   *
   * - 実際の声量情報は {@link ISongExplorer.getVocalAmplitude} を使って取得してください
   *
   * Called when vocal amplitude is loaded
   *
   * - To retrieve vocal amplitude information, call {@link ISongExplorer.getVocalAmplitude}
   * @param vocalAmplitude - 声量の情報（未整形のデータ）
   * @param reason - 失敗したときの理由 / Reason for failures (if any)
   */
  onVocalAmplitudeLoad?(vocalAmplitude: VocalAmplitude, reason?: Error): void;
  /**
   * V/A空間の情報が読み込まれたときに呼ばれる
   *
   * - 実際のV/A空間の座標情報は {@link ISongExplorer.getValenceArousal} を使って取得してください
   *
   * Called when valence arousal info is loaded
   *
   * - To retrieve valence/arousal metrics, call {@link ISongExplorer.getValenceArousal}
   * @param valenceArousal - V/A空間の情報（未整形のデータ）
   * @param reason - 失敗したときの理由 / Reason for failures (if any)
   */
  onValenceArousalLoad?(valenceArousal: ValenceArousal, reason?: Error): void;
}

/**
 * @public
 */
declare abstract class SongMapElement implements TimedObject {
  /** @inheritDoc */
  abstract startTime: number;
  /** @inheritDoc */
  abstract endTime: number;
  /** @inheritDoc */
  get duration(): number;
  /** @inheritDoc */
  contains(time: number): boolean;
  /** @inheritDoc */
  overlaps(objOrStartTime: TimedObject | number, endTime?: number): boolean;
  /** @inheritDoc */
  progress(time: number): number;
}

export { sortedIndex };

/**
 * 文字列をBase64エンコードしてデータURLとして取得する
 *
 * Encode UTF-8 string in Base64 format and prepend data URL header
 * @param text - UTF-8 string
 * @public
 */
export declare function stringToDataUrl(text: string): string;

/**
 * @public
 */
export declare interface TextLoaderListener {
  /**
   * 歌詞テキストの発声タイミング情報が読み込まれたときに呼ばれる
   *
   * Called when lyrics timing information is loaded
   * @param lyrics - 発声タイミングの情報 / Lyrics timing info
   * @param reason - 失敗したときの理由 / Reason for failures (if any)
   */
  onLyricsLoad?(lyrics: LyricsInfo, reason?: Error): void;
  /**
   * 歌詞テキストが読み込まれたときに呼ばれる
   *
   * Called when lyrics text is loaded
   * @param lyricsBody - 歌詞テキスト
   * @param reason - 失敗したときの理由 / Reason for failures (if any)
   */
  onTextLoad?(lyricsBody: LyricsBody, reason?: Error): void;
}

/**
 * 文字ユニット / Text unit
 * @public
 */
declare class TextUnit extends RenderingUnit implements ITextUnit {
  get text(): string;
  get color(): Color;
  set color(val: Color);
  set font(val: Font);
  set fontFamily(val: string);
  get fontFamily(): string;
  set fontStyle(val: string);
  get fontStyle(): string;
  set fontSize(val: number);
  get fontSize(): number;
  get advance(): number;
  get ascent(): number;
  get descent(): number;
  get height(): number;

  toString(): string;
}

/**
 * 時刻付きオブジェクト
 *
 * Timed object
 *
 * @see {@link TimedUnit}
 * @public
 */
export declare interface TimedObject {
  startTime: number;
  endTime: number;
  /**
   * Returns whether this time range contains the specified time (start and end inclusive).
   * @param time - 時刻 [ms] / Time [ms]
   */
  contains(time: number): boolean;
  /**
   * Returns whether the specified range overlaps with this time range (start and end inclusive).
   * @param obj - 時刻付きオブジェクト / Timed object
   */
  overlaps(obj: TimedObject): boolean;
  /**
   * Returns whether the specified range overlaps with this time range (start and end inclusive).
   * @param startTime - 開始時刻 [ms] / Start time [ms]
   * @param endTime - 終了時刻 [ms] / End time [ms]
   */
  overlaps(startTime: number, endTime: number): boolean;
}

/**
 * 時区間駆動型APIの問い合わせ結果 / Query results for time-range-driven API
 * @public
 */
export declare interface TimedObjectsInRange<T extends TimedObject> {
  /** 指定区間の終了時にかぶっているオブジェクト / Timed object overlapping with the end time of the specified time range */
  current: T | null;
  /** 指定区間内で開始したオブジェクト / Timed objects that started within the specified time range  */
  entered: T[];
  /** 指定区間内で終了したオブジェクト / Timed objects that ended within the specified time range */
  left: T[];
  /** 指定区間の直前にあるオブジェクト / The last timed object before the specified time range */
  previous: T | null;
  /** 指定区間の直前にあるオブジェクト / The first timed object after the specified time range */
  next: T | null;
}

/**
 * 時刻付きオブジェクトの抽象クラス / Abstract implementation of timed object
 *
 * この抽象クラスを継承し、 `startTime` および `endTime` プロパティを持つクラスを実装することで、時区間駆動APIなどで活用できるようになります。TypeScriptでの簡単な実装例を以下に示します。
 *
 * By implementing a class that extends this abstract class and has `startTime` and `endTime` properties, it can be utilised by time-range-driven APIs. A simple example implementation in TypeScript is shown below.
 *
 * ```typescript
 *  class MyObject extends TimedUnit {
 *    constructor(public startTime: number, public endTime: number) {
 *      super();
 *    }
 *  }
 * ```
 * @see {@link TimedObject}
 * @public
 */
export declare abstract class TimedUnit implements TimedObject {
  abstract startTime: number;
  abstract endTime: number;
  get duration(): number;
  contains(time: number): boolean;
  overlaps(objOrStartTime: TimedObject | number, endTime?: number): boolean;
  /**
   * 指定された時刻をこの時刻付きオブジェクト中の位置 `[0, 1]` にマッピングして返す
   *
   * Returns the position in this timed object [0, 1]
   * @param time - 位置 / Position
   */
  progress(time: number): number;
}

/**
 * **Timer**
 *
 * Player の音源の再生状態を管理するクラスが実装するインタフェースです。
 *
 * Classes that manage music playback for Player should implement this interface.
 * @public
 */
export declare interface Timer {
  /**
   * 再生中かどうか
   *
   * Whether the music source is being played or not
   */
  readonly isPlaying: boolean;
  /**
   * **現在の再生位置 [ms]**
   *
   * `Timer` 実装クラスはこの値をリアルタイムに計算して返さなくてはなりません。
   * 他にも再生位置を返す API が以下の2種類用意されていますが、実装手法の違いにより、この API が常に最も精確な値を返します。
   *
   * - {@link IPlayer.mediaPosition} は `Timer` 実装クラスによって定期的に更新されます
   * - {@link IPlayer.videoPosition} は Player が定期的に呼び出す {@link IRenderingUnit.animate} が成功してから更新されます
   *
   * この API を利用するアプリでは、動画のシーク操作に対応するために {@link PlayerEventListener.onVideoSeekStart} {@link PlayerEventListener.onVideoSeek} {@link PlayerEventListener.onVideoSeekEnd} イベントを適切にハンドルする必要があります。
   *
   * **Current playback position [ms]**
   *
   * `Timer` implementations need to calculate this property value in real time.
   * While there are two other APIs to retrieve the current playback position as follows, this one returns the most precise value.
   *
   * - {@link IPlayer.mediaPosition} is updated by `Timer` implementations periodically
   * - {@link IPlayer.videoPosition} is updated by Player after the periodic call to {@link IRenderingUnit.animate}
   *
   * Applications utilizing this API need to handle {@link PlayerEventListener.onVideoSeekStart} {@link PlayerEventListener.onVideoSeek} {@link PlayerEventListener.onVideoSeekEnd} events appropriately so that the applications respond to the video seeking operation.
   */
  readonly position: number;
  /**
   * 再生位置情報の更新間隔 [ms]
   *
   * Interval for updating playback position [ms]
   */
  wait: number;
  /**
   * `Timer` の初期化（動画データの読み込みプロセスで一度だけ呼ばれます）
   *
   * Initialize this `Timer` instance (called during the video data loading process)
   *
   * @param options - 初期化オプション / Options for initalization process
   */
  initialize(options: TimerInitOptions): Promise<void>;
  /**
   * 再生を開始する
   *
   * Start music playback
   */
  play(): void;
  /**
   * 再生を一時停止する
   *
   * Pause music playback
   */
  pause(): void;
  /**
   * 再生を停止する（一時停止したうえで先頭に巻き戻しする）
   *
   * Stop music playback (pause and then seek the beginning)
   */
  stop(): void;
  /**
   * 再生位置を指定する
   *
   * Seek specified position in the current music playback
   * @param position - 再生位置 [ms] / Media position [ms]
   */
  seek(position: number): void;
  /**
   * この `Timer` を破棄する
   *
   * Dispose this `Timer` instance
   */
  dispose(): void;
}

/**
 * {@link Timer} の動画読み込み時に呼ばれる {@link Timer.initialize} の引数の型情報
 *
 * {@link Timer.initialize} parameter type definition
 * @public
 */
export declare interface TimerInitOptions {
  /**
   * Player インスタンス
   *
   * Player instance
   */
  player: IPlayer;
  /**
   * @see {@link PlayerMediaPositionUpdateFunction}
   */
  updater: PlayerMediaPositionUpdateFunction;
  /**
   * TextAlive のイベントリスナ向けにイベントを発行するためのエミッタ
   *
   * Event emitter
   */
  emitter: PlayerEventListener;
}

/**
 * @public
 */
export declare interface UnitData {
  startTime?: number;
  endTime?: number;
}

/**
 * 動画の構成要素
 *
 * Rendering units in a video
 * @public
 */
export declare const UnitTypes: {
  NONE: number;
  PHRASE: number;
  WORD: number;
  CHAR: number;
  GRAPHIC: number;
  ALL: number;
  PUBLIC: number;
};

/**
 * V/A空間の座標値
 *
 * - 感情価、覚醒度とも `[-1, 1]` の範囲に正規化された値
 * - 曲内の相対的な変化 **ではなく** 曲間で比較可能な絶対値
 *
 * Valence arousal data
 *
 * - Both valence and arousal values range from -1 to 1
 * - The values do NOT represent relative changes within a song but absolute values comparable with values in other songs
 * @public
 */
export declare interface ValenceArousalValue {
  /**
   * 感情価 [-1, 1]
   *
   * Valence [-1, 1]
   */
  v: number;
  /**
   * 覚醒度 [-1, 1]
   *
   * Arousal [-1, 1]
   */
  a: number;
}

/**
 * @inheritDoc
 * @public
 */
declare class Video extends TimedUnit implements IVideo {
  get phrases(): Phrase[];

  get words(): Word[];
  get chars(): Char[];

  set duration(duration: number);
  get duration(): number;
  get startTime(): number;
  get endTime(): number;

  get phraseCount(): number;

  get wordCount(): number;
  get charCount(): number;

  get firstPhrase(): Phrase;
  get lastPhrase(): Phrase;
  get firstWord(): Word;
  get lastWord(): Word;
  get firstChar(): Char;
  get lastChar(): Char;

  constructor(data?: VideoData);

  addPhrase(phrase: Phrase): void;

  removePhrase(phrase: Phrase): boolean;
  removePhrases(): void;

  findIndex(unit: RenderingUnit): number;

  getPhrase(index: number): Phrase;
  getWord(index: number): Word;
  getChar(index: number): Char;

  findPhrase(time: number, options?: FindTimedObjectOptions): Phrase;
  findPhraseChange(
    startTime: number,
    endTime: number
  ): TimedObjectsInRange<Phrase>;
  findWord(time: number, options?: FindTimedObjectOptions): Word;
  findWordChange(startTime: number, endTime: number): TimedObjectsInRange<Word>;
  findChar(time: number, options?: FindTimedObjectOptions): Char;
  findCharChange(startTime: number, endTime: number): TimedObjectsInRange<Char>;
}

/**
 * @public
 */
export declare interface VideoData {
  startTime?: number;
  endTime?: number;
  duration?: number;

  phrases?: PhraseData[];
}

/**
 * @public
 */
export declare interface VideoDuplicateLoadingError extends Error {
  /**
   * 読み込み中の動画を返すPromise / Promise that returns the video currently being loaded
   */
  video: Promise<IVideo>;
}

/**
 * 単語 / Word
 * @public
 */
declare class Word extends TextUnit implements IWord {
  constructor(data: WordData);
  get parent(): Phrase;
  get children(): Char[];
  get previous(): Word;
  get next(): Word;
  get startTime(): number;
  get endTime(): number;
  get pos(): string;
  get rawPos(): string;
  get language(): string;

  get charCount(): number;
  get firstChar(): Char;
  get lastChar(): Char;
  addChar(c: Char): void;
  findIndex(unit: Char): number;
  getType(): number;
}

/**
 * @public
 */
export declare interface WordData extends UnitData {
  characters: CharData[];
  pos?: string;
  rawPoS?: string;
  language?: string;
}

export {};


/**
 * TextAlive ログインに使えるサービス / Account service for TextAlive login
 */
declare type AccountService = "twitter" | "github" | "youtube" | "piapro" | "songle";

declare interface Asset {
    originalUrl: string;
    contentType?: number;
    contentUrl?: string;
    url?: string;
    name?: string;
    authorName?: string;
    authorPath?: string;
    license?: AssetLicense;
    createdDate?: string;
}

declare interface AssetLicense {
    code?: number;
    condition?: {
        uploader?: boolean;
        by?: boolean;
        ns?: boolean;
        nc?: boolean;
        org?: boolean;
        clb?: boolean;
    };
}

/**
 * 背景グラフィックに関するイベントのリスナ
 *
 * Event listener for background graphics
 * @public
 */
declare interface BackgroundGraphicsListener {
    
}

declare interface BackgroundImageAsset extends Asset {
    css?: string;
    x?: number;
    y?: number;
    defaultX?: number;
    defaultY?: number;
}

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
    private player;
    private updateMediaPosition;
    private emitter;
    private _isPlaying;
    private _position;
    private basePosition;
    private intervalId;
    private _wait;
    /**
     * @inheritDoc
     */
    get wait(): number;
    set wait(val: number);
    /**
     * @inheritDoc
     */
    get isPlaying(): boolean;
    /**
     * @inheritDoc
     */
    get position(): number;
    constructor();
    /**
     * @inheritDoc
     */
    initialize({ player, updater, emitter }: TimerInitOptions): Promise<void>;
    /**
     * @inheritDoc
     */
    play(): void;
    /**
     * @inheritDoc
     */
    stop(): void;
    /**
     * @inheritDoc
     */
    pause(): void;
    /**
     * @inheritDoc
     */
    seek(time: number): void;
    /**
     * @inheritDoc
     */
    dispose(): void;
    private clearInterval;
    private start;
    private update;
}

/**
 * ビート情報 / Beat info
 */
declare class Beat extends SongMapElement implements IBeat {
    /**
     * @inheritDoc
     */
    startTime: number;
    /**
     * @inheritDoc
     */
    get endTime(): number;
    /**
     * @inheritDoc
     */
    length: number;
    /**
     * @inheritDoc
     */
    position: number;
    /**
     * @inheritDoc
     */
    previous: Beat;
    /**
     * @inheritDoc
     */
    next: Beat;
    /**
     * @inheritDoc
     */
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

declare class Char extends TextUnit implements IChar {
    private _font;
    private _color;
    constructor(data: CharData);
    get parent(): Word;
    get previous(): Char;
    get next(): Char;
    get text(): string;
    get advance(): number;
    get ascent(): number;
    get descent(): number;
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
    /**
     * @inheritDoc
     */
    startTime: number;
    /**
     * @inheritDoc
     */
    endTime: number;
    /**
     * @inheritDoc
     */
    name: string;
    /**
     * @inheritDoc
     */
    previous: Chord;
    /**
     * @inheritDoc
     */
    next: Chord;
    /**
     * @inheritDoc
     */
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
    /**
     * @inheritDoc
     */
    a: number;
    /**
     * @inheritDoc
     */
    r: number;
    /**
     * @inheritDoc
     */
    g: number;
    /**
     * @inheritDoc
     */
    b: number;
    constructor(color?: string | number | IColor);
    /**
     * @inheritDoc
     */
    get value(): number;
    set value(val: number);
    /**
     * @inheritDoc
     */
    get rgb(): string;
    /**
     * @inheritDoc
     */
    get rgba(): string;
    /**
     * @inheritDoc
     */
    eq(color: Color): boolean;
    /**
     * @inheritDoc
     */
    toString(withAlpha?: boolean): string;
    /**
     * @inheritDoc
     */
    from(color?: string | number | IColor): void;
    /**
     * @inheritDoc
     */
    fromString(color: string): void;
    /**
     * @inheritDoc
     */
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
export declare type DataLoaderListener = VideoLoaderListener & SongLoaderListener & TextLoaderListener & FontLoaderListener;

/**
 * データURLのBase64エンコードされた文字列を復号
 *
 * Decode a data URL that encodes UTF-8 string in Base64 format
 * @param url - URL
 * @public
 */
export declare function dataUrlToString(url: string): string;

declare interface DecomposedProps {
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

declare interface EndpointData {
    fallback: {
        protocol: string;
    };
    songle: {
        protocol?: string;
        domain: string;
        server?: string;
    };
    textalive: {
        protocol?: string;
        domain: string;
        server?: string;
    };
}

/**
 * @param objects - 時刻付きオブジェクトの配列 / Array of sorted timed objects
 * @param time - 時刻 [ms] / Time [ms]
 * @param options - 探索オプション / Find options
 * @returns 指定された時刻に存在するオブジェクトを返す / Returns the object at the specified timing
 * @public
 */
export declare function findTimedObject<T extends TimedObject>(objects: T[], time: number, options?: FindTimedObjectOptions): T;

/**
 * 時刻付きオブジェクトの探索オプション
 *
 * Find options for sorted timed objects
 * @public
 */
export declare interface FindTimedObjectOptions {
    /**
     * 指定された場合、探索対象の時刻とこの時刻情報がなす区間と重複する時刻付きオブジェクトを返す
     *
     * When specified, find an object that overlaps with the specified range rather than the timing
     */
    endTime?: number;
    /**
     * 指定された場合、時刻付きオブジェクトは必ずしも探索対象の時刻を含んでいなくてもよい（二分探索の結果をそのまま返す）
     *
     * When specified, an object does not need to contain the specified timing (result from the binary tree search is always returned)
     */
    loose?: boolean;
}

declare class Font implements IFont {
    private _family;
    private _size;
    private _style;
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
declare interface FontData {
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
}

/**
 * フォント情報
 *
 * Font info
 * @public
 *
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
    ja: string;
    /**
     * モリサワ TypeSquare フォントか否か
     *
     * Whether this font is provided by Morisawa TypeSquare or not
     */
    typesquare?: boolean;
    
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
declare function getElasticIn(amplitude: number, period: number): (input: number) => number;

/**
 * Configurable elastic ease.
 * @param amplitude
 * @param period
 */
declare function getElasticInOut(amplitude: number, period: number): (input: number) => number;

/**
 * Configurable elastic ease.
 * @param amplitude
 * @param period
 */
declare function getElasticOut(amplitude: number, period: number): (input: number) => number;

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

declare class Graphic extends RenderingUnit {
    constructor(data: GraphicData);
    getType(): number;
    toString(): string;
}

/**
 * @public
 */
export declare type GraphicData = UnitData;

/**
 * @public
 */
export declare interface GraphicsDriver {
    /**
     * ステージの幅 [px]
     *
     * Stage width (e.g., HTML Canvas width in a browser window)
     */
    width: number;
    /**
     * ステージの高さ [px]
     *
     * Stage height (e.g., HTML Canvas height in a browser window)
     */
    height: number;
    /**
     * インタプリタ内にラップして提供するAPIのテーブル
     *
     * A table used to wrap classes in the interpreter
     */
    readonly wrapperTable: WrapperTable;
    /**
     * @param g - グラフィックコンテキスト / Graphics context
     * @returns 引数がグラフィックコンテキストか否か / Whether the specified parameter is an instance of graphic context or not
     */
    isGraphics(g: any): boolean;
    /**
     * Canvas要素を初期化する
     *
     * Initialize the canvas element
     * @param el - Canvas要素 / Canvas element
     */
    setCanvas(el: HTMLElement): Promise<void>;
    /**
     * 動画オブジェクトを描画するためのランタイムインスタンスを作成する
     *
     * Create a runtime instance for the video object
     * @param video - 動画オブジェクト / Video object
     */
    createRuntime(video: IVideo): Promise<RuntimeVideo>;
    /**
     * キャンバスの状態を初期化する
     *
     * Reset the canvas state
     */
    reset(): void;
    /**
     * キャンバスに現在の状態を描画する
     *
     * Update the canvas with the current runtime state
     */
    update(): void;
    /**
     * ステージの描画倍率を調整する
     *
     * @param scale - 倍率 / Scale
     * @param margin - マージン / Margin
     */
    updateStageTx(scale: number, margin: [number, number, number, number]): void;
}

declare interface IAssetLicenceLoader {
    read(url: string, skipOptoutCheck?: boolean): Promise<Asset>;
}

declare interface IAssetURLManager {
    isUploaderAsset(asset: Asset): boolean;
    isPiaproAsset(asset: Asset): boolean;
}

declare interface IBackgroundAssetManager {
    checkBackgroundImageLicense(license: AssetLicense): boolean;
    getQueryParameter(backgroundImage: BackgroundImageAsset): string;
}

declare interface IBackgroundGraphicsLoader {
    readonly background: BackgroundImageAsset;
    readonly defaultBackgroundCss: string;
    readonly ready: boolean;
    settingBackground(background: BackgroundImageAsset): Promise<boolean>;
    setBackground(background: BackgroundImageAsset): Promise<boolean>;
    export(): BackgroundImageAsset;
    exportPartialVideoEntry(options: VideoExportOptions): Partial<VideoEntry>;
}

declare type IBackgroundPlayer = IBackgroundURLManager & IAssetURLManager & IBackgroundAssetManager & IAssetLicenceLoader;

declare interface IBackgroundURLManager {
    isBlankBackgroundAsset(background: BackgroundImageAsset): boolean;
    isBackgroundColorAsset(background: BackgroundImageAsset): boolean;
    isBackgroundPiaproImageAsset(background: BackgroundImageAsset): boolean;
    isBackgroundSpecialImageAsset(background: BackgroundImageAsset): boolean;
}

/**
 * ビート情報 / Beat info
 * @public
 */
export declare interface IBeat extends TimedObject {
    /**
     * @inheritDoc
     */
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
 * @public
 */
export declare interface IChar extends ITextUnit {
    readonly parent: IWord;
    readonly previous: IChar;
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
    /** 色情報の16進数表現 (RGBA) / Hex string (RGBA) */
    readonly rgba: string;
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
     * 色情報をセットする
     *
     * Set color info
     * @param color - 色情報の文字列表現 / Information source in string
     */
    fromString(color: string): void;
    /**
     * 色情報をセットする
     *
     * Set color info
     * @param val - 色情報の数値表現 / Information source in number
     * @param withAlpha - 透明度付きか否か / Whether alpha value is included or not
     */
    fromNumber(val: number, withAlpha?: boolean): void;
}

/**
 * **IDataLoader**
 *
 * 読み込まれている音楽地図などの情報
 *
 * Current video materials
 * @public
 */
export declare interface IDataLoader {
    /** 動画データ / Video data */
    readonly video: VideoEntry;
    /** 楽曲情報 / Song info */
    readonly song: Song;
    /** 楽曲の解析ステータス / Song analysis status */
    readonly songStatus: SongStatus;
    /** 音楽地図情報 / Song map info */
    readonly songMap: ISongMap;
    /** 歌詞の発声タイミング推定ID / Lyrics timing estimation ID */
    readonly lyricsId: number;
    /** 歌詞の発声タイミング情報 / Lyrics timing info */
    readonly lyrics: LyricsDiffInfo;
    /** 歌詞テキスト / Lyrics text */
    readonly text: string;
    /** フォントの読み込みステータス / Font loading status */
    readonly fonts: IFontLoader;
}

declare interface IEndpointManager extends EndpointData {
    songle: {
        protocol?: string;
        domain: string;
        server?: string;
    };
    textalive: {
        protocol: string;
        domain: string;
        server: string;
    };
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

declare interface IFontInfoManager {
    endpoint: string;
    getFrequentChars(): Promise<string>;
    listAvailableFonts(): Promise<FontInfo[]>;
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
    load(fonts: string[]): Promise<FontInfo[]>;
    /**
     * 利用可能なすべてのフォントを読み込む
     *
     * Load all available fonts
     * @returns 読み込めたフォントの一覧 / List of fonts suceeded to load
     */
    loadAll(): Promise<FontInfo[]>;
    /**
     * 指定した動画データ中で利用されているフォントを読み込む
     *
     * Load all required fonts to render the specified video data
     * @param json - 動画データ / Video data
     * @returns 読み込まれたフォントの一覧 / List of loaded fonts
     */
    loadForVideo(json: VideoData): Promise<FontInfo[]>;
    /**
     * 指定した動画データ中で利用されているフォントの一覧を取得する
     *
     * List up required fonts to render the specified video data
     * @param json - 動画データ / Video data
     * @returns フォント名の一覧 / List of font family names
     */
    listFontFamiliesInVideo(json: VideoData): string[];
    /**
     * 利用可能なフォントの一覧を取得する
     *
     * List up all available fonts
     * @returns フォントの一覧 / List of fonts
     */
    listAvailableFonts(): Promise<FontInfo[]>;
}

/**
 * @public
 */
export declare type IGraphic = IRenderingUnit;

declare interface ILyricsBodyFetcher {
    parseLyricBody(text: string, parserUrl: string): Promise<string>;
    fetchLyricBody(lyricUrl: string, options: {
        parserPath: string;
        directAccess?: boolean;
    }): Promise<string>;
    fetchLocalLyricBody(lyricIdOrSongCode: number | string): Promise<string>;
}

declare interface ILyricsDiffManager {
    loadDiffs(songCode: string, lyricsId: number): Promise<LyricsDiffs>;
    loadDiff(songCode: string, lyricsId: number, diffId: number): Promise<LyricsDiffInfo>;
}

declare interface ILyricsLoader {
    load(songCode: string): Promise<SongleLyrics>;
    loadDetail(songCode: string, lyricsId: number): Promise<LyricsInfo>;
}

declare type ILyricsPlayer = ILyricsURLManager & ILyricsDiffManager & ILyricsBodyFetcher & ILyricsLoader;

declare interface ILyricsURLManager {
    isUploaderUrl(url: string): boolean;
    parseUploaderUrl(url: string): {
        user: string;
        identifier: string;
    };
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
    append(a: number, b: number, c: number, d: number, tx: number, ty: number): IMatrix2D;
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
     * 	var mtx = new createjs.Matrix2D();
     * 	mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
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
    appendTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number): IMatrix2D;
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
    prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): IMatrix2D;
    /**
     * Prepends the specified matrix to this matrix.
     * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
     * For example, you could calculate the combined transformation for a child object using:
     *
     * 	var o = myDisplayObject;
     * 	var mtx = o.getMatrix();
     * 	while (o = o.parent) {
     * 		// prepend each parent's transformation in turn:
     * 		o.prependMatrix(o.getMatrix());
     * 	}
     * @param matrix
     * @returns This matrix. Useful for chaining method calls.
     */
    prependMatrix(matrix: IMatrix2D): IMatrix2D;
    /**
     * Generates matrix properties from the specified display object transform properties, and prepends them to this matrix.
     * For example, you could calculate the combined transformation for a child object using:
     *
     * 	var o = myDisplayObject;
     * 	var mtx = new createjs.Matrix2D();
     * 	do  {
     * 		// prepend each parent's transformation in turn:
     * 		mtx.prependTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
     * 	} while (o = o.parent);
     *
     * 	Note that the above example would not account for {@link https://www.createjs.com/docs/easeljs/classes/DisplayObject.html#property_transformMatrix}
     * 	values. See {@link IMatrix2D.prependMatrix} for an example that does.
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
    prependTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number): IMatrix2D;
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
    setValues(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): IMatrix2D;
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
 * @public
 */
export declare interface IPhrase extends ITextUnit {
    readonly children: IWord[];
    readonly previous: IPhrase;
    readonly next: IPhrase;
    readonly wordCount: number;
    readonly charCount: number;
    readonly firstWord: IWord;
    readonly firstChar: IChar;
    readonly lastWord: IWord;
    readonly lastChar: IChar;
    findIndex(unit: ITextUnit): number;
}

/**
 * **IPlayer**
 *
 * TextAlive のプレイヤーが実装するインタフェースです。
 *
 * TextAlive Player implements this interface.
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
     * TextAlive アプリの状態
     *
     * TextAlive app status
     */
    readonly app: IPlayerApp;
    /**
     * 読み込まれている音楽地図などの情報
     *
     * Current video materials
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
     */
    mediaElement: HTMLElement;
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
     * TextAlive Player の音源の再生状態を管理する `Timer` インスタンスです。
     *
     * A timer instance that controls the player status.
     */
    readonly timer: Timer;
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
    createFromSongUrl(songUrl: string, options?: PlayerVideoOptions): Promise<IVideo>;
    /**
     * 楽曲パス（URLから `http://` などのプロトコル部分を除いたもの）に基づいて音楽地図などを読み込み、動画データを生成する
     *
     * Generate video data from song path
     *
     * @param songPath - 楽曲パス / Song path
     * @param options - オプション / Optional data to build the video object
     * @returns 動画オブジェクト / Video object
     */
    createFromSongPath(songPath: string, options?: PlayerVideoOptions): Promise<IVideo>;
    
    
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
    createFromJSON(json: VideoData, options?: PlayerVideoOptions): Promise<IVideo>;
    
    /**
     * 楽曲中のサビに関する情報を取得する
     *
     * Get chorus parts in the current song
     * @returns サビ情報（見つからなければ空の配列）
     */
    getChoruses(): IRepetitiveSegment[];
    /**
     * 指定された位置のサビ情報を取得する
     *
     * Find a chorus part that overlaps with the specified timing
     * @param time - 位置 [ms] / Position [ms]
     * @param options - optional parameters for finding a chorus part
     * @returns サビ情報（見つからなければ `null`）
     */
    findChorus(time: number, options?: PlayerFindOptions): IRepetitiveSegment;
    /**
     * @deprecated Use of {@link IPlayer.findChorusBetween} is deprecated - find a chorus part with {@link IPlayer.findChorus} instead.
     */
    findChorusBetween(startTime: number, endTime: number): IRepetitiveSegment;
    /**
     * 楽曲中のビートに関する情報を取得する
     *
     * Get beats in the current song
     * @returns ビート情報（見つからなければ空の配列）
     */
    getBeats(): IBeat[];
    /**
     * 指定された位置のビート情報を取得する
     *
     * Find beat that overlaps with the specified timing
     * @param time - 位置 [ms] / Position [ms]
     * @param options - 探索オプション / Optional parameters for finding beat
     * @returns ビート情報（見つからなければ `null`）
     */
    findBeat(time: number, options?: PlayerFindOptions): IBeat;
    /**
     * 楽曲中のコード進行に関する情報を取得する
     *
     * Get chord info in the current song
     * @returns コード進行の情報（見つからなければ空の配列）
     */
    getChords(): IChord[];
    /**
     * 指定された位置のコード進行を取得する
     *
     * Find chord that overlaps with the specified timing
     * @param time - 位置 [ms] / Position [ms]
     * @param options - 探索オプション / Optional parameters for finding chord
     * @returns コード進行（見つからなければ `null`）
     */
    findChord(time: number, options?: PlayerFindOptions): IChord;
    
    /**
     * 指定された位置の声量を取得する
     *
     * Get vocal amplitude at the specified timing
     * @param time - 位置 [ms] / Position [ms]
     * @returns 声量
     */
    getVocalAmplitude(time: number): number;
    /**
     * 楽曲中の最大声量を取得する
     *
     * Get maximum vocal amplitude
     * @returns 最大声量
     */
    getMaxVocalAmplitude(): number;
    /**
     * 指定された位置のV/A空間中の座標を取得する
     *
     * Get valence arousal value at the specified timing
     * @param time - 位置 [ms] / Position [ms]
     * @returns 座標値
     */
    getValenceArousal(time: number): ValenceArousalValue;
    /**
     * V/A空間中の座標遷移の中央値を取得する
     *
     * Get median valence arousal value throughout the song
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
 * TextAlive アプリの情報
 *
 * TextAlive app information
 * @public
 */
export declare interface IPlayerApp {
    /**
     * TextAlive アプリのオプション
     *
     * TextAlive app options
     */
    readonly options: PlayerAppOptions;
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
     * クエリパラメタなどによりホストから指定されている再生対象の楽曲URL
     *
     * Song url specified by the query parameter or updated by the media message
     */
    readonly songUrl: string;
    /**
     * クエリパラメタなどによりホストから指定されている楽曲データの読み込みオプション
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
}

/**
 * TextAlive の各種APIアクセスを司るマネージャのコレクションです。
 *
 * TextAlive manager instances.
 * @public
 */
export declare interface IPlayerManagers {
    asset?: IBackgroundPlayer;
    endpoint?: IEndpointManager;
    lyrics?: ILyricsPlayer;
    song?: ISongPlayer;
    template?: ITemplateManager;
    text?: ITextPlayer;
    font?: IFontInfoManager;
    user?: IUserManager;
    video?: IVideoPlayer;
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
 * @public
 */
export declare interface IRenderingUnit extends TimedObject {
    /**
     * このプロパティに関数が定義されているとき、 TextAlive の通常動作（割り当て済みテンプレートの `animate` 関数を呼ぶ）はスキップされ、この関数が呼ばれる
     *
     * When `animate` function is defined, TextAlive default behavior (call `animate` functions of all assigned template instances) is suppressed and this function is called instead
     */
    animate: RenderingUnitFunction;
    readonly parent: IRenderingUnit;
    readonly children: IRenderingUnit[];
    readonly previous: IRenderingUnit;
    readonly next: IRenderingUnit;
    readonly duration: number;
    
    
    
    
    progress(time: number): number;
    
    
    
    
    
    
    getType(): number;
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

declare interface ISongInfoLoader {
    loadVocalAmplitude(identifier: number | string): Promise<VocalAmplitude>;
    loadValenceArousal(identifier: number | string): Promise<ValenceArousal>;
}

declare interface ISongLoader {
    load(q: {
        id?: number;
        code?: string;
        songPath?: string;
    }): Promise<SongleSong>;
    loadInfo(identifier: number | string, options?: {
        revisions?: SongMapRevisions;
    }): Promise<SongInfo>;
    loadDetailInfo(identifier: number | string, options?: {
        revisions?: SongMapRevisions;
    }): Promise<SongInfo>;
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

declare type ISongPlayer = ISongURLManager & ISongLoader & ISongInfoLoader;

declare interface ISongURLManager {
    getSongPathFromUrl(url: string): string;
    isUploaderUrl(url: string): boolean;
    isUploaderPath(path: string): boolean;
    getUploaderGuid(path: string): string;
    getSongUrlFromUploaderGuid(guid: string): string;
    getSongUrlFromPath(path: string): string;
    isYouTubeUrl(url: string): boolean;
    isNicovideoUrl(url: string): boolean;
    isVideoSiteUrl(url: string): boolean;
    isPiaproUrl(url: string): boolean;
}

/**
 * 文字列がBase64エンコードされたデータURLかどうか判別
 *
 * Detect whether the specified string represents a data URL that encodes UTF-8 string in Base64 format
 * @param url - URL
 * @public
 */
export declare function isStringEncodedDataUrl(url: string): boolean;

declare interface ITemplate {
    templateClass: ITemplateClass;
    templateInstance: any;
    unsafeTemplateInstance: Function;
    ignore: boolean;
    assignedUnit: IRenderingUnit;
}

declare interface ITemplateClass {
    className: string;
    id: number;
    script: string;
}

declare interface ITemplateInfoManager {
    create(request: TemplateCreateRequest): Promise<TemplateCreateResponse>;
    listContributors(className: string, templateId: number): Promise<UserEntry[]>;
}

declare interface ITemplateInterpreter {
    verbose: boolean;
    readonly ready: boolean;
    readonly loaded: {
        [s: string]: ITemplateClass;
    };
    getById(id: number): ITemplateClass;
    getByName(className: string, ignoreVersion?: boolean): ITemplateClass;
    loadById(id: number): Promise<ITemplateClass>;
    loadByName(className: string): Promise<ITemplateClass>;
    loadByNames(classNames: string[]): Promise<ITemplateClass[]>;
    loadForVideo(videoId: number): Promise<ITemplateClass[]>;
    register(model: TemplateEntry): Promise<ITemplateClass>;
    createClass(script: string): ITemplateClass;
    updateClassScript(oldClass: ITemplateClass, script: string): ITemplateClass;
    commit(templateClass: ITemplateClass, log?: string): Promise<TemplateCreateResponse>;
    exportInstance(instance: ITemplate): TemplateData;
    importInstance(data: TemplateData): ITemplate;
    importInstances(video: IVideo, data: VideoData): boolean;
    newInstance(templateClass: ITemplateClass): ITemplate;
    disposeInstance(instance: ITemplate): void;
    disposeInstances(instances: ITemplate[] | IVideo): void;
    setTemplate(unit: IRenderingUnit, template: ITemplate): void;
    clearTemplate(unit: IRenderingUnit): void;
    getRequiredTemplates(script: string): string[];
    getRequiredTemplateAt(script: string, index: number): string;
    exec(template: ITemplate, funcName: string, parameters: ParameterValue[]): any;
    setProperty(instance: ITemplate, name: string, value: ParameterValue): void;
    getProperty(instance: ITemplate, name: string): ParameterValue;
}

declare interface ITemplateLoader {
    list(options?: TemplateListRequest): Promise<TemplateListResponse>;
    load(templateId: number): Promise<TemplateEntry>;
    loadByName(templateName: string): Promise<TemplateEntry>;
    loadForVideo(videoId: number, params?: {
        withoutAuthors: boolean;
        withScript: boolean;
    }): Promise<TemplateList>;
}

declare type ITemplateManager = ITemplateLoader & ITemplateInfoManager;

declare interface ITextParser {
    parse(text: string): Promise<TextParsingResponse>;
}

declare type ITextPlayer = ITextParser;

/**
 * @public
 */
export declare interface ITextUnit extends IRenderingUnit {
    readonly text: string;
    color: IColor;
    font: IFont;
    fontFamily: string;
    fontStyle: string;
    fontSize: number;
    readonly advance: number;
    readonly ascent: number;
    readonly descent: number;
    readonly height: number;
}

declare interface IUserActionManager {
    getProfile(): Promise<UserProfile>;
    doGetProfile(): Promise<UserProfile>;
    getToken(): Promise<string>;
    doGetToken(): Promise<string>;
    getMergingUsers(): Promise<UserEntry[]>;
    mergeUsers(): Promise<UserEntry>;
    authenticate(userId: number, password: string): Promise<UserProfile>;
}

declare interface IUserBrowserActionManager {
    loginTwitter(ev?: MouseEvent): false;
    loginGitHub(ev?: MouseEvent): false;
    loginYouTube(ev?: MouseEvent): false;
    loginPiapro(ev?: MouseEvent): false;
    loginSongle(ev?: MouseEvent): false;
    login(ev?: MouseEvent, provider?: AccountService): false;
    logoutTwitter(ev?: MouseEvent): false;
    logoutGitHub(ev?: MouseEvent): false;
    logoutYouTube(ev?: MouseEvent): false;
    logoutPiapro(ev?: MouseEvent): false;
    logoutSongle(ev?: MouseEvent): false;
    logout(ev?: MouseEvent, provider?: AccountService): false;
}

declare interface IUserEventManager {
    readonly userProfile: UserProfile;
    isLoading(): boolean;
    addListener(listener: UserListener): void;
    removeListener(listener: UserListener): void;
}

declare type IUserManager = IUserTypeManager & IUserActionManager & IUserBrowserActionManager & IUserSpoofingManager & IUserEventManager;

declare interface IUserSpoofingManager {
    spoof(userProfile: UserProfile): void;
    isSpoofingSongleUser(profile: UserProfile): boolean;
}

declare interface IUserTypeManager {
    isYouTubeUser(profile: UserProfile): boolean;
    isPiaproUser(profile: UserProfile): boolean;
    isSongleUser(profile: UserProfile): boolean;
}

/**
 * @public
 */
export declare interface IVideo {
    readonly phrases: IPhrase[];
    readonly graphics: IGraphic[];
    
    duration: number;
    readonly startTime: number;
    readonly endTime: number;
    readonly phraseCount: number;
    readonly graphicCount: number;
    readonly wordCount: number;
    readonly charCount: number;
    readonly firstPhrase: IPhrase;
    readonly firstWord: IWord;
    readonly firstChar: IChar;
    readonly firstGraphic: IGraphic;
    readonly lastPhrase: IPhrase;
    readonly lastWord: IWord;
    readonly lastChar: IChar;
    readonly lastGraphic: IGraphic;
    findIndex(unit: IRenderingUnit): number;
    findPhrase(time: number, options?: FindTimedObjectOptions): IPhrase;
    findWord(time: number, options?: FindTimedObjectOptions): IWord;
    findChar(time: number, options?: FindTimedObjectOptions): IChar;
    findGraphic(time: number, options?: FindTimedObjectOptions): IGraphic;
    getPhrase(index: number): IPhrase;
    getWord(index: number): IWord;
    getChar(index: number): IChar;
    getGraphic(index: number): IGraphic;
}

declare interface IVideoLoader {
    load(videoId: number): Promise<VideoEntry>;
}

declare type IVideoPlayer = IVideoLoader;

/**
 * @public
 */
export declare interface IWord extends ITextUnit {
    readonly parent: IPhrase;
    readonly children: IChar[];
    readonly previous: IWord;
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
    findIndex(unit: ITextUnit): number;
}

/**
 * @param t - Timing [0, 1]
 */
declare function linear(t: number): number;

declare interface ListSimpleRequest {
    lastIndex?: number;
    startIndex?: number;
}

declare interface ListSimpleResponse<T> {
    list: T[];
    nextStartIndex?: number;
    nextLastIndex?: number;
}

/**
 * 読み込みルーチンに関するイベントのリスナ
 *
 * Event listener for various loading procedures
 * @public
 */
export declare type LoaderListener = DataLoaderListener & BackgroundGraphicsListener & TemplateListener;

/**
 * 歌詞発声タイミングの推定結果
 *
 * Results of lyrics timing estimation
 */
declare interface Lyrics {
    /** 歌詞発声タイミングの推定ID / Lyrics timing estimation ID */
    id: number;
    /** 楽曲情報 / Song info */
    song: Song;
    /** Songle で推定中か否か / Processing status */
    processing: boolean;
    /** Songle での推定が失敗したか否か / Failure status */
    failed: boolean;
    /** 作成日時 / Created date */
    created_at: string;
    /** 更新日時 / Updated date */
    updated_at: string;
}

/**
 * 歌詞発声タイミングの訂正情報
 *
 * Lyrics diff information
 */
declare interface LyricsDiff {
    /** 歌詞発声タイミングの訂正ID / Lyrics diff ID */
    id: number;
    
    /** 更新日時 / Updated date */
    updated_at: string;
}

/**
 * 歌詞発声タイミングの詳細情報
 *
 * Detailed lyrics diff information
 * @public
 */
export declare interface LyricsDiffInfo {
    /**
     * 歌詞発声タイミングの訂正ID
     *
     * Lyrics diff ID
     */
    id: number;
    /**
     * 歌詞URL
     *
     * Lyrics url
     */
    url: string;
    
    
    
}

declare interface LyricsTiming {
    start_time: number;
    end_time: number;
}

/**
 * **Matrix2D**
 *
 * Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
 *
 * This matrix can be visualized as:
 *
 * 	[ a  c  tx
 * 	  b  d  ty
 * 	  0  0  1  ]
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
    /**
     * @inheritDoc
     */
    a: number;
    /**
     * @inheritDoc
     */
    b: number;
    /**
     * @inheritDoc
     */
    c: number;
    /**
     * @inheritDoc
     */
    d: number;
    /**
     * @inheritDoc
     */
    tx: number;
    /**
     * @inheritDoc
     */
    ty: number;
    /**
     * @param a - Specifies the a property for the new matrix.
     * @param b - Specifies the b property for the new matrix.
     * @param c - Specifies the c property for the new matrix.
     * @param d - Specifies the d property for the new matrix.
     * @param tx - Specifies the tx property for the new matrix.
     * @param ty - Specifies the ty property for the new matrix.
     */
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    /**
     * @inheritDoc
     */
    setValues(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix2D;
    /**
     * @inheritDoc
     */
    append(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
    /**
     * @inheritDoc
     */
    prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
    /**
     * @inheritDoc
     */
    appendMatrix(matrix: Matrix2D): Matrix2D;
    /**
     * @inheritDoc
     */
    prependMatrix(matrix: Matrix2D): Matrix2D;
    /**
     * @inheritDoc
     */
    appendTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX: number, regY: number): Matrix2D;
    /**
     * @inheritDoc
     */
    prependTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX: number, regY: number): Matrix2D;
    /**
     * @inheritDoc
     */
    rotate(angle: number): Matrix2D;
    /**
     * @inheritDoc
     */
    skew(skewX: number, skewY: number): Matrix2D;
    /**
     * @inheritDoc
     */
    scale(x: number, y: number): Matrix2D;
    /**
     * @inheritDoc
     */
    translate(x: number, y: number): Matrix2D;
    /**
     * @inheritDoc
     */
    identity(): Matrix2D;
    /**
     * @inheritDoc
     */
    invert(): Matrix2D;
    /**
     * @inheritDoc
     */
    isIdentity(): boolean;
    /**
     * @inheritDoc
     */
    equals(matrix: Matrix2D): boolean;
    /**
     * @inheritDoc
     */
    transformPoint(x: number, y: number, pt: Point): Point;
    /**
     * @inheritDoc
     */
    decompose(target?: DecomposedProps): DecomposedProps;
    /**
     * @inheritDoc
     */
    copy(matrix: Matrix2D): Matrix2D;
    /**
     * @inheritDoc
     */
    clone(): Matrix2D;
    /**
     * @inheritDoc
     */
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
 * **NullGraphicsDriver**
 *
 * デフォルトのグラフィックドライバ:
 *
 * - 何も描画しない
 * - TextAlive App 開発時などに利用される
 * - TextAlive 本サイトで利用している `canvas` 要素へ描画する機能を持ったドライバは現状非公開（利用したい場合は textalive-ml@aist.go.jp までご相談ください）
 *
 * A default graphic driver:
 *
 * - This driver does not render anything on canvas
 * - The driver is particularly useful when developing applications with TextAlive App API
 * - There exists an implementation that renders actual graphics on `canvas` elements but is not public; contact us at textalive-ml@aist.go.jp if interested
 * @public
 */
export declare class NullGraphicsDriver implements GraphicsDriver {
    width: 1280;
    height: 720;
    wrapperTable: {};
    isGraphics(): boolean;
    setCanvas(): Promise<void>;
    createRuntime(video: Video): Promise<RuntimeVideo>;
    reset(): void;
    update(): void;
    updateStageTx(): void;
}

/**
 * TextAlive アプリ、スタイル、テンプレートで調整可能なパラメタ値の型情報
 *
 * Type definition for parameter values that can be customized in TextAlive App, styles, and templates
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
 * TextAlive アプリ、スタイル、テンプレートで調整可能なパラメタ
 *
 * Parameters that can be customized in TextAlive App, styles, and templates
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
    params?: (boolean | number | string | [boolean | number | string, string?] | {
        [value: string]: string;
    })[];
    
    
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
 * @see {@link VideoEntry}
 * @public
 */
declare interface PartialVideoEntry {
    /**
     * 楽曲コード(ID) / Songle song code
     */
    songleCode?: string;
    /**
     * 歌詞ID / Lyrics ID
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

declare class Phrase extends TextUnit implements IPhrase {
    private _video;
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
    findIndex(unit: TextUnit): number;
    getType(): number;
}

/**
 * @public
 */
export declare interface PhraseData extends UnitData {
    words: WordData[];
}

/**
 * **TextAlive Player**
 *
 * TextAlive API を用いてプログラミングするときのエントリーポイント:
 *
 * - TextAlive の主要クラスの一つです
 * - 楽曲の音楽地図、歌詞テキスト、歌詞の発声タイミングなどを読み込む機能を持ちます
 * - 楽曲再生時の映像演出のプログラミングに必要な API を提供します
 *
 * This class serves as an entry point to its API:
 *
 * - One of the primary classes of TextAlive
 * - Song map, lyrics text, and its vocalized timing information are loaded within this class instance
 * - APIs useful for visual performance synchronized with music playback are provided through this class
 * @public
 */
export declare class Player implements IPlayer {
    /**
     * @inheritDoc
     */
    get options(): PlayerOptions;
    private _options?;
    /**
     * @inheritDoc
     */
    get app(): IPlayerApp;
    private _app;
    /**
     * Data managers
     */
    private managers;
    /**
     * @inheritDoc
     */
    get data(): IDataLoader;
    private _data;
    
    private _backgroundGraphics;
    /**
     * @inheritDoc
     */
    get video(): Video;
    private _video;
    
    private _templates;
    
    private _graphics;
    
    
    private _stageElement;
    
    
    /**
     * @inheritDoc
     */
    get mediaElement(): HTMLElement;
    set mediaElement(element: HTMLElement);
    private _mediaElement;
    /**
     * @inheritDoc
     */
    get mediaPosition(): number;
    private _mediaPosition;
    /**
     * @inheritDoc
     */
    get videoPosition(): number;
    private _videoPosition;
    /**
     * @inheritDoc
     */
    get wait(): number;
    set wait(val: number);
    /**
     * @inheritDoc
     */
    get fps(): number;
    set fps(val: number);
    
    
    
    
    
    
    
    
    
    /**
     * @inheritDoc
     */
    get isPlaying(): boolean;
    
    /**
     * @inheritDoc
     */
    get isVideoSeeking(): boolean;
    private _isVideoSeeking;
    /**
     * Event emitter
     */
    private emitter;
    /**
     * Stage
     */
    private stage;
    /**
     * @inheritDoc
     */
    get timer(): Timer;
    private _timer;
    /**
     * @param options - プレイヤーの初期化オプション / player options
     * @see {@link IPlayer.options}
     */
    constructor(options?: PlayerOptions);
    private createDefaultTimer;
    private createDefaultGraphicsDriver;
    /**
     * @inheritDoc
     */
    addListener(listener: PlayerListener): void;
    /**
     * @inheritDoc
     */
    removeListener(listener: PlayerListener): boolean;
    
    
    /**
     * @inheritDoc
     */
    createFromSongUrl(songUrl: string, options?: PlayerVideoOptions): Promise<Video>;
    /**
     * @inheritDoc
     */
    createFromSongPath(songPath: string, options?: PlayerVideoOptions): Promise<Video>;
    
    
    /**
     * @inheritDoc
     */
    createFromText(text: string, options?: PlayerVideoOptions): Promise<Video>;
    /**
     * @inheritDoc
     */
    createFromJSON(json: VideoData, options?: PlayerVideoOptions): Promise<Video>;
    private finalize;
    private updateMediaPosition;
    
    /**
     * @inheritDoc
     */
    getChoruses(): IRepetitiveSegment[];
    /**
     * @inheritDoc
     */
    findChorus(time: number, options?: PlayerFindOptions): IRepetitiveSegment;
    /**
     * @inheritDoc
     */
    findChorusBetween(startTime: number, endTime: number): IRepetitiveSegment;
    /**
     * @inheritDoc
     */
    getBeats(): IBeat[];
    /**
     * @inheritDoc
     */
    findBeat(time: number, options?: PlayerFindOptions): IBeat;
    /**
     * @inheritDoc
     */
    getChords(): IChord[];
    /**
     * @inheritDoc
     */
    findChord(time: number, options?: PlayerFindOptions): IChord;
    
    /**
     * @inheritDoc
     */
    getVocalAmplitude(time: number): number;
    /**
     * @inheritDoc
     */
    getMaxVocalAmplitude(): number;
    /**
     * @inheritDoc
     */
    getValenceArousal(time: number): ValenceArousalValue;
    /**
     * @inheritDoc
     */
    getMedianValenceArousal(): ValenceArousalValue;
    
    
    
    /**
     * @deprecated Use of {@link Player.setMediaElement} is deprecated - set value with {@link IPlayer.mediaElement} property instead.
     */
    setMediaElement(element: HTMLElement): void;
    /**
     * @inheritDoc
     */
    setVideoPosition(position: number): Promise<number>;
    /**
     * @deprecated Use of {@link Player.setMediaPosition} is deprecated - request setting media position with {@link IPlayer.requestMediaSeek} instead.
     */
    setMediaPosition(position: number): Promise<void>;
    /**
     * @inheritDoc
     */
    requestPlay(): boolean;
    /**
     * @inheritDoc
     */
    requestStop(): boolean;
    /**
     * @inheritDoc
     */
    requestPause(): boolean;
    /**
     * @inheritDoc
     */
    requestMediaSeek(position: number): boolean;
    /**
     * @inheritDoc
     */
    startVideoSeek(): void;
    /**
     * @inheritDoc
     */
    endVideoSeek(): void;
    
    
    /**
     * @inheritDoc
     */
    requestStageUpdate(): Promise<number>;
    private onStageUpdate;
    /**
     * @inheritDoc
     */
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
 * TextAlive アプリ関連のイベント
 *
 * TextAlive app-related events
 * @public
 */
export declare interface PlayerAppListener {
    /**
     * TextAlive ホストとの接続時に呼ばれる
     *
     * Called when connection to a TextAlive host is established
     * @param app - TextAlive アプリのホストに関する情報 / TextAlive app host info
     */
    onAppReady?(app: IPlayerApp): void;
    /**
     * TextAlive アプリのパラメタが更新されたときに呼ばれる
     *
     * Called when a parameter value of TextAlive app is updated
     * @param name - パラメタ名 / Parameter name
     * @param value - パラメタ値 / Parameter value
     */
    onAppParameterUpdate?(name: string, value: ParameterValue): void;
    /**
     * TextAlive アプリの再生すべき楽曲URLが変更されたときに呼ばれる
     *
     * Called when a media URL to play is updated
     * @param songUrl - 楽曲URL / Song URL
     * @param videoPromise - 動画オブジェクトと {@link Timer} の準備が整ったときに解決される Promise オブジェクト / A promise to resolve after the video object and {@link Timer} gets ready
     */
    onAppMediaChange?(songUrl: string, videoPromise?: Promise<IVideo>): void;
}

/**
 * TextAlive アプリのオプション
 *
 * TextAlive app options
 * @public
 */
export declare interface PlayerAppOptions {
    /**
     * アプリの名前
     *
     * Name of this application
     */
    appName?: string;
    /**
     * アプリ作者の名前
     *
     * Name of the author of this application
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
 * TextAlive アプリ向けの楽曲データ読み込みオプション
 *
 * Options to load song data in TextAlive app
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

/**
 * TextAlive Player のイベントを発火するエミッタ
 */
declare class PlayerEventEmitter implements PlayerListener {
    private listeners;
    private throttledTimeUpdate;
    private throttleInterval;
    private position;
    constructor(options: PlayerOptions);
    onVideoLoad(video: VideoEntry, reason?: Error): void;
    onSongLoad(song: SongleSong, reason?: Error): void;
    onSongMapLoad(songMap: SongMap, reason?: Error): void;
    onSongInfoLoad(songInfo: SongInfo, reason?: Error): void;
    onVocalAmplitudeLoad(vocalAmplitude: VocalAmplitude, reason?: Error): void;
    onValenceArousalLoad(valenceArousal: ValenceArousal, reason?: Error): void;
    onLyricsLoad(lyrics: LyricsDiffInfo, reason?: Error): void;
    onTextLoad(text: string, reason?: Error): void;
    /**
     * Who emit this event? - PlayerApp.ts
     * @param app
     */
    onAppReady(app: IPlayerApp): void;
    /**
     * Who emit this event? - PlayerApp.ts
     * @param name
     * @param value
     */
    onAppParameterUpdate(name: string, value: ParameterValue): void;
    /**
     * Who emit this event? - PlayerApp.ts
     * @param songUrl
     * @param vieoPromise
     */
    onAppMediaChange(songUrl: string, videoPromise: Promise<IVideo>): void;
    /**
     * Who emit this event? - TemplateInterpreter.ts
     * @param template
     */
    onTemplateUpdate(template: string): void;
    /**
     * Who emit this event? - TemplateInterpreter.ts
     * @param template
     */
    onTemplateCommit(template: string): void;
    /**
     * Who emit this event? - TemplateInterpreter.ts
     * @param templates
     * @param reason
     */
    onTemplatesLoad(templates: string[], reason?: Error): void;
    /**
     * Who emit this event? - FontLoader.ts
     * @param fonts
     * @param reason
     */
    onFontsLoad(fonts: FontInfo[], reason?: FontLoadingError): void;
    /**
     * Who emit this event? - Player.ts
     * @param video
     */
    onVideoReady(video: IVideo): void;
    /**
     * Who emit this event? - Player.ts
     * @param timer
     */
    onTimerReady(timer: Timer): void;
    /**
     * Who emit this event? - Player.ts (after set by Player.tsx)
     * @param el
     */
    onStageElementSet(el: HTMLElement): void;
    /**
     * Who emit this event? - Player.ts (after set by Player.tsx)
     * @param el
     */
    onMediaElementSet(el: HTMLElement): void;
    /**
     * Who emit this event? - Player.ts (after Stage.ts update)
     * @param position
     */
    onTimeUpdate(position: number): void;
    onThrottledTimeUpdate(position: number): void;
    /**
     * Who emit this event? - BackgroundGraphicsLoader.ts
     * @param backgroundImage
     */
    onBackgroundGraphicsUpdate(backgroundImage: BackgroundImageAsset): void;
    /**
     * Who emit this event? - Player.ts
     * @param position
     */
    onMediaSeek(position: number): void;
    /**
     * Who emit this event? - Player.ts
     */
    onVideoSeekStart(): void;
    /**
     * Who emit this event? - Player.ts
     */
    onVideoSeekEnd(): void;
    /**
     * Who emit this event? - Player.ts
     * @param position
     */
    onVideoSeek(position: number): void;
    /**
     * Who emit this event? - Timer.ts
     */
    onPlay(): void;
    /**
     * Who emit this event? - Timer.ts
     */
    onPause(): void;
    /**
     * Who emit this event? - Timer.ts
     * @param position
     */
    onSeek(position: number): void;
    /**
     * Who emit this event? - Timer.ts
     */
    onStop(): void;
    /**
     * Who emit this event? - Player.ts
     */
    onDispose(): void;
    /**
     * Who emit this event? - Stage.tsx
     * @param size
     */
    onResize(size: PlayerSize): void;
    addListener(listener: PlayerListener): void;
    removeListener(listener: PlayerListener): boolean;
}

/**
 * TextAlive Player のイベント
 *
 * TextAlive Player events
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
     * ステージのサイズが変更されたときに呼ばれる
     *
     * Called when the stage size is updated
     * @param size - ステージのサイズ / Stage size
     */
    onResize?(size: PlayerSize): void;
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
 * TextAlive Player に関するさまざまなイベントのリスナ
 *
 * Event listener for TextAlive Player
 * @public
 */
export declare type PlayerListener = PlayerEventListener & PlayerAppListener & LoaderListener;

/**
 * {@link Timer} が音源の再生位置情報を更新する際に呼び出すコールバック関数の型情報
 *
 * Type definition for a callback function used by {@link Timer} to update the current music playback position
 * @public
 */
export declare type PlayerMediaPositionUpdateFunction = (position: number) => Promise<number>;

/**
 * TextAlive Player の初期化オプション
 *
 * @see {@link IPlayer}
 * @public
 */
export declare interface PlayerOptions {
    /**
     * TextAlive アプリの情報; このプロパティがセットされていると、再生メディアをURLのクエリパラメタから取得したり、アプリのホストとの接続を試みたりします。
     *
     * TextAlive app options. When this property is set, the player parses query string to gain initial media information and tries communicating with the app host.
     */
    app?: PlayerAppOptions | boolean;
    /**
     * TextAlive Player の音源の再生状態を管理する `Timer` インスタンスです。
     *
     * A timer instance that controls the player status.
     */
    timer?: Timer;
    
    
    
    /**
     * 音源メディアの配置先となるDOM要素; 音源を埋め込むコンテナとして利用されるDOM要素です。
     *
     * A HTML element to host media elements.
     */
    mediaElement?: HTMLElement;
    
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
     * 読み込むフォントの一覧を指定できます。 TextAlive 動画が読み込まれると、このオプションに限らず、動画中で利用されているフォントがすべて読み込まれます。 `null` が指定されると、利用可能なすべてのフォントが読み込まれます。
     *
     * A list of font families to load. When a video is loaded, fonts used in the video override the list. When `null` is set, all available fonts are loaded.
     *
     * @see {@link IFontLoader.listAvailableFonts}
     */
    fontFamilies?: string[];
    
    
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
 * TextAlive Player のサイズ
 *
 * TextAlive Player size
 * @public
 */
export declare interface PlayerSize {
    /**
     * 幅 / Width [px]
     */
    width: number;
    /**
     * 高さ / Height [px]
     */
    height: number;
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
    /**
     * @inheritDoc
     */
    x: number;
    /**
     * @inheritDoc
     */
    y: number;
    /**
     * @param x - X position.
     * @param y - Y position.
     */
    constructor(x?: number, y?: number);
    /**
     * @inheritDoc
     */
    setValues(x?: number, y?: number): Point;
    /**
     * @inheritDoc
     */
    copy(point: Point): Point;
    /**
     * @inheritDoc
     */
    clone(): Point;
    /**
     * @inheritDoc
     */
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

declare interface RenderingGraphics {
    clear(): void;
}

declare interface RenderingParameter {
    alpha: number;
    tx: Matrix2D;
    composite: string;
    visible: boolean;
    reset(): void;
}

declare class RenderingUnit implements IRenderingUnit {
    
    
    
    
    
    
    
    /**
     * @inheritDoc
     */
    animate: RenderingUnitFunction;
    get video(): Video;
    get parent(): RenderingUnit;
    get children(): RenderingUnit[];
    get previous(): RenderingUnit;
    get next(): RenderingUnit;
    get startTime(): number;
    get endTime(): number;
    get duration(): number;
    
    
    
    
    contains(time: number): boolean;
    overlaps(startTime: number, endTime: number): boolean;
    progress(time: number): number;
    
    
    
    
    
    
    
    
    
    private moveBackward;
    private moveForward;
    private moveWithChildren;
    
    
    
    
    
    
    getType(): number;
    toString(): string;
}

/**
 * @public
 */
export declare type RenderingUnitFunction = (now: number, u: IRenderingUnit) => void;

/**
 * サビなどの繰り返し区間の情報 / Repetitive segment info (e.g., chorus segment)
 */
declare class RepetitiveSegment extends SongMapElement implements IRepetitiveSegment {
    /**
     * @inheritDoc
     */
    startTime: number;
    /**
     * @inheritDoc
     */
    endTime: number;
    /**
     * @inheritDoc
     */
    previous: RepetitiveSegment;
    /**
     * @inheritDoc
     */
    next: RepetitiveSegment;
    /**
     * @inheritDoc
     */
    index: number;
    constructor();
}

declare interface RepetitiveSegments extends IRepetitiveSegments {
    /**
     * @inheritDoc
     */
    segments: RepetitiveSegment[];
}

declare interface RuntimeRenderingUnit {
    rendering: RenderingParameter;
    graphics: RenderingGraphics;
    update(): void;
}

declare interface RuntimeVideo {
    rendering: RenderingParameter;
    addGraphic(g: IGraphic): void;
    removeGraphic(g: IGraphic): void;
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
 * Songle 楽曲情報
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
     * - 演出に利用する値は必ず TextAlive Player から取得してください
     *
     * Song duration [s]
     *
     * - This value is error-prone
     * - Gain more precise value from TextAlive Player instance
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

declare interface SongAnalysis {
    beats: SongBeat[][];
    chords: SongChord[];
    repetitive_segment: SongRepetitiveSegment[];
    voice: SongVoice[][];
}

declare type SongBeat = [
/** startTime [s] */ number, 
/** ? */ number, 
/** length */ number, 
/** position */ number, 
/** ? */ number];

declare type SongChord = [
/** startTime [s] */ number, 
/** endTime [s] */ number, 
/** name */ string, 
/** ? */ any[]];

declare interface SongleBeat {
    bpm: number;
    index: number;
    number: number;
    numberOfBeatsPerBar: number;
    startTimeMs: number;
    startTimeSec: number;
    count: number;
    next: SongleBeat;
    prev: SongleBeat;
    start: number;
    startTime: number;
}

declare interface SongleBeatMap {
    offset: number;
    pollingInterval: number;
    revisionId: number;
}

declare interface SongleEventOptions {
    offset?: number;
}

declare interface SongleMedia {
    readonly player: SonglePlayer;
    readonly dispatcherName: string;
    readonly dispatcherType: string;
    readonly element: HTMLElement;
    readonly originalPlayer: any;
    readonly sourceUrl: string;
    readonly name: string;
    readonly artistId: number;
    readonly artistName: string;
    readonly isMounted: boolean;
    readonly isPlaying: boolean;
    readonly isSeeking: boolean;
    muted: boolean;
    volume: number;
    activate: Promise<void>;
    play(): void;
    seekTo(position: number): void;
    pause(): void;
    stop(): void;
    [key: string]: any;
}

declare interface SongleMediaObsoleteOptions {
    /** use altSourceUrl instead */
    src?: string;
    /** use element instead */
    rootElement?: HTMLElement | string;
    /** use controls instead */
    showCtrl?: boolean;
    /** use width instead */
    videoSizeW?: number;
    /** use height instead */
    videoSizeH?: number;
}

declare interface SongleMediaOptions extends SongleMediaObsoleteOptions {
    altSourceUrl?: string;
    element?: HTMLElement | string;
    controls?: boolean;
    width?: number;
    height?: number;
    endpointScheme?: string;
    endpointHost?: string;
    endpointPath?: string;
    headless?: boolean;
}

declare type SonglePlayer = SonglePlayerBase & (SonglePlayerWithSyncPlugin | SonglePlayerWithBeatPlugin | {
    [key: string]: any;
});

declare interface SonglePlayerBase {
    useMedia(target: string, options?: SongleMediaOptions): Promise<void>;
    cacheMedia(items: string[] | SongleMediaOptions[]): Promise<SongleMedia[]>;
    addPlugin(plugin: SonglePlugin): void;
    hasPlugin(name: string): boolean;
    dispose(): void;
    play(): void;
    pause(): void;
    seekTo(position: number): void;
    /** equivalent to calling seekTo(0) and pause() */
    stop(): void;
    position: number;
    readonly isPlaying: boolean;
    readonly isPaused: boolean;
    readonly isReady: boolean;
    readonly isSeeking: boolean;
    readonly media: SongleMedia;
    readonly mediaElement: HTMLElement;
    off(action: string, handler?: Function): void;
    on(action: "ready", listener: (ev: {
        target: SonglePlayer;
        type: "ready";
        data: {
            media: SongleMedia;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "play", listener: (ev: {
        target: SongleMedia;
        type: "play";
    }) => void, options?: SongleEventOptions): void;
    on(action: "pause", listener: (ev: {
        target: SongleMedia;
        type: "pause";
    }) => void, options?: SongleEventOptions): void;
    on(action: "finish", listener: (ev: {
        target: SongleMedia;
        type: "finish";
    }) => void, options?: SongleEventOptions): void;
    on(action: "mediaReady", listener: (ev: {
        target: SonglePlayerBase;
        type: "mediaReady";
        data: {
            media: SongleMedia;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "seek", listener: (ev: {
        target: SongleMedia;
        type: "seek";
        data: {
            mediaStateId: number;
            positionTime: number;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "mediaPlay", listener: (ev: {
        target: SongleMedia;
        type: "mediaPlay";
    }) => void, options?: SongleEventOptions): void;
    on(action: "mediaPause", listener: (ev: {
        target: SongleMedia;
        type: "mediaPause";
    }) => void, options?: SongleEventOptions): void;
    on(action: "mediaFinish", listener: (ev: {
        target: SongleMedia;
        type: "mediaFinish";
    }) => void, options?: SongleEventOptions): void;
    on(action: "mediaSeek", listener: (ev: {
        target: SongleMedia;
        type: "mediaSeek";
        data: {
            positionTime: number;
            seekTime: number;
        };
    }) => void, options?: SongleEventOptions): void;
}

declare interface SonglePlayerWithBeatPlugin {
    on(action: "beatEnter", listener: (ev: {
        target: SongleBeatMap;
        type: "beatEnter";
        data: {
            beat: SongleBeat;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "barEnter", listener: (ev: {
        target: SongleBeatMap;
        type: "barEnter";
        data: {
            beat: SongleBeat;
        };
    }) => void, options?: SongleEventOptions): void;
}

declare type SonglePlayerWithSyncPlugin = SonglePlayerBase & SongleSyncPluginBase & {
    on(action: "songleSyncPlaylistItemEnter", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncPlaylistItemEnter";
        data: {
            playlistItem: SonglePlaylistItem;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncPlaylistItemLeave", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncPlaylistItemLeave";
        data: {
            playlistItem: SonglePlaylistItem;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncPlaylistFinish", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncPlaylistFinish";
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncStageNodeChange", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncStageNodeChange";
        data: {
            stageActiveNodeCount: number;
            stageMasterNodeCount: number;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncStageNodeEnter", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncStageNodeEnter";
        data: {
            stageActiveNodeCount: number;
            stageMasterNodeCount: number;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncStageNodeLeave", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncStageNodeLeave";
        data: {
            stageActiveNodeCount: number;
            stageMasterNodeCount: number;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncStageStateChange", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncStageStateChange";
        data: {
            stageStateId: number;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncStageInitialAbsoluteStartTime", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncStageInitialAbsoluteStartTime";
        data: {
            stageInitialAbsoluteStartTime: number;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncStageAbsoluteStartTimeUpdate", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncStageAbsoluteStartTimeUpdate";
        data: {
            stageAbsoluteStartTime: number;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncStageAbsolutePauseTimeUpdate", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncStageAbsolutePauseTimeUpdate";
        data: {
            stageAbsolutePauseTime: number;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncMessage", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncMessage";
        data: {
            message: string;
        };
    }) => void, options?: SongleEventOptions): void;
    on(action: "songleSyncPlaylistUpdate", listener: (ev: {
        target: SongleSyncPlugin;
        type: "songleSyncPlaylistUpdate";
        data: {
            playlistItems: SonglePlaylistItem[];
        };
    }) => void, options?: SongleEventOptions): void;
};

declare interface SonglePlaylistItem extends SonglePlaylistItemBase {
    readonly index: number;
    /** @alias relativeStartTimeMs */
    readonly relativeStartTime: number;
    relativeStartTimeMs: number;
    /** @alias relativeEndTimeMs */
    readonly relativeEndTime: number;
    relativeEndTimeMs: number;
    /** @alias durationTimeMs */
    readonly durationTime: number;
    durationTimeMs: number;
    /** @alias mediaRelativeStartTimeMs */
    readonly startTime: number;
    /** @alias mediaRelativeStartTimeMs */
    readonly mediaRelativeStartTime: number;
    mediaRelativeStartTimeMs: number;
    /** @alias mediaRelativeEndTimeMs */
    readonly endTime: number;
    /** @alias mediaRelativeEndTimeMs */
    readonly mediaRelativeEndTime: number;
    mediaRelativeEndTimeMs: number;
    /** @alias mediaDurationTimeMs */
    readonly mediaDurationTime: number;
    mediaDurationTimeMs: number;
    readonly next: SonglePlaylistItem;
    readonly prev: SonglePlaylistItem;
    [key: string]: any;
}

declare interface SonglePlaylistItemBase {
    mediaSourceUrl: string;
    mediaRelativeStartTime?: number;
    headless?: boolean;
}

declare interface SonglePlugin {
    dispatcherName: string;
}

declare interface SongleSyncPlugin extends SonglePlugin, SongleSyncPluginBase {
    readonly clockWorker: any;
    readonly stageWorker: any;
    readonly stateWorker: any;
    readonly historyWorker: any;
    readonly stageId: number;
}

declare interface SongleSyncPluginBase {
    readonly stageActiveNodeCount: number;
    readonly stageMasterNodeCount: number;
    readonly stageStateId: number;
    readonly stageIsStopped: boolean;
    readonly stageIsPlaying: boolean;
    readonly stageIsPaused: boolean;
    readonly initialAbsoluteStartTime: number;
    readonly stageAbsoluteStartTime: number;
    readonly stageAbsolutePauseTime: number;
    readonly nodeId: string;
    nodeTimeoutSec: number;
    readonly accessToken: string;
    readonly secretToken: string;
    readonly isMaster: boolean;
    readonly isSlave: boolean;
    readonly localAbsoluteClockTime: number;
    localAbsoluteClockJitterTime: number;
    readonly message: string;
    readonly playlist: {
        absoluteStartTime: number;
        durationTime: number;
        positionTime: number;
        currentItem: SonglePlaylistItem;
        items: SonglePlaylistItem[];
    };
    seekPlaylistTo(milliseconds: number): void;
    seekPlaylistPositionTo(milliseconds: number): void;
    seekToPrevPlaylistItem(): void;
    seekToNextPlaylistItem(): void;
    sync(options: {
        nodeTimeoutSec?: number;
        stateId?: number;
        absoluteStartTime?: number;
        absoluteStartTimeOffset?: number;
        absolutePauseTime?: number;
        absolutePauseTimeOffset?: number;
    }): Promise<void>;
    setPlaylist(playlist: string | SonglePlaylistItemBase | SonglePlaylistItemBase[]): void;
    setMessage(message: string): Promise<any>;
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
 * @see {@link http://api.songle.jp/}
 * @public
 */
export declare class SongleTimer implements Timer {
    private options;
    private emitter;
    private updateMediaPosition;
    private player;
    private _songlePlayer;
    private stopping;
    wait: number;
    constructor(options?: SongleTimerOptions);
    /**
     * Songleのプレイヤーインスタンスです。
     *
     * @see {@link https://api.songle.jp/references/javascript#Player}
     */
    get songlePlayer(): SonglePlayer;
    /**
     * @inheritDoc
     */
    get isPlaying(): boolean;
    /**
     * @inheritDoc
     */
    get position(): number;
    /**
     * @inheritDoc
     */
    initialize({ player, updater, emitter, altSourceUrl: altUrl }: TimerInitOptions): Promise<void>;
    private initializeSonglePlayer;
    /**
     * @inheritDoc
     */
    play(): void;
    /**
     * @inheritDoc
     */
    stop(): void;
    /**
     * @inheritDoc
     */
    pause(): void;
    /**
     * @inheritDoc
     */
    seek(time: number): void;
    private handler;
    private lastPosition;
    private lastTime;
    private elapsedTimes;
    private startPolling;
    private stopPolling;
    /**
     * @inheritDoc
     */
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
     * 楽曲の詳細情報が読み込まれたときに呼ばれる
     *
     * Called when detailed song info is loaded
     * @param songInfo - 楽曲の詳細情報 / Detailed song info
     * @param reason - 失敗したときの理由 / Reason for failures (if any)
     * @deprecated Use {@link SongLoaderListener.onSongMapLoad} instead
     */
    onSongInfoLoad?(songInfo: SongInfo, reason?: Error): void;
    /**
     * 声量の情報が読み込まれたときに呼ばれる
     *
     * Called when vocal amplitude is loaded
     * @param vocalAmplitude - 声量の情報
     * @param reason - 失敗したときの理由 / Reason for failures (if any)
     */
    onVocalAmplitudeLoad?(vocalAmplitude: VocalAmplitude, reason?: Error): void;
    /**
     * V/A空間の情報が読み込まれたときに呼ばれる
     *
     * Called when valence arousal info is loaded
     * @param valenceArousal - V/A空間の情報
     * @param reason - 失敗したときの理由 / Reason for failures (if any)
     */
    onValenceArousalLoad?(valenceArousal: ValenceArousal, reason?: Error): void;
}

/**
 * 音楽地図の情報
 *
 * Song map info
 */
declare class SongMap implements ISongMap {
    /**
     * @inheritDoc
     */
    readonly beats: Beat[];
    /**
     * @inheritDoc
     */
    readonly chords: Chord[];
    /**
     * @inheritDoc
     */
    readonly segments: RepetitiveSegments[];
    
    get revisions(): {
        chordId?: number;
        beatId?: number;
        repetitiveSegmentId?: number;
    };
    private _revisions;
    constructor({ analysis: data, info }: SongInfo);
    private parseBeats;
    private parseChords;
    private parseSegments;
    private parseVoice;
}

declare abstract class SongMapElement implements TimedObject {
    /**
     * @inheritDoc
     */
    abstract startTime: number;
    /**
     * @inheritDoc
     */
    abstract endTime: number;
    /**
     * @inheritDoc
     */
    get duration(): number;
    /**
     * @inheritDoc
     */
    contains(time: number): boolean;
    /**
     * @inheritDoc
     */
    overlaps(startTime: number, endTime: number): boolean;
    /**
     * @inheritDoc
     */
    progress(time: number): number;
}

declare interface SongMapRevisions {
    chord?: number;
    beat?: number;
    chorus?: number;
}

declare interface SongMeta {
    /**
     * @deprecated
     */
    songId: number;
    offset: number;
    length: number;
    recognitionId: number;
    beatRevisionId: number | null;
    chordRevisionId: number | null;
    chorusRevisionId: number | null;
    rmsAmplitude: number;
    keyFrames: number[];
    name: string;
    path: string;
    code: string;
}

declare interface SongRepetitiveSegment {
    index: number;
    chorus: boolean;
    segment_length: number;
    start_frames: number[];
}

/**
 * Songle での解析状況
 *
 * Songle analysis status
 * @public
 */
export declare interface SongStatus {
    /**
     * ビート
     *
     * Beat
     */
    beats: boolean;
    /**
     * コード進行
     *
     * Chord
     */
    chords: boolean;
    /**
     * 繰り返し区間
     *
     * Repetitive segments
     */
    choruses: boolean;
    
    /**
     * V/A空間の座標値
     *
     * Valence arousal data
     */
    av: boolean;
    
    /**
     * 歌詞
     *
     * Lyrics
     */
    lyrics: boolean;
}

declare type SongVoice = [[/** current f0 */ number, /** initially recognized f0 */ number], 
/** number of frames (10 [ms] per each frame) */ number];

/**
 * 二分探索
 *
 * Binary search
 * @param array - 順序付き配列 / Sorted array of objects
 * @param obj - 配列中のインデックスを探索するオブジェクト / Object to find an appropriate index
 * @param accessor - オブジェクトの数値表現を返す関数 / Accessor function that returns numeric representation of the object
 * @returns オブジェクトを挿入すべき位置のインデックス / An appropriate index value in the sorted array to insert the object
 * @public
 */
export declare function sortedIndex<T>(array: T[], obj: T | number, accessor?: (obj: T) => number): number;

/**
 * 文字列をBase64エンコードしてデータURLとして取得する
 *
 * Encode UTF-8 string in Base64 format and prepend data URL header
 * @param text - UTF-8 string
 * @public
 */
export declare function stringToDataUrl(text: string): string;

declare interface TemplateCreateRequest {
    sourceId?: number;
    script: string;
    log?: string;
}

declare interface TemplateCreateResponse {
    success: boolean;
    /** Template ID (when succeeded) */
    id?: number;
    /** general server-side error */
    error?: "database error" | "template type not specified" | "failed looking up source template from the database" | "script not modified";
    /** JavaScript parser error */
    parseErrors?: {
        param: string;
        msg: string;
        loc?: {
            line: number;
            column: number;
        };
    }[];
}

declare interface TemplateEntry {
    id: number;
    type: number;
    sourceId: number;
    className: string;
    prettyName?: string;
    script?: string;
    log?: string;
    author: UserEntry;
    originalAuthor: UserEntry;
    createdDate: string;
}

declare class TemplateInterpreter implements ITemplateInterpreter {
    private _emitter;
    private _player;
    private interpreter;
    private loader;
    private unsafeAcceleration;
    private _verbose;
    get verbose(): boolean;
    set verbose(value: boolean);
    rawConsole: boolean;
    private unsafeGlobalScope;
    get ready(): boolean;
    get loaded(): {
        [s: string]: ITemplateClass;
    };
    constructor(player: Player, emitter: PlayerEventEmitter, unsafeAcceleration: boolean);
    private initialize;
    getByName(name: string, ignoreVersion?: boolean): ITemplateClass;
    getById(id: number): ITemplateClass;
    clear(): void;
    loadLatest(maxResults?: number): Promise<string[]>;
    loadForVideo(videoId: number): Promise<ITemplateClass[]>;
    loadByNames(templateNames: string[]): Promise<ITemplateClass[]>;
    loadByName(templateName: string): Promise<ITemplateClass>;
    loadById(templateId: number): Promise<ITemplateClass>;
    commit(templateClass: ITemplateClass, log?: string): Promise<TemplateCreateResponse>;
    register(model: TemplateEntry): Promise<ITemplateClass>;
    updateClassScript(oldClass: ITemplateClass, script: string): ITemplateClass;
    registerClass(newClass: ITemplateClass): ITemplateClass;
    private updateClass;
    private updateInstances;
    createClass(script: string): ITemplateClass;
    private getGlobalProperties;
    newRawInstance(templateClass: ITemplateClass): ITemplate;
    setProperty(instance: ITemplate, name: string, value: ParameterValue): void;
    getProperty(instance: ITemplate, name: string): ParameterValue;
    exportInstance(instance: ITemplate): TemplateData;
    importInstances(video: IVideo, data: VideoData): boolean;
    private importTemplates;
    importInstance(data: TemplateData): ITemplate;
    private updateInstance;
    newInstance(t: ITemplateClass): ITemplate;
    private attachGetAssignedUnitMethod;
    disposeInstance(instance: ITemplate): void;
    disposeInstances(instances: ITemplate[] | IVideo): void;
    setTemplate(u: IRenderingUnit, t: ITemplate): void;
    clearTemplate(u: IRenderingUnit): void;
    removeTemplateAt(u: IRenderingUnit, i: number): void;
    removeTemplates(u: IRenderingUnit): void;
    getRequiredTemplates(script: string): string[];
    getRequiredTemplateAt(script: string, index: number): string;
    exec(instance: ITemplate, funcName: string, parameters: any[]): any;
    declareVariable(template: ITemplateClass, label: string, variableType: string, options: any): ITemplateClass;
    private onVideoReady;
}

declare interface TemplateList {
    list: TemplateEntry[];
}

/**
 * テンプレートプログラミングに関するイベントのリスナ
 *
 * Event listener for template editing
 * @public
 */
declare interface TemplateListener {
    
    
    
}

declare interface TemplateListRequest extends ListSimpleRequest {
    maxResults?: number;
    className?: string;
    script?: boolean;
    withoutAuthors?: boolean;
    withoutOriginalAuthors?: boolean;
}

declare type TemplateListResponse = ListSimpleResponse<TemplateEntry>;

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
    onLyricsLoad?(lyrics: LyricsDiffInfo, reason?: Error): void;
    /**
     * 歌詞テキストが読み込まれたときに呼ばれる
     *
     * Called when lyrics text is loaded
     * @param lyricsText - 歌詞テキスト
     * @param reason - 失敗したときの理由 / Reason for failures (if any)
     */
    onTextLoad?(lyricsText: string, reason?: Error): void;
}

declare interface TextParsingResponse {
    status: "success" | "error";
    result?: WordParsingResponse[][];
    error?: string;
}

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
 * @public
 */
export declare interface TimedObject {
    startTime: number;
    endTime: number;
    contains(time: number): boolean;
    overlaps(startTime: number, endTime: number): boolean;
}

/**
 * **Timer**
 *
 * TextAlive Player の音源の再生状態を管理するクラスが実装するインタフェースです。
 *
 * Classes that manage music playback for TextAlive Player should implement this interface.
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
     * TextAlive には他にも再生位置を返すAPIが以下の2種類用意されていますが、実装手法の違いにより、このAPIが常に最も精確な値を返します。
     *
     * - {@link IPlayer.mediaPosition} は `Timer` 実装クラスによって定期的に更新されます
     * - {@link IPlayer.videoPosition} は TextAlive Player が定期的に呼び出す {@link IRenderingUnit.animate} が成功してから更新されます
     *
     * このAPIを利用するアプリでは、動画のシーク操作に対応するために {@link PlayerEventListener.onVideoSeekStart} {@link PlayerEventListener.onVideoSeek} {@link PlayerEventListener.onVideoSeekEnd} イベントを適切にハンドルする必要があります。
     *
     * **Current playback position [ms]**
     *
     * `Timer` implementations need to calculate this property value in real time.
     * While TextAlive also has the following APIs to retrieve the current playback position, this one returns the most precise value at any time.
     *
     * - {@link IPlayer.mediaPosition} is updated by `Timer` implementations periodically
     * - {@link IPlayer.videoPosition} is updated by TextAlive Player after the periodic call to {@link IRenderingUnit.animate}
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
     * TextAlive Player インスタンス
     *
     * TextAlive Player instance
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
declare interface UnitData {
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
 * TextAlive user information
 */
declare interface UserEntry {
    id?: number;
    name?: string;
    displayName?: string;
    photoUrl?: string;
    language?: string;
    twitterId?: number;
    twitterName?: string;
    twitterDisplayName?: string;
    twitterPhotoUrl?: string;
    githubId?: number;
    githubName?: string;
    githubDisplayName?: string;
    githubPhotoUrl?: string;
    youtubeIdString?: string;
    youtubeName?: string;
    youtubeDisplayName?: string;
    youtubePhotoUrl?: string;
    youtubeAccessToken?: string;
    youtubeRefreshToken?: string;
    piaproIdString?: string;
    piaproName?: string;
    piaproDisplayName?: string;
    piaproPhotoUrl?: string;
    songleUserId?: number;
    songleUserName?: string;
    songleAccessToken?: string;
    songleRefreshToken?: string;
    createdDate?: string;
    updatedDate?: string;
}

declare interface UserListener {
    onUserProfileUpdated?: (user: UserProfile) => void;
    onUserMergeRequired?: (user: UserEntry, mergeWith: UserEntry) => void;
    onUserMerged?: (user: UserEntry) => void;
    onUserLoggedIn?: (user: UserEntry) => void;
    onUserLoggedOut?: () => void;
}

/**
 * TextAlive user profile
 */
declare interface UserProfile {
    user: UserEntry;
    status: {
        merged?: number;
        deleted?: number;
        token?: string;
    };
}

declare interface ValenceArousalUnit extends ValenceArousalValue {
    /** Time */
    t: [number, number];
}

/**
 * V/A空間の座標値
 *
 * Valence arousal data
 * @public
 */
export declare interface ValenceArousalValue {
    /**
     * 感情価
     *
     * Valence
     */
    v: number;
    /**
     * 覚醒度
     *
     * Arousal
     */
    a: number;
}

declare class Video implements IVideo {
    private data;
    
    get phrases(): Phrase[];
    private _phrases;
    get graphics(): Graphic[];
    private _graphics;
    
    set duration(duration: number);
    get duration(): number;
    get startTime(): number;
    get endTime(): number;
    get phraseCount(): number;
    get graphicCount(): number;
    get wordCount(): number;
    get charCount(): number;
    get firstPhrase(): Phrase;
    get lastPhrase(): Phrase;
    get firstWord(): Word;
    get lastWord(): Word;
    get firstChar(): Char;
    get lastChar(): Char;
    get firstGraphic(): Graphic;
    get lastGraphic(): Graphic;
    constructor(data: VideoData);
    /**
     * Create RenderingUnit objects
     */
    private createUnits;
    /**
     * expand timing information of undefined chars
     */
    private organizeTimings;
    exportData(mgr: ITemplateInterpreter): VideoData;
    private static exportUnitData;
    
    private static updateTemplateDataForUnits;
    addPhrase(phrase: Phrase): void;
    addGraphic(graphic: Graphic): void;
    removeGraphic(graphic: Graphic): boolean;
    removeGraphics(): void;
    private expandTime;
    findIndex(unit: RenderingUnit): number;
    getPhrase(index: number): Phrase;
    getGraphic(index: number): Graphic;
    getWord(index: number): Word;
    getChar(index: number): Char;
    /**
     * Get character object in the current video
     * @param time - position [ms]
     * @param options - optional parameters for finding character
     */
    findChar(time: number, options?: FindTimedObjectOptions): Char;
    /**
     * Get word object in the current video
     * @param time - position [ms]
     * @param options - optional parameters for finding word
     */
    findWord(time: number, options?: FindTimedObjectOptions): Word;
    /**
     * Get phrase object in the current video
     * @param time - position [ms]
     * @param options - optional parameters for finding phrase
     */
    findPhrase(time: number, options?: FindTimedObjectOptions): Phrase;
    /**
     * Get graphic object in the current video
     * @param time - position [ms]
     * @param options - optional parameters for finding graphic
     */
    findGraphic(time: number, options?: FindTimedObjectOptions): Graphic;
}

/**
 * @public
 */
export declare interface VideoData {
    startTime?: number;
    endTime?: number;
    duration?: number;
    phrases?: PhraseData[];
    graphics?: GraphicData[];
    
}

/**
 * TextAlive の動画データ
 * @public
 */
export declare interface VideoEntry {
    /**
     * 動画ID / Video ID
     */
    id: number;
    /**
     * 派生元動画ID / Original video ID
     */
    sourceId: number;
    /**
     * 派生元（最古）動画ID / Original video ID (oldest)
     */
    sourceOriginId: number;
    
    /**
     * 楽曲コード(ID) / Songle song code
     */
    songleCode?: string;
    /**
     * 歌詞ID / Lyrics ID
     */
    lyricId: number;
    /**
     * 歌詞訂正ID / Lyrics diff ID
     */
    lyricDiffId: number;
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
     * 動画タイトル / Video title
     */
    title: string;
    /**
     * 動画の更新履歴コメント / Video edit log
     */
    log: string;
    
    
    /**
     * 動画の実データ / Video data
     */
    json?: string | VideoData;
    
    /**
     * 動画制作者の情報 / Video author info
     */
    author: UserEntry;
    /**
     * 動画の作成日時 / Created date
     */
    createdDate: string;
    /**
     * 動画のアクセス数 / Access count
     */
    accessCount: number;
    
    /**
     * プライベート動画か否か / Whether this video is private or not
     */
    isPrivate?: boolean;
}

/**
 * @public
 */
export declare interface VideoEntryConfig extends VideoSizeConfig {
    /**
     * 長さ [ms]
     */
    duration?: number;
}

/**
 * Options for exporting video object
 */
declare interface VideoExportOptions {
    /**
     * @deprecated This value defaults to false and is no longer needed for newer TextAlive clients
     */
    legacyStringMode?: boolean;
}

/**
 * @public
 */
export declare interface VideoLoaderListener {
    /**
     * 動画データが読み込まれたときに呼ばれる
     *
     * Called when video data is loaded
     * @param video - 動画データ / Video data
     * @param reason - 失敗したときの理由 / Reason for failures (if any)
     */
    onVideoLoad?(video: VideoEntry, reason?: Error): void;
}

/**
 * @public
 */
export declare interface VideoSizeConfig {
    /**
     * 幅
     *
     * Width [px]
     */
    width?: number;
    /**
     * 高さ
     *
     * Height [px]
     */
    height?: number;
    /**
     * マージン [上, 右, 下, 左]
     *
     * Margin [top, right, bottom, left]
     */
    margin?: [number, number, number, number];
}

declare class Voice extends SongMapElement implements IVoice {
    /**
     * @inheritDoc
     */
    startTime: number;
    /**
     * @inheritDoc
     */
    endTime: number;
    /**
     * @inheritDoc
     */
    f0: number;
    /**
     * @inheritDoc
     */
    initialF0: number;
    /**
     * @inheritDoc
     */
    previous: Voice;
    /**
     * @inheritDoc
     */
    next: Voice;
    /**
     * @inheritDoc
     */
    index: number;
    constructor();
}

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
    findIndex(unit: TextUnit): number;
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

declare interface WordParsingResponse {
    PoS: string;
    rawPoS: string;
    startPosition: number;
    endPosition: number;
    wordLength: number;
    language: "ja" | "en";
}

declare type WrapperTable = {
    [className: string]: new (...params: any[]) => any;
};

export { }

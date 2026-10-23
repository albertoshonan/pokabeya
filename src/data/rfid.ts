import { options, type OptionPlan } from "./rooms";

/**
 * RFIDセクションの表示内容。
 * 料金は rooms.ts の options を正とし、ここでは名前で引いて参照するだけにする
 * （部屋ページとトップのRFIDセクションで金額がズレないようにするため）
 */
/** サンプル動画。src / youtubeId が未設定のものはプレースホルダー枠として表示する */
export type RfidVideo = {
  /** 画面には出さない識別用ラベル（iframe の title にも使う） */
  title: string;
  /** public/ 配下の動画パス */
  src?: string;
  /** 再生前に出すサムネイル画像。未読込の動画を先に落とさせないために必須に近い */
  poster?: string;
  /** YouTube埋め込みの場合の動画ID（src より優先） */
  youtubeId?: string;
};

export type RfidMode = {
  /** rooms.ts の OptionPlan.name と一致させる */
  optionName: string;
  /** そのモードで画面に表示できる項目（①「表示可」） */
  displayItems: string[];
  /** 下部の詳細説明（②） */
  description: string;
  /** モードごとのサンプル動画（各2本） */
  videos: RfidVideo[];
};

export const rfidModes: RfidMode[] = [
  {
    optionName: "RFIDオートモード",
    displayItems: ["プレイヤーのハンド", "プレイヤーネーム", "現在の勝率及びアウツ"],
    description:
      "RFIDオートモードはプレイヤーネーム、シート番号、プレイヤーのハンド、勝率やアウツは表示されますが、ベット額、レイズ額、チップカウントなどは写りません。しかし！RFIDが気になる方や、初めてRFIDを使ってみるという方に最適のRFID体験オプションです！",
    videos: [
      {
        title: "RFIDオートモード サンプル1",
        src: "/videos/rfid-auto-1.mp4",
        poster: "/videos/rfid-auto-1.jpg",
      },
      {
        // 3カメオプション（ヘッズアップ時の画面分割）を使ったサンプル
        title: "RFIDオートモード サンプル2",
        src: "/videos/rfid-auto-2.mp4",
        poster: "/videos/rfid-auto-2.jpg",
      },
    ],
  },
  {
    optionName: "遠隔打ち込みモード",
    // TODO: 名称は変更の可能性あり（設計メモの鉛筆書き）
    displayItems: [
      "オートモードにて可能なもの",
      "ポジション（ボタン、SB、BB、COなど）",
      "ベットアクション及びベット額",
      "スターティングスタック",
      "ブラインド各種",
      "チップカウント、VPIP、アグレッション、ショーダウン率等",
    ],
    description:
      "RFID遠隔打ち込みモードは、RFIDオートモードで可能なことに加え、ディーラーとポカベヤスタッフが通話で繋がります。プレイヤーのアクションをポカベヤスタッフに伝えてもらうことで、ベット額、レイズ額、チップカウントなどが映像に出る、本格RFID体験ができるオプションです！VPIP、ショーダウン率、チップランキングなども表示可能です。そしてこのモードではトーナメントも可能になります！",
    videos: [
      {
        title: "遠隔打ち込みモード サンプル1",
        src: "/videos/rfid-remote-1.mp4",
        poster: "/videos/rfid-remote-1.jpg",
      },
      {
        // 3カメオプション（画面分割）を使ったサンプル
        title: "遠隔打ち込みモード サンプル2",
        src: "/videos/rfid-remote-2.mp4",
        poster: "/videos/rfid-remote-2.jpg",
      },
    ],
  },
];

/** サンプル動画の下に出す注記 */
export const rfidVideoNote = "※ 上の動画は3カメオプションでの動画になります。";

/** RFID3カメ利用オプション（ご希望のRFID料金に加算） */
export const rfidThreeCamOption = {
  name: "RFID3カメ利用オプション",
  addonPrice: 22000,
  description:
    "2つのカメラが交互にプレイヤーを映し出し、3つ目のカメラはボードを写します。ボードにカードが置かれた際のボードクローズアップ機能やヘッズアップ時の画面の分割機能があり、臨場感を感じられよりRFIDを楽しめるオプションになります！",
};

export function getRfidOption(name: string): OptionPlan | undefined {
  return options.find((o) => o.name === name);
}

/**
 * 会話試験：ロールプレイカードデータ (data.js)
 * 
 * 構造:
 * - 各データは学生用(student)と教員用(teacher)のペアで構成されています。
 * - student: ベトナム語が上(instructions_vn)、日本語訳が下(instructions_jp)
 * - teacher: 日本語のみ(instructions_jp)
 */

const rolePlayData = [
  {
    id: "01",
    title: "ロールプレイ01 (Can-do 1・2・3)",
    cando: "Can-do 1・2・3",
    level: "nhapmon", // 入門

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      // ベトナム語（上に配置）
      instructions_vn: [
        "Buổi sáng, bạn gặp một đồng nghiệp cấp trên ở công ty.",
        "Hãy chủ động chào trước.",
        "Nếu đồng nghiệp giúp bạn/ làm cho bạn điều gì hãy nói lời cảm ơn.",
        "Nếu bạn đến muộn hoặc làm phiền người đó, hãy xin lỗi.",
        "Khi ra về, hãy chào tạm biệt."
      ],

      // 日本語訳（下に配置）
      instructions_jp: [
        "<ruby>朝<rt>あさ</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>先輩<rt>せんぱい</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いました。",
        "<ruby>先<rt>さき</rt></ruby>にあいさつをしてください。",
        "<ruby>先輩<rt>せんぱい</rt></ruby>が<ruby>何<rt>なに</rt></ruby>かしてくれたら、お<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>ってください。",
        "<ruby>遅<rt>おく</rt></ruby>れたり、<ruby>迷惑<rt>めいわく</rt></ruby>をかけたりしたときは、<ruby>謝<rt>あやま</rt></ruby>ってください。",
        "<ruby>帰<rt>かえ</rt></ruby>るときは、あいさつをしてください。"
      ]
    },

    // 【右側】教員用ロールカード（日本語のみ）
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      // 日本語のみ
      instructions_jp: [
        "<ruby>朝<rt>あさ</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いました。",
        "あいさつをして、<ruby>少<rt>すこ</rt></ruby>し<ruby>話<rt>はな</rt></ruby>してください。",
        "<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>かしてあげてください。",
        "<ruby>帰<rt>かえ</rt></ruby>るときは、あいさつをしてください。"
      ]
    }
  }
  // ※ロールプレイ02以降を追加する場合は、上記と同様のフォーマットでここに追加できます
];

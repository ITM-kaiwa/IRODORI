/**
 * 会話試験：ロールプレイカードデータ (data.js)
 * 
 * 構造:
 * - 各データは学生用(student)と教員用(teacher)のペアで構成されています。
 * - level: 試験範囲ごとの識別子
 *     nhapmon_1_4  : 入門：第１課から第４課
 *     nhapmon_5_8  : 入門：第５課から第８課
 *     nhapmon_9_12 : 入門：第９課から第１２課
 *     nhapmon_13_16: 入門：第１３課から第１６課
 *     nhapmon_17_18: 入門：第１７課と１８課
 *     socap1       : 初級１（後日設定）
 *     socap2       : 初級２（後日設定）
 * - student: ベトナム語が上(instructions_vn)、日本語訳が下(instructions_jp)
 * - teacher: 日本語のみ(instructions_jp)
 */

const rolePlayData = [
  // ============================================================
  // 【入門：第１課から第４課】
  // ============================================================

  // ------------------------------------------------------------
  // ロールプレイ01 (Can-do 1・2・3)
  // ------------------------------------------------------------
  {
    id: "01",
    title: "ロールプレイ01 (Can-do 1・2・3)",
    cando: "Can-do 1・2・3",
    level: "nhapmon_1_4",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Buổi sáng, bạn gặp một đồng nghiệp cấp trên ở công ty.",
        "Hãy chủ động chào trước.",
        "Nếu đồng nghiệp giúp bạn/ làm cho bạn điều gì hãy nói lời cảm ơn.",
        "Nếu bạn đến muộn hoặc làm phiền người đó, hãy xin lỗi.",
        "Khi ra về, hãy chào tạm biệt."
      ],

      instructions_jp: [
        "<ruby>朝<rt>あさ</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>先輩<rt>せんぱい</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いました。",
        "<ruby>先<rt>さき</rt></ruby>にあいさつをしてください。",
        "<ruby>先輩<rt>せんぱい</rt></ruby>が<ruby>何<rt>なに</rt></ruby>かしてくれたら、お<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>ってください。",
        "<ruby>遅<rt>おく</rt></ruby>れたり、<ruby>迷惑<rt>めいわく</rt></ruby>をかけたりしたときは、<ruby>謝<rt>あやま</rt></ruby>ってください。",
        "<ruby>帰<rt>かえ</rt></ruby>るときは、あいさつをしてください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>朝<rt>あさ</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いました。",
        "あいさつをして、<ruby>少<rt>すこ</rt></ruby>し<ruby>話<rt>はな</rt></ruby>してください。",
        "<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>かしてあげてください。",
        "<ruby>帰<rt>かえ</rt></ruby>るときは、あいさつをしてください。"
      ]
    }
  },

  // ------------------------------------------------------------
  // ロールプレイ02 (Can-do 5・7)
  // ------------------------------------------------------------
  {
    id: "02",
    title: "ロールプレイ02 (Can-do 5・7)",
    cando: "Can-do 5・7",
    level: "nhapmon_1_4",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Bạn đang nói chuyện với một đồng nghiệp cấp trên.",
        "Nếu không hiểu điều người kia nói, hãy hỏi lại.",
        "Nếu không biết cách nói một từ bằng tiếng Nhật, hãy hỏi: \"Tiếng Nhật nói như thế nào?\""
      ],

      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>先輩<rt>せんぱい</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。",
        "<ruby>相手<rt>あいて</rt></ruby>の<ruby>言<rt>い</rt></ruby>っていることがよくわからないときは、<ruby>聞<rt>き</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>してください。",
        "また、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>がわからないことばがあったら、「<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか／なんですか」と<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>外国人<rt>がいこくじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>がわからないことを<ruby>言<rt>い</rt></ruby>ってください。<ruby>相手<rt>あいて</rt></ruby>が<ruby>質問<rt>しつもん</rt></ruby>したら、<ruby>答<rt>こた</rt></ruby>えてください。",
        "<ruby>相手<rt>あいて</rt></ruby>が<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>がわからないときは、<ruby>教<rt>おし</rt></ruby>えてください。また、<ruby>聞<rt>き</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>されたら、もう<ruby>一度<rt>いちど</rt></ruby>、ゆっくり<ruby>言<rt>い</rt></ruby>ってください。"
      ]
    }
  },

  // ------------------------------------------------------------
  // ロールプレイ03 (Can-do 6)
  // ------------------------------------------------------------
  {
    id: "03",
    title: "ロールプレイ03 (Can-do 6)",
    cando: "Can-do 6",
    level: "nhapmon_1_4",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Bạn là nhân viên người nước ngoài mới vào công ty.",
        "Bạn sẽ được hỏi về khả năng sử dụng tiếng Nhật hoặc ngôn ngữ khác. Hãy trả lời và hỏi lại đối phương."
      ],

      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>社員<rt>しゃいん</rt></ruby>と<ruby>初<rt>はじ</rt></ruby>めて<ruby>話<rt>はな</rt></ruby>します。",
        "<ruby>日本語<rt>にほんご</rt></ruby>やほかのことばができるか<ruby>聞<rt>き</rt></ruby>かれます。<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。また、<ruby>相手<rt>あいて</rt></ruby>にも<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>新<rt>あたら</rt></ruby>しく<ruby>入<rt>はい</rt></ruby>った<ruby>外国人<rt>がいこくじん</rt></ruby>と<ruby>初<rt>はじ</rt></ruby>めて<ruby>話<rt>はな</rt></ruby>します。",
        "<ruby>相手<rt>あいて</rt></ruby>に、<ruby>日本語<rt>にほんご</rt></ruby>やほかのことばができるか<ruby>質問<rt>しつもん</rt></ruby>してください。また、<ruby>自分<rt>じぶん</rt></ruby>についても<ruby>答<rt>こた</rt></ruby>えてください。"
      ]
    }
  },

  // ------------------------------------------------------------
  // ロールプレイ04 (Can-do 8・10・13)
  // ------------------------------------------------------------
  {
    id: "04",
    title: "ロールプレイ04 (Can-do 8・10・13)",
    cando: "Can-do 8・10・13",
    level: "nhapmon_1_4",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Hôm nay là ngày đầu tiên bạn làm việc tại công ty. Hãy chào hỏi, tự giới thiệu bản thân.",
        "Trả lời các câu hỏi của đối phương và hỏi lại họ."
      ],

      instructions_jp: [
        "<ruby>今日<rt>きょう</rt></ruby>から<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>きます。はじめて<ruby>会<rt>あ</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>にあいさつをして、<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をしてください。",
        "<ruby>相手<rt>あいて</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。また、<ruby>相手<rt>あいて</rt></ruby>にも<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>人<rt>ひと</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。はじめて<ruby>会<rt>あ</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>にあいさつをして、<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をしてください。",
        "また、<ruby>相手<rt>あいて</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>、<ruby>出身<rt>しゅっしん</rt></ruby>、<ruby>住<rt>す</rt></ruby>んでいるところ、<ruby>年齢<rt>ねんれい</rt></ruby>などを<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    }
  },

  // ------------------------------------------------------------
  // ロールプレイ05 (Can-do 14)
  // ------------------------------------------------------------
  {
    id: "05",
    title: "ロールプレイ05 (Can-do 14)",
    cando: "Can-do 14",
    level: "nhapmon_1_4",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Đồng nghiệp cho bạn xem một bức ảnh.",
        "Hãy vừa xem ảnh vừa đặt những câu hỏi đơn giản như: \"Người này là ai?\", \"Bao nhiêu tuổi?\", \"Đang sống ở đâu?\",..."
      ],

      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてくれます。",
        "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、「この<ruby>人<rt>ひと</rt></ruby>はだれですか。」「<ruby>何歳<rt>なんさい</rt></ruby>ですか。」「どこに<ruby>住<rt>す</rt></ruby>んでいますか。」など、<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>質問<rt>しつもん</rt></ruby>をしてください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>相手<rt>あいて</rt></ruby>に<ruby>家族<rt>かぞく</rt></ruby>や<ruby>友<rt>とも</rt></ruby>だちの<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せます。",
        "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せながら、その<ruby>人<rt>ひと</rt></ruby>についての<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。"
      ]
    }
  },

  // ============================================================
  // 【入門：第５課から第８課】（画像からスキャン追加分）
  // ============================================================

  // ------------------------------------------------------------
  // ロールプレイ06 (Can-do 16・17・19)
  // ------------------------------------------------------------
  {
    id: "06",
    title: "ロールプレイ06 (Can-do 16・17・19)",
    cando: "Can-do 16・17・19",
    level: "nhapmon_5_8",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Trong giờ nghỉ trưa, bạn nói chuyện với đồng nghiệp về đồ ăn.",
        "Hãy trả lời các câu hỏi của đối phương và hỏi lại về sở thích ăn uống, bữa sáng."
      ],

      instructions_jp: [
        "<ruby>昼休<rt>ひるやす</rt></ruby>みに<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>をしています。",
        "<ruby>相手<rt>あいて</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。",
        "また、<ruby>自分<rt>じぶん</rt></ruby>からも<ruby>好<rt>す</rt></ruby>きな<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>や<ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>について<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>昼休<rt>ひるやす</rt></ruby>みに<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>をしています。",
        "<ruby>相手<rt>あいて</rt></ruby>に、<ruby>好<rt>す</rt></ruby>きな<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>や<ruby>苦手<rt>にがて</rt></ruby>な<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>の<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>について<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるかも<ruby>聞<rt>き</rt></ruby>いてください。"
      ]
    }
  },

  // ------------------------------------------------------------
  // ロールプレイ07 (Can-do 18・23)
  // ------------------------------------------------------------
  {
    id: "07",
    title: "ロールプレイ07 (Can-do 18・23)",
    cando: "Can-do 18・23",
    level: "nhapmon_5_8",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Sau giờ làm, bạn đi ăn cùng đồng nghiệp.",
        "Hãy trả lời khi được hỏi muốn ăn gì, uống gì và hỏi lại đối phương."
      ],

      instructions_jp: [
        "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わって、<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたいか、<ruby>何<rt>なに</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みたいか<ruby>聞<rt>き</rt></ruby>かれます。<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。",
        "<ruby>相手<rt>あいて</rt></ruby>にも<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたいか<ruby>聞<rt>き</rt></ruby>いてください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わって、<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。<ruby>相手<rt>あいて</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたいか、<ruby>何<rt>なに</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みたいか<ruby>聞<rt>き</rt></ruby>いてください。<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>をすすめてください。"
      ]
    }
  },

  // ------------------------------------------------------------
  // ロールプレイ08 (Can-do 22・24)
  // ------------------------------------------------------------
  {
    id: "08",
    title: "ロールプレイ08 (Can-do 22・24)",
    cando: "Can-do 22・24",
    level: "nhapmon_5_8",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Bạn đến cửa hàng thức ăn nhanh (hoặc nhà hàng).",
        "Hãy gọi món và đồ uống.",
        "Nếu cần đĩa, thìa, cốc... hãy yêu cầu nhân viên."
      ],

      instructions_jp: [
        "ファストフード<ruby>店<rt>てん</rt></ruby>（またはレストラン）に<ruby>来<rt>き</rt></ruby>ました。",
        "<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>や<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>を<ruby>注文<rt>ちゅうもん</rt></ruby>してください。",
        "また、お<ruby>皿<rt>さら</rt></ruby>やスプーン、コップなど、<ruby>必要<rt>ひつよう</rt></ruby>なものがあれば<ruby>店員<rt>てんいん</rt></ruby>に<ruby>頼<rt>たの</rt></ruby>んでください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "ファストフード<ruby>店<rt>てん</rt></ruby>（またはレストラン）の<ruby>店員<rt>てんいん</rt></ruby>です。",
        "お<ruby>客<rt>きゃく</rt></ruby>さんの<ruby>注文<rt>ちゅうもん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。",
        "<ruby>注文<rt>ちゅうもん</rt></ruby>のあと、<ruby>必要<rt>ひつよう</rt></ruby>なものがあるか<ruby>聞<rt>き</rt></ruby>いてください。"
      ]
    }
  },

  // ------------------------------------------------------------
  // ロールプレイ09 (Can-do 27・28・29)
  // ------------------------------------------------------------
  {
    id: "09",
    title: "ロールプレイ09 (Can-do 27・28・29)",
    cando: "Can-do 27・28・29",
    level: "nhapmon_5_8",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Trong giờ nghỉ, bạn nói chuyện với đồng nghiệp về nhà ở.",
        "Hãy hỏi đối phương đang sống ở đâu, sống trong ngôi nhà như thế nào và nhà đã có đủ những đồ dùng cần thiết hay chưa."
      ],

      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>家<rt>いえ</rt></ruby>のことを<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>に、どこに<ruby>住<rt>す</rt></ruby>んでいるか、どんな<ruby>家<rt>いえ</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいるか<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>なものがそろっているか<ruby>聞<rt>き</rt></ruby>いてください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>家<rt>いえ</rt></ruby>のことを<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。また、<ruby>自分<rt>じぶん</rt></ruby>からも<ruby>相手<rt>あいて</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>について<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    }
  },

  // ------------------------------------------------------------
  // ロールプレイ10 (Can-do 32・33)
  // ------------------------------------------------------------
  {
    id: "10",
    title: "ロールプレイ10 (Can-do 32・33)",
    cando: "Can-do 32・33",
    level: "nhapmon_5_8",

    // 【左側】学生用ロールカード
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",

      instructions_vn: [
        "Bạn đang làm việc tại công ty. Bạn có một số điều chưa biết trong công việc.",
        "Hãy hỏi cấp trên một đồng nghiệp đang ở đâu.",
        "Ngoài ra, hãy hỏi những đồ dùng cần sử dụng cho công việc đang được để ở đâu.",
        "Sau khi được chỉ dẫn, hãy cảm ơn."
      ],

      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>仕事<rt>しごと</rt></ruby>をしています。<ruby>仕事<rt>しごと</rt></ruby>でわからないことがあります。<ruby>先輩<rt>せんぱい</rt></ruby>に、<ruby>同僚<rt>どうりょう</rt></ruby>がどこにいるか<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>仕事<rt>しごと</rt></ruby>で<ruby>使<rt>つか</rt></ruby>うものがどこにあるか<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "<ruby>教<rt>おし</rt></ruby>えてもらったら、お<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>ってください。"
      ]
    },

    // 【右側】教員用ロールカード
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",

      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>仕事<rt>しごと</rt></ruby>をしています。<ruby>後輩<rt>こうはい</rt></ruby>から<ruby>質問<rt>しつもん</rt></ruby>されます。",
        "<ruby>同僚<rt>どうりょう</rt></ruby>がどこにいるか<ruby>教<rt>おし</rt></ruby>えてください。",
        "また、<ruby>仕事<rt>しごと</rt></ruby>で<ruby>使<rt>つか</rt></ruby>うものの<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
        "<ruby>後輩<rt>こうはい</rt></ruby>がお<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>ったら、<ruby>答<rt>こた</rt></ruby>えてください。"
      ]
    }
  }

  // ============================================================
  // 【入門：第９課から第１２課】 (データ提供後に追加)
  // ============================================================
  // {
  //   id: "11",
  //   title: "ロールプレイ11 (...)",
  //   level: "nhapmon_9_12",
  //   ...
  // }

  // ============================================================
  // 【入門：第１３課から第１６課】 (データ提供後に追加)
  // ============================================================
  // {
  //   id: "...",
  //   title: "ロールプレイ... (...)",
  //   level: "nhapmon_13_16",
  //   ...
  // }

  // ============================================================
  // 【入門：第１７課と１８課】 (データ提供後に追加)
  // ============================================================
  // {
  //   id: "...",
  //   title: "ロールプレイ... (...)",
  //   level: "nhapmon_17_18",
  //   ...
  // }
];

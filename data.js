/**
 * 会話試験：ロールプレイカードデータ (data.js)
 * 
 * 構成:
 * - 入門 (nhapmon_1_4, nhapmon_5_8, nhapmon_9_12, nhapmon_13_16, nhapmon_17_18) 全22問
 * - 初級１ (socap1_1_4, socap1_5_8, socap1_9_10, socap1_11_14, socap1_15_18) 全20問
 */

const rolePlayData = [
  // ============================================================
  // ■ 入門：第１課から第４課 (nhapmon_1_4)
  // ============================================================
  {
    id: "01",
    title: "ロールプレイ01 (Can-do 1・2・3)",
    cando: "Can-do 1・2・3",
    level: "nhapmon_1_4",
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
  {
    id: "02",
    title: "ロールプレイ02 (Can-do 5・7)",
    cando: "Can-do 5・7",
    level: "nhapmon_1_4",
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
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",
      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>外国人<rt>がいこくじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>がわからないことを<ruby>言<rt>い</rt></ruby>ってください。<ruby>相手<rt>あいて</rt></ruby>が<ruby>質問<rt>しつもん</rt></ruby>したら、<ruby>答<rt>こた</rt></ruby>えてください。",
        "<ruby>相手<rt>あいて</rt></ruby>が<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>がわからないときは、<ruby>教<rt>おし</rt></ruby>えてください。また、<ruby>聞<rt>き</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>されたら、もう<ruby>一度<rt>いちど</rt></ruby>、ゆっくり<ruby>言<rt>い</rt></ruby>ってください。"
      ]
    }
  },
  {
    id: "03",
    title: "ロールプレイ03 (Can-do 6)",
    cando: "Can-do 6",
    level: "nhapmon_1_4",
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
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",
      instructions_jp: [
        "<ruby>新<rt>あたら</rt></ruby>しく<ruby>入<rt>はい</rt></ruby>った<ruby>外国人<rt>がいこくじん</rt></ruby>と<ruby>初<rt>はじ</rt></ruby>めて<ruby>話<rt>はな</rt></ruby>します。",
        "<ruby>相手<rt>あいて</rt></ruby>に、<ruby>日本語<rt>にほんご</rt></ruby>やほかのことばができるか<ruby>質問<rt>しつもん</rt></ruby>してください。また、<ruby>自分<rt>じぶん</rt></ruby>についても<ruby>答<rt>こた</rt></ruby>えてください。"
      ]
    }
  },
  {
    id: "04",
    title: "ロールプレイ04 (Can-do 8・10・13)",
    cando: "Can-do 8・10・13",
    level: "nhapmon_1_4",
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
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",
      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>人<rt>ひと</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。はじめて<ruby>会<rt>あ</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>にあいさつをして、<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をしてください。",
        "また、<ruby>相手<rt>あいて</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>、<ruby>出身<rt>しゅっしん</rt></ruby>、<ruby>住<rt>す</rt></ruby>んでいるところ、<ruby>年齢<rt>ねんれい</rt></ruby>などを<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    }
  },
  {
    id: "05",
    title: "ロールプレイ05 (Can-do 14)",
    cando: "Can-do 14",
    level: "nhapmon_1_4",
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
  // ■ 入門：第５課から第８課 (nhapmon_5_8)
  // ============================================================
  {
    id: "06",
    title: "ロールプレイ06 (Can-do 16・17・19)",
    cando: "Can-do 16・17・19",
    level: "nhapmon_5_8",
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
  {
    id: "07",
    title: "ロールプレイ07 (Can-do 18・23)",
    cando: "Can-do 18・23",
    level: "nhapmon_5_8",
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
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",
      instructions_jp: [
        "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わって、<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。<ruby>相手<rt>あいて</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたいか、<ruby>何<rt>なに</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みたいか<ruby>聞<rt>き</rt></ruby>いてください。<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>をすすめてください。"
      ]
    }
  },
  {
    id: "08",
    title: "ロールプレイ08 (Can-do 22・24)",
    cando: "Can-do 22・24",
    level: "nhapmon_5_8",
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
  {
    id: "09",
    title: "ロールプレイ09 (Can-do 27・28・29)",
    cando: "Can-do 27・28・29",
    level: "nhapmon_5_8",
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
    teacher: {
      role_jp: "ロールカード　先生",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>",
      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>家<rt>いえ</rt></ruby>のことを<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。また、<ruby>自分<rt>じぶん</rt></ruby>からも<ruby>相手<rt>あいて</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>について<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    }
  },
  {
    id: "10",
    title: "ロールプレイ10 (Can-do 32・33)",
    cando: "Can-do 32・33",
    level: "nhapmon_5_8",
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
  },

  // ============================================================
  // ■ 入門：第９課から第１２課 (nhapmon_9_12)
  // ============================================================
  {
    id: "11",
    title: "ロールプレイ11 (Can-do 35)",
    cando: "Can-do 35",
    level: "nhapmon_9_12",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Trong giờ nghỉ, bạn nói chuyện với đồng nghiệp về cuộc sống hằng ngày.",
        "Hãy hỏi đối phương mấy giờ thức dậy, mấy giờ đi ngủ và nói về bản thân."
      ],
      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>毎日<rt>まいにち</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しています。",
        "<ruby>相手<rt>あいて</rt></ruby>に、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きるか、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>るか<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>についても<ruby>話<rt>はな</rt></ruby>してください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（同僚役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>毎日<rt>まいにち</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しています。",
        "<ruby>相手<rt>あいて</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。",
        "また、<ruby>相手<rt>あいて</rt></ruby>にも<ruby>起<rt>お</rt></ruby>きる<ruby>時間<rt>じかん</rt></ruby>や<ruby>寝<rt>ね</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>を<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    }
  },
  {
    id: "12",
    title: "ロールプレイ12 (Can-do 38)",
    cando: "Can-do 38",
    level: "nhapmon_9_12",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn định đi ăn cùng đồng nghiệp.",
        "Hãy hỏi xem khi nào đối phương thuận tiện để quyết định ngày và giờ."
      ],
      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>といっしょに<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>です。",
        "<ruby>日<rt>ひ</rt></ruby>にちや<ruby>時間<rt>じかん</rt></ruby>を<ruby>決<rt>き</rt></ruby>めるために、<ruby>相手<rt>あいて</rt></ruby>の<ruby>都合<rt>つごう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（同僚役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>といっしょに<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>です。<ruby>相手<rt>あいて</rt></ruby>に<ruby>都合<rt>つごう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かれます。",
        "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>都合<rt>つごう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えて、<ruby>日<rt>ひ</rt></ruby>にちや<ruby>時間<rt>じかん</rt></ruby>を<ruby>相談<rt>そうだん</rt></ruby>してください。"
      ]
    }
  },
  {
    id: "13",
    title: "ロールプレイ13 (Can-do 40・42)",
    cando: "Can-do 40・42",
    level: "nhapmon_9_12",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn đang làm việc tại công ty. Bạn được cấp trên giao một công việc.",
        "Hãy nghe kỹ nội dung công việc. Nếu có điểm quan trọng hoặc điều gì chưa hiểu rõ, hãy xác nhận hoặc hỏi lại.",
        "Ngoài ra, bạn cần một đồ dùng để làm công việc. Hãy xin cấp trên cho mượn đồ đó."
      ],
      instructions_jp: [
        "あなたは<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>仕事<rt>しごと</rt></ruby>をしています。<ruby>先輩<rt>せんぱい</rt></ruby>から<ruby>仕事<rt>しごと</rt></ruby>を<ruby>頼<rt>たの</rt></ruby>まれます。",
        "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>をよく<ruby>聞<rt>き</rt></ruby>いてください。<ruby>大切<rt>たいせつ</rt></ruby>なことや、よくわからないことがあったら、<ruby>確認<rt>かくにん</rt></ruby>したり、<ruby>聞<rt>き</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>したりしてください。",
        "また、<ruby>仕事<rt>しごと</rt></ruby>で<ruby>使<rt>つか</rt></ruby>うものが<ruby>必要<rt>ひつよう</rt></ruby>です。<ruby>先輩<rt>せんぱい</rt></ruby>に、ものを<ruby>借<rt>か</rt></ruby>りたいと<ruby>頼<rt>たの</rt></ruby>んでください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（先輩役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>先輩<rt>せんぱい</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "あなたは<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>仕事<rt>しごと</rt></ruby>をしています。<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>仕事<rt>しごと</rt></ruby>を<ruby>頼<rt>たの</rt></ruby>んでください。",
        "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>や、いつまでにするかなど、<ruby>大切<rt>たいせつ</rt></ruby>なことを<ruby>伝<rt>つた</rt></ruby>えてください。<ruby>後輩<rt>こうはい</rt></ruby>から<ruby>質問<rt>しつもん</rt></ruby>されたら、もう<ruby>一度<rt>いちど</rt></ruby><ruby>説明<rt>せつめい</rt></ruby>してください。",
        "また、<ruby>後輩<rt>こうはい</rt></ruby>からものを<ruby>借<rt>か</rt></ruby>りたいと<ruby>言<rt>い</rt></ruby>われたら、<ruby>貸<rt>か</rt></ruby>してください。"
      ]
    }
  },
  {
    id: "14",
    title: "ロールプレイ14 (Can-do 44・45・46)",
    cando: "Can-do 44・45・46",
    level: "nhapmon_9_12",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Trong giờ nghỉ, bạn đang trò chuyện với đồng nghiệp.",
        "Hãy hỏi về sở thích, điều yêu thích và những việc họ thường làm vào ngày nghỉ.",
        "Đồng thời nói về bản thân."
      ],
      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。",
        "<ruby>相手<rt>あいて</rt></ruby>に、<ruby>趣味<rt>しゅみ</rt></ruby>や<ruby>好<rt>す</rt></ruby>きなこと、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をするか<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>自分<rt>じぶん</rt></ruby>のことも<ruby>話<rt>はな</rt></ruby>してください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（同僚役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。",
        "また、<ruby>相手<rt>あいて</rt></ruby>にも<ruby>趣味<rt>しゅみ</rt></ruby>や<ruby>好<rt>す</rt></ruby>きなこと、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>の<ruby>過<rt>す</rt></ruby>ごし<ruby>方<rt>かた</rt></ruby>について<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    }
  },
  {
    id: "15",
    title: "ロールプレイ15 (Can-do 49・50)",
    cando: "Can-do 49・50",
    level: "nhapmon_9_12",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn muốn đi một sự kiện sắp tới.",
        "Hãy rủ đồng nghiệp cùng đi và hỏi xem họ có thuận tiện hay không."
      ],
      instructions_jp: [
        "<ruby>今度<rt>こんど</rt></ruby>、イベントに<ruby>行<rt>い</rt></ruby>きたいと<ruby>思<rt>おも</rt></ruby>っています。",
        "<ruby>相手<rt>あいて</rt></ruby>をイベントに<ruby>誘<rt>さそ</rt></ruby>ってください。また、<ruby>相手<rt>あいて</rt></ruby>の<ruby>都合<rt>つごう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（同僚役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>にイベントに<ruby>誘<rt>さそ</rt></ruby>われます。<ruby>行<rt>い</rt></ruby>くかどうか<ruby>答<rt>こた</rt></ruby>えてください。",
        "また、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>都合<rt>つごう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えてください。"
      ]
    }
  },

  // ============================================================
  // ■ 入門：第１３課から第１６課 (nhapmon_13_16)
  // ============================================================
  {
    id: "16",
    title: "ロールプレイ16 (Can-do 52・53)",
    cando: "Can-do 52・53",
    level: "nhapmon_13_16",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn đang đi tàu điện (hoặc xe buýt).",
        "Hãy hỏi người bên cạnh xem chuyến này có đi đến nơi bạn muốn đến không.",
        "Nếu không hiểu thông báo trên xe, hãy hỏi lại."
      ],
      instructions_jp: [
        "<ruby>電車<rt>でんしゃ</rt></ruby>（またはバス）に<ruby>乗<rt>の</rt></ruby>っています。<ruby>行<rt>い</rt></ruby>きたい<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くかどうか、<ruby>近<rt>ちか</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>に<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>車内<rt>しゃない</rt></ruby>アナウンスがよくわからなかったら、もう<ruby>一度<rt>いちど</rt></ruby><ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（乗客役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>乗客<rt>じょうきゃく</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>電車<rt>でんしゃ</rt></ruby>（またはバス）に<ruby>乗<rt>の</rt></ruby>っています。<ruby>相手<rt>あいて</rt></ruby>に<ruby>行<rt>ゆ</rt></ruby>き<ruby>先<rt>さき</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かれます。",
        "また、<ruby>車内<rt>しゃない</rt></ruby>アナウンスについて<ruby>質問<rt>しつもん</rt></ruby>されたら、<ruby>答<rt>こた</rt></ruby>えてください。"
      ]
    }
  },
  {
    id: "17",
    title: "ロールプレイ17 (Can-do 54・58)",
    cando: "Can-do 54・58",
    level: "nhapmon_13_16",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn đang gọi điện cho đồng nghiệp.",
        "Hãy hỏi họ hiện đang ở đâu và thường đi từ nhà đến công ty bằng phương tiện gì."
      ],
      instructions_jp: [
        "<ruby>電話<rt>でんわ</rt></ruby>で<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>に、<ruby>今<rt>いま</rt></ruby>どこにいるか<ruby>聞<rt>き</rt></ruby>いてください。",
        "また、<ruby>家<rt>うち</rt></ruby>から<ruby>会社<rt>かいしゃ</rt></ruby>までどうやって<ruby>来<rt>く</rt></ruby>るかも<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（同僚役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>電話<rt>でんわ</rt></ruby>で<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。<ruby>今<rt>いま</rt></ruby>いる<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えてください。",
        "また、<ruby>家<rt>うち</rt></ruby>から<ruby>会社<rt>かいしゃ</rt></ruby>までの<ruby>交通手段<rt>こうつうしゅだん</rt></ruby>や<ruby>時間<rt>じかん</rt></ruby>について<ruby>答<rt>こた</rt></ruby>えてください。"
      ]
    }
  },
  {
    id: "18",
    title: "ロールプレイ18 (Can-do 57・59)",
    cando: "Can-do 57・59",
    level: "nhapmon_13_16",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn đang đi dạo trong thành phố cùng đồng nghiệp.",
        "Hãy hỏi vị trí nhà vệ sinh, ATM...",
        "Đồng thời nói cảm nghĩ của mình sau khi được giới thiệu các địa điểm."
      ],
      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>町<rt>まち</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>いています。トイレやATMなどの<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>案内<rt>あんない</rt></ruby>してもらった<ruby>場所<rt>ばしょ</rt></ruby>について<ruby>感想<rt>かんそう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えてください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（案内役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>案内<rt>あんない</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>町<rt>まち</rt></ruby>を<ruby>案内<rt>あんない</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>に、いろいろな<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>案内<rt>あんない</rt></ruby>してください。",
        "<ruby>質問<rt>しつもん</rt></ruby>されたら、トイレやATMなどの<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。"
      ]
    }
  },
  {
    id: "19",
    title: "ロールプレイ19 (Can-do 61・63・64)",
    cando: "Can-do 61・63・64",
    level: "nhapmon_13_16",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn cùng đồng nghiệp đến trung tâm mua sắm.",
        "Vì không biết món đồ mình muốn ở đâu, hãy hỏi nhân viên.",
        "Sau đó vừa xem hàng vừa trao đổi cảm nhận về sản phẩm."
      ],
      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>とショッピングセンターに<ruby>来<rt>き</rt></ruby>ました。",
        "<ruby>買<rt>か</rt></ruby>いたいものがどこにあるかわからないので、<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いてください。",
        "また、<ruby>商品<rt>しょうひん</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、<ruby>相手<rt>あいて</rt></ruby>と<ruby>感想<rt>かんそう</rt></ruby>を<ruby>話<rt>はな</rt></ruby>してください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（店員役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>店員<rt>てんいん</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "お<ruby>客<rt>きゃく</rt></ruby>さんに<ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かれます。ほしいものがどこにあるか<ruby>教<rt>おし</rt></ruby>えてください。",
        "また、<ruby>商品<rt>しょうひん</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しかけられたら、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>を<ruby>言<rt>い</rt></ruby>ってください。"
      ]
    }
  },
  {
    id: "20",
    title: "ロールプレイ20 (Can-do 67・68・69)",
    cando: "Can-do 67・68・69",
    level: "nhapmon_13_16",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn đang mua sắm. Hãy hỏi giá sản phẩm. Nói số lượng mình muốn mua.",
        "Khi thanh toán, hãy trả lời các câu hỏi của nhân viên."
      ],
      instructions_jp: [
        "<ruby>店<rt>みせ</rt></ruby>で<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をしています。<ruby>商品<rt>しょうひん</rt></ruby>の<ruby>値段<rt>ねだん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。",
        "また、ほしい<ruby>数<rt>かず</rt></ruby>や<ruby>量<rt>りょう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えてください。",
        "レジでは、<ruby>店員<rt>てんいん</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（レジ店員役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（レジ<ruby>店員<rt>てんいん</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "レジでお<ruby>客<rt>きゃく</rt></ruby>さんの<ruby>会計<rt>かいけい</rt></ruby>をします。<ruby>商品<rt>しょうひん</rt></ruby>の<ruby>値段<rt>ねだん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かれたら<ruby>答<rt>こた</rt></ruby>えてください。",
        "また、「<ruby>袋<rt>ふくろ</rt></ruby>はいりますか。」「おはしをつけますか。」などの<ruby>質問<rt>しつもん</rt></ruby>をしてください。"
      ]
    }
  },

  // ============================================================
  // ■ 入門：第１７課と１８課 (nhapmon_17_18)
  // ============================================================
  {
    id: "21",
    title: "ロールプレイ21 (Can-do 71・72)",
    cando: "Can-do 71・72",
    level: "nhapmon_17_18",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Sau kỳ nghỉ, bạn đang trò chuyện với đồng nghiệp.",
        "Hãy hỏi đối phương đã làm gì trong ngày nghỉ và cảm thấy thế nào.",
        "Đồng thời kể về ngày nghỉ của mình."
      ],
      instructions_jp: [
        "<ruby>休<rt>やす</rt></ruby>み<ruby>明<rt>あ</rt></ruby>けに<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。",
        "<ruby>相手<rt>あいて</rt></ruby>に、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をしたか、そのときどう<ruby>思<rt>おも</rt></ruby>ったか<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>のことも<ruby>話<rt>はな</rt></ruby>してください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（同僚役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>休<rt>やす</rt></ruby>み<ruby>明<rt>あ</rt></ruby>けに<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。",
        "また、<ruby>相手<rt>あいて</rt></ruby>にも<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>のことや<ruby>感想<rt>かんそう</rt></ruby>を<ruby>質問<rt>しつもん</rt></ruby>してください。"
      ]
    }
  },
  {
    id: "22",
    title: "ロールプレイ22 (Can-do 76・77・79)",
    cando: "Can-do 76・77・79",
    level: "nhapmon_17_18",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Trong giờ nghỉ, bạn trò chuyện với đồng nghiệp về kế hoạch nghỉ và du lịch.",
        "Hãy hỏi đối phương muốn làm gì vào ngày nghỉ, muốn làm gì ở Nhật Bản.",
        "Nếu họ đã từng đi du lịch, hãy hỏi họ đã làm gì và cảm nhận như thế nào."
      ],
      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>旅行<rt>りょこう</rt></ruby>や<ruby>休<rt>やす</rt></ruby>みの<ruby>予定<rt>よてい</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しています。",
        "<ruby>相手<rt>あいて</rt></ruby>に、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>にしたいことや、<ruby>日本<rt>にほん</rt></ruby>でしたいことを<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "また、<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったことがあれば、そのときのことや<ruby>感想<rt>かんそう</rt></ruby>も<ruby>聞<rt>き</rt></ruby>いてください。"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（同僚役）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>）",
      instructions_jp: [
        "<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>に<ruby>旅行<rt>りょこう</rt></ruby>や<ruby>休<rt>やす</rt></ruby>みの<ruby>予定<rt>よてい</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しています。<ruby>相手<rt>あいて</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。",
        "また、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>旅行先<rt>りょこうさき</rt></ruby>でしたことや<ruby>感想<rt>かんそう</rt></ruby>について<ruby>話<rt>はな</rt></ruby>してください。"
      ]
    }
  },

  // ============================================================
  // ■ 初級１：第１課から第４課 (socap1_1_4)
  // ============================================================
  {
    id: "s1_01",
    title: "初級1 ロールプレイ01 (Can-do 1, 2, 3)",
    cando: "Can-do 1, 2, 3",
    level: "socap1_1_4",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn đã làm việc tại Nhật được 1 năm. Bạn tình cờ gặp lại giáo viên tiếng Nhật đã từng giúp đỡ mình ở Việt Nam sau một thời gian dài.",
        "Hãy nói chuyện về tình hình gần đây của bạn (công việc, cuộc sống, v.v.).",
        "(Bạn là người bắt chuyện)"
      ],
      instructions_jp: [
        "<ruby>日本<rt>にほん</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いて1<ruby>年<rt>ねん</rt></ruby>です。ベトナムでお<ruby>世話<rt>せわ</rt></ruby>になった<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>に<ruby>久<rt>ひさ</rt></ruby>しぶりに<ruby>会<rt>あ</rt></ruby>いました。",
        "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>近況<rt>きんきょう</rt></ruby>（<ruby>仕事<rt>しごと</rt></ruby>や<ruby>生活<rt>せいかつ</rt></ruby>について）を<ruby>話<rt>はな</rt></ruby>してください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　先生（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>先生<rt>せんせい</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "<ruby>日本<rt>にほん</rt></ruby>で<ruby>久<rt>ひさし</rt></ruby>しぶりに<ruby>実習生<rt>じっしゅうせい</rt></ruby>（<ruby>卒業生<rt>そつぎょうせい</rt></ruby>）に<ruby>会<rt>あ</rt></ruby>いました。",
        "<ruby>実習生<rt>じっしゅうせい</rt></ruby>（<ruby>卒業生<rt>そつぎょうせい</rt></ruby>）の<ruby>近況<rt>きんきょう</rt></ruby>（<ruby>仕事<rt>しごと</rt></ruby>や<ruby>生活<rt>せいかつ</rt></ruby>について）を<ruby>聞<rt>き</rt></ruby>いてください。（<ruby>実習生<rt>じっしゅうせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_02",
    title: "初級1 ロールプレイ02 (Can-do 5)",
    cando: "Can-do 5",
    level: "socap1_1_4",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn nói chuyện với đồng nghiệp vào giờ nghỉ trưa ở công ty.",
        "Hãy cùng hỏi và trả lời về các hoạt động vào ngày nghỉ.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>昼休<rt>ひるやす</rt></ruby>みに<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>します。",
        "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>の<ruby>過<rt>す</rt></ruby>ごし<ruby>方<rt>かた</rt></ruby>についてお<ruby>互<rt>たが</rt></ruby>いに<ruby>質問<rt>しつもん</rt></ruby>したり<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えたりしてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　同僚役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>昼休<rt>ひるやす</rt></ruby>みに<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>します。",
        "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>の<ruby>過<rt>す</rt></ruby>ごし<ruby>方<rt>かた</rt></ruby>についてお<ruby>互<rt>たが</rt></ruby>いに<ruby>質問<rt>しつもん</rt></ruby>したり<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えたりしてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_03",
    title: "初級1 ロールプレイ03 (Can-do 9)",
    cando: "Can-do 9",
    level: "socap1_1_4",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn nói chuyện với đồng nghiệp vào giờ nghỉ. Hôm nay rất nóng (hoặc rất lạnh).",
        "Hãy cùng nhau hỏi và trả lời về đặc điểm các mùa ở đất nước của mình.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>休<rt>やす</rt></ruby>み<ruby>時間<rt>じかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>します。<ruby>今日<rt>きょう</rt></ruby>はとても<ruby>暑<rt>あつ</rt></ruby>い（<ruby>寒<rt>さむ</rt></ruby>い）です。",
        "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>国<rt>くに</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>についてお<ruby>互<rt>たが</rt></ruby>いに<ruby>質問<rt>しつもん</rt></ruby>したり<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えたりしてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　同僚役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "<ruby>休<rt>やす</rt></ruby>み<ruby>時間<rt>じかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>します。<ruby>今日<rt>きょう</rt></ruby>はとても<ruby>暑<rt>あつ</rt></ruby>い（<ruby>寒<rt>さむ</rt></ruby>い）です。",
        "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>国<rt>くに</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>についてお<ruby>互<rt>たが</rt></ruby>いに<ruby>質問<rt>しつもん</rt></ruby>したり<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えたりしてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_04",
    title: "初級1 ロールプレイ04 (Can-do 10)",
    cando: "Can-do 10",
    level: "socap1_1_4",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Giờ nghỉ, bạn nói chuyện với đồng nghiệp. Đã đến mùa hoa anh đào (hoặc trời đang dần nóng lên / đang trở lạnh).",
        "Hãy cùng nhau hỏi và trả lời về mùa mà bạn yêu thích.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>休<rt>やす</rt></ruby>み<ruby>時間<rt>じかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>します。<ruby>桜<rt>さくら</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>になりました（だんだん<ruby>暑<rt>あつ</rt></ruby>くなってきました／だんだん<ruby>寒<rt>さむ</rt></ruby>くなってきました）。",
        "<ruby>好<rt>す</rt></ruby>きな<ruby>季節<rt>きせつ</rt></ruby>についてお<ruby>互<rt>たが</rt></ruby>いに<ruby>質問<rt>しつもん</rt></ruby>したり<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えたりしてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　同僚役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "<ruby>休<rt>やす</rt></ruby>み<ruby>時間<rt>じかん</rt></ruby>に<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>します。<ruby>桜<rt>さくら</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>になりました（だんだん<ruby>暑<rt>あつ</rt></ruby>くなってきました／だんだん<ruby>寒<rt>さむ</rt></ruby>くなってきました）。",
        "<ruby>好<rt>す</rt></ruby>きな<ruby>季節<rt>きせつ</rt></ruby>についてお<ruby>互<rt>たが</rt></ruby>いに<ruby>質問<rt>しつもん</rt></ruby>したり<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えたりしてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_05",
    title: "初級1 ロールプレイ05 (Can-do 11)",
    cando: "Can-do 11",
    level: "socap1_1_4",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Trên đường đi làm buổi sáng, bạn gặp đồng nghiệp cùng công ty.",
        "Hãy vừa chào hỏi vừa trò chuyện về thời tiết.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>朝<rt>あさ</rt></ruby>の<ruby>出勤途中<rt>しゅっきんとちゅう</rt></ruby>に<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>会<rt>あ</rt></ruby>いました。",
        "<ruby>天気<rt>てんき</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>をしながらあいさつしてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　同僚役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "<ruby>朝<rt>あさ</rt></ruby>の<ruby>出勤途中<rt>しゅっきんとちゅう</rt></ruby>に<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>会<rt>あ</rt></ruby>いました。",
        "<ruby>天気<rt>てんき</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>をしながらあいさつしてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },

  // ============================================================
  // ■ 初級１：第５課から第８課 (socap1_5_8)
  // ============================================================
  {
    id: "s1_06",
    title: "初級1 ロールプレイ06 (Can-do 14)",
    cando: "Can-do 14",
    level: "socap1_5_8",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn nói chuyện với đồng nghiệp ở công ty.",
        "Hãy cùng nhau hỏi và trả lời về quê hương của mỗi người là nơi như thế nào.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>します。",
        "<ruby>出身地<rt>しゅっしんち</rt></ruby>がどんな<ruby>所<rt>ところ</rt></ruby>か、お<ruby>互<rt>たが</rt></ruby>いに<ruby>質問<rt>しつもん</rt></ruby>したり<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えたりしてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　同僚役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>話<rt>はな</rt></ruby>します。",
        "<ruby>出身地<rt>しゅっしんち</rt></ruby>がどんな<ruby>所<rt>ところ</rt></ruby>か、お<ruby>互<rt>たが</rt></ruby>いに<ruby>質問<rt>しつもん</rt></ruby>したり<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えたりしてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_07",
    title: "初級1 ロールプレイ07 (Can-do 19)",
    cando: "Can-do 19",
    level: "socap1_5_8",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Sau giờ làm, đồng nghiệp người Nhật sẽ lái xe đưa bạn về nhà.",
        "Nhà của bạn ở vị trí a (b/c/d). Hãy hướng dẫn đường đi đến nhà.",
        "(Bạn có thể tự chọn vị trí nhà từ a–d)",
        "(Đồng nghiệp người Nhật sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>後<rt>あと</rt></ruby>、<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>車<rt>くるま</rt></ruby>で<ruby>家<rt>いえ</rt></ruby>まで<ruby>送<rt>おく</rt></ruby>ってくれることになりました。あなたの<ruby>家<rt>うち</rt></ruby>は a(b/c/d)です。",
        "<ruby>家<rt>いえ</rt></ruby>までの<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>案内<rt>あんない</rt></ruby>してください。（<ruby>家<rt>いえ</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>は a-d の<ruby>中<rt>なか</rt></ruby>から<ruby>自由<rt>じゆう</rt></ruby>に<ruby>選<rt>えら</rt></ruby>んでください）（<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　日本人の同僚（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>後<rt>あと</rt></ruby>、あなたは<ruby>帰<rt>かえ</rt></ruby>ろうとしている<ruby>実習生<rt>じっしゅうせい</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いました。あなたは<ruby>実習生<rt>じっしゅうせい</rt></ruby>を<ruby>家<rt>いえ</rt></ruby>まで<ruby>送<rt>おく</rt></ruby>ることにしました。",
        "<ruby>家<rt>いえ</rt></ruby>までの<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、<ruby>送<rt>おく</rt></ruby>ってあげてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_08",
    title: "初級1 ロールプレイ08 (Can-do 21)",
    cando: "Can-do 21",
    level: "socap1_5_8",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn đi xem phim cùng bạn bè, và cần quyết định thời gian và địa điểm hẹn gặp nhau. Tuy nhiên, bạn không thuận tiện với một trong hai (thời gian hoặc địa điểm) mà người kia đề xuất.",
        "Hãy đưa ra phương án thay thế và cùng trao đổi để quyết định thời gian và địa điểm gặp nhau.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>友<rt>とも</rt></ruby>だちと<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>くので、<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせの<ruby>時間<rt>じかん</rt></ruby>と<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>決<rt>き</rt></ruby>めます。でも、<ruby>友<rt>とも</rt></ruby>だちが<ruby>提案<rt>ていあん</rt></ruby>した<ruby>時間<rt>じかん</rt></ruby>または<ruby>場所<rt>ばしょ</rt></ruby>のどちらかが<ruby>都合<rt>つごう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いです。",
        "<ruby>代案<rt>だいあん</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>して、<ruby>時間<rt>じかん</rt></ruby>と<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>相談<rt>そうだん</rt></ruby>して<ruby>決<rt>き</rt></ruby>めてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　友だち役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>友<rt>とも</rt></ruby>だち<ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "<ruby>友<rt>とも</rt></ruby>だちと<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>くので、<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせの<ruby>時間<rt>じかん</rt></ruby>と<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>決<rt>き</rt></ruby>めます。",
        "あなたが<ruby>時間<rt>じかん</rt></ruby>と<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>提示<rt>ていじ</rt></ruby>して、<ruby>時間<rt>じかん</rt></ruby>と<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>相談<rt>そうだん</rt></ruby>して<ruby>決<rt>き</rt></ruby>めてください。（<ruby>友<rt>とも</rt></ruby>だちが<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_09",
    title: "初級1 ロールプレイ09 (Can-do 24)",
    cando: "Can-do 24",
    level: "socap1_5_8",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh (tiền bối)",
      role_jp: "ロールカード　先輩実習生",
      role_jp_ruby: "ロールカード　<ruby>先輩実習生<rt>せんぱいじっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Một thực tập sinh mới đến khu phố của bạn.",
        "Hãy mời họ đi ăn, đi mua sắm hoặc tham gia sự kiện.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "あなたの<ruby>町<rt>まち</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しく<ruby>実習生<rt>じっしゅうせい</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。",
        "<ruby>食事<rt>しょくじ</rt></ruby>や<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>、イベントに<ruby>誘<rt>さそ</rt></ruby>ってください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　後輩実習生",
      role_jp_ruby: "ロールカード　<ruby>後輩実習生<rt>こうはいじっしゅうせい</rt></ruby>",
      instructions_jp: [
        "あなたは<ruby>町<rt>まち</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しく<ruby>来<rt>き</rt></ruby>たばかりです。<ruby>先輩<rt>せんぱい</rt></ruby>から<ruby>食事<rt>しょくじ</rt></ruby>や<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>、イベントに<ruby>誘<rt>さそ</rt></ruby>われます。",
        "<ruby>先輩<rt>せんぱい</rt></ruby>の<ruby>誘<rt>さそ</rt></ruby>いに<ruby>答<rt>こた</rt></ruby>えてください。（<ruby>先輩<rt>せんぱい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },

  // ============================================================
  // ■ 初級１：第９課と第１０課 (socap1_9_10)
  // ============================================================
  {
    id: "s1_10",
    title: "初級1 ロールプレイ10 (Can-do 29)",
    cando: "Can-do 29",
    level: "socap1_9_10",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn phải đọc hướng dẫn sử dụng máy, nhưng tiếng Nhật khá khó.",
        "Hãy nhờ đồng nghiệp người Nhật giúp đỡ.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>機械<rt>きかい</rt></ruby>の<ruby>説明書<rt>せつめいしょ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>まなければなりませんが、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>難<rt>むずか</rt></ruby>しいです。",
        "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>に<ruby>手伝<rt>てつだ</rt></ruby>いを<ruby>頼<rt>たの</rt></ruby>んでください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　日本人の同僚（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>困<rt>こま</rt></ruby>っています。<ruby>手伝<rt>てつだ</rt></ruby>ってください。（<ruby>実習生<rt>じっしゅうせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_11",
    title: "初級1 ロールプレイ11 (Can-do 34)",
    cando: "Can-do 34",
    level: "socap1_9_10",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn tham gia lớp học tiếng Nhật tại địa phương.",
        "Hãy trả lời phỏng vấn của giáo viên.",
        "(Giáo viên sẽ là người chủ động bắt đầu câu chuyện.)"
      ],
      instructions_jp: [
        "<ruby>地域<rt>ちいき</rt></ruby>の<ruby>日本語教室<rt>にほんごきょうしつ</rt></ruby>に<ruby>通<rt>かよ</rt></ruby>います。",
        "<ruby>日本語教室<rt>にほんごきょうしつ</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>のインタビューに<ruby>答<rt>こた</rt></ruby>えてください。（<ruby>先生<rt>せんせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　日本語教室の先生（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>日本語教室<rt>にほんごきょうしつ</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "あなたは<ruby>地域<rt>ちいき</rt></ruby>の<ruby>日本語学校<rt>にほんごがっこう</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。<ruby>実習生<rt>じっしゅうせい</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。",
        "<ruby>日本語学習<rt>にほんごがくしゅう</rt></ruby>の<ruby>経験<rt>けいけん</rt></ruby>や<ruby>希望<rt>きぼう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },

  // ============================================================
  // ■ 初級１：第１１課から第１４課 (socap1_11_14)
  // ============================================================
  {
    id: "s1_12",
    title: "初級1 ロールプレイ12 (Can-do 36)",
    cando: "Can-do 36",
    level: "socap1_11_14",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn sắp tổ chức tiệc sinh nhật tại nhà bạn bè. Bạn được giao nhiệm vụ đi mua đồ. Hiện tại, bạn đang ở siêu thị cùng bạn mình.",
        "Hãy quyết định sẽ mua đồ ăn, đồ uống và món tráng miệng gì cho bữa tiệc.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "これから<ruby>友<rt>とも</rt></ruby>だちの<ruby>家<rt>うち</rt></ruby>で<ruby>友<rt>とも</rt></ruby>だちの<ruby>誕生日<rt>たんじょうび</rt></ruby>パーティーをします。あなたは<ruby>買<rt>か</rt></ruby>い<ruby>物係<rt>ものがかり</rt></ruby>になりました。",
        "<ruby>今<rt>いま</rt></ruby>、<ruby>友<rt>とも</rt></ruby>だちとスーパーに<ruby>来<rt>き</rt></ruby>ています。<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>、<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>、デザートに<ruby>何<rt>なに</rt></ruby>を<ruby>買<rt>か</rt></ruby>うか<ruby>決<rt>き</rt></ruby>めてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　友だち役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>友<rt>とも</rt></ruby>だち<ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "これから<ruby>友<rt>とも</rt></ruby>だちの<ruby>家<rt>うち</rt></ruby>で<ruby>友<rt>とも</rt></ruby>だちの<ruby>誕生日<rt>たんじょうび</rt></ruby>パーティーをします。あなたは<ruby>買<rt>か</rt></ruby>い<ruby>物係<rt>ものがかり</rt></ruby>になりました。",
        "<ruby>今<rt>いま</rt></ruby>、<ruby>友<rt>とも</rt></ruby>だちとスーパーに<ruby>来<rt>き</rt></ruby>ています。<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>、<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>、デザートに<ruby>何<rt>なに</rt></ruby>を<ruby>買<rt>か</rt></ruby>うか<ruby>決<rt>き</rt></ruby>めてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_13",
    title: "初級1 ロールプレイ13 (Can-do 40)",
    cando: "Can-do 40",
    level: "socap1_11_14",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn được đồng nghiệp mời ăn bánh kẹo (quà lưu niệm từ chuyến du lịch).",
        "Hãy thử ăn và nói cảm nhận của bạn.",
        "(Đồng nghiệp sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>旅行<rt>りょこう</rt></ruby>で<ruby>買<rt>か</rt></ruby>ってきたお<ruby>土産<rt>みやげ</rt></ruby>のお<ruby>菓子<rt>かし</rt></ruby>をすすめられました。",
        "<ruby>食<rt>た</rt></ruby>べてみて、<ruby>感想<rt>かんそう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　日本人の同僚（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "あなたは<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>に<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>って<ruby>実習生<rt>じっしゅうせい</rt></ruby>にお<ruby>土産<rt>みやげ</rt></ruby>のお<ruby>菓子<rt>かし</rt></ruby>を<ruby>買<rt>か</rt></ruby>ってきました。",
        "<ruby>実習生<rt>じっしゅうせい</rt></ruby>にすすめてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_14",
    title: "初級1 ロールプレイ14 (Can-do 44)",
    cando: "Can-do 44",
    level: "socap1_11_14",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn được cấp trên hỏi về tiến độ công việc, nhưng vẫn chưa hoàn thành.",
        "Hãy trả lời câu hỏi của cấp trên.",
        "(Cấp trên sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>上司<rt>じょうし</rt></ruby>に<ruby>仕事<rt>しごと</rt></ruby>の<ruby>作業状況<rt>さぎょうじょうきょう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かれましたが、まだ<ruby>終<rt>お</rt></ruby>わっていません。",
        "<ruby>上司<rt>じょうし</rt></ruby>の<ruby>質問<rt>しつもん</rt></ruby>に<ruby>答<rt>こた</rt></ruby>えてください。（<ruby>上司<rt>じょうし</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　上司（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>上司<rt>じょうし</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "あなたは<ruby>実習生<rt>じっしゅうせい</rt></ruby>に<ruby>仕事<rt>しごと</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>をしました。",
        "その<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったかどうか、<ruby>作業状況<rt>さぎょうじょうきょう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_15",
    title: "初級1 ロールプレイ15 (Can-do 50)",
    cando: "Can-do 50",
    level: "socap1_11_14",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn muốn xin nghỉ.",
        "Hãy trao đổi trước với cấp trên để xin phép.",
        "(Bạn sẽ là người chủ động bắt đầu câu chuyện.)"
      ],
      instructions_jp: [
        "<ruby>休<rt>やす</rt></ruby>みをとりたいです。<ruby>上司<rt>じょうし</rt></ruby>に<ruby>事前<rt>じぜん</rt></ruby>に<ruby>許可<rt>きょか</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　上司（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>上司<rt>じょうし</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "<ruby>実習生<rt>じっしゅうせい</rt></ruby>が<ruby>許可<rt>きょか</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めてきます。<ruby>答<rt>こた</rt></ruby>えてください。（<ruby>実習生<rt>じっしゅうせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },

  // ============================================================
  // ■ 初級１：第１５課から第１８課 (socap1_15_18)
  // ============================================================
  {
    id: "s1_16",
    title: "初級1 ロールプレイ16 (Can-do 52)",
    cando: "Can-do 52",
    level: "socap1_15_18",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn cảm thấy không khỏe nên đã đến bệnh viện.",
        "Hãy nói với bác sĩ về các triệu chứng của bạn.",
        "(Bác sĩ sẽ là người chủ động bắt đầu câu chuyện.)"
      ],
      instructions_jp: [
        "<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いので、<ruby>病院<rt>びょういん</rt></ruby>に<ruby>来<rt>き</rt></ruby>ました。",
        "<ruby>医者<rt>いしゃ</rt></ruby>に<ruby>症状<rt>しょうじょう</rt></ruby>を<ruby>話<rt>はな</rt></ruby>してください。（<ruby>医者<rt>いしゃ</rt></ruby>から<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　医者（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>医者<rt>いしゃ</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "<ruby>患者<rt>かんじゃ</rt></ruby>が<ruby>病院<rt>びょういん</rt></ruby>に<ruby>来<rt>き</rt></ruby>ました。<ruby>症状<rt>しょうじょう</rt></ruby>について<ruby>質問<rt>しつもん</rt></ruby>してください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_17",
    title: "初級1 ロールプレイ17 (Can-do 57)",
    cando: "Can-do 57",
    level: "socap1_15_18",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Đồng nghiệp của bạn có vẻ không khỏe.",
        "Hãy chủ động bắt chuyện và đưa ra lời khuyên về cách xử lý.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>同僚<rt>どうりょう</rt></ruby>の<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>そうです。<ruby>対処法<rt>たいしょほう</rt></ruby>をアドバイスしてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　同僚役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "あなたは<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>良<rt>よ</rt></ruby>くないです。<ruby>同僚<rt>どうりょう</rt></ruby>のアドバイスを<ruby>聞<rt>き</rt></ruby>いてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_18",
    title: "初級1 ロールプレイ18 (Can-do 58)",
    cando: "Can-do 58",
    level: "socap1_15_18",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Tuần trước đồng nghiệp của bạn bị ốm, nhưng giờ đã khỏe lại.",
        "Hãy nói chuyện với đồng nghiệp và chia sẻ những điều bạn chú ý để giữ gìn sức khỏe.",
        "(Đồng nghiệp sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>先週<rt>せんしゅう</rt></ruby><ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>していた<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>元気<rt>げんき</rt></ruby>になりました。<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>健康<rt>けんこう</rt></ruby>について<ruby>話<rt>はな</rt></ruby>します。",
        "<ruby>自分<rt>じぶん</rt></ruby>が<ruby>健康<rt>けんこう</rt></ruby>のために<ruby>気<rt>き</rt></ruby>をつけていることを<ruby>話<rt>はな</rt></ruby>してください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　同僚役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "あなたは<ruby>先週<rt>せんしゅう</rt></ruby><ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>していましたが<ruby>元気<rt>げんき</rt></ruby>になりました。<ruby>同僚<rt>どうりょう</rt></ruby>はいつも<ruby>元気<rt>げんき</rt></ruby>です。",
        "<ruby>健康<rt>けんこう</rt></ruby>のために<ruby>気<rt>き</rt></ruby>をつけていることを<ruby>聞<rt>き</rt></ruby>いてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_19",
    title: "初級1 ロールプレイ19 (Can-do 62)",
    cando: "Can-do 62",
    level: "socap1_15_18",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Bạn đã về Việt Nam chơi và mua quà cho đồng nghiệp khi quay lại Nhật.",
        "Hãy đưa quà và trò chuyện với đồng nghiệp.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "ベトナムに<ruby>一時帰国<rt>いちじきこく</rt></ruby>したときに、<ruby>同僚<rt>どうりょう</rt></ruby>に<ruby>買<rt>か</rt></ruby>ってきたお<ruby>土産<rt>みやげ</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>してください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　日本人の同僚（会話例あり）",
      role_jp_ruby: "ロールカード　<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>（<ruby>会話例<rt>かいわれい</rt></ruby>あり）",
      instructions_jp: [
        "<ruby>実習生<rt>じっしゅうせい</rt></ruby>が<ruby>一時帰国<rt>いちじきこく</rt></ruby>した<ruby>時<rt>とき</rt></ruby>に、あなたにお<ruby>土産<rt>みやげ</rt></ruby>を<ruby>買<rt>か</rt></ruby>ってきてくれました。",
        "お<ruby>土産<rt>みやげ</rt></ruby>について<ruby>聞<rt>き</rt></ruby>いてください。（<ruby>実習生<rt>じっしゅうせい</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  },
  {
    id: "s1_20",
    title: "初級1 ロールプレイ20 (Can-do 66)",
    cando: "Can-do 66",
    level: "socap1_15_18",
    student: {
      role_vn: "Thẻ nhập vai - Thực tập sinh",
      role_jp: "ロールカード　実習生",
      role_jp_ruby: "ロールカード　<ruby>実習生<rt>じっしゅうせい</rt></ruby>",
      instructions_vn: [
        "Tháng tới, cấp trên người Nhật của bạn sẽ chuyển công tác.",
        "Hãy cùng các đồng nghiệp khác trao đổi về việc tổ chức tiệc chia tay và mua quà tặng.",
        "(Bạn sẽ là người chủ động bắt chuyện.)"
      ],
      instructions_jp: [
        "<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>上司<rt>じょうし</rt></ruby>が<ruby>転勤<rt>てんきん</rt></ruby>します。",
        "<ruby>送別会<rt>そうべつかい</rt></ruby>や<ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>について<ruby>他<rt>た</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>相談<rt>そうだん</rt></ruby>して<ruby>決<rt>き</rt></ruby>めてください。（あなたから<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    },
    teacher: {
      role_jp: "ロールカード　同僚役（実習生）",
      role_jp_ruby: "ロールカード　<ruby>同僚<rt>どうりょう</rt></ruby><ruby>役<rt>やく</rt></ruby>（<ruby>実習生<rt>じっしゅうせい</rt></ruby>）",
      instructions_jp: [
        "<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>上司<rt>じょうし</rt></ruby>が<ruby>転勤<rt>てんきん</rt></ruby>します。",
        "<ruby>送別会<rt>そうべつかい</rt></ruby>や<ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>について<ruby>他<rt>た</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>相談<rt>そうだん</rt></ruby>して<ruby>決<rt>き</rt></ruby>めてください。（<ruby>同僚<rt>どうりょう</rt></ruby>が<ruby>話<rt>はな</rt></ruby>しかけます）"
      ]
    }
  }
];

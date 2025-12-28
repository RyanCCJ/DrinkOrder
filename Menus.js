const MENUS = {
    "shops": [
        {
            "id": "50lan",
            "name": "五十嵐",
            "style": {
                "primaryColor": "#003366", // Brand Blue (Text/Headers)
                "secondaryColor": "#FFFFFF", // White
                "accentColor": "#FFD700", // Brand Yellow (Backgrounds/Highlights)
                "backgroundColor": "#ffe562", // Light Yellow Background
                "logo": IMG_50LAN_LOGO,
                "menuImage": IMG_50LAN_MENU,
                "fontFamily": "'Noto Sans TC', sans-serif",
                "layoutMode": "list" // Text-focused layout logic
            },
            "categories": [
                {
                    "name": "找好茶 (Tea)",
                    "items": [
                        { "name": "茉莉綠茶", "prices": { "M": 30, "L": 35 } },
                        { "name": "阿薩姆紅茶", "prices": { "M": 30, "L": 35 } },
                        { "name": "四季春青茶", "prices": { "M": 30, "L": 35 } },
                        { "name": "黃金烏龍", "prices": { "M": 30, "L": 35 } },
                        { "name": "文山包種", "prices": { "M": 30, "L": 35 } }
                    ]
                },
                {
                    "name": "找奶茶 (Milk Tea)",
                    "items": [
                        { "name": "奶茶", "prices": { "M": 40, "L": 55 } },
                        { "name": "奶綠", "prices": { "M": 40, "L": 55 } },
                        { "name": "烏龍奶茶", "prices": { "M": 40, "L": 55 } },
                        { "name": "珍珠奶茶", "prices": { "M": 40, "L": 55 } },
                        { "name": "波霸奶茶", "prices": { "M": 40, "L": 55 } }
                    ]
                },
                {
                    "name": "找拿鐵 (Latte)",
                    "items": [
                        { "name": "紅茶拿鐵", "prices": { "M": 50, "L": 65 } },
                        { "name": "綠茶拿鐵", "prices": { "M": 50, "L": 65 } },
                        { "name": "烏龍拿鐵", "prices": { "M": 50, "L": 65 } },
                        { "name": "阿華田拿鐵", "prices": { "M": 55, "L": 75 } }
                    ]
                },
                {
                    "name": "找新鮮 (Fresh)",
                    "items": [
                        { "name": "檸檬綠", "prices": { "M": 40, "L": 55 } },
                        { "name": "梅の綠", "prices": { "M": 40, "L": 55 } },
                        { "name": "金桔檸檬", "prices": { "M": 50, "L": 65 } },
                        { "name": "8冰綠", "prices": { "M": 40, "L": 55 } },
                        { "name": "檸檬汁", "prices": { "M": 50, "L": 65 } }
                    ]
                }
            ],
            "config": {
                "sugar": ["正常", "少糖(7分)", "半糖(5分)", "微糖(3分)", "無糖"],
                "ice": ["正常", "少冰", "微冰", "去冰", "熱"],
                "toppings": [
                    { "name": "波霸", "price": 10 },
                    { "name": "珍珠", "price": 10 },
                    { "name": "椰果", "price": 10 },
                    { "name": "布丁", "price": 10 },
                    { "name": "冰淇淋", "price": 10 }
                ]
            }
        },
        {
            "id": "kebuke",
            "name": "可不可",
            "style": {
                "primaryColor": "#c19b66", // Gold
                "secondaryColor": "#FFFFFF",
                "accentColor": "#c19b66",
                "backgroundColor": "#003445", // Deep Teal
                "menuItemBgOpacity": 0.1,
                "logo": IMG_KEBUKE_LOGO,
                "menuImage": IMG_KEBUKE_MENU,
                "fontFamily": "'Noto Sans TC', serif",
                "layoutMode": "list"
            },
            "categories": [
                {
                    "name": "菜單 MENU",
                    "items": [
                        { "name": "熟成紅茶", "prices": { "M": 25, "L": 30 }, "description": "解炸物/燒烤肉類油膩，茶味濃郁帶果香" },
                        { "name": "麗春紅茶", "prices": { "M": 25, "L": 30 }, "description": "去除海鮮羶腥，茶味較淡帶花香" },
                        { "name": "胭脂紅茶", "prices": { "M": 35, "L": 40 }, "description": "絲絨般的蜜桃果香" },
                        { "name": "雪藏紅茶", "prices": { "M": 45, "L": 55 }, "description": "冰淇淋與紅茶的綿綿情意" },
                        { "name": "熟成冷露", "prices": { "M": 25, "L": 30 }, "description": "手工冬瓜與茶更神秘比例搭配" },
                        { "name": "雪花冷露", "prices": { "M": 25, "L": 30 }, "description": "手工冬瓜獨奏" },
                        { "name": "春芽冷露", "prices": { "M": 25, "L": 30 }, "description": "手工冬瓜綠茶" },
                        { "name": "春芽綠茶", "prices": { "M": 25, "L": 30 }, "description": "綠茶，糸糸中帶點彔彔" },
                        { "name": "冷露歐蕾", "prices": { "M": 40, "L": 50 }, "description": "手工冬瓜與鮮奶" },
                        { "name": "熟成歐蕾", "prices": { "M": 40, "L": 50 }, "description": "熟成鮮奶茶" },
                        { "name": "白玉歐蕾", "prices": { "M": 50, "L": 60 }, "description": "珍奶不解釋" },
                        { "name": "冷露檸果", "prices": { "M": 50, "L": 60 }, "description": "古法熬煮冬瓜舞整顆先切檸檬" },
                        { "name": "熟成檸果", "prices": { "M": 50 }, "description": "每日限量鮮檸紅茶" },
                        { "name": "胭脂多多", "prices": { "M": 40, "L": 50 }, "description": "蜜桃裡的兒時記憶" }
                    ]
                }
            ],
            "config": {
                "sugar": ["100% 正常糖", "70% 少糖", "50% 半糖", "30% 微糖", "20% 二分糖", "10% 一分糖", "無糖"],
                "ice": ["正常冰", "少冰", "微冰", "去冰", "完全去冰", "常溫", "溫", "熱"],
                "toppings": [
                    { "name": "白玉", "price": 10 },
                    { "name": "水玉", "price": 10 }
                ]
            }
        },
        {
            "id": "wootea",
            "name": "五桐號",
            "style": {
                "primaryColor": "#4a3728", // Dark Brown
                "secondaryColor": "#ffffff", // White
                "accentColor": "#d4a76a", // Tan/Gold
                "backgroundColor": "#fef4ec", // Peach/Cream
                "menuItemBgOpacity": 0.5,
                "logo": IMG_WOOTEA_LOGO,
                "menuImage": IMG_WOOTEA_MENU,
                "fontFamily": "'Noto Sans TC', sans-serif",
                "layoutMode": "list"
            },
            "categories": [
                {
                    "name": "PURE TEA 醇茶",
                    "items": [
                        { "name": "經典五桐茶", "prices": { "L": 35 } },
                        { "name": "杏仁凍五桐茶", "prices": { "L": 49 } },
                        { "name": "一把青茶", "prices": { "L": 35 } },
                        { "name": "茉莉香片", "prices": { "L": 35 } },
                        { "name": "老實人紅茶", "prices": { "L": 35 } },
                        { "name": "清香烏龍", "prices": { "L": 35 } },
                        { "name": "玄米蕎麥", "prices": { "L": 40 } }
                    ]
                },
                {
                    "name": "PURE MILK 鮮奶",
                    "items": [
                        { "name": "濃煮拿鐵", "prices": { "L": 60 } },
                        { "name": "綠茶凍濃煮拿鐵", "prices": { "L": 65 } },
                        { "name": "鐵觀音拿鐵", "prices": { "L": 60 } },
                        { "name": "玄米蕎麥拿鐵", "prices": { "L": 65 } },
                        { "name": "茶花烏龍拿鐵", "prices": { "L": 65 } },
                        { "name": "茉莉綠茶拿鐵", "prices": { "L": 60 } },
                        { "name": "珍珠濃煮拿鐵", "prices": { "L": 60 } }
                    ]
                },
                {
                    "name": "TRADITIONAL 古早味",
                    "items": [
                        { "name": "豆豆紅", "prices": { "L": 60 } },
                        { "name": "豆漿凍紅茶", "prices": { "L": 45 } },
                        { "name": "粉粿青檸冬瓜", "prices": { "L": 60 } },
                        { "name": "農榨青檸冬瓜", "prices": { "L": 50 } },
                        { "name": "老鹽梅子", "prices": { "L": 60 } },
                        { "name": "青梅烏龍凍飲", "prices": { "L": 50 } }
                    ]
                },
                {
                    "name": "MILK TEA 奶茶",
                    "items": [
                        { "name": "濃煮奶茶", "prices": { "L": 55 } },
                        { "name": "綠茶凍濃煮奶茶", "prices": { "L": 60 } },
                        { "name": "鐵觀音奶茶", "prices": { "L": 55 } },
                        { "name": "最完美手沖泰奶", "prices": { "L": 79 } },
                        { "name": "珍珠手沖泰奶", "prices": { "L": 69 } },
                        { "name": "玄米蕎麥奶茶", "prices": { "L": 60 } },
                        { "name": "茶花烏龍奶茶", "prices": { "L": 60 } },
                        { "name": "茉莉奶綠", "prices": { "L": 55 } },
                        { "name": "珍珠奶茶", "prices": { "L": 55 } }
                    ]
                },
                {
                    "name": "FRUIT TEA 農摘",
                    "items": [
                        { "name": "柚香荔枝凍飲", "prices": { "L": 65 } },
                        { "name": "山形蜜桃凍飲", "prices": { "L": 65 } },
                        { "name": "桂花烏龍凍飲", "prices": { "L": 60 } },
                        { "name": "紅柚青茶凍飲", "prices": { "L": 65 } },
                        { "name": "青檸青茶", "prices": { "L": 50 } },
                        { "name": "紅心芭樂綠茶", "prices": { "L": 65 } },
                        { "name": "紅心芭樂烏龍", "prices": { "L": 65 } }
                    ]
                },
                {
                    "name": "CHEESE TEA 奶霜",
                    "items": [
                        { "name": "五桐奶霜", "prices": { "L": 55 } },
                        { "name": "老實人奶霜紅茶", "prices": { "L": 55 } },
                        { "name": "蕎麥奶霜", "prices": { "L": 60 } },
                        { "name": "茉莉奶霜", "prices": { "L": 55 } },
                        { "name": "烏龍奶霜", "prices": { "L": 55 } }
                    ]
                }
            ],
            "config": {
                "sugar": ["正常糖", "少糖", "半糖", "微糖", "不額外加糖"],
                "ice": ["正常冰", "少冰", "微冰", "去冰", "熱飲"],
                "toppings": [
                    { "name": "珍珠", "price": 10 },
                    { "name": "綠茶凍", "price": 10 },
                    { "name": "杏仁凍", "price": 15 },
                    { "name": "豆漿凍", "price": 15 },
                    { "name": "小芋圓", "price": 15 },
                    { "name": "黑糖粉粿", "price": 15 },
                    { "name": "奶霜", "price": 20 }
                ]
            }
        },
        {
            "id": "dayuanzi",
            "name": "大苑子",
            "style": {
                "primaryColor": "#1c4a38", // Deep Green
                "secondaryColor": "#ffffff", // White
                "accentColor": "#84b81c", // Lime Green
                "backgroundColor": "#f1f8f1", // Very Light Green tint
                "menuItemBgOpacity": 0.8,
                "logo": IMG_DAYUANZI_LOGO,
                "menuImage": IMG_DAYUANZI_MENU,
                "fontFamily": "'Noto Sans TC', sans-serif",
                "layoutMode": "list"
            },
            "categories": [
                {
                    "name": "本季必推 Seasonal",
                    "items": [
                        { "name": "櫻桃朵朵", "prices": { "L": 240 } },
                        { "name": "櫻桃翡翠", "prices": { "L": 120 } },
                        { "name": "許慶良戀戀芒果", "prices": { "M": 80 } },
                        { "name": "奇異果冰鑽", "prices": { "L": 85 } },
                        { "name": "奇異果翡翠", "prices": { "L": 75 } },
                        { "name": "愛文芒果冰沙", "prices": { "L": 110, "M": 80 } },
                        { "name": "愛文芒果冰沙Double Double", "prices": { "L": 170 } },
                        { "name": "愛文翡翠", "prices": { "分享瓶": 100, "L": 65 } },
                        { "name": "愛文翡翠Double", "prices": { "L": 95 } },
                        { "name": "仲夏戀習曲", "prices": { "L": 110 } },
                        { "name": "百變火龍冰沙", "prices": { "L": 80 } },
                        { "name": "火龍果翡翠", "prices": { "L": 65 } },
                        { "name": "芭樂檸檬", "prices": { "分享瓶": 100, "L": 65 } },
                        { "name": "芭樂梅", "prices": { "分享瓶": 100, "L": 65 } },
                        { "name": "春熙柳橙翡翠", "prices": { "分享瓶": 100, "L": 65 } }
                    ]
                },
                {
                    "name": "許慶良鮮乳 Premium Milk",
                    "items": [
                        { "name": "許慶良鮮奶茶", "prices": { "分享瓶": 90, "L": 55, "M": 45 } },
                        { "name": "許慶良珍珠鮮奶茶", "prices": { "分享瓶": 90, "L": 55, "M": 45 } },
                        { "name": "許慶良觀音拿鐵", "prices": { "分享瓶": 90, "L": 55, "M": 45 } },
                        { "name": "許慶良珍珠觀音拿鐵", "prices": { "分享瓶": 90, "L": 55, "M": 45 } },
                        { "name": "許慶良鮮奶珍珠", "prices": { "M": 65 } }
                    ]
                },
                {
                    "name": "鮮搾 Fresh Squeeze",
                    "items": [
                        { "name": "戀戀檸檬", "prices": { "分享瓶": 80, "L": 50 } },
                        { "name": "鮮百香果綠", "prices": { "分享瓶": 90, "L": 55 } },
                        { "name": "百香愛玉", "prices": { "分享瓶": 95, "L": 60 } },
                        { "name": "檸檬愛玉", "prices": { "分享瓶": 95, "L": 60 } },
                        { "name": "柚美粒", "prices": { "分享瓶": 100, "L": 65 } },
                        { "name": "鮮搾葡萄柚綠", "prices": { "分享瓶": 100, "L": 65 } },
                        { "name": "蜂蜜檸檬", "prices": { "L": 60 } }
                    ]
                },
                {
                    "name": "我挺農二代 Farmers Support",
                    "items": [
                        { "name": "天天5蔬果汁", "prices": { "M": 60 } },
                        { "name": "繽紛水果茶", "prices": { "L": 65 } },
                        { "name": "番茄梅", "prices": { "分享瓶": 95, "L": 60 } },
                        { "name": "翡翠檸檬", "prices": { "分享瓶": 90, "L": 55 } },
                        { "name": "許慶良鮮乳(936ml)", "prices": { "瓶": 119 } }
                    ]
                },
                {
                    "name": "奶茶 Milk Tea",
                    "items": [
                        { "name": "奶茶", "prices": { "分享瓶": 75, "L": 45, "M": 35 } },
                        { "name": "珍珠奶茶", "prices": { "分享瓶": 75, "L": 45, "M": 35 } },
                        { "name": "百年仙草凍奶茶", "prices": { "分享瓶": 75, "L": 45, "M": 35 } }
                    ]
                },
                {
                    "name": "特調 Signature Mix",
                    "items": [
                        { "name": "百年蜜仙草", "prices": { "分享瓶": 80, "L": 50 } },
                        { "name": "蘋果醋冰茶", "prices": { "分享瓶": 80, "L": 50 } },
                        { "name": "蔓越莓冰醋", "prices": { "分享瓶": 80, "L": 50 } },
                        { "name": "養樂多綠茶", "prices": { "分享瓶": 80, "L": 50 } },
                        { "name": "冬瓜檸檬", "prices": { "分享瓶": 90, "L": 55 } },
                        { "name": "蔓美粒", "prices": { "分享瓶": 95, "L": 60 } },
                        { "name": "金桔粒脆纖果", "prices": { "分享瓶": 100, "L": 65 } },
                        { "name": "蘋果多輕飲", "prices": { "分享瓶": 100, "L": 65 } }
                    ]
                },
                {
                    "name": "好茶 Pure Tea",
                    "items": [
                        { "name": "古城錫蘭紅茶", "prices": { "分享瓶": 55, "L": 30 } },
                        { "name": "文山青茶", "prices": { "分享瓶": 55, "L": 30 } },
                        { "name": "纖活綠茶", "prices": { "分享瓶": 55, "L": 30 } }
                    ]
                },
                {
                    "name": "輕果飲 Light Fruit",
                    "items": [
                        { "name": "百香輕果飲", "prices": { "分享瓶": 60, "L": 35 } },
                        { "name": "葡萄柚輕果飲", "prices": { "分享瓶": 70, "L": 40 } }
                    ]
                }
            ],
            "config": {
                "sugar": ["正常糖", "七分糖", "半糖", "三分糖", "無糖"],
                "ice": ["正常冰", "少冰", "去冰"],
                "toppings": [
                    { "name": "珍珠", "price": 10 },
                    { "name": "百年仙草凍", "price": 10 },
                    { "name": "蘆薈", "price": 10 },
                    { "name": "脆纖果", "price": 10 },
                    { "name": "愛玉", "price": 10 }
                ]
            }
        },
        {
            "id": "milksha",
            "name": "迷客夏",
            "style": {
                "primaryColor": "#678513", // Updated Green
                "secondaryColor": "#ffffff", // White
                "accentColor": "#557a26", // Darker Green
                "backgroundColor": "#f8faf5", // Very Light Green tint
                "menuItemBgOpacity": 0.7,
                "logo": IMG_MILKSHA_LOGO,
                "menuImage": IMG_MILKSHA_MENU,
                "fontFamily": "'Noto Sans TC', sans-serif",
                "layoutMode": "list"
            },
            "categories": [
                {
                    "name": "嚼對推薦 Recommended",
                    "items": [
                        { "name": "柚蜜白玉", "prices": { "L": 65 } },
                        { "name": "珍珠紅茶拿鐵", "prices": { "L": 65, "M": 55 } },
                        { "name": "檸檬蜜Q晶凍", "prices": { "L": 70 } },
                        { "name": "蜜Q茉香拿鐵", "prices": { "L": 90, "M": 80 } },
                        { "name": "珍珠手炒黑糖鮮奶", "prices": { "L": 95, "M": 75 } },
                        { "name": "仙草凍冬瓜茶", "prices": { "L": 40 } }
                    ]
                },
                {
                    "name": "愛茶的牛 Pure Tea",
                    "items": [
                        { "name": "焙香決明大麥", "prices": { "L": 30 } },
                        { "name": "娜杯紅茶", "prices": { "L": 30 } },
                        { "name": "英倫伯爵紅茶", "prices": { "L": 30 } },
                        { "name": "大正醇香紅茶", "prices": { "L": 30 } },
                        { "name": "原片初露青茶", "prices": { "L": 30 } },
                        { "name": "琥珀高峰烏龍", "prices": { "L": 30 } },
                        { "name": "茉莉原萃綠茶", "prices": { "L": 30 } },
                        { "name": "原鄉冬瓜茶", "prices": { "L": 30 } }
                    ]
                },
                {
                    "name": "手作特調 Handcrafted Special",
                    "items": [
                        { "name": "蜂蜜檸檬晶凍", "prices": { "L": 55 } },
                        { "name": "冰糖洛神梅", "prices": { "L": 45 } },
                        { "name": "冬瓜麥茶", "prices": { "L": 45 } },
                        { "name": "冬瓜檸檬", "prices": { "L": 45 } },
                        { "name": "冬瓜青茶", "prices": { "L": 50 } },
                        { "name": "白甘蔗青茶", "prices": { "L": 65 } },
                        { "name": "養樂多綠", "prices": { "L": 50 } },
                        { "name": "香柚綠茶", "prices": { "L": 55 } },
                        { "name": "冰萃檸檬", "prices": { "L": 55 } },
                        { "name": "冰萃柳丁", "prices": { "L": 60 } },
                        { "name": "青檸香茶", "prices": { "L": 65 } },
                        { "name": "柳丁綠茶/青茶", "prices": { "L": 50 } }
                    ]
                },
                {
                    "name": "牧場鮮奶茶 Milk Tea",
                    "items": [
                        { "name": "布朗紅茶拿鐵", "prices": { "L": 70, "M": 60 } },
                        { "name": "伯爵可可拿鐵", "prices": { "L": 70, "M": 60 } },
                        { "name": "蜂蜜麥茶拿鐵", "prices": { "L": 75, "M": 65 } },
                        { "name": "娜杯紅茶拿鐵", "prices": { "L": 55, "M": 45 } },
                        { "name": "伯爵紅茶拿鐵", "prices": { "L": 55, "M": 45 } },
                        { "name": "大正紅茶拿鐵", "prices": { "L": 55, "M": 45 } },
                        { "name": "焙香大麥拿鐵", "prices": { "L": 55, "M": 45 } },
                        { "name": "茉香綠茶拿鐵", "prices": { "L": 55, "M": 45 } },
                        { "name": "原片青茶拿鐵", "prices": { "L": 55, "M": 45 } },
                        { "name": "琥珀烏龍拿鐵", "prices": { "L": 55, "M": 45 } },
                        { "name": "醇農紅茶鮮豆奶", "prices": { "L": 55 } }
                    ]
                },
                {
                    "name": "綠光牧場鮮奶 Fresh Milk",
                    "items": [
                        { "name": "手炒黑糖鮮奶", "prices": { "M": 65 } },
                        { "name": "嫩仙草凍奶", "prices": { "M": 65 } },
                        { "name": "法芙娜純可可鮮奶", "prices": { "M": 65 } },
                        { "name": "珍珠鮮奶", "prices": { "M": 65 } },
                        { "name": "芋頭鮮奶", "prices": { "M": 65 } },
                        { "name": "綠光鮮奶家庭號", "prices": { "瓶": 169 } },
                        { "name": "綠光鮮奶小資瓶", "prices": { "瓶": 95 } },
                        { "name": "小迷無加糖豆漿", "prices": { "瓶": 95 } }
                    ]
                }
            ],
            "config": {
                "sugar": ["正常糖", "少糖", "半糖", "微糖", "無糖"],
                "ice": ["正常", "少冰", "微冰", "去冰", "溫", "熱"],
                "toppings": [
                    { "name": "珍珠", "price": 10 },
                    { "name": "仙草凍", "price": 10 },
                    { "name": "綠茶凍", "price": 10 },
                    { "name": "黃金Q角", "price": 15 },
                    { "name": "脆啵啵球", "price": 15 }
                ]
            }
        }
    ]
};

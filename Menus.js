const MENUS = {
    "shops": [
        {
            "id": "50lan",
            "name": "五十嵐",
            "style": {
                "primaryColor": "#FFD700", // Yellow
                "secondaryColor": "#003366", // Blue
                "fontFamily": "'Noto Sans TC', sans-serif"
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
                "primaryColor": "#1C305C",
                "secondaryColor": "#C5A96F",
                "fontFamily": "'Serif', serif"
            },
            "categories": [],
            "config": {
                "sugar": ["正常", "半糖", "微糖", "無糖"],
                "ice": ["正常", "少冰", "微冰", "去冰"],
                "toppings": [{ "name": "白玉", "price": 10 }]
            }
        }
    ]
};

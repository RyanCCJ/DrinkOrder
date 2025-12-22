/**
 * Serves the web-app.
 */
function doGet(e) {
    return HtmlService.createTemplateFromFile('index')
        .evaluate()
        .setTitle('訂飲料')
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Returns the full menu configuration to the client.
 */
function getMenuData() {
    return MENUS;
}

/**
 * Receives the order data and writes it to the Google Sheet.
 */
function submitOrder(orderData) {
    try {
        const shopName = orderData.shopName;
        const ss = getDB();
        const sheetId = ensureSheetForShop(ss, shopName);
        const sheet = ss.getSheetByName(sheetId);

        // timestamp, shop, drink, size, sugar, ice, toppings, price, user, note
        sheet.appendRow([
            new Date(),
            orderData.shopName,
            orderData.drinkName,
            orderData.size,
            orderData.sugar,
            orderData.ice,
            orderData.toppings.join(', '),
            orderData.price,
            orderData.userName,
            orderData.note
        ]);

        return { success: true, message: "訂單已送出！" };
    } catch (error) {
        Logger.log(error);
        return { success: false, message: "系統錯誤: " + error.toString() };
    }
}

/**
 * Gets or Creates the Database Spreadsheet.
 */
function getDB() {
    const props = PropertiesService.getScriptProperties();
    const dbId = props.getProperty('DB_SPREADSHEET_ID');

    if (dbId) {
        try {
            return SpreadsheetApp.openById(dbId);
        } catch (e) {
            Logger.log("Stored ID invalid, creating new one.");
        }
    }

    // Create new SS if not found
    const ss = SpreadsheetApp.create("DrinkOrder_Database");
    props.setProperty('DB_SPREADSHEET_ID', ss.getId());

    // Create specific permission is handled by the user authorizing the script
    return ss;
}

/**
 * Ensures a sheet exists for today and the specific shop.
 * Naming convention: YYYY-MM-DD-ShopName
 */
function ensureSheetForShop(ss, shopName) {
    const dateStr = Utilities.formatDate(new Date(), "Asia/Taipei", "yyyy-MM-dd");
    const sheetName = `${dateStr}-${shopName}`;

    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
        sheet = ss.insertSheet(sheetName);
        // Header
        sheet.appendRow(["訂單時間", "店家", "品項", "尺寸", "甜度", "冰塊", "加料", "金額", "訂購人", "備註"]);
        sheet.setFrozenRows(1);
        // Basic formatting
        sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#EFEFEF");
    }
    return sheetName;
}

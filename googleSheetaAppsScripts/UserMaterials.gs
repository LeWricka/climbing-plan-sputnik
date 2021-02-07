function getLastResponseInJson(){
    var headerContent = getHeaderContent();
    var lastRowContent = getLastRowContent();
    var mergedRows = Object.assign(...headerContent.map((k, i) => ({[k]: lastRowContent[i]})));
    var lastResponsInJson={'lastResponseInJson' : mergedRows}
    return lastResponsInJson;
}

function getPredefinedResponseInJson(){
    var headerContent = getHeaderContent();
    var lastRowContent = getPredefinedRowContent()
    var mergedRows = Object.assign(...headerContent.map((k, i) => ({[k]: lastRowContent[i]})));
    var lastResponsInJson={'lastResponseInJson' : mergedRows}
    return lastResponsInJson;
}

function getResponseForLineInJson(){
    var headerContent = getHeaderContent();
    var predefinedRow = getLastRowContent();
    var mergedRows = Object.assign(...headerContent.map((k, i) => ({[k]: lastRowContent[i]})));
    var lastResponsInJson={'lastResponseInJson' : mergedRows}
    return lastResponsInJson;
}

function getHeaderContent() {
    var sheet = SpreadsheetApp.getActive().getSheetByName('ClimbingPlan');

    //EXAMPLE: Get the data range based on our selected columns range.
    var dataRange = sheet.getRange(2, 1, 1, sheet.getLastColumn());
    var dataValues = dataRange.getValues()[0];

    return dataValues;
};

function getPredefinedRowContent() {
    var sheet = SpreadsheetApp.getActive().getSheetByName('ClimbingPlan');
    /*   var sheet = ss.getSheetByName(SheetName);
     */
    //Select the column we will check for the first blank cell
    var columnToCheck = sheet.getRange("A:A").getValues();
    var predefinedRow = sheet.getRange("P1").getValue()
    // Get the last row based on the data range of a single column.

    //EXAMPLE: Get the data range based on our selected columns range.
    var dataRange = sheet.getRange(predefinedRow, 1, 1, sheet.getLastColumn());

    var dataValues = dataRange.getValues()[0];
    return dataValues;
};

function getLastRowContent() {
    var sheet = SpreadsheetApp.getActive().getSheetByName('ClimbingPlan');
    /*   var sheet = ss.getSheetByName(SheetName);
     */
    //Select the column we will check for the first blank cell
    var columnToCheck = sheet.getRange("A:A").getValues();

    // Get the last row based on the data range of a single column.
    var lastRow = getLastRowSpecial(columnToCheck);

    //EXAMPLE: Get the data range based on our selected columns range.
    var dataRange = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn());
    var dataValues = dataRange.getValues()[0];

    return dataValues;
};

/************************************************************************
 *
 * Gets the last row number based on a selected column range values
 *
 * @param {array} range : takes a 2d array of a single column's values
 *
 * @returns {number} : the last row number with a value.
 *
 */

function getLastRowSpecial(range){
    var rowNum = 0;
    var blank = false;
    for(var row = 0; row < range.length; row++){

        if(range[row][0] === "" && !blank){
            rowNum = row;
            blank = true;
        }else if(range[row][0] !== ""){
            blank = false;
        };
    };
    return rowNum;
};

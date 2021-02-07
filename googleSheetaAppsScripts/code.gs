function createMenu() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var menuEntries = [
        {name: "Generate predefined assesment routine", functionName: "getRoutinesFromAssesmentResponseOnPredefinedRow"},
        {name: "Generate last assesment routine", functionName: "getRoutinesFromAssesmentResponse"}
    ];
    ss.addMenu("Assesment generator", menuEntries);
}

function getRoutinesFromAssesmentResponseOnPredefinedRow(e){
    var sheet = SpreadsheetApp.getActive().getSheetByName('ClimbingPlan');
    var predefinedRow = sheet.getRange("P1").getValue()
    var materialsToRoutinesMapper = getMaterialsToRoutinesMapper(e)
    var lastResponseInJson = getPredefinedResponseInJson()
    var options = {
        'method' : 'POST',
        'contentType' : 'application/json',
        'payload' : JSON.stringify({...lastResponseInJson, ...materialsToRoutinesMapper }),
    };

    var response = UrlFetchApp.fetch('https://us-central1-climbing-plan-sputnik1.cloudfunctions.net/sputnik1', options);
    Logger.log(response)
    Logger.log('M'+predefinedRow)
    var cell = sheet.getRange('M'+predefinedRow);
    cell.setValue(response);
}

function getRoutinesFromAssesmentResponse(e) {
    var sheet = SpreadsheetApp.getActive().getSheetByName('ClimbingPlan');
    var columnToCheck = sheet.getRange("A:A").getValues();
    var lastRow = getLastRowSpecial(columnToCheck);
    var materialsToRoutinesMapper = getMaterialsToRoutinesMapper(e)
    var lastResponseInJson = getLastResponseInJson()
    var options = {
        'method' : 'POST',
        'contentType' : 'application/json',
        'payload' : JSON.stringify({...lastResponseInJson, ...materialsToRoutinesMapper }),
    };

    var response = UrlFetchApp.fetch('https://us-central1-climbing-plan-sputnik1.cloudfunctions.net/sputnik1', options);
    Logger.log(response)
    Logger.log('M'+lastRow)
    var cell = sheet.getRange('M'+lastRow);
    cell.setValue(response);
}

function getLastRow() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('ClimbingPlan');
    Logger.log(sheet.getLastRow() + " Is the last Column.");

    var range = sheet.getDataRange();
    Logger.log(range.getLastRow() + " Is the last Column.");

    //Range Values
    var data = range.getValues();
    Logger.log(data);
}
function deleteTab() {

  var destination_sheet = SpreadsheetApp.openById("");
  var sheet = destination_sheet.getSheetByName('Tab Name to Be deleted');
  destination_sheet.deleteSheet(sheet);
  
}

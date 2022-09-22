function deleteColumn() {
  
  var destination_sheet = SpreadsheetApp.openById("");
  var tab = destination_sheet.getSheetByName('Raw Renamed');
  
  //delete 1st column
  tab.deleteColumn(1);
  
}

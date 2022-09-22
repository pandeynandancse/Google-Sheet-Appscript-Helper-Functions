function updateColumnFormat() {
  
  var destination_sheet = SpreadsheetApp.openById("");
  var tab = destination_sheet.getSheetByName('Raw Renamed');
  
  //get the column range whose format you want to change
  var column = tab.getRange('B1:B')
  
  // Plain text
  column.setNumberFormat("@");

  // Simple date format
  column.setNumberFormat("yyyy-mm-dd");

  // Simple date format
  column.setNumberFormat("dd-mm-yyyy");
}

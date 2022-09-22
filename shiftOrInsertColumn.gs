function shiftOrInsertColumn() {
  
  var destination_sheet = SpreadsheetApp.openById("");
  var sheet = destination_sheet.getSheetByName('Raw Renamed');
  
  // Shifts all columns by three
  sheet.insertColumns(1, 3);  //(index, howmany)

  // This inserts a column in the second column position
  sheet.insertColumnsAfter(1);  //(afterposition, howmany)

  // This inserts five columns before the first column
  sheet.insertColumnsBefore(1, 5);
}

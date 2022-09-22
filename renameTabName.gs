function renameTabName() {

var destination_sheet = SpreadsheetApp.openById("");
  
// rename the tab 'Raw' to 'Raw Renamed'
destination_sheet.getSheetByName('Raw').setName('Raw Renamed');

}

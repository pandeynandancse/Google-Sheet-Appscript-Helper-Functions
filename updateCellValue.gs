function updateCellValue() {

var destination_sheet = SpreadsheetApp.openById("");
 
// get the tab where you want to make update
var destination_sheet_tab = destination_sheet.getSheetByName('Raw');
  
// update the cell A4 of that tab value as 'f'  
var raw_tab_cell_value = destination_sheet_tab.getRange('A4').setValue('f');

}

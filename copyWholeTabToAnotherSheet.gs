function copyWholeTabToAnotherSheet() {

var source = SpreadsheetApp.getActiveSpreadsheet();
//var sheet = source.getSheets()[0];
var raw_tab = source.getSheetByName('Raw');
var destination = SpreadsheetApp.openById("");
raw_tab.copyTo(destination);  //creates new tab if not present

}

function addColumnInTabWithValidation() {
    
    var sss = SpreadsheetApp.openById(sheet_id); 
  
    // prepare range column where you want to add validation   
    var cell = sss.getRange('Raw!J2:J');

    // get validation-things/rule you want to add on that cell
    var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sss.getRangeByName('Vals!U2:U')).build();
  
    // add cell validation
    cell.setDataValidation(rule);
      
}

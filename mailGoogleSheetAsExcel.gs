function getGoogleSpreadsheetAsExcel(){

   var receipients = ['abc@gmail.com', 'def@gmail.com']
   var to = receipients.join();
  
   var url = "https://docs.google.com/spreadsheets/d/"+SpreadsheetApp.getActiveSpreadsheet().getId()+"/export"+"?format=xlsx&"
   var params = {method:"GET",headers:{"authorization":"Bearer "+ ScriptApp.getOAuthToken()}};
   var blob = UrlFetchApp.fetch(url, params).getBlob().setName("File.xlsx");
   
   var sender = 'sendermail@gmail.com';
   
   var subject = (" Subject Goes Here ");
    
   var body = "Dear Team,<BR><BR> Please find attached the Booking & Issuance Tracker. Also, given below is the summary of the same:" +  "\n";
    
   GmailApp.sendEmail(
           sender,          
           subject,          
           "Requires HTML",           
           {
             name: 'Title Of Sender Name', 
             htmlBody: body,
             cc:to, 
             attachments: [blob] 
           } 
   );
}

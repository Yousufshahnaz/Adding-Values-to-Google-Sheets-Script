function AddFields()
{
    // Assigning general variables (what we are assigning the cell values to)
    var leadSource = "School Visit";
    var status = "Sent";
    var accountName = " Administrative Account"
    
    // Google Sheet variable setup
    var sheet = SpreadsheetApp.getActiveSheet(); // Get spreadsheet
    var range = sheet.getRange("A1:I1000"); 
    var numRows = range.getNumRows(); // Get the number of rows to iterate through
 
    // Loop through the sheet's range, ignore the header.
    for (var i = 2; i < numRows; i++) 
      {
        // Grab the first name, and see make sure it is not empty
         var firstNameCell = range.getCell(i, 1);
         var firstNameCellValue = firstNameCell.getValue(); 
         if(firstNameCellValue != "")
         {
         
         // Assign the values for the three columns as needed: 
         var leadSourceCell = range.getCell(i, 7);
         leadSourceCell.setValue(leadSource);
         var statusCell = range.getCell(i, 8);
         statusCell.setValue(status);
         var accountNameCell = range.getCell(i, 9);
         var lastNameCell = range.getCell(i, 2).getValue();
         accountNameCell.setValue(lastNameCell + accountName);
        }
      }
}

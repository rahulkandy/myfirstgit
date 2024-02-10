function parseExcel(marks) {
  const reader = new FileReader();

  reader.onload = function(event) {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      
      workbook.SheetNames.forEach(sheetName => {
          const worksheet = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(worksheet);
          console.log(json); // Do something with the parsed data
      });
  };
  
  reader.readAsBinaryString(marks);

}
function handleFileUpload(event) {
  const file = event.target.files[0];
  parseExcel(file);
}



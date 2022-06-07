const data = [
  {
    
    rok: "2012",
    nominacja: "„What Makes You Beautiful”",
    kategoria: "	Najlepszy singel",
    
    
  },  
  {
    
    rok: "2013",
    nominacja: "One Directon",
    kategoria: "	Nagroda za międzynarodowy sukces",
   
    
  },
  {
    
    rok: "2014",
    nominacja: "	„Best Song Ever” ",
    kategoria: "Najlepszy brytyjski teledysk",
    
    
  },
  {
    
    rok: "2014",
    nominacja: "One Directon",
    kategoria: "Nagroda za międzynarodowy sukces",
    
    
  },
  {
    
    rok: "2015",
    nominacja: " „You & I” ",
    kategoria: "Najlepszy brytyjski teledysk",
    
    
  },
  {
    
    rok: "2016",
    nominacja: " „Drag Me Down” ",
    kategoria: "Najlepszy brytyjski teledysk",
    
    
  },
  {
    
    rok: "2017",
    nominacja: "	„History” ",
    kategoria: "Najlepszy brytyjski teledysk",
   
    
  },


];

function createTableRow(rowData) {
  const {  rok, nominacja, kategoria,  } = rowData;
  return ` <tr>
    
    <th scope="col" ">${rok}</th>
    <th scope="col" ">${nominacja}</th>
    <th scope="col" ">${kategoria}</th>
    
    
  </tr>`;
}

(() => {
  const table = document.querySelector("table");
  const tableContent = table.innerHTML;

  const tableRows = data.map((row) => createTableRow(row));

  table.innerHTML = tableContent + tableRows.join("");
})();
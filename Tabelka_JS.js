
function trasa(data, miasto, kraj, miejsce, przychod) {
    this.data = data;
    this.miasto = miasto;
    this.kraj = kraj;
    this.miejsce = miejsce;
    this.przychod = przychod;
}
const tab_trasa = new Array();
tab_trasa[0] = new trasa("25.04.2014", "Bogota", "Colombia", "Estadio El Campin", "$4,727,910");
tab_trasa[1] = new trasa("27.04.2014", "Lima", "Peru", "Estadio Nacional", "$3,362,870");
tab_trasa[2] = new trasa("30.04.2014", "Santiago", "Chile", "Estadio National", "$7,688,500");
tab_trasa[3] = new trasa("01.05.2014", "Santiago", "Chile", "Estadio National", "$7,688,500");
tab_trasa[4] = new trasa("03.05.2014", "Buenos Aires", "Argentina", "José Amalfitani Stadium", "$5,682,760");
tab_trasa[5] = new trasa("04.05.2014", "", "Argentina", "José Amalfitani Stadium", "$5,682,760");
tab_trasa[6] = new trasa("06.05.2014", "Montevideo", "Uruguay", "Estadio Centenario", "$2,316,460");
tab_trasa[7] = new trasa("08.05.2014", "Rio de Janeiro", "Brazil", "Parque dos Atletas", "$3,826,760");
tab_trasa[8] = new trasa("10.05.2014", "São Paulo", "Brazil", "Estádio do Morumbis", "$9,457,730");
tab_trasa[9] = new trasa("11.05.2014", "São Paulo", "Brazil", "Estádio do Morumbis", "$9,457,730");
tab_trasa[10] = new trasa("23.05.2014", "Dublin", "Ireland", "Croke Park", "$20,115,900");
tab_trasa[11] = new trasa("24.05.2014", "Dublin", "Ireland", "Croke Park", "$20,115,900");
tab_trasa[12] = new trasa("25.05.2014", "Dublin", "Ireland", "Croke Park", "$20,115,900");
tab_trasa[13] = new trasa("28.05.2014", "Sunderland", "England", "Stadium of Light", "$4,383,490");
tab_trasa[14] = new trasa("30.05.2014", "Manchester", "England", "Etihad Stadium", "$12,908,000");
tab_trasa[15] = new trasa("31.05.2014", "Manchester", "England", "Etihad Stadium", "$12,908,000");
tab_trasa[16] = new trasa("01.06.2014", "Manchester", "England", "Etihad Stadium", "$12,908,000");
tab_trasa[17] = new trasa("03.06.2014", "Edinburgh", "Scotland", "Murrayfield Stadium", "$5,297,750");
tab_trasa[18] = new trasa("06.06.2014", "London", "England", "Wembley Stadium", "$20,017,900");
tab_trasa[19] = new trasa("07.06.2014", "London", "England", "Wembley Stadium", "$20,017,900");
tab_trasa[20] = new trasa("08.06.2014", "London", "England", "Wembley Stadium", "$20,017,900");
tab_trasa[21] = new trasa("13.06.2014", "Stockholm", "Sweden", "Friends Arena", "$7,358,040");
tab_trasa[22] = new trasa("14.06.2014", "Stockholm", "Sweden", "Friends Arena", "$7,358,040");
tab_trasa[23] = new trasa("16.06.2014", "Copenhagen", "Denmark", "Parken Stadium", "$8,190,650");
tab_trasa[24] = new trasa("17.06.2014", "Copenhagen", "Denmark", "Parken Stadium", "$8,190,650");
tab_trasa[25] = new trasa("20.06.2014", "Paris", "France", "Stade de France", "$9,775,550");
tab_trasa[26] = new trasa("21.06.2014", "Paris", "France", "Stade de France", "$9,775,550");
tab_trasa[27] = new trasa("24.06.2014", "Amsterdam", "Netherlands", "	Amsterdam Arena", "$7,859,850");
tab_trasa[28] = new trasa("25.06.2014", "Amsterdam", "Netherlands", "	Amsterdam Arena", "$7,859,850");
tab_trasa[29] = new trasa("28.06.2014", "Milan", "Italy", "San Siro", "$7,779,190");
tab_trasa[30] = new trasa("29.06.2014", "Milan", "Italy", "San Siro", "$7,779,190");
tab_trasa[31] = new trasa("02.07.2014", "Düsseldorf", "Germany", "Esprit Arena", "	$3,395,490");





function wyswietlTabela(tab) {
    let txt = ""
    txt += "<tr>";
    txt += "<th> Data </th>";
    txt += "<th> Miasto </th>";
    txt += "<th> Kraj </th>";
    txt += "<th> Miejsce Wydarzenia </th>";
    txt += "<th> Przchód </th>";
    txt += "</tr>";

    for (var i = 0; i < tab.length; i++) {
        txt += "<tr>";
        txt += "<td>" + tab[i].data + "</td>";
        txt += "<td>" + tab[i].miasto + "</td>";
        txt += "<td>" + tab[i].kraj + "</td>";
        txt += "<td>" + tab[i].miejsce + "</td>";
        txt += "<td>" + tab[i].przychod + "</td>";
        txt += "</tr>";

    }
    let elemTab_HTML = document.getElementById("tabela");
    elemTab_HTML.innerHTML = txt;
}


function myFunction() {
  const firstRows = { };
  let shade = false;
  
  const colsToMerge = [0, 1];

  Array.from(document.querySelectorAll('tbody tr')).forEach(tr => {
    const text = tr.children[0].innerText;
    if (!(text in firstRows)) {
      firstRows[text] = { shade, elem: tr, count: 1 };
      shade = !shade;
    } else {
      const firstRow = firstRows[text]
      firstRow.count++;
      colsToMerge.forEach(i => tr.children[i].remove());
      colsToMerge.forEach(i =>
        firstRow.elem.children[i]
                .setAttribute('rowspan', firstRow.count)
      );
    }
    if (firstRows[text].shade) tr.classList.add('dark');
  });
}
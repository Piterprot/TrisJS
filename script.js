function CreoTabella(){
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse"; 
    let tbody = document.createElement("tbody");
    for (let i = 0; i < 3; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        let cell = document.createElement("td");
        cell.id = `cell-${i+1}-${j+1}`; 
        cell.addEventListener("click", handleCellClick); // Add this line
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    document.body.appendChild(table);
}

function handleCellClick(event) {
  //console.log(`Hai cliccato sulla cella ${event.target.id}`);
}
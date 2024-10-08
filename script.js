let turno = false;

var matrice = [
    [null, null, null], 
    [null, null, null],
    [null, null, null]
]

function CreoTabella(){
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse"; 
    let tbody = document.createElement("tbody");
    for (let i = 0; i < 3; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        let cell = document.createElement("td");
        cell.id = `cell-${i+1}-${j+1}`; 
        cell.addEventListener("click", handleCellClick); 
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    document.body.appendChild(table);
}

function handleCellClick(event) {
  //console.log(`Hai cliccato sulla cella ${event.target.id}`);
  const cell = event.target; 
  
  if(cell.children.length == 0 ){
    if(turno == false){
        const imgV = document.createElement('img'); 
        imgV.src = 'V.png'; 
        imgV.style.width = '100%'; 
        imgV.style.height = 'auto';
        cell.appendChild(imgV);  
        turno = true;  
      }else{
        const imgX = document.createElement('img'); 
        imgX.src = 'X.png'; 
        imgX.style.width = '100%'; 
        imgX.style.height = 'auto';
        cell.appendChild(imgX);    
        turno = false; 
      }
  } else{
    console.log("La cella è piena")
  }
 
}
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
        cell.id = `cell-${i}-${j}`; 
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
  const eventId = event.target.id;

  var [prep, x, y] = eventId.split('-'); 
  
  if(cell.children.length == 0 ){
    if(turno == false){
        const imgV = document.createElement('img'); 
        imgV.src = 'V.png'; 
        imgV.style.width = '100%'; 
        imgV.style.height = 'auto';
        cell.appendChild(imgV);  
        turno = true;  
        matrice[x][y] = true;
         console.log(`Hai cliccato sulla cella ${x} - ${y}`);

         // DEBUG
         console.log(matrice.toString());

      }else{
        const imgX = document.createElement('img'); 
        imgX.src = 'X.png'; 
        imgX.style.width = '100%'; 
        imgX.style.height = 'auto';
        cell.appendChild(imgX);    
        turno = false; 
        matrice[x][y] = false;
       console.log(`Hai cliccato sulla cella ${event.target.id}`);

         // DEBUG
         console.log(matrice.toString());
      }
  } else{
    console.log("La cella è piena")
  }
 
  ControlloVincite()
}


function ControlloVincite(){

  let checkX = 0; 
  let checkV = 0; 

  for(let i=0; i < matrice.length; i++){
      if(matrice[0][i] === true){
          checkV++;
      } else if(matrice[0][i] === false){
        checkX++;
      }

    if(checkV ===3){
      alert("Le V hanno vinto");
    } else if(checkX === 3){
      alert("Le x hanno vinto");
    }
  }
  for(let i=0; i < matrice.length; i++){
    if(matrice[1][i] === true){
        checkV++;
    } else if(matrice[01][i] === false){
      checkX++;
    }

  if(checkV ===3){
    alert("Le V hanno vinto");
  } else if(checkX === 3){
    alert("Le x hanno vinto");
  }
}
for(let i=0; i < matrice.length; i++){
  if(matrice[2][i] === true){
      checkV++;
  } else if(matrice[2][i] === false){
    checkX++;
  }

if(checkV ===3){
  alert("Le V hanno vinto");
} else if(checkX === 3){
  alert("Le x hanno vinto");
}
}
}
let hod = 0, i = 0, result = "";
let game = (event) => {
  if (hod < 9) {
    if (event.target.className == "cell") {
      if (hod % 2 == 0) {
        event.target.innerHTML = 'X';
      }
      else {
        event.target.innerHTML = '0';
      }
    }
    hod++;

    if (hod == 9) {
      document.getElementById("words").innerHTML = "Ничья";
    }

    checkWinner();
  }

}



const checkWinner = () => {
  let allcell = Array.prototype.slice.call(document.getElementsByClassName("cell")).map((item) => item.innerHTML);
  console.log('allcell', allcell)

  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let numberWinner0 = 0, numberWinnerX = 0;
  for (let i = 0; i < arr.length; i++) {
    let wc = arr[i];
    if (allcell[wc[0]] == allcell[wc[1]] && allcell[wc[1]] == allcell[wc[2]] && allcell[wc[0]] != "") {

      let winner = allcell[wc[2]];
      // location.reload();
      if (winner == "X") {
        numberWinnerX++;
        console.log(' numberWinnerX++;' + numberWinnerX);
        document.getElementById("words").innerHTML = "Победил игрок " + winner;
      }


      if (winner == "0") {
        numberWinner0++;
        document.getElementById("words").innerHTML = "Победил игрок " + winner;
      }

    }
  }




}


const cleaning = () => {
  let clean = document.getElementsByClassName("cell");
  for (let i = 0; i < 9; i++) {
    clean[i].innerHTML = "";
  }
  hod = 0;
}
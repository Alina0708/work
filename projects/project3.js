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
    checkWinner();
  }

}
let currentState = []
const checkWinner = () => {
  const allcell = Array.prototype.slice.call(document.getElementsByClassName("cell")).map((item) =>  item.innerHTML);
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

  
  for (let i = 0; i < arr.length; i++) {
    let wc = arr[i];
    if (allcell[wc[0]] == allcell[wc[1]] && allcell[wc[1]] == allcell[wc[2]] && allcell[wc[0]] != "") {
      console.log('win')
      // alert("xnjn");
      // location.reload();
    }

  }


}


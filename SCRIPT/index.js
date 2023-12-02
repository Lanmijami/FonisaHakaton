let brojac = 0;
function dodaj() {
  if (brojac % 2 == 0) {
    document.getElementById("popUpHolder").style.display = "block";
  } else {
    document.getElementById("popUpHolder").style.display = "none";
  }
  brojac = brojac + 1;
  console.log(brojac);
}

function posalji() {
  let input = document.getElementById("input").value;
  console.log(input);
  document.getElementById("popUpHolder").style.display = "none";
  brojac = brojac + 1;
}

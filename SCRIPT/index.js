let brojac = 0;
let brojZivotinje = 1;

function dodaj() {
  if (brojac % 2 == 0) {
    document.getElementById("popUpHolder").style.display = "block";
  } else {
    document.getElementById("popUpHolder").style.display = "none";
  }

  brojac = brojac + 1;
}

function posalji() {
  let input = document.getElementById("input").value;
  console.log(input);
  document.getElementById("popUpHolder").style.display = "none";
  brojac = brojac + 1;

  //   if (parseInt(input) < 30) {
  //     console.log("nece se nista prikazati");
  //     brojZivotinje++;
  //   } else if (parseInt(input) < 60) {
  //     if (brojZivotinje == 1) {
  //       document.getElementById("zivotinja1").src = "../IMG/slon.png";
  //       document.getElementById("zivotinja1").style.display = "block";
  //     }
  //   } else if (parseInt(input) < 120) {
  //   } else {
  //   }

  if (parseInt(input) <= 30) {
    brojZivotinje++;
  } else if (brojZivotinje == 1 && parseInt(input) <= 60) {
    document.getElementById("zivotinja1").src = "./PIC/dabar.png";
    document.getElementById("zivotinja1").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 1 && parseInt(input) <= 120) {
    document.getElementById("zivotinja1").src = "./PICAG/dabar.png";
    document.getElementById("zivotinja1").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 1 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja1").src = "./PICAU/dabar.png";
    document.getElementById("zivotinja1").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 2 && parseInt(input) <= 60) {
    document.getElementById("zivotinja10").src = "./PIC/lav.png";
    document.getElementById("zivotinja10").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 2 && parseInt(input) <= 120) {
    document.getElementById("zivotinja10").src = "./PICAG/lav.png";
    document.getElementById("zivotinja10").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 2 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja10").src = "./PICAU/lav.png";
    document.getElementById("zivotinja10").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 3 && parseInt(input) <= 60) {
    document.getElementById("zivotinja3").src = "./PIC/lisica.png";
    document.getElementById("zivotinja3").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 3 && parseInt(input) <= 120) {
    document.getElementById("zivotinja3").src = "./PICAG/lisica.png";
    document.getElementById("zivotinja3").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 3 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja3").src = "./PICAU/lisica.png";
    document.getElementById("zivotinja3").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 4 && parseInt(input) <= 60) {
    document.getElementById("zivotinja4").src = "./PIC/majmunce.png";
    document.getElementById("zivotinja4").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 4 && parseInt(input) <= 120) {
    document.getElementById("zivotinja4").src = "./PICAG/majmunce.png";
    document.getElementById("zivotinja4").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 4 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja4").src = "./PICAU/majmunce.png";
    document.getElementById("zivotinja4").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 5 && parseInt(input) <= 60) {
    document.getElementById("zivotinja5").src = "./PIC/meda.png";
    document.getElementById("zivotinja5").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 5 && parseInt(input) <= 120) {
    document.getElementById("zivotinja5").src = "./PICAG/meda.png";
    document.getElementById("zivotinja5").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 5 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja5").src = "./PICAU/meda.png";
    document.getElementById("zivotinja5").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 6 && parseInt(input) <= 60) {
    document.getElementById("zivotinja6").src = "./PIC/panda.png";
    document.getElementById("zivotinja6").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 6 && parseInt(input) <= 120) {
    document.getElementById("zivotinja6").src = "./PICAG/panda.png";
    document.getElementById("zivotinja6").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 6 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja6").src = "./PICAU/panda.png";
    document.getElementById("zivotinja6").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 7 && parseInt(input) <= 60) {
    document.getElementById("zivotinja7").src = "./PIC/rakun.png";
    document.getElementById("zivotinja7").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 7 && parseInt(input) <= 120) {
    document.getElementById("zivotinja13").src = "./PICAG/rakun.png";
    document.getElementById("zivotinja13").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 7 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja13").src = "./PICAU/rakun.png";
    document.getElementById("zivotinja13").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 8 && parseInt(input) <= 60) {
    document.getElementById("zivotinja8").src = "./PIC/slon.png";
    document.getElementById("zivotinja8").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 8 && parseInt(input) <= 120) {
    document.getElementById("zivotinja8").src = "./PICAG/slon.png";
    document.getElementById("zivotinja8").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 8 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja8").src = "./PICAU/slon.png";
    document.getElementById("zivotinja8").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 9 && parseInt(input) <= 60) {
    document.getElementById("zivotinja9").src = "./PIC/sova.png";
    document.getElementById("zivotinja9").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 9 && parseInt(input) <= 120) {
    document.getElementById("zivotinja9").src = "./PICAG/sova.png";
    document.getElementById("zivotinja9").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 9 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja9").src = "./PICAU/sova.png";
    document.getElementById("zivotinja9").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 10 && parseInt(input) <= 60) {
    document.getElementById("zivotinja2").src = "./PIC/tigar.png";
    document.getElementById("zivotinja2").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 10 && parseInt(input) <= 120) {
    document.getElementById("zivotinja2").src = "./PICAG/tigar.png";
    document.getElementById("zivotinja2").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 10 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja2").src = "./PICAU/tigar.png";
    document.getElementById("zivotinja2").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 11 && parseInt(input) <= 60) {
    document.getElementById("zivotinja11").src = "./PIC/veverica.png";
    document.getElementById("zivotinja11").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 11 && parseInt(input) <= 120) {
    document.getElementById("zivotinja11").src = "./PICAG/veverica.png";
    document.getElementById("zivotinja11").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 11 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja11").src = "./PICAU/veverica.png";
    document.getElementById("zivotinja11").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 12 && parseInt(input) <= 60) {
    document.getElementById("zivotinja12").src = "./PIC/vuk.png";
    document.getElementById("zivotinja12").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 12 && parseInt(input) <= 120) {
    document.getElementById("zivotinja12").src = "./PICAG/vuk.png";
    document.getElementById("zivotinja12").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 12 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja12").src = "./PICAU/vuk.png";
    document.getElementById("zivotinja12").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 13 && parseInt(input) <= 60) {
    document.getElementById("zivotinja7").src = "./PIC/zeka.png";
    document.getElementById("zivotinja7").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 13 && parseInt(input) <= 120) {
    document.getElementById("zivotinja7").src = "./PICAG/zeka.png";
    document.getElementById("zivotinja7").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 13 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja7").src = "./PICAU/zeka.png";
    document.getElementById("zivotinja7").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 14 && parseInt(input) <= 60) {
    document.getElementById("zivotinja14").src = "./PIC/zirafa.png";
    document.getElementById("zivotinja14").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 14 && parseInt(input) <= 120) {
    document.getElementById("zivotinja14").src = "./PICAG/zirafa.png";
    document.getElementById("zivotinja14").style.display = "block";
    brojZivotinje++;
  } else if (brojZivotinje == 14 && parseInt(input) <= 6000) {
    document.getElementById("zivotinja14").src = "./PICAU/zirafa.png";
    document.getElementById("zivotinja14").style.display = "block";
    brojZivotinje++;
  }
}

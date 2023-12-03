var inputCount = 1;

function displayData() {
    var inputData = document.getElementById("dataInput").value;
    var startTime = document.getElementById("startTime").value;
    var endTime = document.getElementById("endTime").value;

    if (inputData.trim() !== "") {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = inputCount + '.  ' + startTime + " - " + endTime + "  " + inputData;

        newDiv.addEventListener("click", function() {
            toggleStrikethrough(newDiv);
        });

        var outputDiv = document.getElementById("output");
        outputDiv.appendChild(newDiv);

        document.getElementById("dataInput").value = "";
        document.getElementById("startTime").value = "";
        document.getElementById("endTime").value = "";

        inputCount++;
    }
}

function toggleStrikethrough(element) {
    element.classList.toggle("strikethrough");
}

function displayToday() {
    var daysOfWeek = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"];
    var months = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];

    var today = new Date();
    var dayOfWeek = daysOfWeek[today.getDay()];
    var dayOfMonth = today.getDate();
    var month = months[today.getMonth()];
    var year = today.getFullYear();

    var dateString = dayOfWeek + ' ' + dayOfMonth + '. ' + month + ' ' + year + '.';

    // Display the date
    var dateDisplay = document.getElementById("dateDisplay");
    dateDisplay.textContent = dateString;
}

// Call the function when the page loads
displayToday();
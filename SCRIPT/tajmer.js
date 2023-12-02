    var timer;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    function startTimer() {
        timer = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function updateTimer() {
        // console.log(seconds);
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    

        var displayHours = hours < 10 ? "0" + hours : hours;
        var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        var displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timer").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }
    function resetTimer(){
        clearInterval(timer);
        
        var displayHours="00";
        var displayMinutes="00";
        var displaySeconds="00";
        document.getElementById("timer").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
        seconds=0;
        minutes=0;
        hours=0;

    }

    
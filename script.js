function printResults() {
    let date = document.querySelector('.getdata').value
    
    let birth = date; 
    let millisecondsBetweenDOBAnd1970 = Date.parse(birth);
    let millisecondsBetweenNowAnd1970 = Date.now();
    let ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

    let milliseconds = ageInMilliseconds;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = day * 365;

    let years = Math.floor(milliseconds / year);
    let months = years * 12;
    let days = years * 365;
    let hours = Math.round(milliseconds / hour);
    let seconds = Math.round(milliseconds / second);

    if (years !== years || months !== months || days !== days || hours !== hours || seconds !== seconds) {
        return 0;
    }

    let message = "You've been living for: <br><br> Age in Years : " + years +
        "</br>Age in Months : " + months +
        "</br>Age in Days : " + days +
        "</br>Age in Hours : " + hours +
        "</br>Age in Seconds : " + seconds;

    document.getElementById('placeholder').innerHTML = message;

    return date;
}

window.onload = printResults;
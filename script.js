function printResults() {
    let tanggal = document.querySelector('.getdata').value;
    
    // if (tanggal === null) {
    //     tanggal = '2021-01-27';
    // }

    let DOB = tanggal; 
    let millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
    let millisecondsBetweenNowAnd1970 = Date.now();
    let ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;


    let milliseconds = ageInMilliseconds;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = day * 365;

    let years = Math.round(milliseconds / year);
    let months = years * 12;
    let days = years * 365;
    let hours = Math.round(milliseconds / hour);
    let seconds = Math.round(milliseconds / second);

    let message = "Age in Years : " + years +
        "</br>Age in Months : " + months +
        "</br>Age in Days : " + days +
        "</br>Age in Hours : " + hours +
        "</br>Age in Seconds : " + seconds +
        "</br>Age in Milliseconds : " + milliseconds;

    document.getElementById('placeholder').innerHTML = message;
    document.getElementById('placeholder').style.display = 'initial'
    
    return tanggal;
}

window.onload = printResults;
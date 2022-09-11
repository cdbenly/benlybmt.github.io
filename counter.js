function CountDate(countDownDate, elementId) {
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = now - countDownDate;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var years = parseFloat(days / 365).toFixed(2);

    // Output the result in an element with id="demo"
    // document.getElementById(elementId).innerHTML =
    //   years +
    //   " years " +
    //   days +
    //   " days " +
    //   hours +
    //   " hours " +
    //   minutes +
    //   " minutes " +
    //   seconds +
    //   " seconds ";

    document.getElementById(`years${elementId}`).innerHTML = years;
    document.getElementById(`days${elementId}`).innerHTML = days;
    document.getElementById(`hours${elementId}`).innerHTML = hours;
    document.getElementById(`minutes${elementId}`).innerHTML = minutes;
    document.getElementById(`seconds${elementId}`).innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(elementId).innerHTML = "EXPIRED";
    }
  }, 1000);
}
// Set the date we're counting down to
var countDownDate = new Date("Sep 27, 2015 18:00:00").getTime();
var countDownDate2 = new Date("Sep 16, 2014 7:00:00").getTime();
var countDownDate3 = new Date("Mar 23, 2022 8:00:00").getTime();


CountDate(countDownDate, "1");
CountDate(countDownDate2, "2");
CountDate(countDownDate3, "3");


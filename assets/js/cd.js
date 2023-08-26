function updateCountdown() {
  var now = new Date(); // Get current date and time
  var countdownDate = new Date(now); // Create a new date object

  // Calculate days until next Thursday
  var daysUntilThursday = (11 - now.getDay() + 7) % 7; // Calculate days until next Thursday

  // Set countdownDate to next Thursday at 15:00 Zurich time
  countdownDate.setDate(now.getDate() + daysUntilThursday);
  countdownDate.setHours(15);
  countdownDate.setMinutes(0);
  countdownDate.setSeconds(0);

  var distance = countdownDate - now; // Calculate time difference

  // If it's Thursday at 15:00 Zurich time, display "meeting time"
  if (daysUntilThursday === 0 && now.getHours() === 15) {
    document.getElementById("demo").innerHTML = "MEETING TIME!";
    setTimeout(updateCountdown, 3600000); // Reset the countdown after an hour (3600000 ms)
    return;
  }

  // If the countdown date has passed for the current week, set it to next week's Thursday
  if (distance < 0) {
    countdownDate.setDate(countdownDate.getDate() + 7);
    distance = countdownDate - now; // Recalculate time difference
  }

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the countdown
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

// Initial call to update the countdown
updateCountdown();
setInterval(updateCountdown, 1000); // Update every secon

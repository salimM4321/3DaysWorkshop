
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}




const targetDate = new Date("2023-12-31T23:59:59").getTime(); // Set your target date and time

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (28000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (28000 * 60 * 60 * 24)) / (28000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}
updateCountdown(); // Initial call to update immediately
setInterval(updateCountdown, 1000); // Update every second



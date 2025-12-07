// Set the date we're counting down to
const countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown-container").innerHTML = "<div class='time-unit' style='width: 100%'><span>Happy Birthday!</span></div>";
        document.querySelector(".subtitle").innerText = "It's time to celebrate!";
    }
}, 1000);

// Mouse Trail Effect
const emojis = ["✨", "💖", "❤️", "💕", "🌟"];

document.addEventListener("mousemove", (e) => {
    createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement("span");
    particle.classList.add("trail-particle");

    // Pick a random emoji
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Position the particle
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Randomize movement direction
    const tx = (Math.random() - 0.5) * 100 + "px";
    const ty = (Math.random() - 0.5) * 100 + "px";
    particle.style.setProperty("--tx", tx);
    particle.style.setProperty("--ty", ty);

    // Randomize size slightly
    const scale = Math.random() * 0.5 + 0.8;
    particle.style.transform = `scale(${scale})`;

    document.body.appendChild(particle);

    // Remove after animation completes
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

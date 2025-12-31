function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerText = "❤️";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDelay = Math.random() + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

function cakeLogic() {
  const knife = document.getElementById("knife");
  const cake = document.getElementById("cake");

  knife.ondragend = () => {
    cake.style.transform = "scaleX(0.9)";
    launchConfetti();
    setTimeout(() => {
      window.location.href = "letter.html";
    }, 2500);
  };
}

function openLetter() {
  document.getElementById("hint").style.display = "none";
  document.getElementById("letterText").style.display = "block";
  launchConfetti();
}

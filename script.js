function cutCake() {
  document.getElementById("leftFrost").classList.add("split-left");
document.getElementById("rightFrost").classList.add("split-right");
  document.getElementById("leftCake").classList.add("split-left");
  document.getElementById("rightCake").classList.add("split-right");

  for (let i = 0; i < 30; i++) {
    const h = document.createElement("div");
    h.className = "confetti";
    h.textContent = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "-20px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 2500);
}

function openLetter() {
  document.getElementById("hint").style.display = "none";
  document.getElementById("letterText").style.display = "block";
}

let cakeCut = false;

function allowDrop(e) {
  e.preventDefault();
}

function cutCake(e) {
  e.preventDefault();
  if (cakeCut) return;
  cakeCut = true;

  document.getElementById("leftCake").classList.add("split-left");
  document.getElementById("rightCake").classList.add("split-right");

  launchConfetti();

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 2500);
}
document.getElementById("knife").addEventListener("dragstart", e => {
  e.dataTransfer.setData("text/plain", "knife");
});
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "confetti";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

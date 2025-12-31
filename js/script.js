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

let cakeCut = false;

function allowDrop(ev) {
  ev.preventDefault();
}

function cutCake(ev) {
  ev.preventDefault();
  if (cakeCut) return;
  cakeCut = true;

  const left = document.getElementById("leftCake");
  const right = document.getElementById("rightCake");

  left.classList.add("split-left");
  right.classList.add("split-right");

  launchConfetti();

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 2500);
}

  

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

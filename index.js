const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const love = document.getElementById("love");

// Move the "No" button when hovered
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Show message when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  love.style.display = "block";
});
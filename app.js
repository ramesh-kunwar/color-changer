const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#button");

function generateRandomColor() {
  let randomColor = "#";
  const string = "123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    randomColor += string[Math.floor(Math.random() * 14) + 1];
  }
  return randomColor;
}

btn.addEventListener("click", function () {
  const backgroundColor = generateRandomColor();
  canvas.style.backgroundColor = backgroundColor;
});

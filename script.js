function main() {
  const marks = [...document.getElementById("marks").children];
  const board = Array(9).fill(false);
  let round = 0;

  const victoryTextStyles = ["text-emerald-500", "dark:text-emerald-300"];
  const drawTextStyles = ["text-amber-500", "dark:text-amber-300"];
  const ignoreEventsStyle = "pointer-events-none";

  marks.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (board[i]) return;

      icon = document.createElement("i");
      icon.classList.add("ph-bold", round ? "ph-circle" : "ph-x");
      e.appendChild(icon);
      e.classList.add(ignoreEventsStyle);
      board[i] = true;

      round = !round;

      if (!checkWinner(board)) return;

      marks.forEach((e) => e.classList.add(...drawTextStyles));

      setTimeout(() => {
        board.fill(false);
        marks.forEach((e) => {
          e.innerHTML = "";
          e.classList.remove(ignoreEventsStyle, ...drawTextStyles);
        });
      }, 2000);
    });
  });

  document
    .getElementById("change-theme")
    .addEventListener("click", toggleTheme);

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) toggleTheme();
}

function checkWinner(board) {
  return board.reduce((prev, curr) => prev + curr, 0) === 9;
}

function toggleTheme() {
  const button = document.getElementById("change-theme");
  button.classList.toggle("ph-sun");
  button.classList.toggle("ph-moon");
  document.documentElement.classList.toggle("dark");
}

window.addEventListener("DOMContentLoaded", main);

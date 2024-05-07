const input = document.querySelector("#inputNumber");
const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector("form");
const restartBtn = document.querySelector(".restartBtn");
const hint = document.querySelector(".hint");
const result = document.querySelector(".result");
const storeGuess = document.querySelector(".storeGuess");
let allGuessArray = [];
const randomVal = Math.ceil(Math.random() * 100);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = input.value;
  hint.innerText = outputDis(randomVal, parseInt(val));
  allGuessArray.push(val);
  storeGuess.innerText = "Your guesses : " + allGuessArray.join(", ");
  input.value = "";

  if (hint.innerText === "You got it! Congrats :)") {
    restartBtn.disabled = false;
    restartBtn.classList.remove("active");
    submitBtn.classList.add("active");
    submitBtn.disabled = true;
  }
});

restartBtn.addEventListener("click", () => {
  submitBtn.classList.remove("active");
  submitBtn.disabled = false;
  restartBtn.classList.add("active");
  restartBtn.disabled = true;
  storeGuess.innerText = "";
  hint.innerText = "";
  allGuessArray = [];
});

function outputDis(randomVal, val) {
  if (randomVal < val) {
    return "Too high!!";
  } else if (randomVal > val) {
    return "Too low!!";
  } else {
    return "You got it! Congrats :)";
  }
}

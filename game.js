//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 random number

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
let topScore = 0;

//* when press the checkbtn do the controls
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  //   console.log(guessInput);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  //?if no input alert the user
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-regular fa-face-grin-stars"></i>`;
    // document.querySelector("body").style.background = "green";
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score--;

    guessInput > randomNumber
      ? (msg.innerText = "DECREASE")
      : (msg.innerText = "INCREASE");
  }
});

//! if random ==input.value
//? cong. u guess
//? background green / success
//?if score>topscore
//?       topscore=score
//?secret_number=shows

//! else if
//! if score  >0
//!

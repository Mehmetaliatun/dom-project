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
    msg.innerHTML = `Congrats You Win <i class="fa-regular fa-face-grin-stars fa-2x"></i>`;
    // document.querySelector("body").style.background = "green";
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
    //! if random ==input.value
  } else {
    if (score > 0) {
      score--;
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE`)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE`);
    } else {
      msg.innerHTML = `You lost <i class="fa-regular fa-face-dizzy fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber; // kayıp sonrasi random sayiyi gorme
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//? cong. u guess
//? background green / success
//?if score>topscore
//?       topscore=score
//?secret_number=shows

//! else if
//! if score  >0
//!

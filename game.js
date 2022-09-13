//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 random number

const randomNumber = Math.round(Math.random() * 100 + 1);
console.log(randomNumber);

//* when press the checkbtn do the controls
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  //   console.log(guessInput);
  const msg = document.querySelector(".msg");
  //?if no input
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerText = "Congrats You Win";
  }
});

//?alert the user

//! if random ==input.value
//? cong. u guess
//? background green / success
//?if score>topscore
//?       topscore=score
//?secret_number=shows

//! else if
//! if score  >0
//!

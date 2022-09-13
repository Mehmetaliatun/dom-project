// //* =====================================
// //*  GUESS MY NUMBER
// //*  Game Logic
// //*======================================
// //? 1-100 random number
// const randomNumber = Math.round(Math.random() * 100);
// console.log(randomNumber);

// //? Variables
// let score = 10;
// // let topScore = 0;

// //? localstrage'da topScore adiyla bir degisken olusturur.
// console.log(localStorage.getItem("topScore"));
// let topScore = localStorage.getItem("topScore") || 0;

// //* when press the checkbtn do the controls
// document.querySelector(".check-btn").addEventListener("click", () => {
//   const guessInput = Number(document.querySelector(".guess-input").value);
//   //   console.log(guessInput);
//   const msg = document.querySelector(".msg");
//   const body = document.querySelector("body");

//   //?if no input alert the user
//   if (!guessInput) {
//     msg.innerText = "Please enter a number";
//     //! eger rasgele == input.value
//   } else if (randomNumber === guessInput) {
//     msg.innerHTML = `Congrats You Win <i class="fa-regular fa-face-grin-stars fa-2x"></i>`;
//     // document.querySelector("body").style.background = "green";
//     body.className = "bg-success";
//     document.querySelector(".check-btn").disabled = true;
//     if (score >= topScore) {
//       //   topScore = score;
//       localStorage.setItem("topScore", score);
//       document.querySelector(".top-score").textContent = score;
//     }
//     document.querySelector(".secret-number").textContent = randomNumber;
//     //! if random ==input.value
//   } else {
//     if (score > 0) {
//       score--;
//       guessInput > randomNumber
//         ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE`)
//         : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE`);
//     } else {
//       msg.innerHTML = `You lost <i class="fa-regular fa-face-dizzy fa-2x"></i>`;
//       document.querySelector(".secret-number").textContent = randomNumber; // kayıp sonrasi random sayiyi gorme
//       body.className = "bg-danger";
//       document.querySelector(".check-btn").disabled = true;
//     }

//     document.querySelector(".score").textContent = score;
//   }
// });

// //* again basildiginda oyunun baslangic degerlerini kur

// document.querySelector(".again-btn").addEventListener("click", () => {
//   score = 10;
//   document.querySelector(".score").textContent = score;
//   const randomNumber = Math.round(Math.random() * 100);
//   document.querySelector(".secret-number").textContent = "?";
//   console.log(randomNumber);
//   document.querySelector(".check-btn").disabled = false;
//   document.querySelector("body").classList.remove("bg-success", "bg-danger");
//   document.querySelector(".guess-input").value = "";
//   document.querySelector(".msg").innerText = `Starting..`;
// });

// //? cong. u guess
// //? background green / success
// //?if score>topscore
// //?       topscore=score
// //?secret_number=shows

// //! else if
// //! if score  >0
// //!

// myObj = { a: 1, b: 2, c: 3 };
// localStorage.setItem("OBJ", JSON.stringify(myObj));

// const readObj = localStorage.getItem("OBJ");
// const readOBJ = JSON.parse(localStorage.getItem("OBJ"));
// console.log(typeof readObj);
// console.log(typeof readOBJ);
// console.log(readOBJ);

//* CLASS CODES
//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
// let topScore = 0;

//? localStorage'de topScore adiyla bir degisken olustur.
let topScore = localStorage.getItem("topScore") || 0;

//? DOM'daki top-score degerini localStorage'den okuyarak guncelle.
document.querySelector(".top-score").textContent = topScore;

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eger input girilmediyse Kullaniciya uyari ver.
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
    body.className = "bg-success";
    document.querySelector(".check-btn").disabled = true;
    if (score > topScore) {
      // topScore = score;

      //? localStorage'deki topScore degiskenini guncelle
      localStorage.setItem("topScore", score);
      //? DOM'daki top-score degerini guncelle
      document.querySelector(".top-score").textContent = score;
    }
    document.querySelector(".secret-number").textContent = randomNumber;

    //! eger rasgele!= input.value
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//* again basildiginda oyunu baslangic dgerlerin kur
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = `Starting..`;
});

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".check-btn").click();
  }
});

//! LOCALSTORAGE- SESSIONSTORAGE
// myObj = { a: 1, b: 2, c: 3 };
// localStorage.setItem("OBJ", JSON.stringify(myObj));
// const readObj = localStorage.getItem("OBJ");
// const readOBJ = JSON.parse(localStorage.getItem("OBJ"));
// console.log(typeof readObj);
// console.log(typeof readOBJ);
// console.log(readOBJ);

//* PUSEDUO
//? eger score > topScore
//?     topScore = score
//? secret_number = gorunur.

//! değilse
//! eger score > 0
//!   score = score -1
//?   eğer rasgele < input.value
//?     AZALT
//?   degilse
//?     ARTTIR
//! degise
//? Uzgunuz kaybetiniz.

//* againBtn basildiginda kontrolleri yap

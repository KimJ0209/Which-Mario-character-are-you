let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");
let button = document.querySelector("button");
let result = document.querySelector(".result");

function checkAnswers() {
  let ans1 = parseInt(document.querySelector('.ans1').value);
  let ans2 = document.querySelector('.ans2').value;

  if (ans1 >= 3 && ans2 === "Caring") {
    result.innerHTML = "You are a somewhat brave person and you are caring. You are Princess Peach";
  } else if (ans1 <= 2 && ans2 === "Sweet") {
    result.innerHTML = "You are a scared person and you are sweet. You are Toad";
  } else if (ans1 <= 5 && ans2 === "Cheerful") {
    result.innerHTML = "You are a brave person and you are cheerful. You are Mario";
  } else if (ans1 <= 4 && ans2 === "Kind") {
    result.innerHTML = "You are a mostly brave person and you are kind. You are Luigi";
  }
};
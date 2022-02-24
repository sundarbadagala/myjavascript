let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => btn.addEventListener("click", (e) => counter(e)));

const counter = (e) => {
  const className = e.currentTarget.classList;
  if (className.contains("decrease")) {
    count -= 1;
  } else if (className.contains("increase")) {
    count += 1;
  } else {
    count = 0;
  }

  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "blue";
  }
  value.textContent = count;
};

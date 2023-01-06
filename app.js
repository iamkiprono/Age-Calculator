const calc = document.querySelector(".calcage");
const inputYear = document.querySelector("#yearinput");

calc.addEventListener("click", () => {
  const age = inputYear.value;
  console.log(age);
  const month = document.querySelector("#ageinput").value;
  const old = new Date(`March ${month}, ${age} 00:00:00`).getTime();
  console.log(month);
  console.log(age);
  const newDate = new Date();
  const newage = newDate - old;
  const total = Math.floor(newage / 31536000000);

  document.querySelector("p").textContent = total;
});

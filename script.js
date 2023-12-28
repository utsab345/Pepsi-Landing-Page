const body = document.querySelector("body");
const pepsi1 = document.querySelector(".pepsi #first");
const pepsi2 = document.querySelector(".pepsi #second");
const pepsi3 = document.querySelector(".pepsi #third");
const bottle = document.querySelector(".bottle ");

pepsi1.addEventListener("click", () => {
  body.style.backgroundColor = "#0062be";
  bottle.innerHTML = `  <img src="pepsi001 (2).png">`;
});
pepsi2.addEventListener("click", () => {
  body.style.backgroundColor = "#e60c2c";
  bottle.innerHTML = `  <img src="pepsi002 (3).png">`;
});
pepsi3.addEventListener("click", () => {
  body.style.backgroundColor = "#1e1e1e";
  bottle.innerHTML = `  <img src="pepsi003.png" >`;
});

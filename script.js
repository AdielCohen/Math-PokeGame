var c = 0;
var i1 = 10;
var i2 = 10;
var m1 = 1;
var m2 = 1;

document.querySelector("#post").innerHTML = " רמה " + c;
let x = Math.floor(Math.random() * i1) + m1;
let y = Math.floor(Math.random() * i2) + m2;
document.querySelector(".question").value = " " + x + " * " + y + " = ?";
document.querySelector("#num").addEventListener("keydown", (k) => {
  if (k.code == "Enter" || k.code == "NumpadEnter") res();
});
document.querySelector("#num").addEventListener("input", function (evt) {
  if (x * y == this.value) res();
});
function res() {
  z = document.querySelector("#num").value;
  if (x * y == z) won(++c);
  else if (c > 0) lost(--c);
  else lost(c);

  x = Math.floor(Math.random() * i1) + m1;
  y = Math.floor(Math.random() * i2) + m2;
  document.querySelector(".question").value = " " + x + " * " + y + " = ?";
}

function won(c) {
  if (c == 1) document.querySelector("#poke").src = "pichu.png";
  else if (c == 3) document.querySelector("#poke").src = "pikachu.png";
  else if (c == 5) document.querySelector("#poke").src = "raichu.png";
  document.querySelector("#post").innerHTML = " רמה " + c;
  z = document.querySelector("#num").value = "";
}
function lost(c) {
  if (c >= 2) document.querySelector("#poke").src = "pi3.png";
  else if (c >= 0) document.querySelector("#poke").src = "darkp.png";
  document.querySelector("#post").innerHTML = " רמה " + c;
  z = document.querySelector("#num").value = "";
}


changeNumber = () => {
  x = Math.floor(Math.random() * i1) + m1;
  y = Math.floor(Math.random() * i2) + m2;
  document.querySelector(".question").value = " " + x + " * " + y + " = ?";
};

document.querySelector("#n1").addEventListener("input",  n1);
function n1() {
  i1 = 1;
  i2 = 9;
  m1 = 1;
  m2 = 2;
  changeNumber();
}

document.querySelector("#n2").addEventListener("click",  () => {
  i1 = 1;
  i2 = 9;
  m1 = 2;
  m2 = 2;
  changeNumber();
});

document.querySelector("#n3").addEventListener("click",  () => {
  i1 = 1;
  i2 = 9;
  m1 = 3;
  m2 = 2;
  changeNumber();
});

document.querySelector("#n4").addEventListener("click",  () => {
  i1 = 1;
  i2 = 9;
  m1 = 4;
  m2 = 2;
  changeNumber();
});

document.querySelector("#n5").addEventListener("click",  () => {
  i1 = 1;
  i2 = 9;
  m1 = 5;
  m2 = 2;
  changeNumber();
});

document.querySelector("#n6").addEventListener("click",  () => {
  i1 = 1;
  i2 = 9;
  m1 = 6;
  m2 = 2;
  changeNumber();
});

document.querySelector("#n7").addEventListener("click",  function() {
  i1 = 1;
  i2 = 9;
  m1 = 7;
  m2 = 2;
  changeNumber();
});

document.querySelector("#n8").addEventListener("click",  function() {
  i1 = 1;
  i2 = 9;
  m1 = 8;
  m2 = 2;
  changeNumber();
});

document.querySelector("#n9").addEventListener("click",  function() {
  i1 = 1;
  i2 = 9;
  m1 = 9;
  m2 = 2;
  changeNumber();
});

document.querySelector("#n10").addEventListener("click",  function() {
  i1 = 1;
  i2 = 9;
  m1 = 10;
  m2 = 2;
  changeNumber();
});
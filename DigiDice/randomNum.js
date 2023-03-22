// let x = Math.random();//random decimal between 0 and 1
// console.log(x);

// let y = Math.random() * 6;//random decimal between 0 and 5
// console.log(y);

// let x = Math.floor(Math.random() * 6) + 1; //random whole number, rounded down, between 0 and 6
// let y = Math.floor(Math.random() * 6) + 3; //random whole number, rounded down, between 0 and 8
// let z = Math.floor(Math.random() * 6) + 5; //random whole number, rounded down, between 0 and 10

// console.log(x);
// console.log(y);
// console.log(z);

document.getElementById("rollX").onclick = function () {
  let x = Math.floor(Math.random() * 6) + 1;
  document.getElementById("xLabel").innerHTML = x;
};

document.getElementById("rollY").onclick = function () {
  let y = Math.floor(Math.random() * 8) + 1;
  document.getElementById("yLabel").innerHTML = y;
};

document.getElementById("rollZ").onclick = function () {
  let z = Math.floor(Math.random() * 10) + 1;
  document.getElementById("zLabel").innerHTML = z;
};

document.getElementById("rollAll").onclick = function () {
  let x = Math.floor(Math.random() * 6) + 1; //random whole number, rounded down, between 0 and 6
  let y = Math.floor(Math.random() * 8) + 1; //random whole number, rounded down, between 0 and 8
  let z = Math.floor(Math.random() * 10) + 1; //random whole number, rounded down, between 0 and 10

  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;
};

const number = document.querySelector("#input");
number.addEventListener("input", getresult);

function getresult(res) {
  let value = res.target.value;
  let mm = document.querySelector(".mm");
  let cm = document.querySelector(".cm");
  let m = document.querySelector(".m");

  mm.innerHTML = `MILLIMETRE: ${value*1000}mm`;
  cm.innerHTML = `CENTIMETRE: ${value * 100}cm`;
  m.innerHTML = `METRE: ${value}m`;
}

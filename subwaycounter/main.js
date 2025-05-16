let count = 0;
let counter = document.getElementById("counter");
let savee = document.getElementById("save");

function increment() {
  count++;
  counter.textContent = count;
}
function decrement() {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
}
function save() {
  let entry = count;
  savee.textContent += entry + " , ";
  count = 0;
  counter.textContent = count;
}

let count = 0;

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

const counterElement = document.getElementById("counter");

incrementButton.addEventListener('click', () => {
  count++;
  
  counterElement.innerText = count;
  changeWidth(count);
});

decrementButton.addEventListener('click', () => {

  if(count > 0) {
    count--;
    counterElement.innerText = count;
    changeWidth(count);
  }

});

function changeWidth(count) {
  const box = document.getElementById("box")

  box.style.width = count +'px';
  box.style.height = count +'px';
}
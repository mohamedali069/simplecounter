import './style.css'


const increaseBtn = document.getElementById("increasebtn");
const decreaseBtn = document.getElementById("decreasebtn");
const resetBtn = document.getElementById("resetbtn");

let counterL = document.getElementById("counterLabel");

let cont = 0;
increaseBtn.onclick = function(){
  cont ++;
  counterL.innerText =cont;

}
decreaseBtn.onclick = function(){
  cont --;
  counterL.innerText =cont;


}

resetBtn.onclick = function(){
  cont =0;
  counterL.innerText =cont;


}
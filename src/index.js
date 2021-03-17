import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";
const countmodifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}; //데이터를 바꾸는 함수

const countstore = createStore(countmodifier);
const onChange = () => {
  number.innerText = countstore.getState();
};
countstore.subscribe(onChange);
add.addEventListener("click", () => countstore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countstore.dispatch({ type: "MINUS" }));
// console.log(countstore.getState()); //hello

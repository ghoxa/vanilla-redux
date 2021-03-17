import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
const countmodifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    console.log("나에게 1를 추가해라");
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
}; //데이터를 바꾸는 함수

const countstore = createStore(countmodifier);
countstore.dispatch({ type: "ADD" });
countstore.dispatch({ type: "ADD" });
countstore.dispatch({ type: "ADD" });
countstore.dispatch({ type: "ADD" });
countstore.dispatch({ type: "ADD" });
countstore.dispatch({ type: "ADD" });
countstore.dispatch({ type: "MINUS" });
console.log(countstore.getState()); //hello

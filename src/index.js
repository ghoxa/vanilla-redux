import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const addToDo = (text) => {
  return { type: ADD_TODO, text }; //return object action을 상징
};
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state]; //이전스테이트와 새로운 todo 가지고있다.
    case DELETE_TODO:
      const cleaned = state.filter((toDo) => toDo.id !== action.id);
      return cleaned; //지우려는 id를 제외한 것들을 남겨놓는다. 새로운 배열 리턴
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState())); //상태변경 감지

const dispatchaddToDo = (text) => {
  //action을 reducer에게 전달하는 역할
  store.dispatch(addToDo(text));
};
const dispatchdeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchdeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchaddToDo(toDo);
};

form.addEventListener("submit", onSubmit);

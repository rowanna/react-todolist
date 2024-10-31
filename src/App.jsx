import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInput] = useState("");
  const [todoList, setTodo] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {
    setTodo((prev) => [...prev, inputValue]);
  };
  return (
    <>
      <div>
        <h1>todolist</h1>
        <input onChange={handleInput} value={inputValue} type="text" />
        <button onClick={handleAddTodo}>추가</button>
        <div className="item-list">
          {todoList.map((todo, index) => (
            <div key={index} className="item">
              <p>{todo}</p>
              <button>수정</button>
              <button>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

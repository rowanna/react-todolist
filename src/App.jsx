import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInput] = useState("");
  const [todoList, setTodo] = useState([]);
  const [isEdit, setEdit] = useState(false);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {
    setTodo((prev) => [...prev, inputValue]);
    setInput("");
  };

  const handleChangeEditInput = (e, idx) => {
    console.log();
  };

  const handleClickEditButton = () => {
    setEdit(true);
  };

  const handleEditTodo = (e) => {
    setEdit(false);
  };

  const handleRemoveTodo = (idx) => {
    const newTodoList = todoList.filter((el, todoIdx) => todoIdx !== idx);

    setTodo([...newTodoList]);
  };

  return (
    <>
      <div>
        <h1>todolist</h1>
        <input onChange={handleChangeInput} value={inputValue} type="text" />
        <button onClick={handleAddTodo}>추가</button>
        <div className="item-list">
          {todoList.map((todo, index) => (
            <div key={index} className="item">
              {isEdit ? (
                <input
                  value={todo}
                  onChange={(e) => handleChangeEditInput(e, index)}
                />
              ) : (
                <p>{todo}</p>
              )}
              {isEdit ? (
                <button onClick={handleEditTodo}>완료</button>
              ) : (
                <button onClick={handleClickEditButton}>수정</button>
              )}

              <button onClick={() => handleRemoveTodo(index)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

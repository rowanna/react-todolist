import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInput] = useState("");
  const [editInputValue, setEditInput] = useState("");
  const [todoList, setTodo] = useState([]);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodoButton = () => {
    setTodo((prev) => [...prev, { text: inputValue, isEdit: false }]);
    setInput("");
  };

  const handleChangeEditInput = (e) => {
    setEditInput(e.target.value);
  };

  const handleClickEditButton = (e, idx) => {
    setTodo((prev) =>
      prev.map((todo, todoIndex) => {
        return todoIndex === idx ? { ...todo, isEdit: true } : todo;
      })
    );
  };

  const handleClickEditCompleteButton = (e, idx) => {
    setTodo((prev) =>
      prev.map((todo, todoIndex) => {
        return todoIndex === idx
          ? { text: editInputValue, isEdit: false }
          : todo;
      })
    );
    setEditInput("");
  };

  const handleRemoveTodoButton = (idx) => {
    const newTodoList = todoList.filter((el, todoIdx) => todoIdx !== idx);

    setTodo([...newTodoList]);
  };

  return (
    <>
      <div>
        <h1>todolist</h1>
        <input onChange={handleChangeInput} value={inputValue} type="text" />
        <button onClick={handleAddTodoButton}>추가</button>
        <div className="item-list">
          {todoList.map((todo, index) => (
            <div key={index} className="item">
              {todo.isEdit ? (
                <input
                  value={editInputValue}
                  onChange={(e) => handleChangeEditInput(e)}
                />
              ) : (
                <p>{todo.text}</p>
              )}
              {todo.isEdit ? (
                <button
                  onClick={(e) => handleClickEditCompleteButton(e, index)}
                >
                  수정완료
                </button>
              ) : (
                <button onClick={(e) => handleClickEditButton(e, index)}>
                  수정
                </button>
              )}

              <button onClick={() => handleRemoveTodoButton(index)}>
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Todo from "./Todo/Todo";

function App() {
	const [inputValue, setInput] = useState("");
	const [todoList, setTodo] = useState([]);

	const handleEditTodo = (idx, text) => {
		setTodo((prev) => {
			const newTodoList = [...prev];
			newTodoList[idx].text = text;
			return newTodoList;
		});
	};

	const handleChangeInput = (e) => {
		setInput(e.target.value);
	};

	const handleAddTodoButton = (e) => {
		e.preventDefault();
		setTodo((prev) => [...prev, { text: inputValue }]);
		setInput("");
	};

	const handleRemoveTodoButton = (idx) => {
		const newTodoList = todoList.filter((el, todoIdx) => todoIdx !== idx);

		setTodo([...newTodoList]);
	};

	return (
		<>
			<div>
				<h1>todolist</h1>
				<form onSubmit={handleAddTodoButton}>
					<input onChange={handleChangeInput} value={inputValue} type="text" />
					<button>추가</button>
				</form>
				<div className="item-list">
					{todoList.map((todo, index) => (
						<Todo
							key={index}
							todo={todo}
							index={index}
							handleRemoveTodoButton={handleRemoveTodoButton}
							handleEditTodo={handleEditTodo}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default App;

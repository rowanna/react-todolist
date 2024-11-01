import React, { useState } from "react";

export default function Todo({
	todo,
	index,
	handleRemoveTodoButton,
	handleEditTodo,
}) {
	const { text } = todo;
	const [isEdit, setIsEdit] = useState(false);
	const [updateText, setUpdateText] = useState(text);

	const onClickRemoveButton = () => {
		handleRemoveTodoButton(index, text);
	};

	const onClickEditCompleteButton = () => {
		handleEditTodo(index, updateText);
		setIsEdit(false);
	};

	const handleClickEditButton = () => {
		setIsEdit(true);
	};

	const handleChangeEditInput = ({ target: { value } }) => {
		setUpdateText(value);
	};

	return (
		<div key={index} className="item">
			{isEdit ? (
				<input value={updateText} onChange={handleChangeEditInput} />
			) : (
				<p>{text}</p>
			)}
			{isEdit ? (
				<button onClick={onClickEditCompleteButton}>수정완료</button>
			) : (
				<button onClick={handleClickEditButton}>수정</button>
			)}

			<button onClick={onClickRemoveButton}>삭제</button>
		</div>
	);
}

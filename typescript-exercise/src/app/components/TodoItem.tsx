import React from "react";
import { TodoInterface } from "@/app/interfaces/interfaces";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Props {
	todo: TodoInterface;
	toggleTodo: (todo: TodoInterface) => void;
	removeTodo: (todo: TodoInterface) => void;
}

const TodoItem = ({ todo, toggleTodo, removeTodo }: Props) => {
	const { id, text, completed } = todo;
	return (
		<div className="flex gap-3 mb-6 pb-2 border-b border-indigo-400">
			<div>
				<input
					type="checkbox"
					className=""
					onChange={() => {
						toggleTodo(todo);
					}}
					checked={completed}
				/>
			</div>
			<div
				className={`text-sm text-gray-800 first-letter:capitalize ${
					completed ? " line-through " : ""
				}`}
			>
				{text}
			</div>
			<div className="grow text-right">
				<button
					onClick={() => {
						removeTodo(todo);
					}}
				>
					<TrashIcon className="h-4 w-4 text-red-400" />
				</button>
			</div>
		</div>
	);
};

export default TodoItem;

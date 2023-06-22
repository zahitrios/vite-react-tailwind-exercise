"use client";

import { useState } from "react";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import { TodoInterface } from "@/app/interfaces/interfaces";

const initialTodos = [
	{
		id: nanoid(10),
		text: "Hello",
		completed: true,
	},
	{
		id: nanoid(10),
		text: "World",
		completed: true,
	},
	{
		id: nanoid(10),
		text: "How are you?",
		completed: false,
	},
	{
		id: nanoid(10),
		text: "I am fine",
		completed: false,
	},
];

const Page = () => {
	const [todos, setTodos] = useState<TodoInterface[]>(initialTodos);

	const addTodo = (todo: string) => {
		const newTodos = [
			{ id: nanoid(10), text: todo, completed: false },
			...todos,
		];
		setTodos(newTodos);
	};

	const toggleTodo = (sT: TodoInterface) => {
		setTodos(prev => {
			return todos.map(t => {
				return {
					...t,
					completed: t.id === sT.id ? !t.completed : t.completed,
				};
			});
		});
	};

	const removeTodo = (sT: TodoInterface) => {
		setTodos(prev => {
			return todos.filter(t => t.id !== sT.id);
		});
	};

	return (
		<div className="container text-center">
			<h1>Todo</h1>
			<div className="max-w-md m-auto bg-slate-200 mt-4 p-5 rounded-md">
				<Form addTodo={addTodo} />
				<div>
					{todos.map(todo => (
						<TodoItem
							key={todo.id}
							todo={todo}
							toggleTodo={toggleTodo}
							removeTodo={removeTodo}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;

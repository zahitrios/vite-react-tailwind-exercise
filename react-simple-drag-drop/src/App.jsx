import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialState = [
	{
		id: 1,
		content: "task 1",
	},
	{
		id: 2,
		content: "task 2",
	},
	{
		id: 3,
		content: "task 3",
	},
	{
		id: 4,
		content: "task 4",
	},
];

const App = () => {
	const [tasks, setTasks] = useState(initialState);

	const onDragEnd = result => {
		if (!result.destination) {
			return;
		}

		const items = reorder(
			tasks,
			result.source.index,
			result.destination.index
		);

		setTasks(items);
	};

	const reorder = (list, startIndex, endIndex) => {
		console.log(list, startIndex, endIndex);
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		console.log(removed)
		result.splice(endIndex, 0, removed);
		console.log(result);
	  
		return result;
	};

	return (
		<div className="container p-2">
			<h1 className="mb-3 text-xl">Drag and drop!</h1>
			<DragDropContext
				onDragEnd={onDragEnd}
				className="list-none p-2 border-2 border-sky-600"
			>
				<Droppable droppableId="droppable">
					{
						(dropabbleProvider) => (
							<ul ref={dropabbleProvider.innerRef} {...dropabbleProvider.droppableProps} className="list-none p-2 border-2 border-sky-600">
								{tasks.map((task, index) => (
									<Draggable
										key={task.id}
										draggableId={`${task.id}`}
										index={index}
										
									>
										{
											(draggableProvider) => (
												<li
													ref={draggableProvider.innerRef}
													{...draggableProvider.draggableProps}
													{...draggableProvider.dragHandleProps}
													key={task.id}
													className="border-2 border-purple-400 p-1"
												>
													{task.content}
												</li>
											)
										}
									</Draggable>
								))}
								{dropabbleProvider.placeholder}
							</ul>
						)
					}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default App;

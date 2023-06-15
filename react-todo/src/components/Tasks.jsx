import { Droppable, Draggable } from "@hello-pangea/dnd";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggletask, filter }) => (
    <Droppable droppableId="tasksDroppable">
        {(dropabbleProvider) => {
            return (
                <div
                    ref={dropabbleProvider.innerRef}
                    {...dropabbleProvider.droppableProps}
                    className="container mx-auto mt-8 rounded-md bg-white transition-all duration-300 dark:bg-slate-800 md:max-w-md"
                >
                    {tasks.map((task, index) => {
                        if (
                            filter === "all" ||
                            (filter === "active" && !task.completed) ||
                            (filter === "completed" && task.completed)
                        )
                            return (
                                <Draggable
                                    key={task.id}
                                    draggableId={`${task.id}`}
                                    index={index}
                                >
                                    {(draggableProvider) => (
                                        <Task
                                            ref={draggableProvider.innerRef}
                                            {...draggableProvider.draggableProps}
                                            {...draggableProvider.dragHandleProps}
                                            task={task}
                                            deleteTask={deleteTask}
                                            toggletask={toggletask}
                                        />
                                    )}
                                </Draggable>
                            );
                    })}
                    {dropabbleProvider.placeholder}
                </div>
            );
        }}
    </Droppable>
);

export default Tasks;

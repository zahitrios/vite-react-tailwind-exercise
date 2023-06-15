import React from "react";
import CrossIcon from "./icons/CrossIcon";

const Task = React.forwardRef(
    ({ task, deleteTask, toggletask, ...props }, ref) => {
        return (
            <article
                ref={ref}
                key={task.id}
                {...props}
                className="flex items-center gap-2 border-b px-3 py-3 "
            >
                <button
                    onClick={() => {
                        toggletask(task);
                    }}
                    className={`inline-block h-3 w-3 flex-none rounded-full border ${
                        task.completed
                            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "border-gray-400"
                    }`}
                ></button>

                <span
                    className={`${
                        task.completed && "line-through"
                    } grow text-gray-500 transition-all duration-300 dark:text-white`}
                >
                    {task.name}
                </span>

                <button className="flex-none">
                    <CrossIcon
                        deleteTask={deleteTask}
                        task={task}
                        className=" fill-gray-400 transition-all duration-300 dark:fill-white"
                    />
                </button>
            </article>
        );
    }
);

export default Task;

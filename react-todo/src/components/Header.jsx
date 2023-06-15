import { useState } from "react";
import ThemeIcon from "./icons/ThemeIcon";
const Header = ({ addTask, theme, setTheme }) => {
    const [taskName, setTaskName] = useState("");
    const newTask = {
        id: Date.now(),
        completed: false
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() != "") {
            newTask.name = taskName.trim();
            addTask(newTask);
            setTaskName("");
        }
    };

    return (
        <header className="container mx-auto pt-8 md:max-w-md">
            <div className="mb-5 flex justify-between text-white">
                <h1 className="text-2xl uppercase tracking-[0.5em]">Todo</h1>
                <button>
                    <ThemeIcon theme={theme} setTheme={setTheme} />
                </button>
            </div>
            <form
                className="mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-3 py-2 transition-all duration-300 dark:bg-slate-800"
                onSubmit={handleSubmit}
            >
                <span className="inline-block h-3 w-3 rounded-full border border-gray-400"></span>
                <input
                    type="text"
                    placeholder="Create a new todo..."
                    className=" w-full text-gray-500 outline-none transition-all duration-300 dark:bg-slate-800 dark:text-white"
                    onChange={(e) => {
                        setTaskName(e.currentTarget.value);
                    }}
                    value={taskName}
                />
            </form>
        </header>
    );
};

export default Header;

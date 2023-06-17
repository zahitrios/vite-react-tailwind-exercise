import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Actions from "./components/Actions";

let defaultUserTheme = "light";
if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    defaultUserTheme = "dark";

const initialTheme = localStorage.getItem("mode") || defaultUserTheme;
const initalState = JSON.parse(localStorage.getItem("tasks")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [tasks, setTasks] = useState(initalState);
    const [itemsToLeft, setItemsToLeft] = useState(0);
    const [filter, setFilter] = useState("all");
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));

        let itl = 0;
        tasks.map((task) => {
            if (!task.completed) itl++;
        });
        setItemsToLeft(itl);
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem("mode", theme);
    }, [theme]);

    const addTask = (task) => setTasks([...tasks, task]);

    const deleteTask = (taskToDelete) => {
        const newTasks = tasks.filter((task) => task !== taskToDelete);
        setTasks(newTasks);
    };

    const toggletask = (taskToToggle) => {
        let newTasks = tasks.map((task) =>
            taskToToggle !== task
                ? task
                : { ...task, completed: !task.completed }
        );
        setTasks(newTasks);
    };

    const clearCompleted = () => {
        let newTasks = tasks.filter((task) => !task.completed);
        setTasks(newTasks);
    };

    const onDragEnd = (result) => {
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

    return (
        <div className={` ${theme}`}>
            <div className="min-h-screen bg-gray-200 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-fixed bg-no-repeat transition-all duration-300 dark:bg-gray-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] md:bg-[url(./assets/images/bg-desktop-light.jpg)] dark:md:bg-[url(./assets/images/bg-desktop-dark.jpg)]">
                <Header addTask={addTask} theme={theme} setTheme={setTheme} />
                <DragDropContext onDragEnd={onDragEnd}>
                    <Tasks
                        tasks={tasks}
                        deleteTask={deleteTask}
                        itemsToLeft={itemsToLeft}
                        toggletask={toggletask}
                        clearCompleted={clearCompleted}
                        filter={filter}
                    />
                </DragDropContext>
                <Actions
                    clearCompleted={clearCompleted}
                    itemsToLeft={itemsToLeft}
                ></Actions>

                <Filters filter={filter} setFilter={setFilter} />
                {/* drag and drop pending */}
            </div>
        </div>
    );
};

export default App;

const Actions = ({ itemsToLeft, clearCompleted }) => (
    <section className="mx-auto flex justify-between rounded-md bg-white px-3 py-3 text-gray-500 transition-all transition-all duration-300 duration-300 dark:bg-slate-800 dark:text-white md:max-w-md">
        <span>{itemsToLeft} items left</span>
        <button className="capitalize" onClick={clearCompleted}>
            clear completed
        </button>
    </section>
);

export default Actions;

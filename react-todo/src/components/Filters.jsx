const Filters = ({ setFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 flex justify-center gap-5 rounded-md bg-white px-4 py-3 font-semibold text-gray-500 transition-all duration-300 dark:bg-slate-800 dark:text-white md:max-w-md">
            <button
                className={`${
                    filter === "all" &&
                    "text-blue-600 transition-all duration-300 dark:text-blue-400"
                }`}
                onClick={() => {
                    setFilter("all");
                }}
            >
                All
            </button>
            <button
                className={`${
                    filter === "active" &&
                    "text-blue-600 transition-all duration-300	dark:text-blue-400"
                }`}
                onClick={() => {
                    setFilter("active");
                }}
            >
                Active
            </button>
            <button
                className={`${
                    filter === "completed" &&
                    "text-blue-600 transition-all duration-300	dark:text-blue-400"
                }`}
                onClick={() => {
                    setFilter("completed");
                }}
            >
                Completed
            </button>
        </section>
    );
};

export default Filters;

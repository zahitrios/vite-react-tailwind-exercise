import CrossIcon from './components/icons/CrossIcon';
import ThemeIcon from './components/icons/ThemeIcon';

const App = () => {
    return (
        <>
            <div className="bg-[url(./assets/images/bg-desktop-light.jpg)] bg-fixed bg-contain bg-no-repeat bg-gray-200 min-h-screen">
                
                <header className="container mx-auto pt-8">
                    <div className="flex justify-between text-white mb-5">
                        <h1 className="uppercase tracking-[0.5em] text-2xl">Todo</h1>
                        <button><ThemeIcon className='fill-white' /></button>
                    </div>
                    <form className="bg-white rounded-md overflow-hidden py-2 px-3 flex gap-2 items-center mt-8">
                        <span className="rounded-full border border-gray-400 w-3 h-3 inline-block"></span>
                        <input
                            type="text"
                            placeholder="Create a new todo..."
                            className=" w-full text-gray-500 outline-none"
                        />
                    </form>
                </header>

                <main className="container mx-auto mt-8 bg-white rounded-md">

                    <article className="px-3 flex gap-2 items-center border-b py-3">
                        <button className="rounded-full border border-gray-400 w-3 h-3 inline-block flex-none"></button>
                        <span className="text-gray-500 grow">Lorem ipsum dolor sit amet</span>
                        <button className="flex-none"><CrossIcon /></button>
                    </article>
                    

                    <section className="py-3 px-3 text-gray-500 flex justify-between">
                        <span>5 items left</span>
                        <button className="capitalize">clear completed</button>
                    </section>
                </main>

                <section className="container mx-auto px-4 bg-white mt-8 py-3 rounded-md flex justify-center gap-5 text-gray-500 font-semibold">
                    <button className=' text-blue-600'>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </section>

                {/* drag and drop pending */}
            </div>
        </>
    );
};

export default App;

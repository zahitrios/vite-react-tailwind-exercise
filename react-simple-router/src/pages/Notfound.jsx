import { NavLink } from "react-router-dom"

const Notfound = () => { return (
    <>
        <div className=' text-red-500 font-bold mb-4'>
            404 NOT FOUND CUSTOM PAGE!!!
        </div>
        <NavLink className="rounded-full bg-blue-400 text-white text-sm px-2 py-1 mb-4" to="/">Go to home</NavLink>
    </>
)}

export default Notfound
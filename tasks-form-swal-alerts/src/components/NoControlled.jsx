import { useRef,useState } from "react";

const NoControlled = () => { 

    const [error, setError] = useState(null);
    const form = useRef(null);

    const handleFunction = (event) => { 
        event.preventDefault();
        setError(null);
        const data = new FormData(form.current)
        // console.log([...data.entries()])

        // const dataObject = Object.fromEntries([...data.entries()]);
        // console.log(dataObject);

        const {name,description,status} = Object.fromEntries([...data.entries()]);
        console.log(name,description,status);

        // validate data
        if(!name.trim())
            setError('Missing task name!!!')

        if(!description.trim())
            setError('Missing task description!!!')
     }

    return (
        <form onSubmit = {handleFunction} ref={form}>
            <input type="text" placeholder="Task name" className="form-control mb-2" name="name" defaultValue="Todo #01"/>
            <textarea className="form-control mb-2" placeholder="Task description" name="description" defaultValue="Description #01" />
            <select className="form-select mb-2" name="status" defaultValue="completed">
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            {
                error && <span className="text-danger d-block mb-2">{error}</span>
            }
            <button className="btn btn-primary" type="submit">Save</button>
        </form>
    )
 }
export default NoControlled;

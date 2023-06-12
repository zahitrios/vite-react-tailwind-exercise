import { useState } from "react";

const Controlled = () => { 

    const [todo, setTodo] = useState({
        name: '',
        description: '',
        status: 'completed',
        priority: true
    });
    const [error, setError] = useState(null);

    const {name, description, status, priority} = todo;

    const handleSubmit = (event) => { 
        event.preventDefault();
        setError(null);
        
        if (name.trim() === '')
            setError('Missing name')
        
        else if (description.trim() === '')
            setError('Missing description')

        else{
            console.log(todo);
        }
        
    }

    const handleChange = (e) => {
        const {type, checked, value, name} = e.target;

        setTodo({
            ...todo, 
            [name]: type === 'checkbox' ? checked : value 
        }); 
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Task name" className="form-control mb-2" name="name" value={name} onChange={handleChange}/>
            <textarea className="form-control mb-2" placeholder="Task description" name="description" value={description} onChange={handleChange}/>
            <div className='form-check mb-2'>
                <input type="checkbox" name="priority" className="form-check-input" id="priority" checked={priority} onChange={handleChange} />
                <label className='form-check-label' htmlFor="priority" >Priority</label>
            </div>

            <select className="form-select mb-2" name="status" value={status} onChange={handleChange} >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <span className='text-danger d-block mb-2'>{error}</span>
            <button className="btn btn-primary" type="submit">Save</button>
        </form>
    )
 }
export default Controlled;

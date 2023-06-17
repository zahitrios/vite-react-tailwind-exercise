import { useState } from "react";
import Swal from 'sweetalert2'

const Form = ({addTask}) => { 

    const [todo, setTodo] = useState({
        name: '',
        description: '',
        status: 'completed',
        priority: true
    });

    const {name, description, status, priority} = todo;

    const handleSubmit = (event) => { 
        event.preventDefault();
        
        if (!name.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Taks name is missing!',
            });
        }
        
        else if (!description.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Task description is missing!',
            });
        }

        else{
            //addTask(todo);
            addTask({
                id: Date.now(),
                ...todo,
                state: status === 'completed'
            });
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
                <label className='form-check-label' htmlFor="priority">Priority</label>
            </div>

            <select className="form-select mb-2" name="status" value={status} onChange={handleChange} >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <button className="btn btn-primary" type="submit">Save task</button>
        </form>
    )
 }
export default Form;

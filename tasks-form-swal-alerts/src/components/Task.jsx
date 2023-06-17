const Task = ({task, deleteTask, updateTask}) => { 

    const {id, name, description, priority, state} = task;

    const handleDelete = () => {
        deleteTask(task);
    }

    const handleUpdate = () => {
        updateTask(task);
    }

    return (
        <li className='list-group-item my-2' key={id}>
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{name}</h5>
                    <p>{description}</p>
                    <div className='d-flex gap-2'>
                        <button className='btn btn-sm btn-danger' onClick={handleDelete}>Delete</button>
                        <button className='btn btn-sm btn-warning' onClick={handleUpdate}>
                            {
                            state ?
                            'Resume it!'
                            :
                            'Finish it!'
                            }
                        </button>
                    </div>
                </div>
                <span className="badge badge-pill text-bg-primary">
                    {
                        priority && 'Priority'
                    }
                </span>
            </div>
        </li>
    )
}

export default Task

import Task from './Task'

const Tasks = ({tasks, deleteTask, updateTask}) => {
    return (
        <div className='my-5'>
            {
                tasks.length > 0 ?
                <>
                    <h2 className='text-center'>Tasks!</h2>
                    <ul className='list-group'>
                        {
                            tasks.map((task) => (<Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />) )
                        }
                    </ul>
                </>
                :
                <h2 className='text-center text-primary'>Nothing to do!</h2>
            }
            
        </div>
    );
}
export default Tasks;

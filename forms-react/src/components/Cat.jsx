import { useState } from "react";

const Cat = () => { 
    const [cat, setCat] = useState({
        name: 'Dexter',
        age: 5
    });

    const handleClick = () => {
        setCat({...cat, age: cat.age + 1});
    }

    return(
        <>
            <h2>{cat.name} - {cat.age}</h2>
            <button className='btn btn-secondary mb-2' onClick={handleClick}>Update age</button>
        </>
    );
}

export default Cat;

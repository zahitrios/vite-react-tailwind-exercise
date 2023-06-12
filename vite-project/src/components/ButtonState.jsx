import { useState } from "react";

const ButtonState = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1);
        console.log('handle click');
    }

    return (
        <button onClick={handleClick}>button state {count}</button>
    )
}

export default ButtonState;

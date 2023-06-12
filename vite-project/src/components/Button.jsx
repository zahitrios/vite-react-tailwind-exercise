const Button = ({text}) => {
    const handleClickButton = (title) => {
        console.log('handle click', title);
    }
    return (
        <button className='display-block mt-2' onClick={() => handleClickButton(text)}>{text.toUpperCase()}</button>
    );
}

export default Button;
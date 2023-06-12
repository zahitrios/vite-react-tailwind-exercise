const Fruts = ({fruts}) => {
    return (
        <ul>
            {
                fruts.map((frut, index) => (
                    <li key={index}>{frut}</li>
                ))
            }
        </ul>
    );
}

export default Fruts;
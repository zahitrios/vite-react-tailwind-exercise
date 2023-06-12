import image2 from './assets/images/image-1.jpeg'
import Button from './components/Button'
import Welcome from './components/Welcome'
import Fruts from './components/Fruts'
import ButtonState from './components/ButtonState'

const App = () => {

    const title = "Hi i'm react"
    const classTitle = "text-center"
    const image1Path = "https://picsum.photos/200/300"
    const user = true;
    const frutsArray = ['🍏', '🍐', '🍌', '🍉'];

    return (
        <>
            <ButtonState />
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <p>paragraph {`${9}`}</p>
            <img src={image1Path} className='display-block mt-2'/>
            <img src={image2} className='display-block mt-2'/>
            <Button text='Title of button' />
            <Welcome user={user}/>
            <Fruts fruts={frutsArray} />
        </>
    )
}

export default App

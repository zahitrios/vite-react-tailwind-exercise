import { useState } from "react"

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => setCounter(counter+1)
  const decrease = () => setCounter(counter-1)
  const reset = () => setCounter(0)

  return {counter,increase,decrease,reset}
}

const App = () => { 

  const counterOne = useCounter()
  const counterTwo = useCounter()

  return (
    <>
      <h1>{counterOne.counter}</h1>
      <button onClick={counterOne.increase}>+</button>
      <button onClick={counterOne.decrease}>-</button>
      <button onClick={counterOne.reset}>zero</button>
      <br /><br />
      <h1>{counterTwo.counter}</h1>
      <button onClick={counterTwo.increase}>+</button>
      <button onClick={counterTwo.decrease}>-</button>
      <button onClick={counterTwo.reset}>zero</button>
    </>
  )
}

export default App
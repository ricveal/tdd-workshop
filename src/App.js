import React from 'react'
import './App.css'

function App() {
  const [state, setState] = React.useState(['Milk', 'Chocolate', 'Beer'])

  const handleRemove = (name) => {
    const newList = state.filter((el) => el !== name)
    setState(newList)
  }
  return (
    <div className="App">
      <div>
        {state.map((el) => (
          <div key={el}>
            {el}
            <button onClick={() => handleRemove(el)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

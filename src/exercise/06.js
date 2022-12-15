// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  //   function handleSubmit(event) {
  //     event.preventDefault()
  //     const inputValue = event.target.elements[0].value
  //     return onSubmitUsername(inputValue)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="usernameInput">Username:</label>
  //         <input id="usernameInput" type="text" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   )
  // }

  // EXTRA CREDIT 1

  // const inputRef = React.useRef('')

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const inputValue = inputRef.current.value
  //   return onSubmitUsername(inputValue)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="usernameInput">Username:</label>
  //       <input ref={inputRef} id="usernameInput" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // EXTRA CREDIT 2

  const inputRef = React.useRef('')
  const [error, setError] = React.useState(null)

  function handleChange(event) {
    const imputValue = event.target.value
    console.log(imputValue)
    const isValid = imputValue === imputValue.toLowerCase()
    console.log(isValid)
    setError(isValid ? null : 'Username must be lower case')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const inputValue = inputRef.current.value
    return onSubmitUsername(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

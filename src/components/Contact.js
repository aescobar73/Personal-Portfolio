import { useState } from 'react'
// import validator from 'validator'

function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    // const validateEmail = event => {
    //     const [validEmail, setValidEmail] = useState('')
    //     const email = event.target.value;

    //     if(validator.isEmail(email)){
    //         setValidEmail('Valid Email')
    //     } else {
    //         setValidEmail('Enter Valid Email')
    //     }
    // }

    const handleNameChange = event => {
    setName(event.target.value)
    }

    const handleEmailChange = event => {
    setEmail(event.target.value)
    }

    const handleMessageChange = event => {
    setMessage(event.target.value)
    }

    const handleSubmit = event => {
    event.preventDefault()
    }


    return (
        <>
        <h1>Contact Me</h1>
        <br></br>
      <form onSubmit={handleSubmit}>
        <input
          placeholder ="Add name"
          required
          type="text"
          size='33'
          value={name}
          onChange={handleNameChange}
        />
        <br></br>
        <br></br>

        <input
          placeholder ="Email"
          required
          type="email"
          size='33'
          value={email}
          onChange={handleEmailChange}
        />

        <br></br>
        <br></br>

        <input
        class='group'
          placeholder ="Message"
          required
          type="text"
          value={message}
          onChange={handleMessageChange}
        />
  
        <br></br>
        <br></br>

        <input
        type="submit"
        value="submit"
        />
      </form> 
      </>
    )
  }

export default Form

import { useState, useContext } from 'react'
import UserContext from '../Context/UserContex'

function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({Username, Password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        value={Username}
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'   
        />
        {' '}

         <input 
        value={Password}
        type='text'
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'   
        />

        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
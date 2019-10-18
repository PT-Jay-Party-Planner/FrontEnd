import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const RegisterUser = props => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    var newUserData = {
        username: userName,
        password: password
    }
    const addUser = e => {
        e.preventDefault()
        axiosWithAuth()
            .put("/api/data", newUserData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }     
    
    return(
        <div class="register-container">
        <form onSubmit={addUser}>
            <label>
                Username:
                <input
                onChange={e => setUserName(username: e.target.value)}
                type="text"
                />
            </label>
            <label>
                Password:
                <input
                onChange={e => setPassword(password: e.target.value)}
                type="password"
                />
            </label>
        </form>
        </div>
    )

}
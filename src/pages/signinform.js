import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import LoginForm from './form/LoginForm'

const Signinform = () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
    }

    const Logout = () => {
        console.log("Logout");
    }
    
    return (
        <div className="App">
        {(user.email != "") ? (
            <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button>Logout</button>
            </div>
        ) : (
            <LoginForm/>
        )}
        </div>
    )
 }

export default Signinform
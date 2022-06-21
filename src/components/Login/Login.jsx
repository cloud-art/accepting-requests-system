import './Login.scss';
import React from "react"
import { Link } from 'react-router-dom';

function Header({currentUser, setCurrentUser}){

    return(
        <div className="container">
            <div className="login">
                <div className="loginForm">
                    <h2>Здравствуйте, как вас зовут?</h2>
                    <input type="text" className='login-input' value={currentUser} onChange={e => {setCurrentUser(e.target.value)}}/>
                    <Link to="/Requests" className={"button"}> Войти</Link>
                </div>
            </div>
        </div>
    ) 
}

export default Header
import './Header.scss';
import React from "react"

function Header({currentUser, setCurrentUser, setModalActive}){

    return(
        <div className='reqHeader'>
            <h1>Список заявок:</h1>
            <div className="reqAdd">
                <span>Здравствуйте,</span>
                <div>
                    <input className='inputCurrentUser' type="text" id="currentUser" value={currentUser} onChange={e => {setCurrentUser(e.target.value)}}/>
                </div>
                <button onClick={() => setModalActive(true)} className={'addbtn'}>Добавить зявку</button>
            </div>
        </div>
    ) 
}

export default Header
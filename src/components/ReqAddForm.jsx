import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import uuid from 'react-uuid'
import "./ReqAddForm.scss"


const ReqAddForm = ({requests, setRequests, currentUser}) => {

    const [typeRequest, setTypeRequest] =  useState('');
    const [textRequest, setTextRequest] =  useState('');
    const [isButtonActive, setIsButtonActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setRequests([...requests, 
            {
                "id": uuid(),
                "date": moment().format("DD.MM.YYYY"), 
                "type": typeRequest,
                "status": "active",
                "author": currentUser,
                "text": textRequest
            }
        ])   
    }

    useEffect(() => {
        if (typeRequest == "" || textRequest ==""){
            setIsButtonActive(false)
        } else{
            setIsButtonActive(true)
        }
        console.log('changed')
        
    }, [typeRequest, textRequest]);

    return (
        <div className={'modalForm'}>
            <h2>Добавить заявку</h2>
            <form className="addReqForm">
                <div className="addReqForm-container">
                    <label htmlFor="type">
                        <span className="reqAddForm-label">Тип заявки</span>
                        <input 
                            type="text" 
                            name={"type"} 
                            className={'reqAddForm-input'}
                            onChange={e => setTypeRequest(e.target.value)}
                            />
                    </label>
                    <label htmlFor="text">
                        <span className="reqAddForm-label">Текст</span>
                        <input 
                            type="text" 
                            name={"text"} 
                            className={'reqAddForm-input'}
                            onChange={e => setTextRequest(e.target.value)}
                            />
                    </label>
                </div>
                <button 
                    className='' 
                    type={"submit"}
                    disabled={!isButtonActive}
                    onClick={(e) => handleSubmit(e)}>
                    Зарегистрировать заявку
                </button>
            </form>

        </div>
    )
}

export default ReqAddForm
import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import uuid from 'react-uuid'
import "./ReqAddForm.scss"
import types from "../types.json"

const ReqAddForm = ({requests, setRequests, currentUser}) => {



    const [typeRequest, setTypeRequest] =  useState('')
    const [textRequest, setTextRequest] =  useState('')
    const [typesList, setTypesList] = useState([
        {
            "id": "777",
            "type": "test"
        }
    ]);
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
    }, [typeRequest, textRequest]);

    const typesOptions = typesList.map( (e, i) => {
        return (
            <option key={e.id} value={e.type}>{e.type}</option>
        )
    })

    useEffect(() => {
        let tmpTypesList = []
        import("../types.json").then(value => {
            for (let i = 0; i < value.length; i++){
                tmpTypesList.push(value[i])
            }
        })
        setTypesList(tmpTypesList)
        setTypeRequest(typesList[0])
    }, [typeRequest])

    return (
        <div className={'modalForm'}>
            <h2>Добавить заявку</h2>
            <form className="addReqForm">
                <div className="addReqForm-container">
                    <label htmlFor="type">
                        <span className="reqAddForm-label">Тип заявки</span>
                        <select 
                            name="types" 
                            id="types" 
                            form="reqForm" 
                            className={'reqAddForm-input'}
                            onChange={e => setTypeRequest(e.target.value)}>
                            {typesOptions}
                        </select>
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
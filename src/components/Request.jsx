import './App.scss';
import { useState } from 'react';

const Request = ({ id, date, type, status, author, text, list, setList}) => {
    const handleEdit = () => {
        
    }

    const handleDelete = () =>{
        setList(list.filter(e => {
            return e.id != id
        }))
    }

    return(
        <div className="reqGrid" key="1">
            <div className='reqCell'>{date}</div>
            <div className='reqCell'>{type}</div>
            <div className='reqCell'>{status}</div>
            <div className='reqCell'>{author}</div>
            <div className='reqCell'>{text}</div>
            <button
                onClick={() => handleEdit}
                >
                Edit
            </button>
            <button
                onClick={(e) => handleDelete(e)}
                >
                Delete
            </button>
        </div>
    )
}

export default Request
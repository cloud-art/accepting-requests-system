import './App.scss';
import { useState, useEffect } from 'react';

const Request = ({ thisElement, list, setList}) => {
    const [canEdit, setCanEdit] = useState(false)
    const [type, setType] = useState(thisElement.type)
    const [text, setText] = useState(thisElement.text)

    const handleEdit = () => {
        setCanEdit(true)
    }

    const handleSubmitEdit = () => {
        setCanEdit(false)     
    }

    const handleDelete = () =>{
        setList(list.filter(e => {
            return e.id !== thisElement.id
        }))
    }

    const changeText = (e) => {
        setText(e.target.value)
    }

    const changeType = (e) => {
        setType(e.target.value)
    }

    useEffect(() => {
        const element = {
            "id": thisElement.id,
            "date": thisElement.date,
            "type": type,
            "status": thisElement.status,
            "author": thisElement.author,
            "text": text
        }
        const indexInList = list.findIndex((e) => {return e.id === thisElement.id})
        setList([...list.slice(0, indexInList), element, ...list.slice(indexInList + 1)])
    }, [type, text]);

    return(
        <div className="reqGrid" key="1">
            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={thisElement.date} disabled/>
            <input className={'reqCell ' + (canEdit? 'reqCellActive' : 'reqCellDisabled')} type="text" id="currentUser" value={thisElement.type} disabled={!canEdit}
                onChange={e => changeType(e)}/>
            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={thisElement.status} disabled/>
            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={thisElement.author} disabled/>
            <input className={'reqCell ' + (canEdit? 'reqCellActive' : 'reqCellDisabled')} type="text" id="currentUser" value={thisElement.text} disabled={!canEdit}
                onChange={e => changeText(e)}/>
            {
                (!canEdit && <button className='editbtn' onClick={() => handleEdit()}>Edit</button>)
                ||
                (canEdit && <button onClick={() => handleSubmitEdit()}>Submit</button>)
            }

            <button onClick={(e) => handleDelete(e)} className={'deletebtn'}>
                Delete
            </button>
        </div>
    )
}

export default Request
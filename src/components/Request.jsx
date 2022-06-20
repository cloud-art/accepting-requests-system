import './App.scss';
import { useState } from 'react';

const Request = ({ thisElement, list, setList}) => {
    const [canEdit, setCanEdit] = useState(false)
    const [element, setElement] = useState(thisElement)

    const handleEdit = () => {
        setCanEdit(true)
    }

    const handleSubmitEdit = () => {
        setCanEdit(false)     
        const indexInList = list.findIndex((e) => {return e.id === element.id})
        setList([...list.slice(0, indexInList), element, ...list.slice(indexInList + 1)])
    }

    const handleDelete = () =>{
        setList(list.filter(e => {
            return e.id !== thisElement.id
        }))
    }

    const changeText = (e) => {
        setElement({    
            "id": element.id,
            "date": element.date,
            "type": element.type,
            "status": element.status,
            "author": element.author,
            "text": e.target.value
        })
    }

    const changeType = (e) => {
        setElement({    
            "id": element.id,
            "date": element.date,
            "type": e.target.value,
            "status": element.status,
            "author": element.author,
            "text": element.text
        })
    }

    return(
        <div className="reqGrid" key="1">
            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={element.date} disabled/>
            <input className={'reqCell ' + (canEdit? 'reqCellActive' : 'reqCellDisabled')} type="text" id="currentUser" value={element.type} disabled={!canEdit}
                onChange={e => changeType(e)}/>
            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={element.status} disabled/>
            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={element.author} disabled/>
            <input className={'reqCell ' + (canEdit? 'reqCellActive' : 'reqCellDisabled')} type="text" id="currentUser" value={element.text} disabled={!canEdit}
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
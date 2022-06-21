import { useState, useEffect } from 'react';

const Request = ({ currentUser, thisElement, list, setList}) => {
    const [canEdit, setCanEdit] = useState(false)
    const [typesList, setTypesList] = useState([]);
    const [type, setType] = useState(thisElement.type)
    const [text, setText] = useState(thisElement.text)

    const editIsAvailable = () => {
        if (currentUser === thisElement.author){
            return true
        } 
        return false
    }

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

    const typesOptions = typesList.map( (e, i) => {
        return (
            <option key={e.id} value={e.type}>{e.type}</option>
        )
    })

    useEffect(() => {
        let tmpTypesList = []
        import("../../../types.json").then(value => {
            for (let i = 0; i < value.length; i++){
                tmpTypesList.push(value[i])
            }
        })
        setTypesList(tmpTypesList)
    }, [type])

    return(
        <div className="reqGrid" key="1">
            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={thisElement.date} disabled/>
            <select 
                name="types" 
                id="types" 
                form="reqForm" 
                className={'reqCell ' + (canEdit? 'reqCellActive' : 'reqCellDisabled')}
                onChange={e => changeType(e)}
                value={thisElement.type}
                disabled={!canEdit}>
                {typesOptions}
            </select>

            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={thisElement.status} disabled/>
            <input className='reqCell reqCellDisabled' type="text" id="currentUser" value={thisElement.author} disabled/>
            <input className={'reqCell ' + (canEdit? 'reqCellActive' : 'reqCellDisabled')} type="text" id="currentUser" value={thisElement.text} disabled={!canEdit}
                onChange={e => changeText(e)}/>
            {(editIsAvailable() && !canEdit && <button className='editbtn' onClick={() => handleEdit()}>Edit</button>)
            ||
            (editIsAvailable() && canEdit && <button onClick={() => handleSubmitEdit()}>Submit</button>)}

            {editIsAvailable() && <button onClick={(e) => handleDelete(e)} className={'deletebtn'}>Delete</button>}
        </div>
    )
}

export default Request
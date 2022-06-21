import './RequestsList.scss';
import { useState } from 'react';
import Request from "./Request";

function SortTitle({name, sortList}){
    const [countClicks, setCountClicks] = useState(0)
    
    const sortListByType = () => {
        if (countClicks < 1){
            sortList(name, 'Возрастание')
            setCountClicks(1)
        } else{
            sortList(name, 'Убывание')
            setCountClicks(0)
        }
    }

    return(
        <span className='reqCell title clickable' onClick={() => {sortListByType()}}>{name}</span>
    )
}

export default SortTitle
import './App.scss';
import RequestsList from './RequestsList';
import ModalAddRequest from './ModalAddRequest'
import ReqAddForm from './ReqAddForm';
import Header from './Header';
import { useState } from 'react';
import uuid from 'react-uuid'

function App() {
  const [currentUser, setCurrentUser] = useState('guest');
  const [requests, setRequests] = useState(
    [
      {
        "id": uuid(),
        "date":"16.06.2022",
        "type":"1",
        "status":"closed",
        "author":"admin",
        "text":"something"
      },
      {
        "id": uuid(),
        "date":"17.06.2022",
        "type":"1",
        "status":"closed",
        "author":"admin",
        "text":"something"
      },
      {
        "id": uuid(),
        "date":"12.06.2022",
        "type":"1",
        "status":"closed",
        "author":"admin",
        "text":"something"
      }
    ]
  )

  const [modalActive, setModalActive] = useState(false)
  const sortList = (field, type) => {
    const copyList = requests.concat()
    if (type == "Возрастание"){
      const sortList = copyList.sort(
        (a, b) => {return a[field] > b[field]}
      )
      setRequests(sortList)
    } else{
      const sortList = copyList.sort(
        (a, b) => {return a[field] < b[field]}
      )
      setRequests(sortList)
    }
  }

  return (
    <>
      <div className='container'>
        <div className='req'>
          <Header currentUser={currentUser} setCurrentUser={setCurrentUser} setModalActive={setModalActive}/>
          <RequestsList requests={requests} setRequests={setRequests} sortList={sortList}/>

        </div>
      </div>
      <ModalAddRequest active={modalActive} setActive={setModalActive}>
        <ReqAddForm requests={requests} setRequests={setRequests} currentUser={currentUser}/>
      </ModalAddRequest>
    </>
  );
}

export default App;

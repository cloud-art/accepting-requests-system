import './App.scss';
import reqArray from "../data.json";
import RequestsList from './RequestsList';
import ModalAddRequest from './ModalAddRequest'
import ReqAddForm from './ReqAddForm';
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
        "status":"active",
        "author":"admin",
        "text":"test"
      }
    ]
  )

  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <div className='container'>
        <div className='req'>
          <RequestsList requests={requests} setRequests={setRequests}/>
          <div className='reqAdd'>
            <span>Здравствуйте, {currentUser}</span>
            <button onClick={() => setModalActive(true)}>Добавить зявку</button>
          </div>
        </div>
      </div>
      <ModalAddRequest active={modalActive} setActive={setModalActive}>
        <ReqAddForm requests={requests} setRequests={setRequests} currentUser={currentUser}/>
      </ModalAddRequest>
    </>
  );
}

export default App;

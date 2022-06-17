import './App.scss';
import reqArray from "./data.json";
import { useState } from 'react';

function App() {
  const [requests, setRequests] = useState(reqArray);

  return (
    <>
      <div className='container'>
        <h1>Список заявок:</h1>
        <div className='req'>
            {/* <div className="reqList">
              {requests.map((e, i) => (
                <div className="reqRow">
                  <span>{e.author}</span>
                  <span>{e.date}</span>
                  <span>{e.status}</span>
                  <span>{e.type}</span>
                  <span>{e.text}</span>
                </div>
              ))}
            </div> */}
          <div className="reqList">
            <div className="reqGrid">
              <div className='reqCell title'>author</div>
              <div className='reqCell title'>date</div>
              <div className='reqCell title'>status</div>
              <div className='reqCell title'>type</div>
              <div className='reqCell title'>text</div>
            </div>
            {requests.map((e, i) => (
              <div className="reqGrid">
                <div className='reqCell'>{e['author']}</div>
                <div className='reqCell'>{e['date']}</div>
                <div className='reqCell'>{e['status']}</div>
                <div className='reqCell'>{e['type']}</div>
                <div className='reqCell'>{e['text']}</div>
              </div>
            ))}
          </div>
          
        
           
            <div className='reqAdd'>
              <span>Имя пользователя</span>
              <button>Добавить</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;

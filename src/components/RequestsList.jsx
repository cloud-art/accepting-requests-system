import './RequestsList.scss';
import { useState } from 'react';
import Request from "./Request";


function RequestsList({ requests, setRequests }) {
  
    return (
      <div className="reqList">
        <div className="reqGrid">
          <div className='reqCell title'>date</div>
          <div className='reqCell title'>type</div>
          <div className='reqCell title'>status</div>
          <div className='reqCell title'>author</div>
          <div className='reqCell title'>text</div>
        </div>
        {requests.map((e, i) => (
          // <Request id={e.id} date={e.date} type={e.type} status={e.status} author={e.author} text={e.text} list={requests} setList={setRequests} />
          <Request thisElement={e} list={requests} setList={setRequests} />
        ))}
      </div>
    )
  }
  
  export default RequestsList;
  
import './RequestsList.scss';
import SortTitle from './SortTitle';
import { useState } from 'react';
import Request from "./Request";


function RequestsList({ currentUser, requests, setRequests, sortList }) {
  
    return (
      <div className="reqList">
        <div className="reqGrid">
          <SortTitle name={'date'} sortList={sortList}/>
          <span className='reqCell title'>type</span>
          <SortTitle name={'status'} sortList={sortList}/>
          <span className='reqCell title'>author</span>
          <span className='reqCell title'>text</span>
        </div>
        {requests.map((e, i) => (
          <Request currentUser={currentUser} thisElement={e} list={requests} setList={setRequests} />
        ))}
      </div>
    )
  }
  
  export default RequestsList;
  
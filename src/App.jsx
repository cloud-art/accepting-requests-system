import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import RequestSystem from './components/RequestSystem/RequestSystem';
import Login from './components/Login/Login'

function App() {
    const [currentUser, setCurrentUser] = useState('Guest');

  return (
    <>
      <Routes>
        <Route path="/" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/Requests" element={<RequestSystem currentUser={currentUser} setCurrentUser={setCurrentUser} />} />  
      </Routes>
    </>
  );
}

export default App;
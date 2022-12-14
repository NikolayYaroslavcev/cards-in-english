import React from 'react';
import './App.css';
import {Registration} from './features/auth/Registration';
import {Logging} from './features/auth/Logging';
import {Route, Routes} from 'react-router-dom';
import {Profile} from "./features/profile/Profile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<div>dffdgfdgdfgdfgdfgewrewreewrwre</div>}/>
                {/*<Navigation/>*/}
                <Route path="/login" element={<Logging/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/profile" element={ <Profile/>}/>
            </Routes>
        </div>
    );
}


export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './app/App';
// import {BrowserRouter} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import {Provider} from "react-redux";
// import {store} from "./app/store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app/App';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {BrowserRouter} from "react-router-dom";

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <BrowserRouter>
//                 <App/>
//             </BrowserRouter>
//         </Provider>
//     </React.StrictMode>
// );

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MainLayout } from './Components/layouts/main';
import LayoutAuth from './Components/layouts/auth';
import Login from './Components/Login';
import Register from './Components/Register';
import { AuthProtext } from './Components/AuthProtect';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyCAZPnhpfco-mL9j3Ri_9ighWdphXSntkY",
  authDomain: "project-cijs80.firebaseapp.com",
  projectId: "project-cijs80",
  storageBucket: "project-cijs80.appspot.com",
  messagingSenderId: "734344689821",
  appId: "1:734344689821:web:fff169e19e5258540f3c74",
  measurementId: "G-Q5S9TYS8YV"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthProtext><MainLayout/></AuthProtext>} >
          <Route path="home" element={<App/>} />
        </Route>  
        <Route path='/auth' element={<LayoutAuth/>}>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

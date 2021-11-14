import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import './App.css';
import Header from './components/Header/Header';
import Login from "./pages/Login/Login"
import AppRouter from './router/AppRouter';

function App() {
    return (
        <>
            <Header />
            <div className="mainBlock">
            	<AppRouter />
            </div>
        </>
    )
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
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

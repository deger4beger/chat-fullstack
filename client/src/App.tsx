import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { initializeUser } from './redux/slices/userSlice';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(initializeUser())
	}, [])

    return (
        <>
            <Header data-testid="header" />
            <div className="mainBlock">
            	<AppRouter data-testid="router" />
            </div>
        </>
    )
}

export default App;

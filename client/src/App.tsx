import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';
import { useAppDispatch } from './hooks/redux';
import { initializeUser } from './redux/slices/userSlice';

function App() {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(initializeUser())
	}, [])

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

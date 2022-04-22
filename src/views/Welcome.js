import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import Home from './Home';


export default function Welcome() {

    const { isLoggedIn } = useSelector(state => state.auth);

    return (
        !isLoggedIn ? <LoginForm /> : <Home />
    )
}

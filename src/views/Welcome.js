import React from 'react';
import LoginForm from '../components/LoginForm';
import Home from './Home';


export default function Welcome() {

    return (
        true ? <LoginForm /> : <Home />
    )
}

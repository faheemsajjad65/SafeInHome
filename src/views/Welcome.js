import React from 'react';
import LoginForm from '../components/LoginForm';
import CarePlanWizard from "./CarePlanWizard"


export default function Welcome() {

    return (
        true ? <LoginForm /> : <CarePlanWizard />
    )
}

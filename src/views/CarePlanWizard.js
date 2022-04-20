import React from 'react';
import CarePlanWizardSearch from "../components/CarePlanWizardSearch"
import CarePlansList from "../components/CarePlansList"

export default function CarePlanWizard(){
    return (
        <>
            <CarePlanWizardSearch />
            <CarePlansList />
        </>
    )
}
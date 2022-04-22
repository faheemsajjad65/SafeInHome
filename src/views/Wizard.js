import React, { useEffect } from 'react';
import ClientSearch from "../components/ClientSearch"
import CarePlansList from "../components/CarePlansList"
import ClientsList from "../components/ClientsList"
import { useDispatch } from 'react-redux';
import { getCarePlans } from '../actions/carePlan'
import { useSelector } from 'react-redux';

export default function Wizard(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarePlans())
    },[dispatch])

    const carePlans = useSelector((state) => state.carePlans);

    return (
        <>
            <ClientSearch />
            { carePlans ? <CarePlansList list = {carePlans} /> : <ClientsList /> } 
        </>
    )
}
import React, { useEffect } from 'react';
import ClientSearch from "../components/ClientSearch"
import CarePlansList from "../components/CarePlansList"
import ClientsList from "../components/ClientsList"
import { useDispatch } from 'react-redux';
import { getCarePlans } from '../actions/carePlan'
import { useSelector } from 'react-redux';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Wizard(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarePlans())
    },[dispatch])

    const carePlans = useSelector((state) => state.carePlans);
    const clientList = useSelector((state) => state.clients)

    return (
        <>
            
                <Typography variant="h4">
                    Search For Client
                </Typography>
                
                <ClientSearch />
                
                { carePlans ? <CarePlansList list = {carePlans} /> : <ClientsList list={clientList} /> } 
           
        </>
    )
}
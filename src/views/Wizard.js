import React, { useEffect } from 'react';
import ClientSearch from "../components/ClientSearch"
import CarePlansList from "../components/CarePlansList"
import ClientsList from "../components/ClientsList"
import { useDispatch } from 'react-redux';
import { getCarePlans } from '../actions/carePlan'
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

export default function Wizard(){

    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth); // get user data
    useEffect(() => {
        const unSub = dispatch(getCarePlans(user.token))
        return () => {
            if(unSub) unSub.then(()=>{
                return Promise.resolve();
            });
        }
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
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
        dispatch(getCarePlans(user.data.token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    const carePlans = useSelector((state) => state.carePlan);
    const clientList = useSelector((state) => state.clients);

    return (
        <>
            
            <Typography variant="h4">
                Search For Client
            </Typography>
            
            <ClientSearch />
            
            { clientList.length != 0 ? <ClientsList list={clientList} /> : <CarePlansList list = {carePlans} />  } 
           
        </>
    )
}
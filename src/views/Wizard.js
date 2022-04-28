import React, { useEffect } from 'react';
import ClientSearch from "../components/ClientSearch"
import CarePlansList from "../components/CarePlansList"
import ClientsList from "../components/ClientsList"
import { useDispatch } from 'react-redux';
import { getCarePlans } from '../actions/carePlan'
import { useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
//import Typography from '@material-ui/core/Typography';

export default function Wizard(){
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth); // get user data
    
    useEffect(() => {
        dispatch(getCarePlans(user?.token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    const carePlans = useSelector((state) => state.carePlan);
    const clientList = useSelector((state) => state.clients);

    return (
        <>
            <div className="page-title">
                Information<span className="desc">Description text here</span> 
                <div className="ms-auto"><CloseIcon /></div>
            </div>
            <div className="portlet">
                <h5>Search For Client</h5>
                <ClientSearch />
            </div>
            <div className="portlet">
                <h5>Clients</h5>
                { clientList.length ? <ClientsList list={clientList} /> : <CarePlansList list = {carePlans} />  }
            </div>
        </>
    )
}
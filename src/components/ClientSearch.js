import { TextField } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { getClients } from '../actions/client'

export default function ClientSearch() {

    const {register , handleSubmit} = useForm();

    const dispatch = useDispatch();

    const handleSearchForm = (formData) => {
        dispatch(getClients(formData))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSearchForm)}>
                <TextField {...register("FirstName")} type="text" id="fname" name="FirstName" placeholder="Enter First Name" label="First Name"/>

                <TextField {...register("LastName")} type="text" id="lname" name="LastName" placeholder="Enter Last Name" label="Last Name"/>

        
                <TextField {...register("street")} type="text" id="street" name="street" placeholder="Enter Street" label="Street"/>

                
                <TextField {...register("city")} type="text" id="city" name="city" placeholder="Enter City" label="City"/>

                
                <TextField {...register("state")} type="text" id="state" name="state" placeholder="Enter State" label="State"/>

                
                <TextField {...register("dob")} type="text" id="dob" name="dob" placeholder="Enter DOB" label="DOB"/>

                
                <TextField {...register("email")} type="text" id="email" name="email" placeholder="Enter Email" label="Email"/>

                <button >Search</button>
            </form>
        </div>
    )
}
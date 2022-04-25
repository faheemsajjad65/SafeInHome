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
                First Name
                <input {...register("FirstName")} type="text" id="fname" name="FirstName" placeholder="Enter First Name" />

                Last Name
                <input {...register("LastName")} type="text" id="lname" name="LastName" placeholder="Enter Last Name" />

                Street
                <input {...register("street")} type="text" id="street" name="street" placeholder="Enter Street" />

                City
                <input {...register("city")} type="text" id="city" name="city" placeholder="Enter City" />

                State
                <input {...register("state")} type="text" id="state" name="state" placeholder="Enter State" />

                DOB
                <input {...register("dob")} type="text" id="dob" name="dob" placeholder="Enter DOB" />

                Email
                <input {...register("email")} type="text" id="email" name="email" placeholder="Enter Email" />

                <button >Search</button>
            </form>
        </div>
    )
}
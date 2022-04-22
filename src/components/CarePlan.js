import React from 'react'
import { useParams } from 'react-router-dom'
import { withBaseLayout } from '../layouts/Base'

function CarePlan() {
    const { id } = useParams();

    return (
        <div>Here is the care plan for client</div>
    )
}


export default withBaseLayout(CarePlan)
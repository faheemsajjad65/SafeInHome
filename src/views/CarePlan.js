import React from 'react'
import { useParams } from 'react-router-dom'
import { withBaseLayout } from '../layouts/Base'
import HealthInformation from '../components/carePlanAccordians/HealthInformation'
import Technology from '../components/carePlanAccordians/Technology'
// import AlertConditions from '../components/carePlanAccordians/AlertConditions'
// import CarePlanActionsCalender from '../components/carePlanAccordians/CarePlanActionsCalender'
// import CarePlanActions from '../components/carePlanAccordians/CarePlanActions'
import PersonalSupportDetails from '../components/carePlanAccordians/PersonalSupportDetails'
import EmergencyPlanning from '../components/carePlanAccordians/EmergencyPlanning'
import CSRepresentative from '../components/carePlanAccordians/CSRepresentative'
import CareCircle from '../components/carePlanAccordians/CareCircle'

function CarePlan() {
    const { id } = useParams();

    return (
        <>
            {/* accoridan 1 */}
            {/* accoridan 2 */}
                <CareCircle />
            {/* accoridan 3 */}
                <CSRepresentative />
            {/* accoridan 4 */}
                <EmergencyPlanning />
            {/* accoridan 5 */}
                <PersonalSupportDetails />
            {/* accoridan 6 */}
                {/* <CarePlanActions /> */}
            {/* accoridan 7 */}
                {/* <CarePlanActionsCalender /> */}
            {/* accoridan 8 */}
                {/* <AlertConditions /> */}
            {/* accoridan 9 */}
                <HealthInformation />
            {/* accoridan 10 */}
                <Technology />
        </>
    )
}


export default withBaseLayout(CarePlan)
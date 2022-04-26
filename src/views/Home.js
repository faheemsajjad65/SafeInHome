import React from 'react'
import Wizard from './Wizard'
import { withBaseLayout } from '../layouts/Base'

function Home() {

    // initially we need to route to wizard by default
    
    return (
        <Wizard />
    )
}


export default withBaseLayout(Home)
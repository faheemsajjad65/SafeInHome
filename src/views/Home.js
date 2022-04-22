import React from 'react'
import Wizard from './Wizard'
import { withBaseLayout } from '../layouts/Base'

function Home() {

    return (
        <Wizard />
    )
}


export default withBaseLayout(Home)
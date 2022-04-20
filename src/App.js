import React from 'react';
import {HashRouter as Router,Routes,Route,} from 'react-router-dom';
import Welcome from "./views/Welcome"
import Settings from "./views/Settings"
import { StyledEngineProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/styles.scss';

function SihWizard (){
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Welcome/> } />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </Router>
  )
}


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <SihWizard/>
    </StyledEngineProvider>
  );
}

export default App;

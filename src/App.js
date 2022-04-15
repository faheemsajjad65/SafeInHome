import React from 'react';
import {HashRouter as Router,Routes,Route,} from 'react-router-dom';
import Welcome from "./views/Welcome"
import Settings from "./views/Settings"

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
    <SihWizard/>
  );
}

export default App;

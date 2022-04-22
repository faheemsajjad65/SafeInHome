import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Welcome from "./views/Welcome"
import Settings from "./views/Settings"
import StoreProvider from './store/StoreProvider';
import {useSelector} from "react-redux";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import LoginForm from "./components/LoginForm";
import CarePlanWizard from "./views/CarePlanWizard";

function Authenticate({children}){
    const { isLoggedIn } = useSelector(state => state.auth);
    return (
        isLoggedIn ? children: <Navigate to="/" />
    )
}


const ContentWrapper = ({children}) => {
    const isDarkMode  = useSelector(({settings}) => settings.isDarkMode);
    const theme = React.useMemo(
        () => createTheme({
                palette: {
                    type: isDarkMode ? 'dark' : 'light',
                },
            }),
        [isDarkMode]
    );
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}

function SihWizard (){
  return (
    <Router>
        <ContentWrapper>
            <Routes>
                <Route path="/" element={ <Welcome/> } />
                <Route path="/login" element={ <LoginForm/> } />
                <Route path="/wizard" element={ <Authenticate> <CarePlanWizard /> </Authenticate> } />
                <Route path="/settings" element={ <Authenticate> <Settings /> </Authenticate> } />
            </Routes>
        </ContentWrapper>
    </Router>
  )
}

function App() {
  return (
      <StoreProvider>
        <SihWizard/>
      </StoreProvider>
  );
}

export default App;

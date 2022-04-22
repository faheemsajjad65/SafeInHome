import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Welcome from "./views/Welcome"
import Settings from "./views/Settings"
import StoreProvider from './store/StoreProvider';
import {useSelector} from "react-redux";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
//import { StyledEngineProvider } from '@material-ui/material/styles';
import variables from "./assets/scss/_variables.scss"
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/styles.scss';

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
                    primary: {
                        // light: will be calculated from palette.primary.main,
                        main: variables.primary,
                        // dark: will be calculated from palette.primary.main,
                        // contrastText: will be calculated to contrast with palette.primary.main
                    },
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
                <Route path="/settings" element={ <Authenticate> <Settings /> </Authenticate> } />
            </Routes>
        </ContentWrapper>
    </Router>
  )
}

function App() {
    return (
      // <StyledEngineProvider injectFirst>
      //   <SihWizard/>
      // </StyledEngineProvider>
      <StoreProvider>
        <SihWizard/>
      </StoreProvider>
  );
}

export default App;

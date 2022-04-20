import React from 'react';
import {HashRouter as Router,Routes,Route,} from 'react-router-dom';
import Welcome from "./views/Welcome"
import Settings from "./views/Settings"
import StoreProvider from './store/StoreProvider';
import {useSelector} from "react-redux";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

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
                <Route path="/settings" element={<Settings />} />
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

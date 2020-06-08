import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/routes/routes"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#607D8B',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#26A69A',
    },
  },
});

function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="root main">
        <Header />
        <div style={{ flexGrow: '1' }}>
      
          <Home />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

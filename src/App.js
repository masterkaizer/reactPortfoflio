import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/routes/routes"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Clock from "./components/clock.jsx";
var unicorn = require ("magic");
console.log(unicorn.dance());
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green make a good mix.
      main: '#607D8B',
    },
    secondary: {
      // This is green
      main: '#26A69A',
    },
  },
});


function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="root main">
        <Header />
         <Clock />
        <div style={{ flexGrow: '1' }}>
          <Home />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

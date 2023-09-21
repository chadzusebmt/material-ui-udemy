import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div> Home </div>} />
          <Route exact path="/services" component={() => <div> Service </div>} />
          <Route exact path="/customsoftware" component={() => <div> Custom Software </div>} />
          <Route exact path="/mobileapps" component={() => <div> Mobile App </div>} />
          <Route exact path="/websites" component={() => <div> Website </div>} />
          <Route exact path="/revolution" component={() => <div> Revolution </div>} />
          <Route exact path="/about" component={() => <div> About Us </div>} />
          <Route exact path="/contact" component={() => <div> Contact Us </div>} />
          <Route exact path="/estimate" component={() => <div> Estimate </div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

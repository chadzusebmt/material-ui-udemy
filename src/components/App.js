import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div> Home </div>} />
          <Route path="/services" element={<div> Service </div>} />
          <Route path="/customsoftware" element={<div> Custom Software </div>} />
          <Route path="/mobileapps" element={<div> Mobile App </div>} />
          <Route path="/websites" element={<div> Website </div>} />
          <Route path="/revolution" element={<div> Revolution </div>} />
          <Route path="/about" element={<div> About Us </div>} />
          <Route path="/contact" element={<div> Contact Us </div>} />
          <Route path="/estimate" element={<div> Estimate </div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

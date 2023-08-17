import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Studentloginpage from './Pages/Studentloginpage';
import SignupStudent from './Pages/StudentSignuppage'
import SignupCompany from './Pages/CompanySignuppage'
import Companyloginpage from './Pages/Companyloginpage';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/student" element={ <Studentloginpage/> } />
        <Route path="/company" element={ <Companyloginpage/> } />
        <Route path="/SignupStudent" element={ <SignupStudent/> } />
        <Route path="/SignupCompany" element={ <SignupCompany/> } />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

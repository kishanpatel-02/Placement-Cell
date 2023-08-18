import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Studentloginpage from './Pages/Studentloginpage';
import SignupStudent from './Pages/StudentSignuppage'
import SignupCompany from './Pages/CompanySignuppage'
import Companyloginpage from './Pages/Companyloginpage';
import Admin from './Pages/AdminPages/Adminpage';
import AdminCmplist from './Pages/AdminPages/AdminCmplist';
import AdminStudlist from './Pages/AdminPages/AdminStdlist';
import AdminJoblist from './Pages/AdminPages/AdminJoblist';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/student" element={ <Studentloginpage/> } />
        <Route path="/company" element={ <Companyloginpage/> } />
        <Route path="/SignupStudent" element={ <SignupStudent/> } />
        <Route path="/SignupCompany" element={ <SignupCompany/> } />
        <Route path="/Admin" element={ <Admin/> }/>
        <Route path="/admincompanylist" element={ <AdminCmplist/> } />
        <Route path="/adminjoblist" element={ <AdminJoblist/> } />
        <Route path="/adminstudentlist" element={ <AdminStudlist/> } />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

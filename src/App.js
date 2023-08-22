import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Studentloginpage from './Pages/LoginPages/Studentloginpage';
import SignupStudent from './Pages/SignUpPages/StudentSignuppage'
import SignupCompany from './Pages/SignUpPages/CompanySignuppage'
import Companyloginpage from './Pages/LoginPages/Companyloginpage';
import Admin from './Pages/AdminPages/Adminpage';
import AdminCmplist from './Pages/AdminPages/AdminCmplist';
import StudentReport from './Pages/AdminPages/AdminStudentReport';
import CompanyReport from './Pages/AdminPages/CompanyReport';
import JobReport from './Pages/AdminPages/AdminJobReport';
import Addjob from './Pages/AdminPages/AddJobpage';
import Addcompany from './Pages/AdminPages/AddCompanypage';
import Adminlogin from './Pages/LoginPages/Adminloginpage';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/student" element={ <Studentloginpage/> } />
        <Route path="/adminlogin" element={ <Adminlogin/> } />
        <Route path="/company" element={ <Companyloginpage/> } />
        <Route path="/SignupStudent" element={ <SignupStudent/> } />
        <Route path="/SignupCompany" element={ <SignupCompany/> } />
        <Route path="/Admin" element={ <Admin/> }/>
        <Route path="/admincompanylist" element={ <AdminCmplist/> } />
        <Route path="/studentreport" element={ <StudentReport/> } />
        <Route path="/companyreport" element={ <CompanyReport/> } />
        <Route path="/jobreport" element={ <JobReport/> } />
        <Route path="/addjob" element={ <Addjob/> } />
        <Route path="/addcompany" element={ <Addcompany/> } />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

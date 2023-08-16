import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Studentloginpage from './Pages/Studentloginpage';
import SignupStudent from './Pages/StudentSignuppage'
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/student" element={ <Studentloginpage/> } />
        <Route path="/SignupStudent" element={ <SignupStudent/> } />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

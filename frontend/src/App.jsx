
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/client/Dashboard/Dashboard';
import Feedback from './Pages/client/Feedback/Feedback';
import ImportantDates from './Pages/client/Important-Dates/ImportantDates'
import Mailbox from './Pages/client/Mail/Mailbox';
import Profile from './Pages/client/Profile/Profile';
import CaseFile from './Pages/client/Case-File/CaseFile';
import Contact from './Pages/client/Contact/Contact';
import Fees from './Pages/client/Fees/Fees';
import AdminDashboard from './Pages/admin/Dashboard/Dashboard';
import Login from './Login/Login';
import SignUp from './Login/Signup';
import './App.css';

function App() {
  const setAuthToken = (token) => {
    console.log('Setting auth token:', token);
  }
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login setAuthToken={setAuthToken}/>}/>
        <Route path="/dash" element={<Dashboard/>} />
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/important-dates" element={<ImportantDates/>} />
        <Route path='/fees' element={<Fees/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/mailbox" element={<Mailbox/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/case-file" element={<CaseFile/>} />
      </Routes>
    </div>
  );
}

export default App;

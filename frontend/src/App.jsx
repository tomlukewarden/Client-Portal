
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Feedback from './Pages/Feedback/Feedback';
import ImportantDates from './Pages/Important-Dates/ImportantDates'
import Mailbox from './Pages/Mail/Mailbox';
import Profile from './Pages/Profile/Profile';
import CaseFile from './Pages/Case-File/CaseFile';
import Contact from './Pages/Contact/Contact';
import Fees from './Pages/Fees/Fees';
import Login from './Login/Login';
import SignUp from './Login/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
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

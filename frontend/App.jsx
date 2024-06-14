
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Client/Pages/Dashboard/Dashboard';
import Feedback from '../src/client/Pages/Feedback/Feedback';
import ImportantDates from './Client/Pages/ImportantDates';
import Mailbox from '../src/client/Pages/Mail/Mailbox';
import Profile from '../src/client/Pages/Profile/Profile';
import CaseFile from './Client/Pages/Case-File/CaseFile';
import Contact from '../src/client/Pages/Contact/Contact';
import Fees from '../src/client/Pages/Fees/Fees';
import Login from './Login/Login'
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


import { Route, Routes } from 'react-router-dom';
import Dashboard from '../src/client/Pages/Dashboard/Dashboard';
import Feedback from '../src/client/Pages/Feedback/Feedback';
import ImportantDates from '../src/client/Pages/Important-Dates/ImportantDates';
import Mailbox from '../src/client/Pages/Mail/Mailbox';
import Profile from '../src/client/Pages/Profile/Profile';
import CaseFile from '../src/client/Pages/Case-File/CaseFile';
import Contact from './client/Pages/Contact/Contact';
import Fees from './client/Pages/Fees/Fees';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
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

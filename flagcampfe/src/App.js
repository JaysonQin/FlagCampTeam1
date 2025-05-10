import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CalendarPage from './components/CalendarPage';
import RequestPage from './components/RequestPage';
import PaymentPage from './components/PaymentPage';
import InboxPage from './components/InboxPage';
import ChatPage from './components/ChatPage';
import DiscussionBoard from './components/DiscussionBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/discussion" element={<DiscussionBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
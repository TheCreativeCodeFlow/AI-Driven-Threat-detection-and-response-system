import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Threats from './pages/Threats';
import Analytics from './pages/Analytics';
import AIDecisions from './pages/AIDecisions';
import IPManagement from './pages/IPManagement';
import Accounts from './pages/Accounts';
import Logs from './pages/Logs';
import Settings from './pages/Settings';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/threats" element={<Threats />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ai-decisions" element={<AIDecisions />} />
          <Route path="/ip-management" element={<IPManagement />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

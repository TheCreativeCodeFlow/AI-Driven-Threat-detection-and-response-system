import LogsPanel from '../components/LogsPanel';
import { logEntries } from '../data/mockData';
import './Threats.css';

export default function Logs() {
    return (
        <div className="logs-page">
            <div className="page-header">
                <h2>Activity Logs</h2>
                <p>View historical security events and actions</p>
            </div>

            <LogsPanel logs={logEntries} />
        </div>
    );
}

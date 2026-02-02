import ThreatAlerts from '../components/ThreatAlerts';
import { threatAlerts } from '../data/mockData';
import './Threats.css';

export default function Threats() {
    return (
        <div className="threats-page">
            <div className="page-header">
                <h2>All Threat Alerts</h2>
                <p>View and manage all detected security threats</p>
            </div>

            <ThreatAlerts alerts={threatAlerts} />
        </div>
    );
}

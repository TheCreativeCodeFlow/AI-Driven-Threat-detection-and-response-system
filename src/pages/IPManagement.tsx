import IPBlockManager from '../components/IPBlockManager';
import { blockedIPs } from '../data/mockData';
import './Threats.css';

export default function IPManagement() {
    return (
        <div className="ip-management-page">
            <div className="page-header">
                <h2>IP Block Management</h2>
                <p>Manage blocked and blacklisted IP addresses</p>
            </div>

            <IPBlockManager blockedIPs={blockedIPs} />
        </div>
    );
}

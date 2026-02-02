import AccountManager from '../components/AccountManager';
import { lockedAccounts } from '../data/mockData';
import './Threats.css';

export default function Accounts() {
    return (
        <div className="accounts-page">
            <div className="page-header">
                <h2>Account Management</h2>
                <p>Manage locked user accounts</p>
            </div>

            <AccountManager accounts={lockedAccounts} />
        </div>
    );
}

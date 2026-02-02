import { useState } from 'react';
import {
    User,
    Lock,
    Unlock,
    Mail,
    Clock,
    AlertTriangle,
    Search,
    Shield
} from 'lucide-react';
import type { LockedAccount } from '../types/types';
import './AccountManager.css';

interface AccountManagerProps {
    accounts: LockedAccount[];
}

export default function AccountManager({ accounts }: AccountManagerProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAccounts = accounts.filter(account =>
        account.email.includes(searchTerm) ||
        account.userId.includes(searchTerm) ||
        account.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatDate = (date: Date) => {
        return date.toLocaleString();
    };

    return (
        <div className="account-manager">
            <div className="manager-header">
                <h3>Locked Accounts</h3>
                <div className="header-actions">
                    <div className="search-box">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Search accounts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="accounts-grid">
                {filteredAccounts.map((account, index) => (
                    <div
                        key={account.userId}
                        className="account-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="account-header">
                            <div className="account-avatar">
                                <User size={24} />
                            </div>
                            <div className="account-info">
                                <span className="account-email">{account.email}</span>
                                <span className="account-id">{account.userId}</span>
                            </div>
                            <div className={`lock-status ${account.autoLocked ? 'auto' : 'manual'}`}>
                                <Lock size={16} />
                                {account.autoLocked ? 'Auto-Locked' : 'Manual Lock'}
                            </div>
                        </div>

                        <div className="account-details">
                            <div className="detail-row">
                                <Mail size={14} />
                                <span>Reason: {account.reason}</span>
                            </div>
                            <div className="detail-row">
                                <Clock size={14} />
                                <span>Locked: {formatDate(account.lockedAt)}</span>
                            </div>
                            {account.failedAttempts > 0 && (
                                <div className="detail-row warning">
                                    <AlertTriangle size={14} />
                                    <span>{account.failedAttempts} failed attempts</span>
                                </div>
                            )}
                        </div>

                        <div className="account-actions">
                            <button className="btn btn-success">
                                <Unlock size={16} />
                                Unlock Account
                            </button>
                            <button className="btn btn-ghost">
                                <Shield size={16} />
                                Investigate
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

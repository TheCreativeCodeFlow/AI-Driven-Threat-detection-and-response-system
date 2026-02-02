import { useState } from 'react';
import {
    Globe,
    Clock,
    Ban,
    CheckCircle,
    Plus,
    Search,
    Trash2
} from 'lucide-react';
import type { BlockedIP } from '../types/types';
import './IPBlockManager.css';

interface IPBlockManagerProps {
    blockedIPs: BlockedIP[];
}

export default function IPBlockManager({ blockedIPs }: IPBlockManagerProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    const filteredIPs = blockedIPs.filter(ip =>
        ip.ip.includes(searchTerm) || ip.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatDate = (date: Date) => {
        return date.toLocaleString();
    };

    const isExpired = (expiresAt?: Date) => {
        if (!expiresAt) return false;
        return new Date() > expiresAt;
    };

    return (
        <div className="ip-block-manager">
            <div className="manager-header">
                <h3>IP Block Management</h3>
                <div className="header-actions">
                    <div className="search-box">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Search IPs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
                        <Plus size={16} />
                        Block IP
                    </button>
                </div>
            </div>

            <div className="ip-list">
                <table className="ip-table">
                    <thead>
                        <tr>
                            <th>IP Address</th>
                            <th>Reason</th>
                            <th>Blocked At</th>
                            <th>Expires</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredIPs.map((ip) => (
                            <tr key={ip.ip} className={isExpired(ip.expiresAt) ? 'expired' : ''}>
                                <td>
                                    <div className="ip-cell">
                                        <Globe size={16} />
                                        <span className="ip-address">{ip.ip}</span>
                                    </div>
                                </td>
                                <td className="reason-cell">{ip.reason}</td>
                                <td>
                                    <div className="date-cell">
                                        <Clock size={14} />
                                        {formatDate(ip.blockedAt)}
                                    </div>
                                </td>
                                <td>
                                    {ip.expiresAt ? (
                                        <span className={isExpired(ip.expiresAt) ? 'expired-text' : ''}>
                                            {formatDate(ip.expiresAt)}
                                        </span>
                                    ) : (
                                        <span className="permanent">Permanent</span>
                                    )}
                                </td>
                                <td>
                                    <span className={`type-badge ${ip.autoBlocked ? 'auto' : 'manual'}`}>
                                        {ip.autoBlocked ? 'Auto' : 'Manual'}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon success" title="Unblock">
                                            <CheckCircle size={16} />
                                        </button>
                                        <button className="btn-icon danger" title="Delete">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showAddModal && (
                <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h3>Block New IP Address</h3>
                        <div className="form-group">
                            <label>IP Address</label>
                            <input type="text" className="input" placeholder="e.g., 192.168.1.1" />
                        </div>
                        <div className="form-group">
                            <label>Reason</label>
                            <input type="text" className="input" placeholder="Reason for blocking" />
                        </div>
                        <div className="form-group">
                            <label>Duration</label>
                            <select className="input">
                                <option value="24h">24 Hours</option>
                                <option value="7d">7 Days</option>
                                <option value="30d">30 Days</option>
                                <option value="permanent">Permanent</option>
                            </select>
                        </div>
                        <div className="modal-actions">
                            <button className="btn btn-ghost" onClick={() => setShowAddModal(false)}>
                                Cancel
                            </button>
                            <button className="btn btn-danger">
                                <Ban size={16} />
                                Block IP
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

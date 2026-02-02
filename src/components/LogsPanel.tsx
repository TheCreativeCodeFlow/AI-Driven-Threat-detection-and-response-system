import { useState } from 'react';
import {
    FileText,
    Download,
    Filter,
    Search,
    Calendar,
    CheckCircle,
    XCircle
} from 'lucide-react';
import type { LogEntry } from '../types/types';
import './LogsPanel.css';

interface LogsPanelProps {
    logs: LogEntry[];
}

export default function LogsPanel({ logs }: LogsPanelProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterResult, setFilterResult] = useState<'all' | 'success' | 'failure'>('all');

    const filteredLogs = logs.filter(log => {
        const matchesSearch =
            log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.details.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filterResult === 'all' || log.result === filterResult;

        return matchesSearch && matchesFilter;
    });

    const formatDate = (date: Date) => {
        return date.toLocaleString();
    };

    return (
        <div className="logs-panel">
            <div className="logs-header">
                <div className="logs-title">
                    <FileText size={20} />
                    <h3>Activity Logs</h3>
                </div>

                <div className="logs-actions">
                    <div className="search-box">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Search logs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="filter-group">
                        <Filter size={16} />
                        <select
                            value={filterResult}
                            onChange={(e) => setFilterResult(e.target.value as 'all' | 'success' | 'failure')}
                        >
                            <option value="all">All Results</option>
                            <option value="success">Success</option>
                            <option value="failure">Failure</option>
                        </select>
                    </div>

                    <button className="btn btn-ghost">
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            <div className="logs-table-container">
                <table className="logs-table">
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Action</th>
                            <th>Actor</th>
                            <th>Target</th>
                            <th>Result</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLogs.map((log, index) => (
                            <tr
                                key={log.id}
                                className={log.result}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <td>
                                    <div className="timestamp-cell">
                                        <Calendar size={14} />
                                        {formatDate(log.timestamp)}
                                    </div>
                                </td>
                                <td>
                                    <span className="action-text">{log.action}</span>
                                </td>
                                <td>
                                    <span className="actor-text">{log.actor}</span>
                                </td>
                                <td>
                                    <span className="target-text">{log.target}</span>
                                </td>
                                <td>
                                    <span className={`result-badge ${log.result}`}>
                                        {log.result === 'success' ? (
                                            <CheckCircle size={12} />
                                        ) : (
                                            <XCircle size={12} />
                                        )}
                                        {log.result}
                                    </span>
                                </td>
                                <td>
                                    <span className="details-text">{log.details}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="logs-footer">
                <span className="log-count">Showing {filteredLogs.length} of {logs.length} entries</span>
                <div className="pagination">
                    <button className="btn btn-ghost" disabled>Previous</button>
                    <span className="page-indicator">Page 1 of 1</span>
                    <button className="btn btn-ghost" disabled>Next</button>
                </div>
            </div>
        </div>
    );
}

import { useState } from 'react';
import {
    AlertTriangle,
    Shield,
    Zap,
    Globe,
    Clock,
    ChevronDown,
    ChevronUp,
    Eye,
    Ban,
    CheckCircle
} from 'lucide-react';
import type { ThreatAlert } from '../types/types';
import './ThreatAlerts.css';

interface ThreatAlertsProps {
    alerts: ThreatAlert[];
    limit?: number;
}

const threatIcons: Record<string, typeof AlertTriangle> = {
    'Brute Force Attack': Shield,
    'API Rate Abuse': Zap,
    'SQL Injection Attempt': AlertTriangle,
    'Credential Stuffing': Shield,
    'Session Hijacking': Globe,
    'XSS Attempt': AlertTriangle,
    'Unusual Data Access': Eye
};

export default function ThreatAlerts({ alerts, limit }: ThreatAlertsProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const displayAlerts = limit ? alerts.slice(0, limit) : alerts;

    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);

        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return date.toLocaleDateString();
    };

    const getSeverityLabel = (severity: string) => {
        return severity.charAt(0).toUpperCase() + severity.slice(1);
    };

    return (
        <div className="threat-alerts">
            <div className="alerts-header">
                <h3>Live Threat Alerts</h3>
                <span className="alerts-count">{alerts.length} active</span>
            </div>

            <div className="alerts-list">
                {displayAlerts.map((alert, index) => {
                    const Icon = threatIcons[alert.type] || AlertTriangle;
                    const isExpanded = expandedId === alert.id;

                    return (
                        <div
                            key={alert.id}
                            className={`alert-card ${alert.severity} ${isExpanded ? 'expanded' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="alert-main" onClick={() => setExpandedId(isExpanded ? null : alert.id)}>
                                <div className={`alert-icon ${alert.severity}`}>
                                    <Icon size={20} />
                                </div>

                                <div className="alert-content">
                                    <div className="alert-header">
                                        <span className="alert-type">{alert.type}</span>
                                        <span className={`severity-badge ${alert.severity}`}>
                                            {getSeverityLabel(alert.severity)}
                                        </span>
                                    </div>

                                    <p className="alert-description">{alert.description}</p>

                                    <div className="alert-meta">
                                        <span className="meta-item">
                                            <Globe size={12} />
                                            {alert.sourceIP}
                                        </span>
                                        {alert.affectedUser && (
                                            <span className="meta-item">
                                                <Shield size={12} />
                                                {alert.affectedUser}
                                            </span>
                                        )}
                                        <span className="meta-item">
                                            <Clock size={12} />
                                            {formatTime(alert.timestamp)}
                                        </span>
                                        <span className={`risk-score ${alert.severity}`}>
                                            Risk: {alert.riskScore}%
                                        </span>
                                    </div>
                                </div>

                                <button className="expand-btn">
                                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                            </div>

                            {isExpanded && (
                                <div className="alert-details">
                                    <div className="details-content">
                                        <h4>Details</h4>
                                        <p>{alert.details}</p>

                                        <div className="detail-grid">
                                            <div className="detail-item">
                                                <span className="detail-label">Threat ID</span>
                                                <span className="detail-value">{alert.id}</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-label">Status</span>
                                                <span className={`status-badge ${alert.status}`}>
                                                    {alert.status.replace('-', ' ')}
                                                </span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-label">Risk Score</span>
                                                <span className={`detail-value ${alert.severity}`}>{alert.riskScore}/100</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-label">Timestamp</span>
                                                <span className="detail-value">{alert.timestamp.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="alert-actions">
                                        <button className="btn btn-danger">
                                            <Ban size={16} />
                                            Block IP
                                        </button>
                                        <button className="btn btn-ghost">
                                            <Eye size={16} />
                                            Investigate
                                        </button>
                                        <button className="btn btn-success">
                                            <CheckCircle size={16} />
                                            Mark Resolved
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

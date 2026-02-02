import { useState } from 'react';
import {
    Brain,
    CheckCircle,
    XCircle,
    Clock,
    ChevronDown,
    ChevronUp,
    Shield,
    Ban,
    Zap,
    AlertTriangle,
    Gauge
} from 'lucide-react';
import type { AIDecision } from '../types/types';
import './ExplainableAI.css';

interface ExplainableAIProps {
    decisions: AIDecision[];
}

const actionIcons = {
    block_ip: Ban,
    lock_account: Shield,
    rate_limit: Zap,
    alert: AlertTriangle,
    quarantine: Shield
};

const actionLabels = {
    block_ip: 'Block IP',
    lock_account: 'Lock Account',
    rate_limit: 'Rate Limit',
    alert: 'Alert Only',
    quarantine: 'Quarantine'
};

export default function ExplainableAI({ decisions }: ExplainableAIProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'auto-applied':
            case 'approved':
                return <CheckCircle size={16} className="status-icon success" />;
            case 'rejected':
                return <XCircle size={16} className="status-icon error" />;
            default:
                return <Clock size={16} className="status-icon pending" />;
        }
    };

    const getConfidenceColor = (confidence: number) => {
        if (confidence >= 0.9) return 'high';
        if (confidence >= 0.7) return 'medium';
        return 'low';
    };

    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);

        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return date.toLocaleDateString();
    };

    return (
        <div className="explainable-ai">
            <div className="ai-header">
                <div className="ai-title">
                    <Brain size={20} className="brain-icon" />
                    <h3>AI Decision Explanations</h3>
                </div>
                <span className="ai-subtitle">Understand why the AI took each action</span>
            </div>

            <div className="decisions-list">
                {decisions.map((decision, index) => {
                    const Icon = actionIcons[decision.action];
                    const isExpanded = expandedId === decision.id;
                    const confidenceColor = getConfidenceColor(decision.confidence);

                    return (
                        <div
                            key={decision.id}
                            className={`decision-card ${isExpanded ? 'expanded' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="decision-main"
                                onClick={() => setExpandedId(isExpanded ? null : decision.id)}
                            >
                                <div className="decision-icon">
                                    <Icon size={20} />
                                </div>

                                <div className="decision-content">
                                    <div className="decision-header">
                                        <span className="action-label">{actionLabels[decision.action]}</span>
                                        <div className="decision-status">
                                            {getStatusIcon(decision.status)}
                                            <span>{decision.status.replace('-', ' ')}</span>
                                        </div>
                                    </div>

                                    <p className="affected-entity">
                                        Target: <strong>{decision.affectedEntity}</strong>
                                    </p>

                                    <div className="decision-meta">
                                        <div className={`confidence-badge ${confidenceColor}`}>
                                            <Gauge size={12} />
                                            {Math.round(decision.confidence * 100)}% confidence
                                        </div>
                                        <span className="decision-time">{formatTime(decision.timestamp)}</span>
                                    </div>
                                </div>

                                <button className="expand-btn">
                                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                            </div>

                            {isExpanded && (
                                <div className="decision-details">
                                    <div className="explanation-box">
                                        <h4>Why this action was taken:</h4>
                                        <p>{decision.reason}</p>
                                    </div>

                                    <div className="trigger-data">
                                        <h4>Trigger Data:</h4>
                                        <div className="trigger-grid">
                                            <div className="trigger-item">
                                                <span className="trigger-label">Metric</span>
                                                <span className="trigger-value">{decision.triggerData.metric}</span>
                                            </div>
                                            <div className="trigger-item">
                                                <span className="trigger-label">Observed Value</span>
                                                <span className="trigger-value highlight">
                                                    {decision.triggerData.value.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="trigger-item">
                                                <span className="trigger-label">Threshold</span>
                                                <span className="trigger-value">
                                                    {decision.triggerData.threshold.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="trigger-item">
                                                <span className="trigger-label">Exceeded By</span>
                                                <span className="trigger-value critical">
                                                    {Math.round((decision.triggerData.value / decision.triggerData.threshold) * 100 - 100)}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {decision.status === 'pending' && (
                                        <div className="decision-actions">
                                            <button className="btn btn-success">
                                                <CheckCircle size={16} />
                                                Approve
                                            </button>
                                            <button className="btn btn-danger">
                                                <XCircle size={16} />
                                                Reject
                                            </button>
                                            <button className="btn btn-ghost">
                                                Modify
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

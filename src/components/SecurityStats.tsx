import {
    Shield,
    AlertTriangle,
    CheckCircle2,
    Activity,
    Ban,
    Lock,
    TrendingUp,
    TrendingDown
} from 'lucide-react';
import type { SecurityStats as SecurityStatsType } from '../types/types';
import './SecurityStats.css';

interface SecurityStatsProps {
    stats: SecurityStatsType;
}

export default function SecurityStats({ stats }: SecurityStatsProps) {
    const getRiskLevelColor = (level: number) => {
        if (level >= 80) return 'critical';
        if (level >= 60) return 'high';
        if (level >= 40) return 'medium';
        return 'low';
    };

    const riskColor = getRiskLevelColor(stats.riskLevel);

    return (
        <div className="security-stats">
            {/* Active Threats */}
            <div className="stat-card threat-card">
                <div className="stat-icon critical-bg">
                    <AlertTriangle size={24} />
                </div>
                <div className="stat-content">
                    <span className="stat-label">Active Threats</span>
                    <span className="stat-value critical-text">
                        {stats.activeThreats}
                        {stats.activeThreats > 0 && <span className="pulse-dot critical-bg"></span>}
                    </span>
                    <span className="stat-change negative">
                        <TrendingUp size={14} />
                        +3 from yesterday
                    </span>
                </div>
            </div>

            {/* Resolved Incidents */}
            <div className="stat-card resolved-card">
                <div className="stat-icon success-bg">
                    <CheckCircle2 size={24} />
                </div>
                <div className="stat-content">
                    <span className="stat-label">Resolved (30d)</span>
                    <span className="stat-value success-text">{stats.resolvedIncidents}</span>
                    <span className="stat-change positive">
                        <TrendingDown size={14} />
                        12% better than avg
                    </span>
                </div>
            </div>

            {/* Risk Level */}
            <div className="stat-card risk-card">
                <div className={`stat-icon ${riskColor}-bg`}>
                    <Activity size={24} />
                </div>
                <div className="stat-content">
                    <span className="stat-label">Risk Level</span>
                    <div className="risk-gauge">
                        <div className="risk-bar">
                            <div
                                className={`risk-fill ${riskColor}-bg`}
                                style={{ width: `${stats.riskLevel}%` }}
                            ></div>
                        </div>
                        <span className={`risk-value ${riskColor}-text`}>{stats.riskLevel}%</span>
                    </div>
                    <span className={`stat-status ${riskColor}-text`}>
                        {stats.systemHealth.charAt(0).toUpperCase() + stats.systemHealth.slice(1)}
                    </span>
                </div>
            </div>

            {/* 24h Alerts */}
            <div className="stat-card alerts-card">
                <div className="stat-icon accent-bg">
                    <Shield size={24} />
                </div>
                <div className="stat-content">
                    <span className="stat-label">24h Alerts</span>
                    <span className="stat-value">{stats.last24HourAlerts}</span>
                    <span className="stat-change neutral">
                        Average response: 2.3 min
                    </span>
                </div>
            </div>

            {/* Blocked IPs */}
            <div className="stat-card blocked-card">
                <div className="stat-icon warning-bg">
                    <Ban size={24} />
                </div>
                <div className="stat-content">
                    <span className="stat-label">Blocked IPs</span>
                    <span className="stat-value warning-text">{stats.blockedIPs}</span>
                    <span className="stat-change">
                        15 auto-blocked today
                    </span>
                </div>
            </div>

            {/* Locked Accounts */}
            <div className="stat-card locked-card">
                <div className="stat-icon medium-bg">
                    <Lock size={24} />
                </div>
                <div className="stat-content">
                    <span className="stat-label">Locked Accounts</span>
                    <span className="stat-value">{stats.lockedAccounts}</span>
                    <span className="stat-change">
                        3 pending review
                    </span>
                </div>
            </div>
        </div>
    );
}

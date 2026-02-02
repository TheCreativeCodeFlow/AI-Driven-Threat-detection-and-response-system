import type {
    ThreatAlert,
    TimelineEvent,
    AIDecision,
    BlockedIP,
    LockedAccount,
    SecurityStats,
    TrendData,
    LogEntry
} from '../types/types';

// Helper to generate dates
const hoursAgo = (hours: number) => new Date(Date.now() - hours * 60 * 60 * 1000);
const daysAgo = (days: number) => new Date(Date.now() - days * 24 * 60 * 60 * 1000);

// Security Statistics
export const securityStats: SecurityStats = {
    activeThreats: 7,
    resolvedIncidents: 156,
    riskLevel: 68,
    systemHealth: 'degraded',
    last24HourAlerts: 23,
    blockedIPs: 45,
    lockedAccounts: 12
};

// Threat Alerts
export const threatAlerts: ThreatAlert[] = [
    {
        id: 'TA-001',
        type: 'Brute Force Attack',
        description: 'Multiple failed login attempts detected from single IP',
        severity: 'critical',
        status: 'active',
        affectedUser: 'admin@company.com',
        sourceIP: '192.168.45.123',
        timestamp: hoursAgo(0.5),
        riskScore: 95,
        details: '847 failed attempts in 15 minutes targeting admin account'
    },
    {
        id: 'TA-002',
        type: 'API Rate Abuse',
        description: 'Unusual API request volume from authenticated user',
        severity: 'high',
        status: 'investigating',
        affectedUser: 'api_user_382',
        sourceIP: '10.0.32.88',
        timestamp: hoursAgo(1.2),
        riskScore: 82,
        details: '15,000 requests in 5 minutes, normal baseline is 500'
    },
    {
        id: 'TA-003',
        type: 'SQL Injection Attempt',
        description: 'Malicious SQL patterns detected in request parameters',
        severity: 'critical',
        status: 'mitigated',
        sourceIP: '45.33.128.91',
        timestamp: hoursAgo(2.5),
        riskScore: 98,
        details: 'Attempted UNION-based injection on /api/users endpoint'
    },
    {
        id: 'TA-004',
        type: 'Credential Stuffing',
        description: 'Bot-like login pattern with multiple usernames',
        severity: 'high',
        status: 'active',
        sourceIP: '103.21.244.15',
        timestamp: hoursAgo(3),
        riskScore: 78,
        details: '2,300 unique username attempts from single source'
    },
    {
        id: 'TA-005',
        type: 'Session Hijacking',
        description: 'Geographic anomaly detected for active session',
        severity: 'medium',
        status: 'investigating',
        affectedUser: 'john.doe@company.com',
        sourceIP: '89.234.12.67',
        timestamp: hoursAgo(4),
        riskScore: 65,
        details: 'Session accessed from Russia, user typically logs in from USA'
    },
    {
        id: 'TA-006',
        type: 'XSS Attempt',
        description: 'Cross-site scripting payload in form submission',
        severity: 'medium',
        status: 'mitigated',
        sourceIP: '178.62.44.231',
        timestamp: hoursAgo(5),
        riskScore: 55,
        details: 'Script tag injection attempt in comment field'
    },
    {
        id: 'TA-007',
        type: 'Unusual Data Access',
        description: 'User accessing abnormal volume of sensitive records',
        severity: 'low',
        status: 'investigating',
        affectedUser: 'sarah.wilson@company.com',
        sourceIP: '10.0.1.45',
        timestamp: hoursAgo(6),
        riskScore: 42,
        details: 'Downloaded 500+ customer records in 10 minutes'
    }
];

// Timeline Events
export const timelineEvents: TimelineEvent[] = [
    {
        id: 'TE-001',
        timestamp: hoursAgo(0.5),
        type: 'detection',
        title: 'Brute Force Attack Detected',
        description: 'AI detected abnormal login failure pattern from IP 192.168.45.123',
        severity: 'critical',
        relatedThreatId: 'TA-001'
    },
    {
        id: 'TE-002',
        timestamp: hoursAgo(0.45),
        type: 'escalation',
        title: 'Threat Escalated to Critical',
        description: 'Attack rate increased, triggering automatic escalation',
        severity: 'critical',
        relatedThreatId: 'TA-001'
    },
    {
        id: 'TE-003',
        timestamp: hoursAgo(0.4),
        type: 'action',
        title: 'IP Temporarily Blocked',
        description: 'AI blocked source IP for 24 hours pending review',
        severity: 'critical',
        relatedThreatId: 'TA-001'
    },
    {
        id: 'TE-004',
        timestamp: hoursAgo(1.2),
        type: 'detection',
        title: 'API Abuse Pattern Identified',
        description: 'Anomaly detection flagged unusual API usage volume',
        severity: 'high',
        relatedThreatId: 'TA-002'
    },
    {
        id: 'TE-005',
        timestamp: hoursAgo(1.1),
        type: 'action',
        title: 'Rate Limiting Applied',
        description: 'Automatic rate limiting enforced on affected API key',
        severity: 'high',
        relatedThreatId: 'TA-002'
    },
    {
        id: 'TE-006',
        timestamp: hoursAgo(2.5),
        type: 'detection',
        title: 'SQL Injection Blocked',
        description: 'WAF detected and blocked malicious SQL patterns',
        severity: 'critical',
        relatedThreatId: 'TA-003'
    },
    {
        id: 'TE-007',
        timestamp: hoursAgo(2.4),
        type: 'action',
        title: 'IP Permanently Blacklisted',
        description: 'Source IP added to permanent blocklist',
        severity: 'critical',
        relatedThreatId: 'TA-003'
    },
    {
        id: 'TE-008',
        timestamp: hoursAgo(2.3),
        type: 'resolution',
        title: 'Threat Mitigated',
        description: 'SQL injection attack successfully neutralized',
        severity: 'critical',
        relatedThreatId: 'TA-003'
    }
];

// AI Decisions
export const aiDecisions: AIDecision[] = [
    {
        id: 'AD-001',
        action: 'block_ip',
        reason: 'Detected brute force attack pattern: 847 failed login attempts within 15 minutes exceeds threshold of 10 attempts. IP behavior matches known attack signatures.',
        triggerData: {
            metric: 'Failed Login Attempts',
            value: 847,
            threshold: 10
        },
        confidence: 0.97,
        timestamp: hoursAgo(0.4),
        status: 'auto-applied',
        affectedEntity: '192.168.45.123',
        entityType: 'ip'
    },
    {
        id: 'AD-002',
        action: 'rate_limit',
        reason: 'API request volume 30x above baseline. User agent patterns suggest automated tooling. Rate limiting prevents potential DoS while allowing investigation.',
        triggerData: {
            metric: 'API Requests/Min',
            value: 3000,
            threshold: 100
        },
        confidence: 0.89,
        timestamp: hoursAgo(1.1),
        status: 'auto-applied',
        affectedEntity: 'api_user_382',
        entityType: 'user'
    },
    {
        id: 'AD-003',
        action: 'lock_account',
        reason: 'Geographic anomaly detected. Session accessed from location 8,500km from usual login location within 30 minutes. Possible credential compromise.',
        triggerData: {
            metric: 'Geographic Distance (km)',
            value: 8500,
            threshold: 500
        },
        confidence: 0.76,
        timestamp: hoursAgo(4),
        status: 'pending',
        affectedEntity: 'john.doe@company.com',
        entityType: 'user'
    },
    {
        id: 'AD-004',
        action: 'alert',
        reason: 'Unusual data access pattern. User downloaded 500+ sensitive records. While authorized, volume exceeds typical usage by 10x.',
        triggerData: {
            metric: 'Records Accessed',
            value: 500,
            threshold: 50
        },
        confidence: 0.68,
        timestamp: hoursAgo(6),
        status: 'pending',
        affectedEntity: 'sarah.wilson@company.com',
        entityType: 'user'
    },
    {
        id: 'AD-005',
        action: 'block_ip',
        reason: 'Credential stuffing attack identified. 2,300 unique username attempts with common password combinations. Bot behavior confirmed.',
        triggerData: {
            metric: 'Unique Username Attempts',
            value: 2300,
            threshold: 20
        },
        confidence: 0.94,
        timestamp: hoursAgo(3),
        status: 'approved',
        affectedEntity: '103.21.244.15',
        entityType: 'ip'
    }
];

// Blocked IPs
export const blockedIPs: BlockedIP[] = [
    { ip: '192.168.45.123', blockedAt: hoursAgo(0.4), reason: 'Brute force attack', expiresAt: hoursAgo(-23.6), autoBlocked: true },
    { ip: '45.33.128.91', blockedAt: hoursAgo(2.4), reason: 'SQL injection attempt', autoBlocked: true },
    { ip: '103.21.244.15', blockedAt: hoursAgo(3), reason: 'Credential stuffing', expiresAt: hoursAgo(-21), autoBlocked: true },
    { ip: '178.62.44.231', blockedAt: hoursAgo(5), reason: 'XSS attack attempt', expiresAt: hoursAgo(-19), autoBlocked: true },
    { ip: '89.234.12.67', blockedAt: hoursAgo(8), reason: 'Suspicious activity', expiresAt: hoursAgo(-16), autoBlocked: false }
];

// Locked Accounts
export const lockedAccounts: LockedAccount[] = [
    { userId: 'U-001', email: 'admin@company.com', lockedAt: hoursAgo(0.5), reason: 'Target of brute force attack', failedAttempts: 847, autoLocked: true },
    { userId: 'U-002', email: 'john.doe@company.com', lockedAt: hoursAgo(4), reason: 'Geographic anomaly', failedAttempts: 0, autoLocked: false },
    { userId: 'U-003', email: 'test.user@company.com', lockedAt: daysAgo(1), reason: 'Multiple failed logins', failedAttempts: 15, autoLocked: true }
];

// Trend Data for Charts
export const trendData: TrendData = {
    loginFailures: [
        { name: '00:00', value: 12 },
        { name: '02:00', value: 8 },
        { name: '04:00', value: 5 },
        { name: '06:00', value: 15 },
        { name: '08:00', value: 45 },
        { name: '10:00', value: 120 },
        { name: '12:00', value: 850 },
        { name: '14:00', value: 320 },
        { name: '16:00', value: 78 },
        { name: '18:00', value: 42 },
        { name: '20:00', value: 28 },
        { name: '22:00', value: 18 }
    ],
    apiRequests: [
        { name: '00:00', value: 1200 },
        { name: '02:00', value: 800 },
        { name: '04:00', value: 600 },
        { name: '06:00', value: 1500 },
        { name: '08:00', value: 4500 },
        { name: '10:00', value: 8200 },
        { name: '12:00', value: 15000 },
        { name: '14:00', value: 12000 },
        { name: '16:00', value: 9500 },
        { name: '18:00', value: 6200 },
        { name: '20:00', value: 3800 },
        { name: '22:00', value: 2100 }
    ],
    anomalies: [
        { name: 'Mon', value: 3 },
        { name: 'Tue', value: 5 },
        { name: 'Wed', value: 2 },
        { name: 'Thu', value: 8 },
        { name: 'Fri', value: 12 },
        { name: 'Sat', value: 4 },
        { name: 'Sun', value: 2 }
    ],
    threatsByType: [
        { name: 'Brute Force', value: 35 },
        { name: 'SQL Injection', value: 12 },
        { name: 'XSS', value: 18 },
        { name: 'API Abuse', value: 25 },
        { name: 'DDoS', value: 8 },
        { name: 'Other', value: 15 }
    ]
};

// Log Entries
export const logEntries: LogEntry[] = [
    { id: 'L-001', timestamp: hoursAgo(0.4), action: 'IP Blocked', actor: 'AI System', target: '192.168.45.123', result: 'success', details: 'Automatic block due to brute force detection' },
    { id: 'L-002', timestamp: hoursAgo(1.1), action: 'Rate Limit Applied', actor: 'AI System', target: 'api_user_382', result: 'success', details: 'Applied 100 req/min limit' },
    { id: 'L-003', timestamp: hoursAgo(2.4), action: 'IP Blacklisted', actor: 'AI System', target: '45.33.128.91', result: 'success', details: 'Permanent block for SQL injection' },
    { id: 'L-004', timestamp: hoursAgo(3), action: 'Decision Approved', actor: 'admin@company.com', target: 'AD-005', result: 'success', details: 'Approved IP block for credential stuffing' },
    { id: 'L-005', timestamp: hoursAgo(4), action: 'Alert Generated', actor: 'AI System', target: 'john.doe@company.com', result: 'success', details: 'Geographic anomaly alert' },
    { id: 'L-006', timestamp: hoursAgo(5), action: 'XSS Blocked', actor: 'WAF', target: '178.62.44.231', result: 'success', details: 'Script injection prevented' },
    { id: 'L-007', timestamp: hoursAgo(6), action: 'Admin Login', actor: 'admin@company.com', target: 'Dashboard', result: 'success', details: 'Login from 10.0.0.1' },
    { id: 'L-008', timestamp: hoursAgo(8), action: 'Config Changed', actor: 'admin@company.com', target: 'AI Settings', result: 'success', details: 'Updated anomaly threshold' },
    { id: 'L-009', timestamp: hoursAgo(12), action: 'Report Generated', actor: 'System', target: 'Weekly Report', result: 'success', details: 'Automated security report' },
    { id: 'L-010', timestamp: daysAgo(1), action: 'Account Unlocked', actor: 'admin@company.com', target: 'user@company.com', result: 'success', details: 'Manual unlock after verification' }
];

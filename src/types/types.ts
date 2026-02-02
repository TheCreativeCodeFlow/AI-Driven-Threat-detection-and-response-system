// Type definitions for the AI-Driven Threat Detection Dashboard

export type SeverityLevel = 'critical' | 'high' | 'medium' | 'low';
export type ThreatStatus = 'active' | 'mitigated' | 'investigating' | 'resolved';
export type ActionType = 'block_ip' | 'lock_account' | 'rate_limit' | 'alert' | 'quarantine';

export interface ThreatAlert {
  id: string;
  type: string;
  description: string;
  severity: SeverityLevel;
  status: ThreatStatus;
  affectedUser?: string;
  sourceIP: string;
  timestamp: Date;
  riskScore: number;
  details: string;
}

export interface TimelineEvent {
  id: string;
  timestamp: Date;
  type: 'detection' | 'escalation' | 'action' | 'resolution';
  title: string;
  description: string;
  severity: SeverityLevel;
  relatedThreatId?: string;
}

export interface AIDecision {
  id: string;
  action: ActionType;
  reason: string;
  triggerData: {
    metric: string;
    value: number;
    threshold: number;
  };
  confidence: number;
  timestamp: Date;
  status: 'pending' | 'approved' | 'rejected' | 'auto-applied';
  affectedEntity: string;
  entityType: 'user' | 'ip' | 'endpoint';
}

export interface BlockedIP {
  ip: string;
  blockedAt: Date;
  reason: string;
  expiresAt?: Date;
  autoBlocked: boolean;
}

export interface LockedAccount {
  userId: string;
  email: string;
  lockedAt: Date;
  reason: string;
  failedAttempts: number;
  autoLocked: boolean;
}

export interface SecurityStats {
  activeThreats: number;
  resolvedIncidents: number;
  riskLevel: number; // 0-100
  systemHealth: 'healthy' | 'degraded' | 'critical';
  last24HourAlerts: number;
  blockedIPs: number;
  lockedAccounts: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  timestamp?: Date;
}

export interface TrendData {
  loginFailures: ChartDataPoint[];
  apiRequests: ChartDataPoint[];
  anomalies: ChartDataPoint[];
  threatsByType: ChartDataPoint[];
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  action: string;
  actor: string;
  target: string;
  result: 'success' | 'failure';
  details: string;
}

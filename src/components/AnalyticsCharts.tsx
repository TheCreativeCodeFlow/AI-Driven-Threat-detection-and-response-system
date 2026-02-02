import {
    LineChart,
    Line,
    AreaChart,
    Area,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import type { TrendData } from '../types/types';
import './AnalyticsCharts.css';

interface AnalyticsChartsProps {
    data: TrendData;
}

const COLORS = ['#ff4757', '#ff6b35', '#ffc107', '#6366f1', '#17a2b8', '#00d9a5'];

export default function AnalyticsCharts({ data }: AnalyticsChartsProps) {
    return (
        <div className="analytics-charts">
            {/* Login Failures Chart */}
            <div className="chart-card">
                <div className="chart-header">
                    <h4>Login Failures (24h)</h4>
                    <span className="chart-badge critical">847 peak</span>
                </div>
                <div className="chart-body">
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={data.loginFailures}>
                            <defs>
                                <linearGradient id="loginGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ff4757" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#ff4757" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                            <XAxis
                                dataKey="name"
                                stroke="#64748b"
                                fontSize={11}
                                tickLine={false}
                            />
                            <YAxis
                                stroke="#64748b"
                                fontSize={11}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: '#1a1f2e',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#ff4757"
                                fill="url(#loginGradient)"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* API Requests Chart */}
            <div className="chart-card">
                <div className="chart-header">
                    <h4>API Request Volume (24h)</h4>
                    <span className="chart-badge high">15K peak</span>
                </div>
                <div className="chart-body">
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data.apiRequests}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                            <XAxis
                                dataKey="name"
                                stroke="#64748b"
                                fontSize={11}
                                tickLine={false}
                            />
                            <YAxis
                                stroke="#64748b"
                                fontSize={11}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: '#1a1f2e',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px'
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#6366f1"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 6, fill: '#6366f1' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Anomalies by Day */}
            <div className="chart-card">
                <div className="chart-header">
                    <h4>Anomalies (7 days)</h4>
                    <span className="chart-badge medium">36 total</span>
                </div>
                <div className="chart-body">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={data.anomalies}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                            <XAxis
                                dataKey="name"
                                stroke="#64748b"
                                fontSize={11}
                                tickLine={false}
                            />
                            <YAxis
                                stroke="#64748b"
                                fontSize={11}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: '#1a1f2e',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px'
                                }}
                            />
                            <Bar
                                dataKey="value"
                                fill="#ffc107"
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Threats by Type */}
            <div className="chart-card">
                <div className="chart-header">
                    <h4>Threats by Type (30d)</h4>
                </div>
                <div className="chart-body pie-chart">
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={data.threatsByType}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="value"
                            >
                                {data.threatsByType.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    background: '#1a1f2e',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px'
                                }}
                            />
                            <Legend
                                verticalAlign="middle"
                                align="right"
                                layout="vertical"
                                wrapperStyle={{ fontSize: '11px' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

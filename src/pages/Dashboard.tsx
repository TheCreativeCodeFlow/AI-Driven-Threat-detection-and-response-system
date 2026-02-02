import SecurityStats from '../components/SecurityStats';
import ThreatAlerts from '../components/ThreatAlerts';
import ThreatTimeline from '../components/ThreatTimeline';
import AnalyticsCharts from '../components/AnalyticsCharts';
import ExplainableAI from '../components/ExplainableAI';
import {
    securityStats,
    threatAlerts,
    timelineEvents,
    aiDecisions,
    trendData
} from '../data/mockData';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard">
            {/* Security Overview */}
            <section className="dashboard-section">
                <SecurityStats stats={securityStats} />
            </section>

            {/* Main Content Grid */}
            <div className="dashboard-grid">
                {/* Left Column */}
                <div className="dashboard-column main-column">
                    {/* Threat Alerts */}
                    <section className="dashboard-section">
                        <ThreatAlerts alerts={threatAlerts} limit={5} />
                    </section>

                    {/* Analytics Charts */}
                    <section className="dashboard-section">
                        <h2 className="section-title">Security Analytics</h2>
                        <AnalyticsCharts data={trendData} />
                    </section>
                </div>

                {/* Right Column */}
                <div className="dashboard-column side-column">
                    {/* Timeline */}
                    <section className="dashboard-section">
                        <ThreatTimeline events={timelineEvents} limit={6} />
                    </section>

                    {/* AI Decisions */}
                    <section className="dashboard-section">
                        <ExplainableAI decisions={aiDecisions.slice(0, 3)} />
                    </section>
                </div>
            </div>
        </div>
    );
}

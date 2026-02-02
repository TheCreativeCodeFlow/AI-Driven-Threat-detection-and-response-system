import AnalyticsCharts from '../components/AnalyticsCharts';
import { trendData } from '../data/mockData';
import './Threats.css';

export default function Analytics() {
    return (
        <div className="analytics-page">
            <div className="page-header">
                <h2>Security Analytics</h2>
                <p>Visualize security trends and patterns</p>
            </div>

            <AnalyticsCharts data={trendData} />
        </div>
    );
}

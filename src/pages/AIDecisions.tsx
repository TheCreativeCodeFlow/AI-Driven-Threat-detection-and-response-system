import ExplainableAI from '../components/ExplainableAI';
import { aiDecisions } from '../data/mockData';
import './Threats.css';

export default function AIDecisions() {
    return (
        <div className="ai-decisions-page">
            <div className="page-header">
                <h2>AI Decision History</h2>
                <p>Review and manage automated security decisions</p>
            </div>

            <ExplainableAI decisions={aiDecisions} />
        </div>
    );
}

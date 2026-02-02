import {
    AlertCircle,
    TrendingUp,
    Zap,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import type { TimelineEvent } from '../types/types';
import './ThreatTimeline.css';

interface ThreatTimelineProps {
    events: TimelineEvent[];
    limit?: number;
}

const eventIcons = {
    detection: AlertCircle,
    escalation: TrendingUp,
    action: Zap,
    resolution: CheckCircle2
};

const eventLabels = {
    detection: 'Detection',
    escalation: 'Escalation',
    action: 'Action Taken',
    resolution: 'Resolved'
};

export default function ThreatTimeline({ events, limit }: ThreatTimelineProps) {
    const displayEvents = limit ? events.slice(0, limit) : events;

    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);

        if (minutes < 60) return `${minutes} min ago`;
        if (hours < 24) return `${hours}h ago`;
        return date.toLocaleDateString();
    };

    return (
        <div className="threat-timeline">
            <div className="timeline-header">
                <h3>Threat Timeline</h3>
                <button className="btn btn-ghost">
                    View All <ArrowRight size={14} />
                </button>
            </div>

            <div className="timeline-container">
                {displayEvents.map((event, index) => {
                    const Icon = eventIcons[event.type];

                    return (
                        <div
                            key={event.id}
                            className={`timeline-event ${event.severity}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="timeline-line">
                                <div className={`timeline-dot ${event.type}`}>
                                    <Icon size={14} />
                                </div>
                                {index < displayEvents.length - 1 && (
                                    <div className="timeline-connector"></div>
                                )}
                            </div>

                            <div className="event-content">
                                <div className="event-header">
                                    <span className={`event-type ${event.type}`}>
                                        {eventLabels[event.type]}
                                    </span>
                                    <span className="event-time">{formatTime(event.timestamp)}</span>
                                </div>
                                <h4 className="event-title">{event.title}</h4>
                                <p className="event-description">{event.description}</p>
                                {event.relatedThreatId && (
                                    <span className="threat-link">
                                        Related: {event.relatedThreatId}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

import { useState } from 'react';
import {
    Shield,
    Bell,
    Lock,
    Sliders,
    Save
} from 'lucide-react';
import './Settings.css';

export default function Settings() {
    const [settings, setSettings] = useState({
        autoBlockEnabled: true,
        autoLockEnabled: true,
        riskThreshold: 70,
        alertNotifications: true,
        emailReports: false,
        slackIntegration: true
    });

    return (
        <div className="settings-page">
            <div className="page-header">
                <h2>Settings</h2>
                <p>Configure AI behavior and system preferences</p>
            </div>

            <div className="settings-grid">
                {/* AI Configuration */}
                <div className="settings-card">
                    <div className="settings-card-header">
                        <Shield size={20} />
                        <h3>AI Configuration</h3>
                    </div>

                    <div className="settings-group">
                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Auto Block Suspicious IPs</label>
                                <span>Automatically block IPs with high threat scores</span>
                            </div>
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.autoBlockEnabled}
                                    onChange={(e) => setSettings({ ...settings, autoBlockEnabled: e.target.checked })}
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Auto Lock Compromised Accounts</label>
                                <span>Lock accounts showing suspicious activity</span>
                            </div>
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.autoLockEnabled}
                                    onChange={(e) => setSettings({ ...settings, autoLockEnabled: e.target.checked })}
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Risk Threshold</label>
                                <span>Minimum score to trigger automatic actions</span>
                            </div>
                            <div className="slider-container">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={settings.riskThreshold}
                                    onChange={(e) => setSettings({ ...settings, riskThreshold: parseInt(e.target.value) })}
                                />
                                <span className="slider-value">{settings.riskThreshold}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="settings-card">
                    <div className="settings-card-header">
                        <Bell size={20} />
                        <h3>Notifications</h3>
                    </div>

                    <div className="settings-group">
                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Alert Notifications</label>
                                <span>Show browser notifications for new threats</span>
                            </div>
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.alertNotifications}
                                    onChange={(e) => setSettings({ ...settings, alertNotifications: e.target.checked })}
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Email Reports</label>
                                <span>Receive daily security summary via email</span>
                            </div>
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.emailReports}
                                    onChange={(e) => setSettings({ ...settings, emailReports: e.target.checked })}
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Slack Integration</label>
                                <span>Post critical alerts to Slack channel</span>
                            </div>
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.slackIntegration}
                                    onChange={(e) => setSettings({ ...settings, slackIntegration: e.target.checked })}
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="settings-card">
                    <div className="settings-card-header">
                        <Lock size={20} />
                        <h3>Security</h3>
                    </div>

                    <div className="settings-group">
                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Two-Factor Authentication</label>
                                <span>Require 2FA for all admin actions</span>
                            </div>
                            <button className="btn btn-ghost">Configure</button>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Session Timeout</label>
                                <span>Auto-logout after inactivity</span>
                            </div>
                            <select className="input" style={{ width: 'auto' }}>
                                <option value="15">15 minutes</option>
                                <option value="30">30 minutes</option>
                                <option value="60">1 hour</option>
                                <option value="240">4 hours</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Advanced */}
                <div className="settings-card">
                    <div className="settings-card-header">
                        <Sliders size={20} />
                        <h3>Advanced</h3>
                    </div>

                    <div className="settings-group">
                        <div className="setting-item">
                            <div className="setting-info">
                                <label>API Rate Limiting</label>
                                <span>Configure default rate limit thresholds</span>
                            </div>
                            <button className="btn btn-ghost">Configure</button>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <label>Export Configuration</label>
                                <span>Download current settings as JSON</span>
                            </div>
                            <button className="btn btn-ghost">Export</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="settings-footer">
                <button className="btn btn-primary">
                    <Save size={16} />
                    Save Changes
                </button>
            </div>
        </div>
    );
}

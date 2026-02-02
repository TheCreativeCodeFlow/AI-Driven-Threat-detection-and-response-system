import type { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Shield,
    AlertTriangle,
    BarChart3,
    Brain,
    Settings,
    FileText,
    Users,
    Lock,
    Bell,
    Search,
    ChevronLeft,
    Menu
} from 'lucide-react';
import { useState } from 'react';
import './Layout.css';

interface LayoutProps {
    children: ReactNode;
}

const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/threats', icon: AlertTriangle, label: 'Threats' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/ai-decisions', icon: Brain, label: 'AI Decisions' },
    { path: '/ip-management', icon: Shield, label: 'IP Management' },
    { path: '/accounts', icon: Users, label: 'Accounts' },
    { path: '/logs', icon: FileText, label: 'Logs' },
    { path: '/settings', icon: Settings, label: 'Settings' }
];

export default function Layout({ children }: LayoutProps) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [notificationCount] = useState(7);
    const location = useLocation();

    const getPageTitle = () => {
        const currentItem = navItems.find(item => item.path === location.pathname);
        return currentItem?.label || 'Dashboard';
    };

    return (
        <div className={`layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <Shield className="logo-icon" />
                        {!sidebarCollapsed && <span className="logo-text">ThreatGuard</span>}
                    </div>
                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    >
                        {sidebarCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <item.icon size={20} />
                            {!sidebarCollapsed && <span>{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-info">
                        <div className="avatar">AD</div>
                        {!sidebarCollapsed && (
                            <div className="user-details">
                                <span className="user-name">Admin User</span>
                                <span className="user-role">System Administrator</span>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="main-wrapper">
                {/* Header */}
                <header className="header">
                    <div className="header-left">
                        <h1 className="page-title">{getPageTitle()}</h1>
                    </div>

                    <div className="header-center">
                        <div className="search-wrapper">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search threats, IPs, users..."
                            />
                        </div>
                    </div>

                    <div className="header-right">
                        <button className="notification-btn">
                            <Bell size={20} />
                            {notificationCount > 0 && (
                                <span className="notification-badge">{notificationCount}</span>
                            )}
                        </button>
                        <div className="status-indicator">
                            <Lock size={16} />
                            <span>System Secured</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
}

# 🛡️ ThreatGuard - AI-Driven Threat Detection Admin Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://ai-driven-threat-detection-and-resp.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)

A modern, real-time security monitoring dashboard for AI-driven backend threat detection systems. Built with React, TypeScript, and a sleek dark cybersecurity-themed UI.

## 🌐 Live Demo

**👉 [View Live Dashboard](https://ai-driven-threat-detection-and-resp.vercel.app/)**

---

## ✨ Features

### 📊 Security Overview
- Real-time stats cards (Active Threats, Resolved Incidents, Risk Level)
- Animated threat indicators with severity-based coloring
- System health monitoring

### 🚨 Live Threat Alerts
- Color-coded severity badges (Critical, High, Medium, Low)
- Expandable alert cards with detailed information
- Quick action buttons (Block IP, Investigate, Mark Resolved)

### 📈 Analytics & Charts
- Login failure trends (Area Chart)
- API request volume spikes (Line Chart)
- Anomaly frequency by day (Bar Chart)
- Threat distribution by type (Pie Chart)

### 🤖 Explainable AI Panel
- Transparent AI decision reasoning
- Confidence scores with visual indicators
- Trigger data (metric, value, threshold)
- Manual override controls (Approve/Reject/Modify)

### 🔐 Admin Controls
- IP Block Manager with search & filters
- Account lock/unlock management
- Configurable AI settings (risk thresholds, auto-actions)

### 📋 Activity Logs
- Searchable, filterable log table
- Export functionality
- Detailed action history

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev/) | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vite.dev/) | Build Tool & Dev Server |
| [React Router](https://reactrouter.com/) | Navigation |
| [Recharts](https://recharts.org/) | Data Visualization |
| [Lucide React](https://lucide.dev/) | Icons |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TheCreativeCodeFlow/AI-Driven-Threat-detection-and-response-system.git

# Navigate to project directory
cd AI-Driven-Threat-detection-and-response-system

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx       # Main layout with sidebar
│   ├── SecurityStats.tsx
│   ├── ThreatAlerts.tsx
│   ├── ThreatTimeline.tsx
│   ├── AnalyticsCharts.tsx
│   ├── ExplainableAI.tsx
│   ├── IPBlockManager.tsx
│   ├── AccountManager.tsx
│   └── LogsPanel.tsx
├── pages/               # Route pages
│   ├── Dashboard.tsx
│   ├── Threats.tsx
│   ├── Analytics.tsx
│   ├── AIDecisions.tsx
│   ├── IPManagement.tsx
│   ├── Accounts.tsx
│   ├── Logs.tsx
│   └── Settings.tsx
├── data/                # Mock data
│   └── mockData.ts
├── types/               # TypeScript interfaces
│   └── types.ts
└── index.css            # Design system & global styles
```

---

## 🎨 Design

- **Dark cybersecurity theme** with glassmorphism effects
- **Inter font** for clean, modern typography
- **CSS custom properties** for consistent theming
- **Smooth animations** using CSS keyframes
- **Fully responsive** design for all screen sizes

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/TheCreativeCodeFlow/AI-Driven-Threat-detection-and-response-system/issues).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/TheCreativeCodeFlow">TheCreativeCodeFlow</a>
</p>

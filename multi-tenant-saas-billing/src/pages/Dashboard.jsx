import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import UsageCard from "../components/UsageCard";

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">

      <div
        className={`mobile-sidebar ${
          sidebarOpen ? "open" : ""
        }`}
      >
        <Sidebar />
      </div>

      <div className="desktop-sidebar">
        <Sidebar />
      </div>

      <main className="dashboard-content">

        <Navbar
          onMenuClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        <div className="dashboard-page">

          {/* HEADER */}

          <section className="page-header">

            <div>

              <span className="page-date">
                Monday, September 14, 2026
              </span>

              <h2>
                Good morning, Alex 👋
              </h2>

              <p>
                Here's what's happening with your
                SaaS business today.
              </p>

            </div>

            <button className="date-button">
              September 2026
              <span>⌄</span>
            </button>

          </section>


          {/* STAT CARDS */}

          <section className="stats-grid">

            <StatCard
              title="Monthly Revenue"
              value="₹18,42,500"
              change="12.4%"
              description="vs last month"
              icon="₹"
            />

            <StatCard
              title="Active Tenants"
              value="1,248"
              change="8.2%"
              description="vs last month"
              icon="◎"
            />

            <StatCard
              title="API Requests"
              value="48.2M"
              change="18.6%"
              description="vs last month"
              icon="⌁"
            />

            <StatCard
              title="Outstanding"
              value="₹2,84,320"
              change="4.2%"
              description="vs last month"
              icon="◫"
              positive={false}
            />

          </section>


          {/* USAGE */}

          <section className="dashboard-section">

            <div className="section-title-row">

              <div>
                <h3>Usage overview</h3>

                <p>
                  Monitor your organization's resource usage.
                </p>
              </div>

              <button className="view-button">
                View details →
              </button>

            </div>

            <div className="usage-grid">

              <UsageCard
                title="API Requests"
                used="72.4K"
                limit="100K"
                unit="requests"
                percentage={72}
              />

              <UsageCard
                title="Storage"
                used="18.4"
                limit="50"
                unit="GB"
                percentage={37}
              />

              <UsageCard
                title="Active Users"
                used="842"
                limit="1,000"
                unit="users"
                percentage={84}
              />

            </div>

          </section>


          {/* CHART */}

          <section className="dashboard-section">

            <div className="section-title-row">

              <div>

                <h3>Revenue analytics</h3>

                <p>
                  Monthly recurring revenue over time.
                </p>

              </div>

              <div className="chart-filter">

                <button className="filter-active">
                  Revenue
                </button>

                <button>
                  Usage
                </button>

                <button>
                  Tenants
                </button>

              </div>

            </div>

            <div className="revenue-card">

              <div className="revenue-header">

                <div>
                  <span>Total revenue</span>
                  <strong>₹18,42,500</strong>
                </div>

                <span className="revenue-growth">
                  ↑ 12.4%
                </span>

              </div>

              <div className="revenue-chart">

                <div className="chart-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <svg
                  viewBox="0 0 900 260"
                  preserveAspectRatio="none"
                  className="chart-svg"
                >

                  <polyline
                    points="
                    0,220
                    80,205
                    150,215
                    230,175
                    300,185
                    380,140
                    450,155
                    530,115
                    610,125
                    690,80
                    770,95
                    850,48
                    900,60
                    "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                </svg>

                <div className="chart-months">

                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>

                </div>

              </div>

            </div>

          </section>


          {/* RECENT ACTIVITY */}

          <section className="dashboard-section">

            <div className="section-title-row">

              <div>

                <h3>Recent activity</h3>

                <p>
                  Latest events across your organization.
                </p>

              </div>

              <button className="view-button">
                View all →
              </button>

            </div>

            <div className="activity-table">

              <div className="activity-row activity-header">

                <span>Tenant</span>
                <span>Event</span>
                <span>Usage</span>
                <span>Status</span>
                <span>Time</span>

              </div>

              <div className="activity-row">

                <span className="tenant-name">
                  Acme Corp
                </span>

                <span>
                  API request
                </span>

                <span>
                  2,840 requests
                </span>

                <span className="status-success">
                  Completed
                </span>

                <span>
                  2 min ago
                </span>

              </div>

              <div className="activity-row">

                <span className="tenant-name">
                  Nova Labs
                </span>

                <span>
                  Storage update
                </span>

                <span>
                  +2.4 GB
                </span>

                <span className="status-success">
                  Completed
                </span>

                <span>
                  8 min ago
                </span>

              </div>

              <div className="activity-row">

                <span className="tenant-name">
                  Bright AI
                </span>

                <span>
                  Subscription
                </span>

                <span>
                  Pro Plan
                </span>

                <span className="status-success">
                  Active
                </span>

                <span>
                  15 min ago
                </span>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
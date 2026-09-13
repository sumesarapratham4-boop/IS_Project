function DashboardPreview() {
  return (
    <section className="dashboard-section">

      <div className="dashboard-container">

        <div className="dashboard-window">

          <div className="window-header">

            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="window-url">
              app.saastrack.io/dashboard
            </div>

            <div></div>

          </div>

          <div className="dashboard-layout">

            <aside className="dashboard-sidebar">

              <div className="mini-brand">
                <div className="mini-logo">S</div>
                <span>SaaSTrack</span>
              </div>

              <div className="sidebar-section">

                <small>MAIN</small>

                <div className="side-item active">
                  <span>▦</span>
                  Dashboard
                </div>

                <div className="side-item">
                  <span>◫</span>
                  Usage
                </div>

                <div className="side-item">
                  <span>₹</span>
                  Billing
                </div>

                <div className="side-item">
                  <span>♢</span>
                  Subscription
                </div>

              </div>

              <div className="sidebar-section">

                <small>MANAGE</small>

                <div className="side-item">
                  <span>♙</span>
                  Team
                </div>

                <div className="side-item">
                  <span>⚙</span>
                  Settings
                </div>

              </div>

            </aside>

            <div className="dashboard-main">

              <div className="dashboard-top">

                <div>
                  <span className="dashboard-welcome">
                    Overview
                  </span>

                  <h3>
                    Good morning, Alex
                  </h3>
                </div>

                <button className="period-button">
                  September 2026
                  <span>⌄</span>
                </button>

              </div>

              <div className="stats-row">

                <div className="dashboard-stat">
                  <div className="stat-title">
                    <span>Monthly revenue</span>
                    <i>↗</i>
                  </div>

                  <strong>₹18,42,500</strong>

                  <div className="stat-change">
                    ↑ 12.4% <span>vs last month</span>
                  </div>
                </div>

                <div className="dashboard-stat">
                  <div className="stat-title">
                    <span>Active tenants</span>
                    <i>◎</i>
                  </div>

                  <strong>1,248</strong>

                  <div className="stat-change">
                    ↑ 8.2% <span>vs last month</span>
                  </div>
                </div>

                <div className="dashboard-stat">
                  <div className="stat-title">
                    <span>API requests</span>
                    <i>⌁</i>
                  </div>

                  <strong>48.2M</strong>

                  <div className="stat-change">
                    ↑ 18.6% <span>vs last month</span>
                  </div>
                </div>

              </div>

              <div className="charts-row">

                <div className="chart-card">

                  <div className="chart-heading">
                    <div>
                      <span>Usage overview</span>
                      <strong>72.4K</strong>
                    </div>

                    <span className="chart-badge">
                      +18.2%
                    </span>
                  </div>

                  <div className="fake-chart">

                    <div className="chart-grid"></div>

                    <svg
                      viewBox="0 0 600 200"
                      preserveAspectRatio="none"
                    >
                      <polyline
                        points="
                        0,160
                        50,145
                        100,155
                        150,110
                        200,125
                        250,80
                        300,105
                        350,70
                        400,90
                        450,45
                        500,65
                        550,30
                        600,45
                        "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                    </svg>

                    <div className="chart-labels">
                      <span>Sep 01</span>
                      <span>Sep 05</span>
                      <span>Sep 09</span>
                      <span>Sep 13</span>
                    </div>

                  </div>

                </div>

                <div className="usage-card-preview">

                  <div className="chart-heading">
                    <span>Plan usage</span>
                    <button>•••</button>
                  </div>

                  <div className="usage-circle">

                    <div>
                      <strong>72%</strong>
                      <span>used</span>
                    </div>

                  </div>

                  <div className="usage-details">

                    <div>
                      <span>
                        <i></i>
                        API requests
                      </span>

                      <strong>72.4K / 100K</strong>
                    </div>

                    <div>
                      <span>
                        <i></i>
                        Storage
                      </span>

                      <strong>18.4 / 50 GB</strong>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;
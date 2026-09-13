import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "▦", path: "/dashboard" },
    { name: "Usage", icon: "◫", path: "/usage" },
    { name: "Billing", icon: "₹", path: "/billing" },
    { name: "Subscriptions", icon: "♢", path: "/subscriptions" },
    { name: "Invoices", icon: "▤", path: "/invoices" },
    { name: "Team", icon: "♙", path: "/team" },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-box">S</div>
        <span>SaaSTrack</span>
      </div>

      <div className="workspace">
        <div className="workspace-avatar">AC</div>

        <div>
          <strong>Acme Corp</strong>
          <span>Pro Plan</span>
        </div>

        <button>⌄</button>
      </div>

      <div className="sidebar-menu">

        <p className="menu-label">MAIN</p>

        {menuItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}

        <p className="menu-label manage-label">MANAGE</p>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-icon">♙</span>
          <span>Team</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-icon">⚙</span>
          <span>Settings</span>
        </NavLink>

      </div>

      <div className="sidebar-bottom">

        <div className="help-box">
          <div className="help-icon">?</div>

          <div>
            <strong>Need help?</strong>
            <span>Check our docs</span>
          </div>
        </div>

        <div className="sidebar-user">

          <div className="user-avatar">
            A
          </div>

          <div className="user-info">
            <strong>Alex Morgan</strong>
            <span>admin@acme.com</span>
          </div>

          <button>•••</button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;
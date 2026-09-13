function StatCard({
  title,
  value,
  change,
  description,
  icon,
  positive = true
}) {
  return (
    <div className="stat-card">

      <div className="stat-card-top">

        <div className="stat-title">
          {title}
        </div>

        <div className="stat-icon">
          {icon}
        </div>

      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-footer">

        <span
          className={
            positive
              ? "stat-positive"
              : "stat-negative"
          }
        >
          {positive ? "↑" : "↓"} {change}
        </span>

        <span className="stat-description">
          {description}
        </span>

      </div>

    </div>
  );
}

export default StatCard;

function UsageCard({
  title,
  used,
  limit,
  unit,
  percentage,
  colorClass = ""
}) {

  return (
    <div className={`usage-card ${colorClass}`}>

      <div className="usage-card-header">

        <div>

          <span className="usage-label">
            {title}
          </span>

          <div className="usage-number">
            {used}
            <span>
              / {limit} {unit}
            </span>
          </div>

        </div>

        <div className="usage-menu">
          •••
        </div>

      </div>

      <div className="usage-progress">

        <div
          className="usage-progress-bar"
          style={{
            width: `${percentage}%`
          }}
        ></div>

      </div>

      <div className="usage-bottom">

        <span>
          {percentage}% used
        </span>

        <span>
          {100 - percentage}% remaining
        </span>

      </div>

    </div>
  );
}

export default UsageCard;
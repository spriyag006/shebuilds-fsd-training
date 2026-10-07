function Dashboard({
  applications,
  interviews,
  jobs,
}) {
  const appliedCount = applications.length;

  const selectedCount = applications.filter(
    (application) =>
      application.status === "Selected"
  ).length;

  const interviewCount = interviews.length;

  return (
    <div className="page">
      <h1>Student Placement Dashboard</h1>

      <p>
        Welcome to your placement dashboard.
      </p>

      {/* Statistics */}
      <div className="stats">

        <div className="stat-card">
          <h2>{jobs.length}</h2>
          <p>Available Jobs</p>
        </div>

        <div className="stat-card">
          <h2>{appliedCount}</h2>
          <p>Applications</p>
        </div>

        <div className="stat-card">
          <h2>{interviewCount}</h2>
          <p>Interviews</p>
        </div>

        <div className="stat-card">
          <h2>{selectedCount}</h2>
          <p>Selected</p>
        </div>

      </div>

      {/* Upcoming Interviews */}
      <h2>Upcoming Interviews</h2>

      {interviews.length === 0 ? (
        <p>No upcoming interviews.</p>
      ) : (
        interviews.map((interview) => (
          <div
            className="card"
            key={interview.id}
          >
            <h3>{interview.company}</h3>

            <p>
              <strong>Role:</strong>{" "}
              {interview.role}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {interview.date}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {interview.time}
            </p>

            <p>
              <strong>Mode:</strong>{" "}
              {interview.mode}
            </p>
          </div>
        ))
      )}

      {/* Application Status */}
      <h2>Application Status</h2>

      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        applications.map((application) => (
          <div
            className="card"
            key={application.id}
          >
            <h3>{application.company}</h3>

            <p>
              <strong>Role:</strong>{" "}
              {application.role}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {application.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
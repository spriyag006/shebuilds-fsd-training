function Navbar({ setPage }) {
  return (
    <nav className="navbar">

      <h2>Placement Portal</h2>

      <div className="nav-buttons">

        <button
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          onClick={() => setPage("jobs")}
        >
          Jobs
        </button>

        <button
          onClick={() => setPage("applications")}
        >
          Applications
        </button>

        <button
          onClick={() => setPage("interviews")}
        >
          Interviews
        </button>

        <button
          onClick={() => setPage("profile")}
        >
          Profile
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
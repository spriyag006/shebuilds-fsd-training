import { useEffect, useState } from "react";

import Navbar from "./component/navbar";
import Jobs from "./component/jobs";
import Dashboard from "./component/dashboard";
import Profile from "./component/profile";

import "./App.css";

// DummyJSON APIs
const JOBS_API = "https://dummyjson.com/posts";
const APPLICATIONS_API = "https://dummyjson.com/todos";
const INTERVIEWS_API = "https://dummyjson.com/users";

// DummyJSON has no placement fields, so we build them from the ids
const COMPANIES = [
  "Zoho", "TCS", "Infosys", "Wipro", "Cognizant",
  "Freshworks", "HCL", "Accenture", "Capgemini", "Amazon",
];
const ROLES = [
  "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "ML Engineer", "Software Engineer",
];
const LOCATIONS = ["Chennai", "Bengaluru", "Hyderabad", "Pune", "Coimbatore"];
const PACKAGES = ["4 LPA", "6 LPA", "8 LPA", "10 LPA", "12 LPA"];
const TYPES = ["Full-time", "Internship", "Internship + PPO"];
const MODES = ["Online", "Offline", "Video Call"];
const TIMES = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM"];

const pick = (list, n) => list[n % list.length];

const makeDate = (id) => {
  const d = new Date();
  d.setDate(d.getDate() + 5 + (id % 25));
  return d.toISOString().slice(0, 10);
};

const normalizeJob = (post) => ({
  id: post.id,
  company: pick(COMPANIES, post.id),
  role: pick(ROLES, post.id + 1),
  location: pick(LOCATIONS, post.id + 2),
  package: pick(PACKAGES, post.id + 3),
  skills: (post.tags || []).join(", ") || "React, JavaScript",
  type: pick(TYPES, post.id),
  deadline: makeDate(post.id),
});

const normalizeApplication = (todo) => ({
  id: todo.id,
  company: pick(COMPANIES, todo.id),
  role: pick(ROLES, todo.id + 1),
  status: todo.completed ? "Selected" : "Applied",
});

const normalizeInterview = (user) => ({
  id: user.id,
  company: user.company?.name || pick(COMPANIES, user.id),
  role: user.company?.title || pick(ROLES, user.id),
  date: makeDate(user.id),
  time: pick(TIMES, user.id),
  mode: pick(MODES, user.id),
});

function App() {
  const [page, setPage] = useState("dashboard");

  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [interviews, setInterviews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    setError("");

    try {
      const [jobsRes, appsRes, interviewsRes] = await Promise.all([
        fetch(JOBS_API + "?limit=20"),
        fetch(APPLICATIONS_API + "?limit=8"),
        fetch(INTERVIEWS_API + "?limit=5"),
      ]);

      if (!jobsRes.ok || !appsRes.ok || !interviewsRes.ok) {
        throw new Error("API request failed");
      }

      const jobsData = await jobsRes.json();
      const appsData = await appsRes.json();
      const interviewsData = await interviewsRes.json();

      setJobs((jobsData.posts || []).map(normalizeJob));
      setApplications((appsData.todos || []).map(normalizeApplication));
      setInterviews((interviewsData.users || []).map(normalizeInterview));
    } catch (err) {
      console.error(err);
      setError("Unable to load placement data");
    }

    setLoading(false);
  };

  const renderPage = () => {
    if (page === "dashboard") {
      return (
        <Dashboard
          applications={applications}
          interviews={interviews}
          jobs={jobs}
        />
      );
    }

    if (page === "jobs") {
      return (
        <Jobs
          jobs={jobs}
          applications={applications}
          setApplications={setApplications}
        />
      );
    }

    if (page === "applications") {
      return (
        <div className="page">
          <h1>My Applications</h1>

          {applications.length === 0 ? (
            <p>No applications found.</p>
          ) : (
            applications.map((application) => (
              <div className="card" key={application.id}>
                <h3>{application.company}</h3>

                <p>
                  <strong>Role:</strong> {application.role}
                </p>

                <p>
                  <strong>Status:</strong> {application.status}
                </p>
              </div>
            ))
          )}
        </div>
      );
    }

    if (page === "interviews") {
      return (
        <div className="page">
          <h1>Interview Schedule</h1>

          {interviews.length === 0 ? (
            <p>No interviews scheduled.</p>
          ) : (
            interviews.map((interview) => (
              <div className="card" key={interview.id}>
                <h3>{interview.company}</h3>

                <p>
                  <strong>Role:</strong> {interview.role}
                </p>

                <p>
                  <strong>Date:</strong> {interview.date}
                </p>

                <p>
                  <strong>Time:</strong> {interview.time}
                </p>

                <p>
                  <strong>Mode:</strong> {interview.mode}
                </p>
              </div>
            ))
          )}
        </div>
      );
    }

   if (page === "profile") {
      return <Profile />;
    }

    return null;
  };

  return (
    <div>
      <Navbar setPage={setPage} />

      {loading && <p className="loading">Loading placement data...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && renderPage()}
    </div>
  );
}

export default App;
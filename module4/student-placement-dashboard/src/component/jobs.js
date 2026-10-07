import { useState } from "react";

function Jobs({ jobs, applications, setApplications }) {
  const [searchText, setSearchText] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const APPLICATIONS_API = "https://dummyjson.com/todos/add";

  // Search jobs (safe against missing fields)
  const search = searchText.toLowerCase();

  const filteredJobs = jobs.filter(
    (job) =>
      (job.company || "").toLowerCase().includes(search) ||
      (job.role || "").toLowerCase().includes(search) ||
      (job.location || "").toLowerCase().includes(search)
  );

  // Apply for job
  const applyForJob = async (job) => {
    try {
      const response = await fetch(APPLICATIONS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: `Applied to ${job.company} - ${job.role}`,
          completed: false,
          userId: 1,
        }),
      });

      if (response.ok) {
        // DummyJSON always returns the same id for new items, so make our own
        const newApplication = {
          id: Date.now(),
          company: job.company,
          role: job.role,
          status: "Applied",
        };

        // Immediately update applications
        setApplications([...applications, newApplication]);

        alert(`Application submitted for ${job.company}`);
      } else {
        alert("Unable to submit application");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="page">
      <h1>Placement Opportunities</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search company, role or location..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-box"
      />

      {/* Job List */}
      {filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        filteredJobs.map((job) => (
          <div className="card" key={job.id}>
            <h2>{job.company}</h2>

            <p>
              <strong>Role:</strong> {job.role}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Package:</strong> {job.package}
            </p>

            <button onClick={() => setSelectedJob(job)}>
              View Details
            </button>
          </div>
        ))
      )}

      {/* Job Details */}
      {selectedJob && (
        <div className="details">
          <h2>{selectedJob.company}</h2>

          <p>
            <strong>Role:</strong> {selectedJob.role}
          </p>

          <p>
            <strong>Location:</strong> {selectedJob.location}
          </p>

          <p>
            <strong>Package:</strong> {selectedJob.package}
          </p>

          <p>
            <strong>Skills:</strong> {selectedJob.skills}
          </p>

          <p>
            <strong>Type:</strong> {selectedJob.type}
          </p>

          <p>
            <strong>Deadline:</strong> {selectedJob.deadline}
          </p>

          <button onClick={() => applyForJob(selectedJob)}>
            Apply Now
          </button>

          <button onClick={() => setSelectedJob(null)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Jobs;
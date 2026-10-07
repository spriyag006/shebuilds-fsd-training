import { useState } from "react";

const DEFAULT_PROFILE = {
  name: "Divya",
  department: "Artificial Intelligence and Data Science",
  email: "student@example.com",
  skills: "React, JavaScript, Python, SQL",
};

const loadProfile = () => {
  try {
    const saved = localStorage.getItem("studentProfile");
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  } catch {
    return DEFAULT_PROFILE;
  }
};

function Profile() {
  const [profile, setProfile] = useState(loadProfile);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(form);
    try {
      localStorage.setItem("studentProfile", JSON.stringify(form));
    } catch {
      // storage unavailable, keep in-memory only
    }
    setEditing(false);
  };

  const handleCancel = () => {
    setForm(profile);
    setEditing(false);
  };

  return (
    <div className="page">
      <h1>Student Profile</h1>

      <div className="card">
        {editing ? (
          <>
            <p>
              <strong>Name:</strong>{" "}
              <input name="name" value={form.name} onChange={handleChange} />
            </p>

            <p>
              <strong>Department:</strong>{" "}
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
              />
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <input name="email" value={form.email} onChange={handleChange} />
            </p>

            <p>
              <strong>Skills:</strong>{" "}
              <input
                name="skills"
                value={form.skills}
                onChange={handleChange}
              />
            </p>

            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <h3>{profile.name}</h3>

            <p>
              <strong>Department:</strong> {profile.department}
            </p>

            <p>
              <strong>Email:</strong> {profile.email}
            </p>

            <p>
              <strong>Skills:</strong> {profile.skills}
            </p>

            <button
              onClick={() => {
                setForm(profile);
                setEditing(true);
              }}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
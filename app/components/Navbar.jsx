import React, { useEffect, useState } from "react";
export default function Navbar() {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("/api/jobs"); // Fetching from the mock API
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data); // Set the jobs state with the fetched data
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);

  return (
    <>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p><strong>Company:</strong> {job.company}</p>
          </li>
        ))}
      </ul>
    </>
  );
  }
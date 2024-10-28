// pages/candidates.js
import { useEffect, useState } from 'react';

const Candidates = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch data from the API endpoint
  useEffect(() => {
    fetch('/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  // Function to handle the Find Candidates button click
  const handleFindCandidates = (jobTitle) => {
    console.log(`Finding candidates for ${jobTitle}`);
    // Add any additional logic here, e.g., navigate to details or open a modal
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Job Openings</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.th}>Serial No</th>
            <th style={styles.th}>Logo</th>
            <th style={styles.th}>Company</th>
            <th style={styles.th}>Job Role</th>
            <th style={styles.th}>Job Title</th>
            <th style={styles.th}>Job Description</th>
            <th style={styles.th}>Hiring Manager Email</th>
            <th style={styles.th}>Find Candidates</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.serialNo} style={styles.tr}>
              <td style={styles.td}>{job.serialNo}</td>
              <td style={styles.td}><img src={job.logo} alt={`${job.company} logo`} style={{ width: '50px' }} /></td>
              <td style={styles.td}>{job.company}</td>
              <td style={styles.td}>{job.jobRole}</td>
              <td style={styles.td}>{job.jobTitle}</td>
              <td style={styles.td}>{job.jobDescription}</td>
              <td style={styles.td}>{job.hiringManagerEmail}</td>
              <td style={styles.td}>
                <button style={styles.button} onClick={() => handleFindCandidates(job.jobTitle)}>
                  Find Candidates
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styling for table elements
const styles = {
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  tr: {
    transition: 'background-color 0.2s',
  },
  button: {
    backgroundColor: '#4CAF50', // Green
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Candidates;

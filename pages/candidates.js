/*import { useEffect, useState } from 'react';

const Candidates = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  const handleFindCandidates = (jobTitle) => {
    fetch(`/api/candidatess?jobTitle=${jobTitle}`)
      .then((response) => response.json())
      .then((data) =>setSelectedCandidates(data))
      .catch((error) => console.error('Error fetching candidates:', error));
    
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
      
      {selectedCandidates.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Matching Candidates</h2>
          <ul>
            {selectedCandidates.map((candidate, index) => (
              <li key={index}>{candidate.name} - {candidate.email} <div><button>Send email</button></div></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

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
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Candidates;*/
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Candidates = () => {
  const [jobs, setJobs] = useState([]);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    fetch('/api/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  const handleFindCandidates = (jobTitle) => {
    router.push(`/candidates/${jobTitle}`); // Navigate to the new page with job title
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
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Candidates;


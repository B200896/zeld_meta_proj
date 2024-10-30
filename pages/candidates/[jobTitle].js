// pages/candidates/[jobTitle].js

/*import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const JobCandidates = () => {
  const router = useRouter();
  const { jobTitle } = router.query; // Get job title from the URL
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    console.log('checking if the title is extracted from the url',jobTitle);
    if (jobTitle) {
      fetch(`/api/candidatess?jobTitle=${jobTitle}`)
        .then((response) => response.json())
        .then((data) => setCandidates(data))
        .catch((error) => console.error('Error fetching candidates:', error));
    }
  }, [jobTitle]);

  return (
    <div style={{ padding: '20px'}}>
      <h1>Candidates for {jobTitle}</h1>
      {candidates.length > 0 ? (
        <ul>
          {candidates.map((candidate, index) => (
            <li key={index}>{candidate.name} - {candidate.email}</li>
          ))}
        </ul>
      ) : (
        <p>No candidates found.</p>
      )}
    </div>
  );
};

export default JobCandidates;*/
/*import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const JobCandidates = () => {
  const router = useRouter();
  const { jobTitle } = router.query; // Get job title from the URL
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    console.log('Checking if the title is extracted from the URL:', jobTitle);
    if (jobTitle) {
      fetch(`/api/candidatess?jobTitle=${jobTitle}`) // Corrected the endpoint name
        .then((response) => response.json())
        .then((data) => setCandidates(data))
        .catch((error) => console.error('Error fetching candidates:', error));
    }
  }, [jobTitle]);

  const handleSendEmail = (email) => {
    // Replace this with the logic to send an email (API integration)
    alert(`Email sent to: ${email}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Candidates for {jobTitle}</h1>
      {candidates.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Job Title</th>
              <th style={styles.th}>Match Score</th>
              <th style={styles.th}>LinkedIn</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{candidate.name}</td>
                <td style={styles.td}>{candidate.email}</td>
                <td style={styles.td}>{candidate.jobTitle}</td>
                <td style={styles.td}>{candidate.matchScore}</td>
                <td style={styles.td}>
                  <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onClick={() => handleSendEmail(candidate.email)}
                  >
                    Send Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates found.</p>
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

export default JobCandidates;*/
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const JobCandidates = () => {
  const router = useRouter();
  const { jobTitle } = router.query;
  const [candidates, setCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState({
    to: '',
    subject: `Opportunity for ${jobTitle}`,
    body: 'Dear [Candidate Name],\n\nWe are excited to inform you about an opportunity that matches your profile...'
  });

  useEffect(() => {
    if (jobTitle) {
      fetch(`/api/candidatess?jobTitle=${jobTitle}`)
        .then((response) => response.json())
        .then((data) => setCandidates(data))
        .catch((error) => console.error('Error fetching candidates:', error));
    }
  }, [jobTitle]);

  const handleSendEmailClick = (email) => {
    setEmailTemplate({ ...emailTemplate, to: email });
    setShowModal(true);
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Candidates for {jobTitle}</h1>
      {candidates.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Job Title</th>
              <th style={styles.th}>Match Score</th>
              <th style={styles.th}>LinkedIn</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{candidate.name}</td>
                <td style={styles.td}>{candidate.email}</td>
                <td style={styles.td}>{candidate.jobTitle}</td>
                <td style={styles.td}>{candidate.matchScore}</td>
                <td style={styles.td}>
                  <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onClick={() => handleSendEmailClick(candidate.email)}
                  >
                    Send Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates found.</p>
      )}

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Send Email to {emailTemplate.to}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                Subject:
                <input
                  type="text"
                  value={emailTemplate.subject}
                  onChange={(e) => setEmailTemplate({ ...emailTemplate, subject: e.target.value })}
                  style={styles.input}
                />
              </label>
              <label>
                Body:
                <textarea
                  value={emailTemplate.body}
                  onChange={(e) => setEmailTemplate({ ...emailTemplate, body: e.target.value })}
                  rows="5"
                  style={styles.textarea}
                />
              </label>
              <button type="button" onClick={handleModalClose} style={styles.closeButton}>Close</button>
              <button type="submit" style={styles.sendButton}>Send Email</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  th: { border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', fontWeight: 'bold' },
  td: { border: '1px solid #ddd', padding: '8px' },
  tr: { transition: 'background-color 0.2s' },
  button: { backgroundColor: '#4CAF50', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer', borderRadius: '5px' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '400px', maxWidth: '90%' },
  input: { width: '100%', padding: '8px', margin: '8px 0' },
  textarea: { width: '100%', padding: '8px', margin: '8px 0' },
  closeButton: { backgroundColor: '#f44336', color: 'white', padding: '8px', border: 'none', cursor: 'pointer', marginRight: '8px' },
  sendButton: { backgroundColor: '#4CAF50', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' },
};

export default JobCandidates;
/*import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const JobCandidates = () => {
  const router = useRouter();
  const { jobTitle } = router.query;
  const [candidates, setCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState({
    to: '',
    subject: `Opportunity for ${jobTitle}`,
    body: 'Dear [Candidate Name],\n\nWe are excited to inform you about an opportunity that matches your profile...'
  });
  const [emailSending, setEmailSending] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (jobTitle) {
      fetch(`/api/candidatess?jobTitle=${jobTitle}`)
        .then((response) => response.json())
        .then((data) => setCandidates(data))
        .catch((error) => console.error('Error fetching candidates:', error));
    }
  }, [jobTitle]);

  const handleSendEmailClick = (email) => {
    setEmailTemplate({ ...emailTemplate, to: email });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEmailSuccess(false);
    setEmailError('');
  };

  const handleGenerateEmail = async (e) => {
    e.preventDefault();
    setEmailSending(true);
    
    try {
      const response = await fetch('/api/generateEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          candidateName: emailTemplate.to.split('@')[0], // Assuming the name is part of the email
          jobTitle: jobTitle,
          companyName: 'Your Company Name', // Replace with actual company name
        }),
      });

      if (!response.ok) {
        console.log('Response not ok')
      }

      const data = await response.json();
      // Here you would send the generated email using your email service
      console.log('Generated Email:', data.emailBody); // Log the generated email body

      setEmailSuccess(true);
      // Optionally close the modal or reset the template
    } catch (error) {
      console.error('Error generating email:', error);
      setEmailError('Failed to send email');
    } finally {
      setEmailSending(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Candidates for {jobTitle}</h1>
      {candidates.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Job Title</th>
              <th style={styles.th}>Match Score</th>
              <th style={styles.th}>LinkedIn</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{candidate.name}</td>
                <td style={styles.td}>{candidate.email}</td>
                <td style={styles.td}>{candidate.jobTitle}</td>
                <td style={styles.td}>{candidate.matchScore}</td>
                <td style={styles.td}>
                  <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onClick={() => handleSendEmailClick(candidate.email)}
                  >
                    Send Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates found.</p>
      )}

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Send Email to {emailTemplate.to}</h2>
            <form onSubmit={handleGenerateEmail}>
              <label>
                Subject:
                <input
                  type="text"
                  value={emailTemplate.subject}
                  onChange={(e) => setEmailTemplate({ ...emailTemplate, subject: e.target.value })}
                  style={styles.input}
                />
              </label>
              <label>
                Body:
                <textarea
                  value={emailTemplate.body}
                  onChange={(e) => setEmailTemplate({ ...emailTemplate, body: e.target.value })}
                  rows="5"
                  style={styles.textarea}
                />
              </label>
              {emailSuccess && <p>Email sent successfully!</p>}
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
              <button type="button" onClick={handleModalClose} style={styles.closeButton}>Close</button>
              <button type="submit" style={styles.sendButton} disabled={emailSending}>
                {emailSending ? 'Sending...' : 'Send Email'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  th: { border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', fontWeight: 'bold' },
  td: { border: '1px solid #ddd', padding: '8px' },
  tr: { transition: 'background-color 0.2s' },
  button: { backgroundColor: '#4CAF50', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer', borderRadius: '5px' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '400px', maxWidth: '90%' },
  input: { width: '100%', padding: '8px', margin: '8px 0' },
  textarea: { width: '100%', padding: '8px', margin: '8px 0' },
  closeButton: { backgroundColor: '#f44336', color: 'white', padding: '8px', border: 'none', cursor: 'pointer', marginRight: '8px' },
  sendButton: { backgroundColor: '#4CAF50', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' },
};

export default JobCandidates;
/*import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TextGenerationServiceClient } from '@google/generative-ai';

const JobCandidates = () => {
  const router = useRouter();
  const { jobTitle } = router.query;
  const [candidates, setCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState({
    to: '',
    subject: `Opportunity for ${jobTitle}`,
    body: 'Dear [Candidate Name],\n\nWe are excited to inform you about an opportunity that matches your profile...'
  });
  const [emailSending, setEmailSending] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Initialize Google Generative AI client
  const client = new TextGenerationServiceClient({
    apiKey:"AIzaSyD4E-kNFBZD-VIi_j5h-wEs3KqAH9DelKU"  // Replace with your API key
  });

  useEffect(() => {
    if (jobTitle) {
      fetch(`/api/candidatess?jobTitle=${jobTitle}`)
        .then((response) => response.json())
        .then((data) => setCandidates(data))
        .catch((error) => console.error('Error fetching candidates:', error));
    }
  }, [jobTitle]);

  const handleSendEmailClick = (email) => {
    setEmailTemplate({ ...emailTemplate, to: email });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEmailSuccess(false);
    setEmailError('');
  };

  const handleGenerateEmail = async (e) => {
    e.preventDefault();
    setEmailSending(true);

    try {
      const candidateName = emailTemplate.to.split('@')[0]; // Assuming the name is part of the email
      const response = await client.generateText({
        prompt: `Generate a professional email for a job opportunity at Your Company. Address the candidate by ${candidateName} and mention the job title ${jobTitle}.`,
        temperature: 0.5,
        maxOutputTokens: 200,
      });

      if (response && response.text) {
        setEmailTemplate({ ...emailTemplate, body: response.text });
        setEmailSuccess(true);
        console.log('Generated Email:', response.text); // Log the generated email body
      } else {
        setEmailError('Failed to generate email content');
      }
    } catch (error) {
      console.error('Error generating email:', error);
      setEmailError('Failed to send email');
    } finally {
      setEmailSending(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Candidates for {jobTitle}</h1>
      {candidates.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Job Title</th>
              <th style={styles.th}>Match Score</th>
              <th style={styles.th}>LinkedIn</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{candidate.name}</td>
                <td style={styles.td}>{candidate.email}</td>
                <td style={styles.td}>{candidate.jobTitle}</td>
                <td style={styles.td}>{candidate.matchScore}</td>
                <td style={styles.td}>
                  <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onClick={() => handleSendEmailClick(candidate.email)}
                  >
                    Send Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates found.</p>
      )}

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Send Email to {emailTemplate.to}</h2>
            <form onSubmit={handleGenerateEmail}>
              <label>
                Subject:
                <input
                  type="text"
                  value={emailTemplate.subject}
                  onChange={(e) => setEmailTemplate({ ...emailTemplate, subject: e.target.value })}
                  style={styles.input}
                />
              </label>
              <label>
                Body:
                <textarea
                  value={emailTemplate.body}
                  onChange={(e) => setEmailTemplate({ ...emailTemplate, body: e.target.value })}
                  rows="5"
                  style={styles.textarea}
                />
              </label>
              {emailSuccess && <p>Email generated successfully!</p>}
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
              <button type="button" onClick={handleModalClose} style={styles.closeButton}>Close</button>
              <button type="submit" style={styles.sendButton} disabled={emailSending}>
                {emailSending ? 'Generating...' : 'Generate Email'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  th: { border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', fontWeight: 'bold' },
  td: { border: '1px solid #ddd', padding: '8px' },
  tr: { transition: 'background-color 0.2s' },
  button: { backgroundColor: '#4CAF50', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer', borderRadius: '5px' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '400px', maxWidth: '90%' },
  input: { width: '100%', padding: '8px', margin: '8px 0' },
  textarea: { width: '100%', padding: '8px', margin: '8px 0' },
  closeButton: { backgroundColor: '#f44336', color: 'white', padding: '8px', border: 'none', cursor: 'pointer', marginRight: '8px' },
  sendButton: { backgroundColor: '#4CAF50', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' },
};

export default JobCandidates;*/

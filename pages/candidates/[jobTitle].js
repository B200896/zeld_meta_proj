
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

export default JobCandidates;*/
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
//import { GoogleGenerativeAI } from '@google/generative-ai'; // Import the Google Generative AI

const JobCandidates = () => {
  const router = useRouter();
  const { jobTitle } = router.query;
  const [candidates, setCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState({
    to: '',
    subject: `Opportunity for ${jobTitle}`,
    body: 'Dear [Candidate Name],\n\nWe are excited to inform you about an opportunity that matches your profile...',
  });

  // Initialize Google Generative AI
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI('AIzaSyARFZSk8JW7oiqQTbYFtufwmZwjPYP14gU'); // Make sure to use your actual API key
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  require('dotenv').config();
  useEffect(() => {
    if (jobTitle) {
      fetch(`/api/candidatess?jobTitle=${jobTitle}`)
        .then((response) => response.json())
        .then((data) => setCandidates(data))
        .catch((error) => console.error('Error fetching candidates:', error));
    }
  }, [jobTitle]);

  const handleSendEmailClick = async (candidate) => {
    // Generate email content using the generative AI model
    console.log('The handlesendEmailClick is used',handleSendEmailClick);
    const prompt = `Write a friendly email inviting ${candidate.name} to apply for the ${jobTitle} position at our company. Include some details about the job and why they should apply.`;
    
    try {
      const result = await model.generateContent(prompt);
      //console.log('The result is generated',result);
      const generatedBody = result.response.text(); // Extract the generated text
      console.log(generatedBody);
      // Set the email template with the generated content
      setEmailTemplate({ 
        ...emailTemplate, 
        to: candidate.email, 
        body: generatedBody 
      });
      setShowModal(true);
    } catch (error) {
      console.error('Error generating email content:', error);
    }
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
                    onClick={() => handleSendEmailClick(candidate)}
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

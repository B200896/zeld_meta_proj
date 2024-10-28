// pages/api/candidates.js

export default function handler(req, res) {
    const { jobTitle } = req.query;
    console.log(jobTitle);
    // Mock data for candidates
    const allCandidates = [
      { name: "Alice", email: "alice@example.com", jobTitle: "Frontend Developer" },
      { name: "Bob", email: "bob@example.com", jobTitle: "Backend Developer" },
      { name: "Charlie", email: "charlie@example.com", jobTitle: "Full Stack" },
      { name: "David", email: "david@example.com", jobTitle: "DevOps" },
      { name: "Eve", email: "eve@example.com", jobTitle: "UI/UX Designer" },
    ];
  
    // Filter candidates based on jobTitle
    const matchingCandidates = allCandidates.filter(candidate => candidate.jobTitle === jobTitle);
  
    // Return the filtered candidates
    res.status(200).json(matchingCandidates);
  }
  
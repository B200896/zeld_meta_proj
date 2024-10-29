// pages/api/candidates.js

export default function handler(req, res) {
    const { jobTitle } = req.query;
   // console.log(jobTitle);
    // Mock data for candidates
    const allCandidates = [
      { name: "Alice", email: "alice@example.com", jobTitle: "Senior React Developer"},
      { name: "Alice-1", email: "alice-1@example.com", jobTitle: "Senior React Developer" },
      { name: "Bob", email: "bob@example.com", jobTitle: "Full Stack Engineer" },
      { name: "Charlie", email: "charlie@example.com", jobTitle: "Node.js Engineer" },
      { name: "David", email: "david@example.com", jobTitle: "DevOps Engineer" },
      { name: "Eve", email: "eve@example.com", jobTitle: "Senior UI/UX Designer" },
      { name: "Evei", email: "evei@example.com", jobTitle: "Senior UI/UX Designer" },
      { name: "Harsh", email: "evei@example.com", jobTitle: "DevOps Engineer" },
      { name: "Jenny", email: "evei@example.com", jobTitle: "DevOps Engineer" },
      { name: "Rahul", email: "evei@example.com", jobTitle: "Full Stack Engineer" },
    
      

    ];
  
    // Filter candidates based on jobTitle
    //const matchingCandidates = allCandidates.filter(candidate => candidate.jobTitle === jobTitle);
    const matchingCandidates = allCandidates.filter(
      candidate => candidate.jobTitle.toLowerCase() === jobTitle?.toLowerCase()
  );
    
  
    // Return the filtered candidates
    res.status(200).json(matchingCandidates);
  }
  
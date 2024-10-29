// pages/api/candidates.js

export default function handler(req, res) {
    const { jobTitle } = req.query;
   // console.log(jobTitle);
   console.log('The job title is working',jobTitle)
    // Mock data for candidates
    const allCandidates = [

      { name: "Alice", email: "alice@example.com", jobTitle: "Senior React Developer",matchscore:'95%',Link:"https"},
      { name: "Alice-1", email: "alice-1@example.com", jobTitle: "Senior React Developer",matchscore:'96%',Link:"https"},
      { name: "Bob", email: "bob@example.com", jobTitle: "Full Stack Engineer",matchscore:'97%' ,Link:"https"},
      { name: "Charlie", email: "charlie@example.com", jobTitle: "Node.js Engineer" ,matchscore:'92%',Link:"https"},
      { name: "David", email: "david@example.com", jobTitle: "DevOps Engineer",matchscore:'91%',Link:"https"},
      { name: "Eve", email: "eve@example.com", jobTitle: "Senior UI/UX Designer" ,matchscore:'90%',Link:"https"},
      { name: "Evei", email: "evei@example.com", jobTitle: "Senior UI/UX Designer",matchscore:'91%',Link:"https"},
      { name: "Harsh", email: "evei@example.com", jobTitle: "DevOps Engineer",matchscore:'98%',Link:"https"},
      { name: "Jenny", email: "evei@example.com", jobTitle: "DevOps Engineer" ,matchscore:'86%',Link:"https"},
      { name: "Rahul", email: "evei@example.com", jobTitle: "Full Stack Engineer",matchscore:'82%',Link:"https"},
      { name: "Rahul", email: "evei@example.com", jobTitle: "Full Stack Engineer",matchscore:'98%',Link:"https"},
      { name: "Rahul", email: "evei@example.com", jobTitle: "Full Stack Engineer",matchscore:'98%',Link:"https"},
      { name: "Rahul", email: "evei@example.com", jobTitle: "Full Stack Engineer",matchscore:'98%',Link:"https"},
      { name: "Rahul", email: "evei@example.com", jobTitle: "Full Stack Engineer",matchscore:'98%',Link:"https"}
    
    ];
  
    // Filter candidates based on jobTitle
    //const matchingCandidates = allCandidates.filter(candidate => candidate.jobTitle === jobTitle);
    const matchingCandidates = allCandidates.filter(
      candidate => candidate.jobTitle.toLowerCase() === jobTitle?.toLowerCase()
  );
    
  
    // Return the filtered candidates
    res.status(200).json(matchingCandidates);
  }
  
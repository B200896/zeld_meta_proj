const mockData = [
    {
      serialNo: "1",
      logo: "/images/brand/brand-01.svg",
      company: "Google",
      jobRole: "Frontend Developer",
      jobTitle: "Senior React Developer",
      jobDescription: "Seeking an experienced React developer to join our team...",
      hiringManagerEmail: "frontend.hiring@google.com"
    },
    {
      serialNo: "2",
      logo: "/images/brand/brand-02.svg",
      company: "X.com",
      jobRole: "Backend Developer",
      jobTitle: "Node.js Engineer",
      jobDescription: "Looking for a skilled Node.js developer...",
      hiringManagerEmail: "backend.hiring@x.com"
    },
    {
      serialNo: "3",
      logo: "/images/brand/brand-03.svg",
      company: "Github",
      jobRole: "Full Stack",
      jobTitle: "Full Stack Engineer",
      jobDescription: "Join our team as a Full Stack Developer...",
      hiringManagerEmail: "fullstack.hiring@github.com"
    },
    {
      serialNo: "4",
      logo: "/images/brand/brand-04.svg",
      company: "Vimeo",
      jobRole: "DevOps",
      jobTitle: "DevOps Engineer",
      jobDescription: "Seeking a DevOps engineer with strong AWS experience...",
      hiringManagerEmail: "devops.hiring@vimeo.com"
    },
    {
      serialNo: "5",
      logo: "/images/brand/brand-05.svg",
      company: "Facebook",
      jobRole: "UI/UX",
      jobTitle: "Senior UI/UX Designer",
      jobDescription: "Looking for a creative UI/UX designer...",
      hiringManagerEmail: "design.hiring@facebook.com"
    },
  ];
export async function GET(req){
    return new Response(JSON.stringify(mockData),{status:200})
}
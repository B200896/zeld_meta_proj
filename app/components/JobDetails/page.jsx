"use client"
import { useState,useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    CircularProgress,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
  } from '@mui/material';
  import Header from '../Header';
  import Sidebar from '../Sidebar';
  require('dotenv').config();
  const {GoogleGenerativeAI} = require("@google/generative-ai")
  const genAI= new GoogleGenerativeAI("AIzaSyBwLUxR9evHotlSVpD6lzWi7I0wDF6M6UY")
  console.log("genAI",genAI)
  // console.log("sss",process.env.API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
console.log("model",model)
 
const JobDetails = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState({ email: '', company: '', jobTitle: '' });
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 
    const [timeoutId, setTimeoutId] = useState(null); 
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await fetch('/api/mockData');
          if (!response.ok) {
            throw new Error('Network response is not ok');
          }
          const data = await response.json();
          console.log("data",data)
          setJobs(data);
        } catch (error) {
          console.error('Failed to fetch jobs:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchJobs();
    }, []);
    const generateResponse = async (job) => {
      console.log("jobcompany", job);
      const { company, jobTitle } = job;
  
      const prompt = `
      Generate a professional email template for a recruiter reaching out to a hiring manager about a job position. Use these details:
      
      Company: ${company}
      Position: ${jobTitle}
      Role Type: ${job.jobRole}
      Job Description: ${job.jobDescription}
      Hiring Manager Email: ${job.hiringManagerEmail}
      
      Follow these guidelines:
      1. Start with "Dear ${company} Hiring Team," (don't use any individual's name)
      2. Keep it professional and concise
      3. Mention having pre-screened candidates matching their requirements
      4. Highlight 2-3 key technical skills specifically relevant to ${job.jobRole}
      5. Emphasize quality over quantity of candidates
      6. Ask about reviewing candidate profiles
      7. Maintain a warm but professional tone
      8. Don't use any placeholder text like [Your name] or [Recruiter name]
      9. Don't mention specific numbers of candidates
      10. End with "Best regards," or similar closing (signature will be added automatically)
      
      Important: Generate a complete email ready to send, without any placeholders. Do not include a signature as it will be added automatically.`;
  
      console.log("prompt", prompt);
  
      try {
          // Adjust the request payload according to the API documentation
          const requestBody = {
              contents: [{
                  parts: [{
                      text: prompt
                  }]
              }]
          };
  
          const response = await model.generateContent(requestBody);
          console.log("AI Response:", response);
          console.log("response",response.response.candidates[0].content.parts[0].text)
  
          // Extract and return the generated text from the response
          return response.response.candidates[0].content.parts[0].text || "Generated text not found"; // Adjust based on actual response structure
      } catch (error) {
          console.error("Error generating response:", error);
          return "Error generating email template."; // Fallback message
      }
  };
  
    
      
    const handleOpenModal = async (job) => {
        console.log("job",job)
      setSelectedJob({
        email: job.hiringManagerEmail,
        company: job.company,
        jobTitle: job.jobTitle,
      });
      const generatedMessage = await generateResponse(job);
      console.log("generatedMessage",generatedMessage)
      setMessage(generatedMessage); 
      setOpenModal(true);
    };
  
   
  
    const handleClose = () => {
      setOpenModal(false);
      setMessage(''); 
      setSuccessMessage('');
      clearTimeout(timeoutId); 
    };
  
    const handleSend = () => {
      console.log('Message sent:', message);
      setSuccessMessage('Email sent successfully!'); 
      const id = setTimeout(() => {
        handleClose();
      }, 2000);
      setTimeoutId(id); 
    };
  
    return (
      <>
        <Header/>
        <div className='flex'>
          <Sidebar/>
          <div style={{ padding: '20px', marginLeft:'250px', marginTop:'70px', width:"70%"}}>
            <Typography variant="h4" gutterBottom>
              Available Positions
            </Typography>
            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <CircularProgress />
              </div>
            ) : (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Company</TableCell>
                      <TableCell>Job Title</TableCell>
                      <TableCell>Job Role</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Contact</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {jobs.length > 0 ? (
                      jobs.map((job) => (
                        <TableRow key={job.serialNo}>
                          <TableCell>{job.company}</TableCell>
                          <TableCell>{job.jobTitle}</TableCell>
                          <TableCell>{job.jobRole}</TableCell>
                          <TableCell>{job.jobDescription}</TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              sx={{
                                bgcolor: 'white',
                                color: 'black',
                                '&:hover': {
                                  bgcolor: 'primary.main',
                                  color: 'white',
                                },
                              }}
                              onClick={() => handleOpenModal(job)}
                            >
                              Send Mail
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} align="center">
                          No job details available.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
  
            <Dialog open={openModal} onClose={handleClose}>
              <DialogTitle className='font-bold'>
                Send Email to Hiring Manager
              </DialogTitle>
              <DialogContent>
                <Typography variant="subtitle1">Regards: {selectedJob.jobTitle}</Typography>
                <Typography variant="body1">To: {selectedJob.email}</Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Your Message"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={8} 
                />
                {successMessage && (
                  <Typography variant="body2" style={{ color: 'green', marginTop: '10px' }}>
                    {successMessage}
                  </Typography>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleSend} color="primary">
                  Send
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </>
    );
  };
  
  export default JobDetails;
  
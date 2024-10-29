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
  const {GoogleGenerativeAI} = require("@google/generative-ai")
  const genAI= new GoogleGenerativeAI(process.env.API_KEY)
  console.log("apikey",process.env.API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  require('dotenv').config();
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
  
    const generateResponse = async (job) => {
        const { company, jobTitle } = job;
        
        const senderName = "James Wilson"; 
        const senderPosition = "Frontend Architect"; 
        const senderEmail = "jwilson@innovatetech.net"; 
      
        const prompt = `
          Dear ${company} Hiring Team,
          
          I'm writing regarding your ${jobTitle} position at ${company}. We currently have several exceptional frontend developers in our talent pool who would be perfect matches for this role.
          
          Our candidates have strong backgrounds in React and modern frontend development, with proven track records in developing scalable web applications using React, Next.js, and other cutting-edge technologies. What particularly interested us about your role was ${company}'s commitment to innovation and user experience, which aligns perfectly with our candidates' expertise.
          
          We'd love to connect you with these pre-screened candidates who are actively seeking opportunities like yours. They all have the technical skills you're looking for and would be valuable additions to your team.
          
          Would you be interested in reviewing their profiles? We can quickly provide you with detailed information about candidates who match your specific requirements.
          
          Looking forward to your response,
          
          ${senderName} 
          ${senderPosition}
          ${senderEmail}
        `;
        console.log("promt",prompt)
        return prompt;
      
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
  
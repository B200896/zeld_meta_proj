"use client"
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,  
 CircularProgress, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Header from '../Header';
import Sidebar from '../Sidebar';
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
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleOpenModal = (job) => {
    setSelectedJob({
      email: job.hiringManagerEmail,
      company: job.company,
      jobTitle: job.jobTitle,
    });
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

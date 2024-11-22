"use client"
import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button
} from '@mui/material';
import Header from '../Header';
import Sidebar from '../Sidebar';
const Hiring = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/mockData');
                if (!response.ok) {
                    throw new Error('Network response is not ok');
                }
                const data = await response.json();
                console.log("data", data);
                setJobs(data);
            } catch (error) {
                console.error('Failed to fetch jobs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    useEffect(() => {
        console.log("Jobs state updated:", jobs);
    }, [jobs]);

    return (
      <>
      <Header/>
      <div className='flex '>
      <Sidebar/>
        <TableContainer component={Paper}>
            {/* <Typography variant="h6" component="h2" align="center" gutterBottom>
                Job Listings
            </Typography> */}
            {loading ? (
                <Typography align="center">Loading...</Typography>
            ) : (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Company</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Job Description</TableCell>
                            {/* <TableCell>Company Information</TableCell> */}
                            <TableCell>FIND CANDIDATES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <TableRow key={index}>
                                    <TableCell>{job.company}</TableCell>
                                    <TableCell>{job.jobTitle}</TableCell>
                                    <TableCell>{job.jobDescription}</TableCell>
                                    {/* <TableCell>{job.companyInfo}</TableCell> */}
                                    <TableCell>
                                    <Button
                              variant="contained"
                              sx={{
                                bgcolor: 'primary',
                                color: 'white',
                                '&:hover': {
                                  bgcolor: 'primary.main',
                                  color: 'white',
                                },
                              }}
                             
                            >
                              Find Candidates
                            </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    Jobs not available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
        </div>
        </>
        
    );
}

export default Hiring;

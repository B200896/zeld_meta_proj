"use client"
import { error } from 'console'
import React, { useEffect } from 'react'
const JobDetails=()=>{
    const[jobs,setJobs]=useState([])
    useEffect(()=>{
        const fetchJobs= async ()=>{
            try{
                const response=fetch('/api/jobs')
                console.log("resp",response)
                if(!response.ok){
                    throw new error('Network response is not ok')
                }
                const data=await response.json()
                console.log("data",data)
                setJobs(data)
            } catch (error) {
                console.error('Failed to fetch jobs:', error);
            }
        };
        fetchJobs()
    },[])
    return(
        <div>
            <h1>Job Details</h1>
            {jobs.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Job Title</th>
                            <th>Job Role</th>
                            <th>Description</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job.serialNo}>
                                <td>{job.company}</td>
                                <td>{job.jobTitle}</td>
                                <td>{job.jobRole}</td>
                                <td>{job.jobDescription}</td>
                                <td>{job.hiringManagerEmail}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No job details available.</p>
            )}
        </div>
        

    )
}
export default JobDetails;

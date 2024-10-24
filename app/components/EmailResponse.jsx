"use client"
import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Header from "./Header";
import Link from 'next/link'

const EmailResponse=()=>{
    const details=[
        {jobprofile:"Google",totalEmails:12000,positiveResponse:9000,nagativeResponse:2000,noResponse:1000},
        {jobprofile:"Samsung",totalEmails:18000,positiveResponse:12000,nagativeResponse:2000,noResponse:4000},
        {jobprofile:"Xiomi",totalEmails:15000,positiveResponse:3000,nagativeResponse:6000,noResponse:6000},
        {jobprofile:"Accenture",totalEmails:6000,positiveResponse:3000,nagativeResponse:1000,noResponse:2000},
        {jobprofile:"Amdocs",totalEmails:5000,positiveResponse:3000,nagativeResponse:0,noResponse:2000},
        {jobprofile:"Flipkart",totalEmails:5000,positiveResponse:3000,nagativeResponse:1000,noResponse:1000}
    ]
    return(
      <>
        {/* <Header/> */}
        <div className="flex w-full">
        <Sidebar/>
        
        <TableContainer component={Paper}>
        <Dashboard/>
  
      <Table sx={{margin:"80px 100px 170px 190px"}} >
        <TableHead>
          <TableRow>
            <TableCell>Job Profile</TableCell>
            <TableCell>Total Emails</TableCell>
            <TableCell>No Response</TableCell>
            <TableCell>Negative Response</TableCell>
            <TableCell>Positive Response</TableCell>
            
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.jobprofile}</TableCell>
              <TableCell>{row.totalEmails}</TableCell>
              <TableCell>{row.noResponse}</TableCell>
              <TableCell>{row.nagativeResponse}</TableCell>
              <TableCell>
                <Link href={`components/Candidates/${row.jobprofile}`}>
                  <span className="text-blue-500 hover:underline">{row.positiveResponse}</span>

                </Link>
              </TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    
    </div>
    
    </>
    )
}
export default EmailResponse;
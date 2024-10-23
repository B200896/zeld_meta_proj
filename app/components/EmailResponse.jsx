"use client"
import React from "react";
import { Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Header from "./Header";
const EmailResponse=()=>{
    const details=[
        {jobprofile:"Software Developer",totalEmails:12000,positiveResponse:9000,nagativeResponse:2000,noResponse:1000},
        {jobprofile:"Quality Analyst",totalEmails:18000,positiveResponse:12000,nagativeResponse:2000,noResponse:4000},
        {jobprofile:"Salesforce Developer",totalEmails:15000,positiveResponse:3000,nagativeResponse:6000,noResponse:6000},
        {jobprofile:"Full Stack Developer",totalEmails:6000,positiveResponse:3000,nagativeResponse:1000,noResponse:2000},
        {jobprofile:"Project Manager",totalEmails:5000,positiveResponse:3000,nagativeResponse:0,noResponse:2000},
        {jobprofile:"HR Specialist",totalEmails:5000,positiveResponse:3000,nagativeResponse:1000,noResponse:1000}
    ]
    return(
      <>
        {/* <Header/> */}
        <TableContainer component={Paper}>
  
      <Table sx={{margin:"80px 100px 170px 190px"}} >
        <TableHead>
          <TableRow>
            <TableCell>Job Profile</TableCell>
            <TableCell>Total Emails</TableCell>
            <TableCell>No Response</TableCell>
            <TableCell>Positive Response</TableCell>
            <TableCell>Negative Response</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.jobprofile}</TableCell>
              <TableCell>{row.totalEmails}</TableCell>
              <TableCell>{row.noResponse}</TableCell>
              <TableCell>{row.positiveResponse}</TableCell>
              <TableCell>{row.nagativeResponse}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}
export default EmailResponse;
import React from "react";
import EmailResponse from "./components/EmailResponse";
import { Container,Typography } from "@mui/material"
import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Header/>
      <Typography variant="h4" gutterBottom style={{ marginLeft: '160px', marginTop:'150px' }}>
        Email Response Data
      </Typography>
      <EmailResponse/>
       <h1>Hars Jain</h1>
    </>
    
  );
}

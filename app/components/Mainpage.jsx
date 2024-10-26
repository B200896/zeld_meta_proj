import React from "react";
import { Dashboard } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Link from 'next/link'
const MainPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px' 
                }}>
                    <Link href="/Jobdetails">
                    <button 
                        type="submit" 
                        style={{
                            padding: '10px 20px', // Add padding for better appearance
                            fontSize: '16px', // Font size
                            cursor: 'pointer', // Change cursor on hover
                            backgroundColor: '#007bff', // Button color
                            color: '#fff', // Text color
                            border: 'none', // Remove border
                            borderRadius: '4px', // Rounded corners
                        }}
                    >
                        Hiring
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

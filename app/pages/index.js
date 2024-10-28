"use client"
import Image from "next/image";
//import styles from "./page.module.css";
import React from "react";
// pages/index.js
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Job Portal</h1>
      <Link href="/candidates">
       <button>Candidates</button>
      </Link>
    </div>
  );
}

// Button style for link
const styles = {
  button: {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

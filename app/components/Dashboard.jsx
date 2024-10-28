"use client"
import React from 'react';
import { AttachMoney, Mail, PersonOutline, ThumbUpAlt } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <div className="flex gap-8 ml-20 p-4 flex-wrap space-x-40 ">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-60 h-48 ">
        <Mail color="primary" style={{ fontSize: '2rem' }} />
        <h6 className="text-xl font-bold">3.456K</h6>
        <p className="text-gray-600">Total Emails Sent</p>
        <p className="text-green-500">+90.43%</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-60 h-48">
        <AttachMoney color="secondary" style={{ fontSize: '2rem' }} />
        <h6 className="text-xl font-bold">$42.2K</h6>
        <p className="text-gray-600">No Responses</p>
        <p className="text-red-500">-43.58%</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-60 h-48">
        <PersonOutline color="primary" style={{ fontSize: '2rem' }} />
        <h6 className="text-xl font-bold">2.450</h6>
        <p className="text-gray-600">Negative Responses</p>
        <p className="text-red-500">-2.50%</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-60 h-48">
        <ThumbUpAlt color="secondary" style={{ fontSize: '2rem' }} />
        <h6 className="text-xl font-bold">3.465</h6>
        <p className="text-gray-600">Positive Responses</p>
        <p className="text-green-500">+8.95%</p>
      </div>
    </div>
  );
};

export default Dashboard;

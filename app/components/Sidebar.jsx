"use client"
import React from "react"
function  Sidebar () {
  return (
    <div className="flex">
      <div className="w-48 h-screen bg-gray-200 p-4">
        {/* <h2 className="text-xl font-semibold">Sidebar</h2> */}
        <ul className="mt-4 text-xl  mt-20 text-slate-700 mb-100 flex flex-col gap-5 mt-10">
          <li><a href="#" className="block py-2">Dashboard</a></li>
          <li><a href="#" className="block py-2">Jobs</a></li>
          <li><a href="#" className="block py-2">Calendar</a></li>
          <li><a href="#" className="block py-2">Profile</a></li>
          <li><a href="#" className="block py-2">Forms</a></li>
          <li><a href="#" className="block py-2">Tables</a></li>
          <li><a href="#" className="block py-2">Pages</a></li>
        </ul>
      </div>

      
    </div>
  );
};

export default Sidebar;
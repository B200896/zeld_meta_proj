import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Link from 'next/link';

const MainPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />

            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flex: 1, width: '100%', overflow: 'auto' }}>
                    <Sidebar style={{ height: '50%' }} />
                    <div style={{ height: '80%' }}>
                        <Dashboard />
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-10px', 
                    width: '100%', 
                }}>
                    <div className="flex justify-center items-center mt-[-900px] mb-5 w-full">
                        <Link href="/components/JobDetails">
                            <button
                                type="submit"
                                className="w-60 h-16 px-5 py-3 mb-60 font-bold text-bold cursor-pointer bg-blue-600 text-white border-none rounded-lg"
                            >
                                Hiring
                            </button>
                        </Link>
                        <button type="submit"
                         className="w-60 h-16 px-5 py-3 mb-60 font-bold text-bold cursor-pointer bg-purple-600 text-white border-none rounded-lg ml-10">
                            Candidates

                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

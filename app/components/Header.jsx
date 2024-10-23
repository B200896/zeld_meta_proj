import React from "react";
const Header=()=>{
    return(
        <>
        {/* <div className="flex"> */}
        <div className="h-200vh p-10 bg-white-500 shadow-lg shadow-black-500/50 flex justify-between">
            <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="mt-3 font-bold text-slate-400">Zeld The Admin Dashboard Solution</p>
            </div>
            <div>
            <input className="rounded-full mr-[2vw] pb-4 pl-3 w-full" type="text"
            placeholder="search" 
            />
            </div>
        </div>
        <div className="ms-45">
            

        </div>
        {/* </div> */}
        </>
    )
}
export default Header;
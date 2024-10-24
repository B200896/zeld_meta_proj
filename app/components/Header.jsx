import React from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <>
            
            <div className="h-200vh p-10 bg-white-500 shadow-lg shadow-black-500/50 flex justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Dashboard</h1>
                    <p className="mt-3 font-bold text-slate-400">Zeld The Admin Dashboard Solution</p>
                </div>
                <div className="flex items-center ml-auto">
                    <div className="relative mr-4">
                        <span className="absolute left-3 mt-2 pt-1 text-slate-400">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <input
                            className="rounded-full pb-4 pl-10 pt-2 mt-1 pr-4 w-full text-left bg-slate-100"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div className="flex space-x-2 bg-slate-200 rounded-full h-10 w-20 mt-1 mr-5">
                        <span className="p-2">
                            <FontAwesomeIcon icon={faSun} />
                        </span>
                        <span className="p-2">
                            <FontAwesomeIcon icon={faMoon} />
                        </span>
                    </div>
                    <div className="flex space-x-2 mt-1">
                        <span className="bg-gray-300 p-2 rounded-full h-8">
                            <FontAwesomeIcon icon={faBell} />
                        </span>
                        <span className="bg-gray-300 p-2 rounded-full h-8">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                </div>
            </div>

            
        </>
    )
}
export default Header;
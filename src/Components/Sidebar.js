import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';

    
function Sidebar() {
    return (
        <div className="Sidebar">
            <div className='toggle-btn'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }
                        }
                        >
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// function show(){
//     const element = ".Sidebar";
//     element.classList.toggle("active");
// }

export default Sidebar
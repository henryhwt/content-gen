import React from 'react';
import Styles from './Sidebar.module.css';
import {SidebarData} from './SidebarData';

function Sidebar(){
    return(
        
        <div className={Styles.container}>
            <ul className={Styles.list}>
                {SidebarData.map((val, key)=>{
            return( 
                <li key={key} 
                    className= {Styles.row}
                    onClick={()=> {window.location.pathname = val.link, console.log(val.link)}}>
                <div className={Styles.title}>{val.title}</div>

                </li>)
    }
    )}
            </ul>
        </div>
)
};

export default Sidebar;
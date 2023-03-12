import Link from "next/link";
import React from "react";

export default ()=>{
    return(
        <>
        <div className="header1">
            <nav className="hd_nav_ctr">
                <div className="hd_nav">
                    <div className="hd_info">Pharmacy Management</div>
                    <Link legacyBehavior href="/">
                    <a className="hd_logo">
                        <img
                        src="/logo1.png"
                        width="60px"
                        height="80px" 
                        alt="Pharmacy"/>
                    </a>
                    </Link>

                </div>
            </nav>
        </div>
        </>
    );
}


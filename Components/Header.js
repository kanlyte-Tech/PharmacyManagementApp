import Link from "next/link";
import React from "react";

export default ()=>{
    return(
        <>
        <header>
            <nav className="hd_nav_ctr">
                <div className="hd_nav">
                    <div>Pharmacy Management</div>
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
        </header>
        </>
    );
}


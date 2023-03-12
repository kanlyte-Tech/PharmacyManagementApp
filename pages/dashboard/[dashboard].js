import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../../Components/header/Header";
import Nav from "../../Components/sidebar/Nav";


export default function Dashboard() {
const router = useRouter();
const {name} = router.query;

  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <Nav active="dashboard" />
      <div className="main-content">
        <Header />
        <main>
          <div className="cards">
            <div className="card-single">
              <div className="">
                <h3>
                 6
                </h3>
                <span>
                  Drugs Added <br />
                  <span style={{ fontSize: "13px" }}>in to the System</span>
                </span>
              </div>
              <div className="">
                <span className="las la-prescription-bottle-alt" style={{color:"white"}}> </span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h3>
                7
                </h3>
                <span>Low stock drugs</span>
                <br />
                <span style={{ fontSize: "13px" }}>in the pharmacy</span>
              </div>
              <div className="">
                <span className="las la-users" style={{color:"white"}}></span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h3>
                 9
                </h3>
                <span>Expired Products</span>
                <br />
                <span style={{ fontSize: "13px" }}>In the Pharmacy</span>
              </div>
              <div className="">
                <span className="las la-exclamation-triangle"  style={{color:"white"}}> </span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h3>
                45
                </h3>
                <span>Total Sales Made</span>
                <br />
                <span style={{ fontSize: "13px" }}>Overall</span>
              </div>
              <div className="">
                <span className="las la-users" style={{color:"white"}}> </span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card-single">
              <div className="">
                <h3>
                 6
                </h3>
                <span>
                  Drugs Added <br />
                  <span style={{ fontSize: "13px" }}>in to the System</span>
                </span>
              </div>
              <div className="">
                <span className="las la-plus-circle" style={{color:"white"}}> </span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h3>
                7
                </h3>
                <span>Low stock drugs</span>
                <br />
                <span style={{ fontSize: "13px" }}>in the pharmacy</span>
              </div>
              <div className="">
                <span className="las la-users" style={{color:"white"}}></span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h3>
                 9
                </h3>
                <span>Expired Products</span>
                <br />
                <span style={{ fontSize: "13px" }}>In the Pharmacy</span>
              </div>
              <div className="">
                <span className="las la-exclamation-triangle"  style={{color:"white"}}> </span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h3>
                45
                </h3>
                <span>Total Sales Made</span>
                <br />
                <span style={{ fontSize: "13px" }}>Overall</span>
              </div>
              <div className="">
                <span className="las la-money-bill-alt"> </span>
              </div>
            </div>
          </div>
     
        </main>
      </div>
    </>
  );
}

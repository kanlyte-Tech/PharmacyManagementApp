import Link from "next/link";
import { useRouter } from "next/router";
import React, { Component } from "react";

const  Nav=(props)=> {
const router = useRouter();
    return (
      <>
        <div className="sideBar-ctr">
          <div className="sidebar">
            <label htmlFor="nav-toggle" className="close-on-sm">
              <span className="las la-times"></span>
            </label>
            <div className="sidebar-brand">
              <h2>
                <img src="/logo1.png"
                width="50px"
                height="50px" />
                {/* <span
                  className="las la-clinic-medical"
                  style={{ fontSize: "32px" }}
                ></span> */}
                <span>Pharmacy</span>
              </h2>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li>
                <Link href={`/dashboard/${router.query.name}`}>
                    <span
                      className={`${
                        props.active === "dashboard" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-home"></span>
                      <span>Home</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={`/dashboard/${router.query.name}/addcategorie`}>
                    <span
                      className={`${
                        props.active === "depts" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-user-plus"></span>
                      <span>Add Category</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/rooms">
                    <span
                      className={`${
                        props.active === "rooms" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-shopping-cart"></span>
                      <span>Add Stock</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/rooms">
                    <span
                      className={`${
                        props.active === "rooms" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-plus"></span>
                      <span>Add Drug</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/rooms">
                    <span
                      className={`${
                        props.active === "rooms" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-capsules"></span>
                      <span>All drugs</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={`/dashboard/users`}>
                    <span
                      className={`${
                        props.active === "users" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-users"></span>
                      <span>Users</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={`/dashboard/${router.query.name}/reports`}>
                    <span
                      className={`${
                        props.active === "exams" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-comment"></span>
                      <span>Reports</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={`/dashboard/${router.query.name}/salereversal`}>
                    <span
                      className={`${
                        props.active === "rooms" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-undo"></span>
                      <span>Sale Reversals</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Nav;

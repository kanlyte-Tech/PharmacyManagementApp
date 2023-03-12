import React from 'react'
import Header from '../../Components/header/Header'
import Nav from '../../Components/sidebar/Nav'

function users() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <Nav active="users" />
      <div className="main-content">
        <Header />
        <main>

        </main>
      </div>
    </>
  )
}

export default users
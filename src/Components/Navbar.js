import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        {props.topic}
        </a>
      </div>
    </nav>
  )
}

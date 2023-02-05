import React from 'react'

const NavWClass = () => {
  return (
    <div>
        <nav className="nav">
            <a className="nav-link active" href="#">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </nav>
    </div>
  )
}

export default NavWClass;
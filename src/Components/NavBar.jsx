import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav>
            <div className="logo">
             <img src="src/assets/Logo.png" alt="Spot" width="70px" />                  
            </div>
            <div className="other-items">
                <Link></Link>  
                <Link></Link>
                <Link></Link>
                <Link></Link>
                <Link></Link>     
            </div>
        </nav>
    </div>
  )
}

export default NavBar
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { styles } from "../style";

const NavBar = () => {
    const [isHovered, setHovered] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
   
    const links = [
        { to: '/home', label: 'Home' },
        { to: '/education', label: 'Education' },
        { to: '/experience', label: 'Experience' },
        { to: '/about', label: 'About-Me' }
      ];
    
    
  return (
    
    <nav 
    id="navbar"
    style={styles.nav(isHovered)}
    onMouseEnter={()=>setHovered(true)} 
    onMouseLeave={()=>setHovered(false)}
    >
      <div style={styles.logo(isHovered)}>Maiker Cañon</div>
      <ul style={styles.navItems}>
        {
            links.map(({to, label})=>{
               return ( <li key={to}>
                    <Link
                        to={to}
                        className="blink-link"
                        style={{
                            ...styles.navLink,
                            ...(hoveredLink === to ? styles.navLinkHover:{})
                        }}
                        onMouseEnter={()=>{setHoveredLink(to)}}
                        onMouseLeave={()=>{setHoveredLink(null)}}
                    >
                    {label}
                    </Link>
                </li>)
            } )
        }
      </ul>
      <Outlet/>
    </nav>
   
    
  )
}

export default NavBar

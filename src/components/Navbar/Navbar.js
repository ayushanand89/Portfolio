import React, { useEffect, useState } from 'react';
import styles from "./nav.module.css"
import { HashLink as Link } from 'react-router-hash-link';
import { data } from '../../data';


function Navbar(){
const [open,setstate] = useState(0);
const toggleBodyClass = () => {
  document.body.classList.toggle(styles.menuActive);
  (open === 0 )? setstate(1) : setstate(0);
  if(open === 1){
        // something to set body height max 100vh
        document.body.style.maxHeight = "100vh";
        document.body.style.overflow = "hidden";
      }else{
        document.body.style.maxHeight = "max-content"; 
        document.body.style.overflow = "auto";        
      }
    }
    
    useEffect(()=>{
      if(open === 1){
        // something to set body height max 100vh
        document.body.style.maxHeight = "100vh";
        document.body.style.overflow = "hidden";
       }else{
        document.body.style.maxHeight = "max-content"; 
        document.body.style.overflow = "auto";        
       }
    },[toggleBodyClass])

  return (
    <div id='home'>
      <nav className={styles.navbar}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.pushLeft}>
          <button id="menu-toggler" data-class={styles.menuActive} className={styles.hamburger} onClick={toggleBodyClass}>
            {
                open === 0 ?
                <i className="fa-solid fa-bars"></i>
                :
                <i className="fa-solid fa-xmark"></i>
            }
          </button>
          <ul id="primary-menu" className={`${styles.menu} ${styles.navMenu}`}>
            <li className={styles.menuItem}>
              <Link className={styles.navLink} href="#home">Home</Link>
            </li>
            <li className={styles.menuItem}>
            {/* <a className={styles.navLink} href="#playground">Playground</a> */}
            <Link className={styles.navLink} smooth to="#playground">Playground</Link>
            </li>
            <li className={styles.menuItem}>
            {/* aboutme */}
            <Link className={styles.navLink} smooth to="#aboutme">About Me</Link>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.cvdownbtn} href={data.cvlink}>Download CV</a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

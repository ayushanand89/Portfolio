import React from 'react';
import styles from "./StyleTime.module.css"
import Options from './Options';

const Timeline = () => {
  const about = "As a web developer, I have expertise in designing and building modern, responsive websites using HTML, CSS, and JavaScript. I am experienced in creating interactive user interfaces, optimizing website performance, and ensuring cross-browser compatibility. With a keen eye for detail and a passion for creating visually appealing and functional websites, I strive to deliver high-quality web solutions that meet the needs of clients and users alike."
  return (
    <div  className={styles.main}>
      <div className={styles.heading}>
          About Me 
      </div>
      <div className={styles.about}>
        {about}
      </div>
      <div className={styles.container}>
          <Options/>
      </div>
    </div>
  );
};

export default Timeline;

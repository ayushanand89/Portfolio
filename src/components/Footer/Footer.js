import React from 'react'
import style from './footerstyle.module.css'
import { data } from '../../data';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  const quote = "The best way to predict the future is to create it.";
  const quoteAuthor = "Peter Drucker";
  return (
    <div className={style.main}>
      <div className={style.flex1}>
        <div className={style.name}>
            {data.name}    
        </div>
        <div className={style.quote}>
          {quote}<br/>
        </div>
        <div className={style.quoteAuthor}>
          - {quoteAuthor}
        </div>
      </div>
      <div className={style.flex2}>
        <div className={style.usefulLinks}>Useful Links</div>
      
        <Link smooth to='#home' className={style.links}>
          Home
        </Link>
        <Link smooth to='#playground' className={style.links}>
          Playground
        </Link>
        <Link smooth to='#aboutme' className={style.links}>
          About Me
        </Link>

      </div>
      <div className={style.flex2}>
      <div className={style.usefulLinks}></div>

        <div className={style.links}>
          Download CV
        </div>
        <div className={style.links}>
          Terms Of Use
        </div>
        <div className={style.links}>
          Privacy
        </div>
      </div>
      <div className={style.flex3}>
        <div className={style.connect}>Connect with me</div>
        <div className={style.icons}>
              {/* icons here */}
            <a className={style.navlinks} href={data.githublink}>        <i className="fa-brands fa-github">  </i></a> 
            <a className={style.navlinks} href={data.linkedinLink}>      <i className="fa-brands fa-linkedin"></i></a>
            <a className={style.navlinks} href={`mailto:${data.mailId}`}><i className="fa-solid fa-envelope"> </i></a>
            <a className={style.navlinks} href='/'>                      <i className="fa-brands fa-telegram"></i></a> 
          </div>
      </div>
    </div>
  )
}

export default Footer
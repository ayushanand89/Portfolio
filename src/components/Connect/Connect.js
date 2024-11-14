import React from 'react';
import style from "./connectstyle.module.css";
import image from "./Get in touch-bro.png"
import { data } from '../../data';

function Connect() {
  const mail = data.mailId
  return (
    <div className={style.main} id='connectwithme'>
      <div className={style.topbar}>
        <div className={style.title}>Letʹs <span className={style.subtitle}>Talk</span></div>
        <div className={style.icons}>
              {/* icons here */}
            <a className={style.links} href={data.githublink}>        <i className="fa-brands fa-github"></i>  </a> 
            <a className={style.links} href={data.linkedinLink}>      <i className="fa-brands fa-linkedin"></i></a>
            <a className={style.links} href={`mailto:${data.mailId}`}><i className="fa-solid fa-envelope"></i> </a>
            <a className={style.links} href='/'>                      <i className="fa-brands fa-telegram"></i></a>
        </div>
      </div>
      <div className={style.body}>
          <div className={style.flex1}>
            <div className={style.flex1div1}>Lets Connect <br/> Tell me about your Project</div>
            <div className={style.flex1div2}>Lets create something together</div>
            <div className={style.flex1div3}>
              <div className={style.icon}><i className="fa-solid fa-envelope"></i></div>
              <div className={style.mailto}>
                <div>Mail me at </div>
                <div><a href={`mailto:${data.mailId}`} className={style.mail}>{mail}</a></div>
              </div>
            </div>
          </div>
          <div className={style.flex2}>
            <img src={image} alt='connect' />
          </div>
      </div>
    </div>
  )
}

export default Connect
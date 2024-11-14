import React from 'react'
import style from "./cardstyle2.module.css"
import pin from "./pngwing.com.png"
import { data } from '../../data';

function ProjectCard2() {
  const {title,imgLink,des} = data.projects[1];
  return (
    <div className={style.main}>
          <div><img src={pin} className={style.pin} alt=''/></div>
      <div className={style.w80}>
        <img src={imgLink} alt={title} className={style.img}/>
        <div className={style.title}>{title}</div>
        <div className={style.des}>{des}</div>
      </div>
    </div>
  )
}

export default ProjectCard2;
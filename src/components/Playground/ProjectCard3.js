import React from 'react'
import style from "./cardstyle3.module.css"
import pin from "./clip.png"
import imgLink from "./Bookshop-amico.png"
import { data } from '../../data';
function ProjectCard3() {
  const {title,des} = data.projects[2];
  return (
    <>
    <div className={style.main}>
    <div><img src={pin} className={style.pin} alt=''/></div>
      <div className={style.w80}>
        <img src={imgLink} alt={title} className={style.img}/>
        <div className={style.title}>{title}</div>
        <div className={style.des}>{des}</div>
      </div>
    </div>
    </>
  )
}

export default ProjectCard3;
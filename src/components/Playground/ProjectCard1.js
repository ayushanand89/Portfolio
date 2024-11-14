import React from 'react'
import style from "./cardstyle1.module.css"
import pin from "./yellowpin.png"
import { data } from '../../data'

function ProjectCard1() {
  const {imgLink,title,des} = data.projects[0];
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

export default ProjectCard1
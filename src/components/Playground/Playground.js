import React from 'react'
import style from "./Playground.module.css"
import ProjectCard1 from './ProjectCard1'
import ProjectCard2 from './ProjectCard2'
import ProjectCard3 from './ProjectCard3'


function Playground() {
  return (
    <div  className={style.main} id='playground'>
      <div className={style.left}>
        <div className={style.text}>
          <div className={style.textTitle}>Playground</div>
          <div className={style.desc}> where aspirations take flight, belief propels imagination, and dreams find their wings.</div>
        </div>
        <div className={style.left1}>
          <ProjectCard1/>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.right1}>
          <ProjectCard2/>
        </div>
        <div className={style.right2}>
          <ProjectCard3/>
        </div>
      </div>
    </div>
  )
}

export default Playground
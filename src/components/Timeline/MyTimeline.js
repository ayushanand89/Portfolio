import React from 'react'
import style from "./style.module.css";
import Timeline from './Timeline';
import imglink from "./Static website-amico.png"
import { data } from '../../data';

function MyTimeline() {
  const image = imglink ;
  return (
    <div className={style.main} id='aboutme'>
      <div className={style.left}>
        <img src={image} alt='d' className={style.image}/>
      </div>
      <div className={style.right}>
        <Timeline/>
      </div>
    </div>
  )
}

export default MyTimeline;
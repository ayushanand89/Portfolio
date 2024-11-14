import React, { useState } from 'react'
import styles from "./Options.module.css"
import { data } from '../../data'

function Skills(props){
    const set = [...props.skil]  
    const setedu = [...props.education]  
    const setexp = [...props.experience]  
    return(
        <div className={styles.test}>
            <div>
                {
                set.map((elem)=>{
                return  <div key={elem.title} className={styles.skillMain}>
                            <div className={styles.exptitle}>{elem.title}</div>
                            <div className={styles.desc}>{elem.desc}</div>
                        </div>      
                    })
                }
                {
                setedu.map((elem)=>{
                return  <div key={elem.title} className={styles.skillMain}>
                            <div className={styles.exptitle}>{elem.title}</div>
                            <div className={styles.desc}>{elem.desc}</div>
                        </div>      
                    })
                }
                {
                setexp.map((elem)=>{
                return  <div key={elem.title} className={styles.skillMain}>
                            <div className={styles.exptitle}>{elem.title}</div>
                            <div className={styles.desc}>{elem.desc}</div>
                        </div>      
                    })
                }
            </div>
        </div>
    )
}

function Options() {
    const[active,setactive] = useState(0);
    const skills = data.skills

    const experience = data.experience

    const education = data.education

  return (
    <div className={styles.main}>
        <div className={styles.optionlist}>
            <div className={`${styles.option} ${active === 0 ? styles.underline : ""}`} onClick={()=>setactive(0)}>Skills</div>
            <div className={`${styles.option} ${active === 1 ? styles.underline : ""}`} onClick={()=>setactive(1)}>Experience</div>
            <div className={`${styles.option} ${active === 2 ? styles.underline : ""}`} onClick={()=>setactive(2)}>Education</div>
        </div>
        {active === 0 &&
            <div className={styles.container}>
                <Skills skil={skills}/>
            </div>
        }
        {active === 1 &&
            <div className={styles.container}>
                <Skills experience={experience}/>
            </div>
        }
        {active === 2 &&
            <div className={styles.container}>
                <Skills education={education}/>
            </div>
        }
    </div>
  )
}
Skills.defaultProps = {
    education:[],
    experience:[],
    skil:[]
}
export default Options
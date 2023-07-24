import React from 'react'
import css from './Main.module.css'
import heroImg from '../../assets/Main-text.png'

const Main = () => {
  return (
    <section className={css.container}>
        <div className={css.content}>
            <div className={css.contentImg}>
              <img src={heroImg} alt="" />
            </div>
            <div className={css.contentBtns}>
                <button className={css.contentBtn}>find in store</button>
                <button className={css.contentBtn}>more details</button>
            </div>
        </div>
    </section>    
  )
}

export default Main
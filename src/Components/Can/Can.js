import React from 'react'
import css from './Can.module.css'
import can1 from '../../assets/blue-can.png'
import can2 from '../../assets/red-can.png'
import can3 from '../../assets/black-can.png'
import can4 from '../../assets/org-can.png'

const Can = () => {
  return (
    <div className={css.container}>
        <div className={css.canContainer}>
            <div className={css.can}>
                <img src={can1} alt="can" />
            </div>
            <div className={css.can}>
                <img src={can2} alt="can" />
            </div>
            <div className={css.can}>
                <img src={can3} alt="can" />
            </div>
            <div className={css.can}>
                <img src={can4} alt="can" />
            </div>
        </div>
    </div>
)
}

export default Can
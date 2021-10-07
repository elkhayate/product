import React from 'react'
import style from "../styles/Resources.module.css"
import Image from 'next/dist/client/image'
import work from "../public/img/work.png"

export default function Story() {
    return (
        <div className={style.story}>
            <Image src={work} alt = "work"  />
            <div className={style.title}>
                <p>By <span style={{fontWeight : "bold"}}>Wahid Ari</span> | 03 March 2019</p>
                <h1>Increasing Prosperity With Positive Thinking</h1>
            </div>
        </div>
    )
}
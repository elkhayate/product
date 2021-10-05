import React,{useContext} from 'react'
import style from "../styles/Navbar.module.css";

export default function Navbar() {

    return (
        <div className={style.container}>
            <h1>hello there</h1>
            <p className={style.test}>hello here</p>
        </div>
    )
}
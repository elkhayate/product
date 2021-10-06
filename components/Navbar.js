import React,{useContext, useState} from 'react'
import Image from 'next/image'
import style from "../styles/Navbar.module.css"
import logo from "../public/img/logo.png"
import Frame from "../public/img/Frame.png"
import { ThemeContext } from '../context/ThemeContext'
import Link from 'next/link'

export default function Navbar() {
    const {isLight, dark, light, toogler} = useContext(ThemeContext);
    const theme = isLight ? light : dark
    const [toog, setToog] = useState("bold")
    return (
        <div style={{backgroundColor : theme.bg, color : theme.syntax}}>
        <div  className={style.container}>
                <div className={style.logo}>
                    <Image src ={logo} alt = "logo"/>
                    <h1 style={{color : isLight ? "#173A56" : theme.syntax}}>Product</h1>
                </div>
                <div className={style.nav}>
                    <div className={style.links}>
                        <Link href="/"><p>Product</p></Link>
                        <Link href="Customers"><p>Customers</p></Link>
                        <Link href="Pricing"><p>Pricing</p></Link>
                        <Link href="/Resources"><p>Resources</p></Link>
                    </div>
                    <div className={style.btns}>
                        <button className={style.btn} style={{color : isLight ? "#173A56" : theme.syntax}}>Sign In</button>
                        <button>Sign Up</button>
                    </div>
                    <Image onClick={toogler} className={style.frame} src={Frame} alt= "toogler" />
                </div>
        </div>
        </div>
    )
}
import React,{useContext} from 'react'
import Image from 'next/image'
import style from "../styles/Navbar.module.css"
import logo from "../public/img/logo.png"
import Frame from "../public/img/Frame.png"
import { ThemeContext } from '../context/ThemeContext'


export default function Navbar() {
    const {isLight, dark, light, toogler} = useContext(ThemeContext);
    const theme = isLight ? light : dark
    
    return (
        <div>
        <div className={style.container}>
                <div className={style.logo}>
                    <Image src ={logo} alt = "logo"/>
                    <h1>Product</h1>
                </div>
                <div className={style.nav}>
                    <div className={style.links}>
                        <p>Product</p>
                        <p>Customers</p>
                        <p>Pricing</p>
                        <p>Resources</p>
                    </div>
                    <div className={style.btns}>
                        <button className={style.btn}>Sign In</button>
                        <button>Sign Up</button>
                    </div>
                    <Image onClick={toogler} className={style.frame} src={Frame} alt= "toogler" />
                </div>
        </div>
        </div>
    )
}
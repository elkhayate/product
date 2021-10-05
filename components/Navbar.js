import React,{useContext} from 'react'
import Image from 'next/image'
import style from "../styles/Navbar.module.css"
import logo from "../public/img/logo.png"
import Frame from "../public/img/Frame.png"
export default function Navbar() {

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
                    <Image className={style.frame} src={Frame} alt= "toogler" />
                </div>
        </div>
        </div>
    )
}
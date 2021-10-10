import React,{useContext} from 'react';
import style from "../styles/footer.module.css"
import logo from "../public/img/logo.png"
import  Image  from "next/image"
import fb from "../public/img/facebook.png"
import tw from "../public/img/twitter.png"
import ist from "../public/img/instagram.png"
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
    const {isLight, light, dark} = useContext(ThemeContext);
    const theme = isLight ? light : dark

    return (
        <div style={{backgroundColor : theme.bg, color : theme.syntax}}>
            <div className={style.container}>
            <div className = {style.social}>
                    <div className={style.logo}>
                        <Image src={logo} alt = "logo"/>
                        <h1>Product</h1>
                    </div>
                    <div className={style.socials}>
                        <Image src = {ist} alt = "instagram"/>
                        <Image src = {fb} alt = "facebook"/>
                        <Image src = {tw} alt = "twitter"/>
                    </div>
                </div>
                <div>
                        <h3>Resource</h3>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                </div>
                <div>
                        <h3>Legal Stuff</h3>
                        <p>Disclaimer</p>
                        <p>Financing</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                </div>
                <div className={style.sup}>
                        <h3>Knowing you&apos;re always on the best energy deal.</h3>
                        <input type ="email" />
                        <button>Sign up Now</button>
                </div>
                
            </div>
            <p className={style.grati}>Made With Love By Elkhayate.</p>
        </div>
    )
}
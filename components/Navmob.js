import React,{useState, useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import style from "../styles/Navmob.module.css";
import bm from "../public/img/menu.png";
import wm from "../public/img/menu2.png";
import Image from 'next/image';
import logo from "../public/img/logo.png";
import Frame from "../public/img/Frame.png";
import Link from "next/link"
export default function Navmob() {
    const [show, setShow] = useState(false);
    const {isLight, light, dark, toogler} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const burger = isLight ? bm : wm;
    return(
        <div style={{backgroundColor : theme.bg, color : theme.syntax}}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Image src ={logo} alt = "logo"/>
                    <h1 style={{color : isLight ? "#173A56" : theme.syntax}}>Product</h1>
                </div>
                <div style={{cursor : "pointer"}}>
                    <Image  onClick={()=>{setShow(!show)}} src = {burger} alt = "burger menu" />
                </div>
                
            </div>
            {show && (
                <div onClick={()=>{setShow(false)}} className={style.dropDown}>
                    <div  className={style.links}>
                        <Link href="/"><p>Product</p></Link>
                        <Link href="Customers"><p>Customers</p></Link>
                        <Link href="Pricing"><p>Pricing</p></Link>
                        <Link href="/Resources"><p>Resources</p></Link>
                    </div>
                    <div className={style.btns}>
                        <button className={style.btn} style={{color : isLight ? "#173A56" : theme.syntax}}>Sign In</button>
                        <button>Sign Up</button>
                        <Image onClick={toogler} className={style.frame} src={Frame} alt= "toogler" />
                    </div>           
                </div>
            )}
            
        </div>
    )
}
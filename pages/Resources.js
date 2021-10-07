import React,{useContext} from 'react'
import style from "../styles/Resources.module.css"
import Image from "next/image"
import { ThemeContext } from '../context/ThemeContext';
import groupb from "../public/img/Groupb.png"
import Story from "../components/Story"
import fb from "../public/img/facebook.png"
import tw from "../public/img/twitter.png"
import ist from "../public/img/instagram.png"
import map from "../public/img/map.png"
export default function Resources() {
    const {isLight, dark, light} = useContext(ThemeContext);
    const theme = isLight ? light : dark
    var test = new Array(1,2,3,4,5,6,7,8);
    return(
        <div style={{backgroundColor : theme.bg, color : theme.syntax}}>
            <div className={style.container}>
                <div className={style.business}>
                    <div className={style.content}>
                        <h1>Great Business made with Product.</h1>
                        <p>Build better customer relationships easily messaging that provides a more personal experience for you and your customers.</p>
                        <input type="email" placeholder="Enter your email adress" style={{backgroundColor : theme.bg, color : theme.syntax}}/>
                        <button>Join Now</button> 
                        <p>Join over <span style={{color : "#02897A"}}>4000</span>+ other</p>   
                    </div>
                    <div className={style.img}>
                        <Image src={groupb} alt ="img" />
                    </div>
                </div>
            <div className={style.stories}>
                    <h1>Lastest Stories</h1>
                    <p>We focus on ergonomics and meeting you where you work. it's only a keystroke away.</p>
                    <div className={style.wahid}>
                        {test.map(p => <Story />)}
                    </div>
            </div>
            <div className={style.contact}>
                <h1>Contact Us</h1>
                <p>Need more detailed information ?</p>
                <p>Get in touch with us.</p>
                <div className={style.socials}>
                        <Image src = {ist} alt = "instagram"/>
                        <Image src = {fb} alt = "facebook"/>
                        <Image src = {tw} alt = "twitter"/>
                </div>
                <Image  src = {map} alt = "map" /> 
                <form style={{backgroundColor : isLight ? "white" : "#22343D"}} className={style.form}>
                    <h1>Send a message</h1>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email"/>
                    <input style={{height : "193px", width : "768px", borderRadius : "0px"}} className={style.msg} type="text" placeholder="Your Message" />
                    <button>Send</button>
                </form>
            </div>
            </div>
        </div>
    )
}
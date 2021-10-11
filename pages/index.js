import React,{useContext} from 'react'
import style from '../styles/Home.module.css'
import { ThemeContext } from '../context/ThemeContext';
import Image from "next/image";
import social from "../public/img/social.png";
import a1 from "../public/img/Avator.png";
import a2 from "../public/img/Avator-2.png";
import a3 from "../public/img/Avator-3.png";
import a4 from "../public/img/Avator-4.png";


export default function Home() {
  const {isLight, light, dark} = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
          <div className={style.contain} style={{backgroundColor : theme.bg, color : theme.syntax, padding : "20px"}}>
              <div className={style.speed}>
                  <div className={style.content}>
                      <h1>Work at the speed of thought</h1>
                      <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                      <button>Get started</button>
                  </div>
                  <Image src={social} alt = "social" />
              </div>
              <div className={style.quick}>
                  <h1>Quick & Easy Process</h1>
                  <p className={style.title}>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI ?</p>
                  <div className={style.persons}>
                    <div className={style.person1}>
                        <div className={style.person}>
                        <Image src={a1} alt = "avator" />
                            <div className={style.pcontent}>
                                <p>I can take care of your pitch</p>
                            </div>
                            
                        </div>
                        <div className={style.person}>
                            
                            <div className={style.pcontent}>
                                <p>I can prototype your app</p>
                            </div>
                            <Image src={a2} alt = "avator" />
                        </div>
                    </div>
                    <div className={style.person1}>
                    <div className={style.person}>
                            
                            <div className={style.pcontent}>
                                <p>I can design you website</p>
                            </div>
                            <Image src={a3} alt = "avator" />
                        </div>
                        <div className={style.person}>
                        <Image src={a4} alt = "avator" />
                            <div className={style.pcontent}>
                                <p>I can help marketing strategy</p>
                            </div>
                            
                        </div>
                    </div>
                   
                  </div>
                  <button>Contact our expert</button>
              </div>
          </div>
  )
}

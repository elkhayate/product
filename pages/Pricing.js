import React,{useContext, useState} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import style from "../styles/Pricing.module.css";
import devices from "../public/img/devices.png"
import Image from "next/image"
import c1 from "../public/img/circle1.png"
import c2 from "../public/img/circle2.png"
import c3 from "../public/img/circle3.png"
import minus from "../public/img/minus.png"
import plus from "../public/img/plus.png"


export default function Pricing() {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false) 
    const {isLight, dark, light} = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    const onOroff = show1 ? minus : plus
    
    return (
        <div style={{backgroundColor : theme.bg, color : theme.syntax}}>
            <div className={style.pricing}>
                    <h2>PRICING</h2>
                    <h1>Let's get some real work done here.</h1>
                    <p>Prodict is your perfect solution for working. Get started now for free</p>
                    <div className={style.prices}>
                        <div className={style.card}>
                            <h2>Free</h2>
                            <p>Brief price description</p>
                            <div className={style.price}>
                                <h1>0</h1>
                                <div className={style.limit}>
                                    <h2>$</h2>
                                    <p>Per / Month</p>
                                </div>
                            </div>
                            <div className={style.info}>
                                <p>Only 2 Operators</p>
                                <p>Nontifications</p>
                                <p>Landing Pages</p>
                                <button>Order Now</button>
                            </div>
                            
                        </div>
                        <div className={`${style.card} ${style.green}`}>
                            <h2>Standard</h2>
                            <p>Brief price description</p>
                            <div className={style.price}>
                                <h1>5</h1>
                                <div className={style.limit}>
                                    <h2>$</h2>
                                    <p>Per / Month</p>
                                </div>
                            </div>
                            <div className={style.info}>
                                <p>Only 2 Operators</p>
                                <p>Nontifications</p>
                                <p>Landing Pages</p>
                                <button>Order Now</button>
                            </div>
                            
                        </div>
                        <div className={style.card}>
                            <h2>Premium</h2>
                            <p>Brief price description</p>
                            <div className={style.price}>
                                <h1>10</h1>
                                <div className={style.limit}>
                                    <h2>$</h2>
                                    <p>Per / Month</p>
                                </div>
                            </div>
                            <div className={style.info}>
                                <p>Only 2 Operators</p>
                                <p>Nontifications</p>
                                <p>Landing Pages</p>
                                <button>Order Now</button>
                            </div>
                            
                        </div>
                    </div>
            </div>
            <div style={{background: isLight ? " #F5F5F5" : "#22343D"}} className={style.enterprise}>
                <h2>ENTERPRISE</h2>
                <h1>Are you interested in a custom-tailored plan?</h1>
                <p>Product is a set of advanced features for really large teams with projects.</p>
                <button>Get in touch with us</button>
            </div>
            <div>
                <h1 className={style.title}>Product is being used with great effects alongside:</h1>
                <div className={style.product}>
                    <Image src={devices} alt = "devices" />
                    <div className={style.composants}>
                        <div className={style.composant}>
                            <div className={style.cont}>
                                <Image src={c1} alt="Enterprenenur" />
                                <h2>Enterpreneur</h2>
                            </div>
                            <p>Product is a great way to help medium and samall enterprise owners achieve their goals</p>
                        </div>
                        <div className={style.composant}>
                            <div className={style.cont}>
                                <Image src={c2} alt="Accountants" />
                                <h2>Accountants</h2>
                            </div>
                            <p>Whether you are working on contract with clients, or on other key accounting documents, Product is for you</p>
                        </div>
                        <div className={style.composant}>
                            <div className={style.cont}>
                                <Image src={c3} alt="Universities" />
                                <h2>Universiities</h2>
                            </div>
                            <p>Organize university projects and have documents easily graded online with Product</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={style.question}>
                <h1>Frequently asked question</h1>
                <p>Something is not clear? You need help? Check our FAQ section</p>
            </div>
            <div className={style.questions}>
                <div>
                    <div onClick={setShow1(!show1)}>
                        <Image  src={onOroff}  alt = "dropDown"/>
                        <h2>What are my payement option?</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
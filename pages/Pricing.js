import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import style from "../styles/Pricing.module.css";
import Image from "next/image";
import air from "../public/img/Airbnb.png"
import go from "../public/img/Google.png"
import fed from "../public/img/FedEx.png"
import mic from "../public/img/Microsoft.png"
import arrow from "../public/img/arrow.png"
import result from "../public/img/result.png"
import heart from "../public/img/heart.png"
import m1 from "../public/img/mac1.png"
import m2 from "../public/img/mac2.png"
import m3 from "../public/img/mac3.png"
import bd from "../public/img/bd.png"
import rd from "../public/img/rd.png"
import frame from "../public/img/Frame2.png"

export default function Pricing() {
    const {isLight, light, dark} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const Style = isLight ? "white" : "#22343D";
    return(
        <div style={{backgroundColor : theme.bg, color : theme.syntax}}>
            <div className={style.container}>
                <div className={style.clients}>
                    <h1>Our Clients</h1>
                    <div className={style.logos}>
                        <Image src={air} alt = "Airbnb" />
                        <Image src={go} alt = "Google" />
                        <Image src={fed} alt = "FedEx" />
                        <Image src={mic} alt = "Microsoft" />
                    </div>
                </div>
                <div style={{background: isLight ? "#F5F5F5" : "#22343D"}} className={style.choose}>
                    <h1>Why Choose Product?</h1>
                    <div className={style.products}>
                        <div className={style.variant}>
                            <Image src={arrow} alt = "Airbnb" />
                            <h2>Special Business</h2>
                            <p>Product helps you see how many 
                                more days you need to work 
                                to reach your financial goal 
                                for the month and year.</p>
                        </div>
                        <div className={style.variant}>
                            <Image src={result} alt = "Airbnb" />
                            <h2>Instant Result</h2>
                            <p>Product helps you see how many 
                                more days you need to work 
                                to reach your financial goal 
                                for the month and year.</p>
                        </div>
                        <div className={style.variant}>
                            <Image src={heart} alt = "Airbnb" />
                            <h2>Fastest way to organize</h2>
                            <p>Product helps you see how many 
                                more days you need to work 
                                to reach your financial goal 
                                for the month and year.</p>
                        </div>
                    </div>
                </div>
                <div className={style.work}>
                    <h1>How Product Work ?</h1>
                    <div className={style.steps}>
                        <div className={style.step}>
                            <Image src={m1} alt = "macbook 1"/>
                            <div className={style.content}>
                                <h3>Step 1</h3>
                                <h2>Apply for a product</h2>
                                <p>Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology </p>
                            </div>
                        </div>
                        <div className={style.step}>
                            
                            <div className={style.content}>
                                <h3>Step 2</h3>
                                <h2>Pay fully refundable</h2>
                                <p>Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded.</p>
                            </div>
                            <Image src={m2} alt = "macbook 2"/>
                        </div>
                        <div className={style.step}>
                            <Image src={m3} alt = "macbook 3"/>
                            <div className={style.content}>
                                <h3>Step 3</h3>
                                <h2>Completion</h2>
                                <p>Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement</p>
                            </div>
                        </div>
                    </div>
                    <button>Get in touch with us</button>
                </div>
                <div style={{backgroundColor : Style}} className={style.received}>
                    <h1>Join thousand of other who have already received offers</h1>
                    <div className={style.offers}>
                        <div className={style.offer}>
                            <Image src={rd} alt = "red dice" />
                            <h2>Business</h2>
                            <p>Cash Flow</p>
                            <p>Asset Backed</p>
                            <p>Receivables Finance</p>
                            <p style={{fontWeight : "bold"}}>Find the best business product</p>
                        </div>
                        <div className={style.offer}>
                            <Image src={bd} alt = "red dice" />
                            <h2>Enterprise</h2>
                            <p>Site Acquisition</p>
                            <p>Bridge</p>
                            <p>Developement Financing</p>
                            <p style={{fontWeight : "bold"}}>Find the best business product</p>
                        </div>
                    </div>
                </div>
                <div className={style.compannies}>
                    <div className={style.join}>
                        <div className={style.with}>
                            <h1>Join 100 Compannies who boost their business with Product</h1>
                            <button>Get This</button>
                        </div>
                        <Image src={frame} alt="Frame" />
                    </div>
                </div>
            </div>
        </div>
    )
}
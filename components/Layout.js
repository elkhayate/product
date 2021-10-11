import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Navmob from "./Navmob";
import style from "../styles/layout.module.css";

export default function Layout ({children}) {
    return( 
        <div className={style.layout}>
            <div className={style.brows}><Navbar /></div>
            <div className={style.mob}><Navmob /></div>
            {children}
            <Footer />
        </div>
        
    
    )
}
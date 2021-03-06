
import React,{createContext, useState} from 'react';



export const ThemeContext = createContext();


export default function ThemeContextProvider(props) {
    const [isLight, setLight] = useState(false);
    const [theme] = useState(
        {
            light : {syntax : "#22343D", bg : "white"},
            dark : {syntax : "white", bg : "#1f2e35"}
        }
    )
    const toogler = () => {
        setLight(!isLight);
    }
    return (
        <ThemeContext.Provider value={{toogler, light : theme.light, dark : theme.dark, isLight }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
import preloader from "../../../assets/images/loadingBook.svg";
import React from "react";
import CSS from 'csstype';

export const Preloader = () => {
    const preloaderWrapperStyles: CSS.Properties = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        top: 0
    }
    return(
        <div style={preloaderWrapperStyles}>
            <img src={preloader} alt={'Loading'}/>
        </div>
    )
}
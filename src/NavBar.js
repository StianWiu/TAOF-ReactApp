import React, { useState } from "react"
import crooksLogoPng from "./assets/Crooks-png.png"
import * as icons from 'react-icons/fa';

let expanded = false;
function NaVbar() {
    const [style, setStyle] = useState("navbar");
    const [style2, setStyle2] = useState("navbar2");
    const openList = () => {
        if (!expanded) {
            setStyle("navbar--expanded")
            setStyle2("show--buttons")
            expanded = true;
        } else {
            setStyle("navbar--unexpand")
            setStyle2("hide--buttons")
            expanded = false;
        }
    }

    function scrollUp() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if (window.innerWidth < 900) {
            openList()
        }
    }

    return (
        <nav id="Home" className={style}>
            <div className="navbar-brand">
                <img className="navbar--crooks-icon-png" src={crooksLogoPng} alt="The Art OF Fail" />
                <h1 className="navbar--title"> TheArtOfFail</h1>
                <icons.FaThList onClick={openList} className="navbar--listIcon" />

                <ul className="navbar--buttons">
                    <u>
                        <a href="#Home"><li><button onClick={scrollUp}>home</button></li></a>
                        <a href="#TwitterCard"><li><button>Twitter</button></li></a>
                        <a href="#TwitterCard"><li><button>example2</button></li></a>
                    </u>
                </ul>
                <ul className="menu--buttons">
                    <u>
                        <li><a href="#Home"> <button onClick={scrollUp} className={style2}>home</button></a></li>
                        <li><a href="#TwitterCard"><button onClick={openList} className={style2}>Twitter</button></a></li>
                        <li><a href="#TwitterCard"><button onClick={openList} className={style2}>example2</button></a></li>
                    </u>
                </ul>
            </div>
        </nav >
    )
}

export default NaVbar;
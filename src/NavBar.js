import React, { useState } from "react"
import crooksLogoPng from "./assets/Crooks-png.png"
import * as icons from 'react-icons/fa';

function NaVbar() {
    let expanded = false;
    const [style, setStyle] = useState("navbar");
    const changeStyle = () => {
        if (!expanded) {
            setStyle("navbar--expanded")
            expanded = true;
        } else {
            setStyle("navbar--unexpand")
            expanded = false;
        }
    }

    return (
        <nav className={style}>
            <div className="navbar-brand">
                <img className="navbar--crooks-icon-png" src={crooksLogoPng} alt="The Art OF Fail" />
                <h1 className="navbar--title"> TheArtOfFail</h1>
                <icons.FaThList onClick={changeStyle} className="navbar--listIcon" />

                <ul className="navbar--buttons">
                    <u>
                        <li><button>home</button></li>
                        <li><button>example</button></li>
                        <li><button>example2</button></li>
                    </u>
                </ul>
            </div>
        </nav >
    )
}
export default NaVbar;
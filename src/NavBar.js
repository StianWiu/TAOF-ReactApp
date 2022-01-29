import React from "react"
import crooksLogoPng from "./assets/Crooks-png.png"


export default function NaVbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img className="navbar--crooks-icon-png" src={crooksLogoPng} />
                <h1 className="navbar--title"> TheArtOfFail</h1>
            </div>
            <ul className="navbar--buttons">
                <u>
                    <li><button>home</button></li>
                    <li><button>example</button></li>
                    <li><button>example2</button></li>
                </u>
            </ul>
        </nav >
    )
}
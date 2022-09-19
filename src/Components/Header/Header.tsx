import { useState } from "react";
import './Header.css'

export const Header = () => {
    return (
        <div className="header">
            <a href="#">
                <img className="logo" src={require('../../Images/logo.png')} />
            </a>

            <div className="items nav-items">
                <a href="#">
                    Model S
                </a>
                <a href="#">
                    Model 3
                </a>
                <a href="#">
                    Model X
                </a>
                <a href="#">
                    Model Y
                </a>
                <a href="#">
                    Solar Roof
                </a>
                <a href="#">
                    Solar Panels
                </a>
            </div>

            <div className="nav-menu nav-items">
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#">Menu</a>
            </div>

        </div>
    )
}
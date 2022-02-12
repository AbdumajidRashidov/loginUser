import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <a href="/" className="navbar__logo">LOGO</a>
            <ul className="menu__list">
                <li className="menu__list_item">
                    <Link className="menu__list_item_link" to={"/moduls"}>Модули</Link>
                    <Link className="menu__list_item_link" to={"/news"}>новости</Link>
                    <Link className="menu__list_item_link" to={"/resources"}>ресурсы</Link>
                    <Link className="menu__list_item_link" to={"/support"}>Поддержка</Link>
                    <Link className="menu__list_item_link" to={"/profile"}>профиль</Link>
                    <Link className="menu__list_item_link" to={"/language"}>язык</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import style from "./mainPage.module.css";
import styles from "../Layout/Layout.module.css";
import {Link} from "react-router-dom";
import create from "../myProduct/myProduct.module.css";

const MainPage = () => {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.header__logo}>
                    <AiOutlineShoppingCart className={style.header__icon}/>
                    <h2 className={style.header__title}>MOBI MARKET</h2>
                </div>
                <div className={style.header__logo}>
                    <button className={style.header__btn}>Подать объявление</button>
                    <div className={style.user}>
                        <div className={style.userInfo}>
                            <Link to="/profile" className={style.userTitle}>Алесястар</Link>
                            <Link to="/profile" className={style.userSubTitle}>sergeykrash01</Link>
                        </div>
                        <svg className={style.userSvg} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Huge-icon/user/solid/user">
                                <g id="user">
                                    <path id="combo shape" fillRule="evenodd" clipRule="evenodd"
                                          d="M22.0001 20.1667C26.0502 20.1667 29.3334 16.8834 29.3334 12.8333C29.3334 8.78325 26.0502 5.5 22.0001 5.5C17.95 5.5 14.6667 8.78325 14.6667 12.8333C14.6667 16.8834 17.95 20.1667 22.0001 20.1667ZM22.0001 38.5C29.0877 38.5 34.8334 35.2168 34.8334 31.1667C34.8334 27.1166 29.0877 23.8333 22.0001 23.8333C14.9124 23.8333 9.16675 27.1166 9.16675 31.1667C9.16675 35.2168 14.9124 38.5 22.0001 38.5Z"
                                          fill="white"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </header>

            <div className={style.content}>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
            </div>

            <div className={style.content}>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
                <div>
                    <h4>BMW M4 Coupe: A Two-Door</h4>
                    <p>23 000 $</p>
                    <p>100</p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
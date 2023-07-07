import React, {useEffect, useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import style from "./mainPage.module.css";
import styles from "../Layout/Layout.module.css";
import {Link} from "react-router-dom";
import create from "../myProduct/myProduct.module.css";
import ModalMainPage from "./ModalMainPage";
import {useDispatch, useSelector} from "react-redux";
import {productGet} from "../../redux/reducers/productGetSlice";

const MainPage = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const {data, status, error} = useSelector((store) => store.productGetSlice)

    useEffect(()=>{
        dispatch(productGet())
    },[])

    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.header__logo}>
                    <AiOutlineShoppingCart className={style.header__icon}/>
                    <h2 className={style.header__title}>MOBI MARKET</h2>
                </div>
                <div className={style.header__logo}>
                    <button onClick={()=>setModal(true)} className={style.header__btn}>Подать объявление</button>
                    <ModalMainPage modal={modal} setModal={setModal}/>
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
                {
                    data !== null && data !== undefined ? data.map((item, index) => (
                        <div className={style.content__card} key={index}>
                            <img className={style.cardImg}
                                 src={
                                item.product_image || "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                 }
                                 alt="foto"/>
                            <h4 className={style.cardText}>{item.title}</h4>
                            <p>{item.price}$</p>
                            <div className={style.card__likes}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 8.71004C22 10.13 21.45 11.46 20.45 12.46L12.6 20.31C12.56 20.35 12.45 20.44 12.4 20.47C12.28 20.55 12.14 20.59 12 20.59C11.86 20.59 11.71 20.55 11.59 20.47C11.53 20.43 11.48 20.39 11.42 20.33L3.56 12.46C2.55 11.46 2 10.13 2 8.71004C2 7.29004 2.55 5.96004 3.56 4.96004C5.63 2.90004 8.99 2.90004 11.06 4.96004L12 5.91004L12.95 4.96004C15.02 2.90004 18.38 2.90004 20.44 4.96004C21.45 5.96004 22 7.29004 22 8.71004Z" fill="#C0C0C0"/>
                                </svg>
                                <p>{item.likes_count}</p>
                            </div>
                        </div>
                    ))
                        : ""

                }
            </div>
        </div>
    );
};

export default MainPage;
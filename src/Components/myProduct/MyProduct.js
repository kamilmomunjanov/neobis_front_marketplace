import React,{useEffect, useState} from 'react';
import styles from "../Profile/Profile.module.css";
import Layout from "../Layout/Layout";
import create from "./myProduct.module.css";
import style from "../mainPage/mainPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {myProductGet} from "../../redux/reducers/myProductSlice";
import SettingsModal from "./SettingsModal";
import MyOneProducts from "./MyOneProducts";

const MyProduct = () => {
    const dispatch = useDispatch()

    const user = useSelector((store) => store.authSlice)
    const {data, status, error} = useSelector((store) => store.myProductGetSlice)

    useEffect(()=>{
        dispatch(myProductGet())
    },[])

    return (
        <div className={styles.profilePage}>
            <Layout/>
            <div className={styles.loginPage__right}>
                <div className={styles.form}>
                    <div className={styles.top}>
                        <div className={styles.top__arrowReturn}>
                            <svg className={styles.top__arrow} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#1D1D1F" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className={styles.top__text}>Назад</p>
                        </div>
                        <h2 className={styles.title__register}>Мои товары</h2>
                    </div>

                    <div className={create.contentDisplay}>
                        {
                            data !== null && data !== undefined ? data.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        <MyOneProducts item={item}/>
                                    </React.Fragment>
                                ))
                                : ""

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;
import React from 'react';
import styles from "../Profile/Profile.module.css";
import Layout from "../Layout/Layout";
import create from "./myFavoriteProduct.module.css";

const MyFavoriteProduct = () => {
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
                        <h2 className={styles.title__register}>Понравившиеся</h2>
                    </div>

                    <div className={create.content}>
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
            </div>
        </div>
    );
};

export default MyFavoriteProduct;
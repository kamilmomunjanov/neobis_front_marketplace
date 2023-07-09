import React from 'react';
import styles from "./Layout.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/reducers/loginSlice";

const Layout = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = () => {
        dispatch(logoutUser())
        navigate("/")
    }
    return (
        <div className={styles.tabBar}>
            <div className={styles.tab__profile}>
                <svg className={styles.tab__user} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Huge-icon/user/solid/user">
                        <g id="user">
                            <path id="combo shape" fillRule="evenodd" clipRule="evenodd"
                                  d="M22.0001 20.1667C26.0502 20.1667 29.3334 16.8834 29.3334 12.8333C29.3334 8.78325 26.0502 5.5 22.0001 5.5C17.95 5.5 14.6667 8.78325 14.6667 12.8333C14.6667 16.8834 17.95 20.1667 22.0001 20.1667ZM22.0001 38.5C29.0877 38.5 34.8334 35.2168 34.8334 31.1667C34.8334 27.1166 29.0877 23.8333 22.0001 23.8333C14.9124 23.8333 9.16675 27.1166 9.16675 31.1667C9.16675 35.2168 14.9124 38.5 22.0001 38.5Z"
                                  fill="white"/>
                        </g>
                    </g>
                </svg>
                <div className={styles.tab__userInfo}>
                    <Link to="/profile" className={styles.tab__userTitle}>Алесястар</Link>
                    <Link to="/profile" className={styles.tab__userSubTitle}>sergeykrash01</Link>
                </div>
            </div>

            <div className={styles.tab__aside}>
                <div className={styles.tab__asideText}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 851212065">
                            <rect width="30" height="30" rx="6" fill="#5458EA"/>
                            <g id="Heart">
                                <path id="Vector"
                                      d="M25 11.71C25 13.13 24.45 14.46 23.45 15.46L15.6 23.31C15.56 23.35 15.45 23.44 15.4 23.47C15.28 23.55 15.14 23.59 15 23.59C14.86 23.59 14.71 23.55 14.59 23.47C14.53 23.43 14.48 23.39 14.42 23.33L6.56 15.46C5.55 14.46 5 13.13 5 11.71C5 10.29 5.55 8.96004 6.56 7.96004C8.63 5.90004 11.99 5.90004 14.06 7.96004L15 8.91004L15.95 7.96004C18.02 5.90004 21.38 5.90004 23.44 7.96004C24.45 8.96004 25 10.29 25 11.71Z"
                                      fill="white"/>
                            </g>
                        </g>
                    </svg>
                    <Link to="/favorite" className={styles.tab__text}>Понравившиеся</Link>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Huge-icon/arrows/outline/direction-right 01">
                        <path id="Vector 175" d="M10 7L14 12L10 17" stroke="#494949" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            </div>

            <div className={styles.tab__aside}>
                <div className={styles.tab__asideText}>
                    <svg className={styles.tab__store} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Huge-Icon/ecommerce/solid/store">
                            <g id="store">
                                <path id="Combo shape" fillRule="evenodd" clipRule="evenodd"
                                      d="M7.23122 2H16.7687C18.5861 2 20.2203 3.24475 20.8953 5.14305L21.6533 7.27487C21.8827 7.92019 22.0413 8.61074 21.8739 9.27488C21.4776 10.8478 20.1917 12 18.6666 12C16.8257 12 15.3333 10.3211 15.3333 8.25C15.3333 10.3211 13.8409 12 12 12C10.159 12 8.66663 10.3211 8.66663 8.25C8.66663 10.3211 7.17424 12 5.3333 12C3.8082 12 2.52232 10.8478 2.12598 9.27488C1.95862 8.61074 2.11723 7.92019 2.34667 7.27487L3.10466 5.14305C3.7796 3.24476 5.41387 2 7.23122 2ZM4 13.3002V17.9997C4 20.2088 5.79086 21.9997 8 21.9997H16C18.2091 21.9997 20 20.2088 20 17.9997V13.3003C19.5812 13.4295 19.1348 13.4997 18.6667 13.4997C17.3296 13.4997 16.1772 12.937 15.3334 12.0557C14.4896 12.937 13.3372 13.4997 12.0001 13.4997C10.6629 13.4997 9.51056 12.937 8.66674 12.0557C7.82292 12.937 6.67053 13.4997 5.3334 13.4997C4.86527 13.4997 4.41887 13.4295 4 13.3002ZM15.6532 16.6312C15.8566 16.992 15.729 17.4495 15.3682 17.6529C14.1531 18.338 13.1064 18.7474 12.0027 18.7496C10.8977 18.7517 9.84898 18.3455 8.62904 17.6515C8.269 17.4466 8.14317 16.9887 8.34799 16.6287C8.5528 16.2687 9.0107 16.1429 9.37074 16.3477C10.5069 16.994 11.282 17.2509 11.9998 17.2496C12.719 17.2482 13.4943 16.9874 14.6315 16.3462C14.9924 16.1428 15.4498 16.2704 15.6532 16.6312Z"
                                      fill="white"/>
                            </g>
                        </g>
                    </svg>

                    <Link to="/products" className={styles.tab__text}>Мои товары</Link>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Huge-icon/arrows/outline/direction-right 01">
                        <path id="Vector 175" d="M10 7L14 12L10 17" stroke="#494949" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            </div>

            <div className={styles.tab__aside}>
                <div className={styles.tab__asideText}>
                    <svg className={styles.tab__store} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Huge-Icon/ecommerce/solid/store">
                            <g id="store">
                                <path id="Combo shape" fillRule="evenodd" clipRule="evenodd"
                                      d="M7.23122 2H16.7687C18.5861 2 20.2203 3.24475 20.8953 5.14305L21.6533 7.27487C21.8827 7.92019 22.0413 8.61074 21.8739 9.27488C21.4776 10.8478 20.1917 12 18.6666 12C16.8257 12 15.3333 10.3211 15.3333 8.25C15.3333 10.3211 13.8409 12 12 12C10.159 12 8.66663 10.3211 8.66663 8.25C8.66663 10.3211 7.17424 12 5.3333 12C3.8082 12 2.52232 10.8478 2.12598 9.27488C1.95862 8.61074 2.11723 7.92019 2.34667 7.27487L3.10466 5.14305C3.7796 3.24476 5.41387 2 7.23122 2ZM4 13.3002V17.9997C4 20.2088 5.79086 21.9997 8 21.9997H16C18.2091 21.9997 20 20.2088 20 17.9997V13.3003C19.5812 13.4295 19.1348 13.4997 18.6667 13.4997C17.3296 13.4997 16.1772 12.937 15.3334 12.0557C14.4896 12.937 13.3372 13.4997 12.0001 13.4997C10.6629 13.4997 9.51056 12.937 8.66674 12.0557C7.82292 12.937 6.67053 13.4997 5.3334 13.4997C4.86527 13.4997 4.41887 13.4295 4 13.3002ZM15.6532 16.6312C15.8566 16.992 15.729 17.4495 15.3682 17.6529C14.1531 18.338 13.1064 18.7474 12.0027 18.7496C10.8977 18.7517 9.84898 18.3455 8.62904 17.6515C8.269 17.4466 8.14317 16.9887 8.34799 16.6287C8.5528 16.2687 9.0107 16.1429 9.37074 16.3477C10.5069 16.994 11.282 17.2509 11.9998 17.2496C12.719 17.2482 13.4943 16.9874 14.6315 16.3462C14.9924 16.1428 15.4498 16.2704 15.6532 16.6312Z"
                                      fill="white"/>
                            </g>
                        </g>
                    </svg>
                    <Link to="/main" className={styles.tab__text}>Главная страница</Link>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Huge-icon/arrows/outline/direction-right 01">
                        <path id="Vector 175" d="M10 7L14 12L10 17" stroke="#494949" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            </div>

            <div className={styles.tab__aside}>
                <div className={styles.tab__asideText}>
                    <svg className={styles.tab__logout} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Huge-icon/interface/solid/logout 01">
                            <g id="logout">
                                <path id="combo shape" fillRule="evenodd" clipRule="evenodd"
                                      d="M6.47458 2.71649C8.16252 1.59119 10.3797 2.62284 10.7085 4.51759H14C15.5188 4.51759 16.75 5.74881 16.75 7.26759C16.75 7.6818 16.4142 8.01759 16 8.01759C15.5858 8.01759 15.25 7.6818 15.25 7.26759C15.25 6.57723 14.6904 6.01759 14 6.01759H10.75V18.5176H14C14.6904 18.5176 15.25 17.9579 15.25 17.2676C15.25 16.8534 15.5858 16.5176 16 16.5176C16.4142 16.5176 16.75 16.8534 16.75 17.2676C16.75 18.7864 15.5188 20.0176 14 20.0176H10.7085C10.3797 21.9123 8.16252 22.944 6.47458 21.8187L4.47457 20.4854C3.70953 19.9753 3.25 19.1167 3.25 18.1972V6.33796C3.25 5.41849 3.70953 4.55985 4.47457 4.04982L6.47458 2.71649ZM17.4697 14.5303C17.1768 14.2374 17.1768 13.7626 17.4697 13.4697L18.1893 12.75L13 12.75C12.5858 12.75 12.25 12.4142 12.25 12C12.25 11.5858 12.5858 11.25 13 11.25L18.1893 11.25L17.4697 10.5303C17.1768 10.2374 17.1768 9.76256 17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967L19.8232 10.7626C20.5066 11.446 20.5066 12.554 19.8232 13.2374L18.5303 14.5303C18.2374 14.8232 17.7626 14.8232 17.4697 14.5303Z"
                                      fill="white"/>
                            </g>
                        </g>
                    </svg>
                    <p onClick={logOut} className={styles.tab__text}>Выйти</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Huge-icon/arrows/outline/direction-right 01">
                        <path id="Vector 175" d="M10 7L14 12L10 17" stroke="#494949" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Layout;
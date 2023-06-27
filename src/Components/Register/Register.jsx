import React from 'react';
import styles from "./Register.module.css";
import logo from "../../images/loginPageLeft.png";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {authUserData} from "../../redux/reducers/authSlice";

const Register = () => {

    const {data, status, error} = useSelector((store) => store.authSlice)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onChange"
    })

    const handleSubmitRegister = (data) => {
        const username = data.username
        const email = data.email
       dispatch(authUserData({username, email}))
    }


    const arrowReturn = () => {
        return navigate(-1)
            }


    if (status === 'done') {
        return navigate("/")
    }
    return (
        <div>
            <div className={styles.loginPage}>
                <div>
                    <img style={{width: "720px", height: "100vh"}} src={logo} alt="Logo"/>
                </div>
                <div className={styles.loginPage__right}>
                    <div className={styles.top}>
                        <div className={styles.top__arrowReturn} onClick={arrowReturn}>
                            <svg className={styles.top__arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className={styles.top__text}>Назад</p>
                        </div>
                        <h2 className={styles.title__register}>Регистрация</h2>
                    </div>
                    {
                        status === 'error' ? <div className={styles.title__text}>
                            <svg className="svg" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12ZM11.5 17C11.5 16.4477 11.9477 16 12.5 16C13.0523 16 13.5 16.4477 13.5 17C13.5 17.5523 13.0523 18 12.5 18C11.9477 18 11.5 17.5523 11.5 17ZM11.75 14C11.75 14.4142 12.0858 14.75 12.5 14.75C12.9142 14.75 13.25 14.4142 13.25 14L13.25 7C13.25 6.58579 12.9142 6.25 12.5 6.25C12.0858 6.25 11.75 6.58579 11.75 7L11.75 14Z" fill="white"/>
                            </svg>
                            <h2 className={styles.title__errorMessage}>Данный пользователь уже зарегистрирован</h2>
                        </div> : ""
                    }
                    <form noValidate className={styles.form} onSubmit={handleSubmit(handleSubmitRegister)}>
                        <label className={styles.form__label}>
                            <p className={styles.register__labelErrorUser}>
                                {errors.username && errors.username?.message}
                            </p>
                            <input {...register("username", {
                                required: {
                                    message: "Имя пользователя обязательно к заполнению",
                                    value: true
                                },
                                minLength: {
                                    message: "Минимум 2 символа",
                                    value: 2
                                },
                                pattern: {
                                    message: "Напишите правильно свое имя пользователя",
                                    value: /^[а-яА-ЯёЁa-zA-Z]+$/
                                }
                            })} className={styles.form__labelInput} type="text" placeholder="Имя пользователя"/>

                        </label>

                        <label className={styles.form__label}>

                            <p className={`${styles.email__labelError} ${styles.error__email}`}>
                                {errors.email && errors.email?.message}
                            </p>
                            <input {...register("email", {
                                required: {
                                    message: "Email обязателен к заполнению",
                                    value: true
                                },
                                minLength: {
                                    message: "Минимум 10 символов",
                                    value: 10
                                },
                                pattern: {
                                    message: "Напишите правильно свой Email",
                                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                }
                            })} className={`${styles.form__labelInput} ${styles.email}`} type="email" placeholder="Электронная почта"/>

                        </label>

                        <button onClick={()=>navigate("/password")} type="submit" className={styles.form__btn}>Далее</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Register;
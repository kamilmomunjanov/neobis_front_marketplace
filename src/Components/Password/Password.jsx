import React,{useState, useRef} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Password.module.css";
import logo from "../../images/loginPageLeft.png";
import {authUserData} from "../../redux/reducers/authSlice";
import {passwordRegister} from "../../redux/reducers/passwordSlice";

const Password = () => {
    const [passwordView, setPasswordView] = useState(false)
    const {data, status, error} = useSelector((store) => store.passwordSlice)
    const user = useSelector((store) => store.authSlice)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const password = useRef()


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


    const handleSubmitPassword = (data) => {
        const password1 = data.password
        const password2 = data.passwordRepeat

        dispatch(passwordRegister({password1, password2, user_id: user._data.user_id}))
    }

    const viewPassword = () => {
        setPasswordView(prevState => !prevState)
    }

    const arrowReturn = () => {
        return navigate(-1)
    }

    password.current = watch("password")


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

                    <form noValidate className={styles.form} onSubmit={handleSubmit(handleSubmitPassword)}>
                        <div className={styles.instruction}>
                            <svg className={styles.instructionSvg}  width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.5 13.5C17.5 9.91015 20.4101 7 24 7C27.5899 7 30.5 9.91015 30.5 13.5V16H17.5V13.5ZM14.5 16.1404V13.5C14.5 8.25329 18.7533 4 24 4C29.2467 4 33.5 8.2533 33.5 13.5V16.1404C37.2013 16.8425 40 20.0944 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 20.0944 10.7987 16.8425 14.5 16.1404ZM24 26.5C24.8284 26.5 25.5 27.1716 25.5 28V32C25.5 32.8284 24.8284 33.5 24 33.5C23.1716 33.5 22.5 32.8284 22.5 32V28C22.5 27.1716 23.1716 26.5 24 26.5Z" fill="white" fillOpacity="0.5"/>
                            </svg>

                            {
                                location.pathname === "/password/repeat"
                                    ? <h3 className={styles.instructionTitle}>Повторите пароль</h3>
                                    : <h3 className={styles.instructionTitle}>Придумайте пароль</h3>
                            }
                            <p className={styles.instructionSubTitle}>
                                Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.
                            </p>
                        </div>
                        <label className={styles.form__label}>
                            <p className={`${styles.register__labelError} ${styles.error__password}`}>
                                {errors.password && errors.password?.message}
                            </p>
                            <div className={`${styles.form__labelField} ${styles.password}`}>
                                <input {...register("password", {
                                    required: {
                                        message: "Пароль обязателен к заполнению",
                                        value: true
                                    },
                                    pattern: {
                                        message: "Пароль должен содержать не менее 8 символов, заглавную букву, число",
                                        value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                    }
                                })} className={styles.form__labelInput} type={passwordView ? "text" : "password"} placeholder="Пароль"/>

                                <span onClick={viewPassword} className="form__label-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.6429 17.7036C15.2337 18.4709 13.66 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C3.69953 8.98001 4.78196 7.97414 6.04468 7.10534L3.46967 4.53033ZM9.41536 10.476C9.15145 10.9227 9 11.4436 9 12C9 13.6569 10.3431 15 12 15C12.5564 15 13.0773 14.8486 13.524 14.5846L9.41536 10.476ZM12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C20.6902 14.6099 20.1791 15.1103 19.6078 15.6077L9.4127 5.41264C10.2422 5.15256 11.1086 5 12 5Z"
                                      fill="#C0C0C0"/>
                            </svg>
                        </span>
                            </div>
                        </label>
                        {
                            location.pathname === "/password/repeat"  && <label className={styles.form__label}>
                                <p className={`${styles.register__labelError} ${styles.error__password}`}>
                                    {errors.password && errors.password?.message}
                                </p>
                                <div className={`${styles.form__labelField} ${styles.passwordRep}`}>
                                    <input {...register("passwordRepeat", {
                                        validate: value =>
                                            value === password.current || "Неверно введён пароль"
                                    })} className={styles.form__labelInput} type={passwordView ? "text" : "password"} placeholder="Пароль"/>

                                    <span onClick={viewPassword} className="form__label-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.6429 17.7036C15.2337 18.4709 13.66 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C3.69953 8.98001 4.78196 7.97414 6.04468 7.10534L3.46967 4.53033ZM9.41536 10.476C9.15145 10.9227 9 11.4436 9 12C9 13.6569 10.3431 15 12 15C12.5564 15 13.0773 14.8486 13.524 14.5846L9.41536 10.476ZM12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C20.6902 14.6099 20.1791 15.1103 19.6078 15.6077L9.4127 5.41264C10.2422 5.15256 11.1086 5 12 5Z"
                                      fill="#C0C0C0"/>
                            </svg>
                        </span>
                                </div>
                            </label>
                        }

                        <button onClick={()=>navigate("/password/repeat")} type="submit" className={styles.form__btn}>Далее</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Password;
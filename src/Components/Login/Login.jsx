import React,{useState} from 'react';
import logo from "../../images/loginPageLeft.png";
import {useForm} from "react-hook-form";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import  {loginUserData} from "../../redux/reducers/loginSlice";

import "./Login.css";

const Login = () => {

    const [passwordView, setPasswordView] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {data, status, error} = useSelector((store) => store.loginSlice)


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

    const handleSubmitLogin = (data) => {

        const username = data.username
        const password = data.password
        const dataLogin = dispatch(loginUserData({username, password}))
        if ("token" in dataLogin) {
            window.localStorage.setItem("token", data.token)
        }else if(!data){
                    return console.log("Не удалось авторизоваться")
                }
    }



    const viewPassword = () => {
        setPasswordView(prevState => !prevState)
    }

    // if (status === 'done') {
    //     return <Navigate to='/'/>
    // }
    if (status === 'done') {
        return navigate("/profile")
    }

    return (
        <div className="loginPage">
            <div className="loginPage__left">
                <img style={{width: "720px", height: "100vh"}} src={logo} alt="Logo"/>
            </div>
            <div className="loginPage__right">
                {
                    status === 'error' ? <div className="title">
                        <svg className="svg" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12ZM11.5 17C11.5 16.4477 11.9477 16 12.5 16C13.0523 16 13.5 16.4477 13.5 17C13.5 17.5523 13.0523 18 12.5 18C11.9477 18 11.5 17.5523 11.5 17ZM11.75 14C11.75 14.4142 12.0858 14.75 12.5 14.75C12.9142 14.75 13.25 14.4142 13.25 14L13.25 7C13.25 6.58579 12.9142 6.25 12.5 6.25C12.0858 6.25 11.75 6.58579 11.75 7L11.75 14Z" fill="white"/>
                        </svg>
                        <h2 className="title__errorMessage">Неверный логин или пароль</h2>
                    </div> : ""
                }
                <form noValidate onSubmit={handleSubmit(handleSubmitLogin)} className="form">
                    <label className="form__label">
                        <p className="register__label-error-user">
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
                        })} className="form__label-input" type="text" placeholder="Имя пользователя"/>

                    </label>

                    <label className="form__label">
                        <p className="register__label-error error__password">
                            {errors.password && errors.password?.message}
                        </p>
                        <div className="form__label-field password">
                            <input {...register("password", {
                                required: {
                                    message: "Пароль обязателен к заполнению",
                                    value: true
                                },
                                pattern: {
                                    message: "Пароль должен содержать не менее 8 символов, заглавную букву, число",
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                }
                            })} className="form__label-input" type={passwordView ? "text" : "password"} placeholder="Пароль"/>

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

                    <button  type="submit" className="form__btn">Войти</button>
                </form>

                <Link to="/register" className="register__btn">Зарегистрироваться</Link>
            </div>
        </div>
    );
};

export default Login;
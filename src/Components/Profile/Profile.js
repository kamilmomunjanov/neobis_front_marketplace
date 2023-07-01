import React,{useState,useEffect} from 'react';
import styles from "./Profile.module.css";
import Layout from "../Layout/Layout";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import InputMask from "react-input-mask";
import TelNumberModal from "./TelNumberModal";
import {formPutUSerData, formUserData} from "../../redux/reducers/formGetDataUser";
import axios from "axios";
import {loginUserData} from "../../redux/reducers/loginSlice";


const Profile = () => {

    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const {data, status, error} = useSelector((store) => store.formSlice)
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

    useEffect(()=>{
        dispatch(formUserData())
    },[])

    // useEffect(()=>{
    //     axios("http://68.183.79.205:8000/form/",{
    //         headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("token") }
    //     }).then((res) => console.log(res.data))
    // },[])

    const handleSubmitForm = (data) => {
        console.log(data)
        const name = data.first_name
        const surname = data.last_name
        const date = data.birth_date

        dispatch(formPutUSerData({name,surname,date}))
    }





    const arrowReturn = () => {
        return navigate(-1)
    }

    // if (status === 'done') {
    //     return alert("Done")
    // }

    return (
        <div className={styles.profilePage}>
            <Layout/>
            <div className={styles.loginPage__right}>

                <form noValidate className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className={styles.top}>
                        <div className={styles.top__arrowReturn} onClick={arrowReturn}>
                            <svg className={styles.top__arrow} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#1D1D1F" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className={styles.top__text}>Назад</p>
                        </div>
                        <h2 className={styles.title__register}>Профиль</h2>
                    </div>
                    <div className={styles.instruction}>
                        <svg className={styles.instructionSvg} width="80" height="80" viewBox="0 0 44 44" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="Huge-icon/user/solid/user">
                                <g id="user">
                                    <path id="combo shape" fillRule="evenodd" clipRule="evenodd"
                                          d="M22.0001 20.1667C26.0502 20.1667 29.3334 16.8834 29.3334 12.8333C29.3334 8.78325 26.0502 5.5 22.0001 5.5C17.95 5.5 14.6667 8.78325 14.6667 12.8333C14.6667 16.8834 17.95 20.1667 22.0001 20.1667ZM22.0001 38.5C29.0877 38.5 34.8334 35.2168 34.8334 31.1667C34.8334 27.1166 29.0877 23.8333 22.0001 23.8333C14.9124 23.8333 9.16675 27.1166 9.16675 31.1667C9.16675 35.2168 14.9124 38.5 22.0001 38.5Z"
                                          fill="white"/>
                                </g>
                            </g>
                        </svg>

                        <h3 className={styles.instructionTitle}>Выбрать фотографию</h3>
                    </div>
                    <label className={styles.form__label}>
                        <input {...register("first_name", {
                            required: {
                                message: "Имя обязательно к заполнению",
                                value: true
                            },
                            minLength: {
                                message: "Минимум 2 символа",
                                value: 2
                            },
                            pattern: {
                                message: "Напишите правильно своё имя",
                                value: /^[а-яА-ЯёЁa-zA-Z]+$/
                            }
                        })} className={styles.form__labelInput} type="text" placeholder="Имя"/>
                        <p className={`${styles.register__labelError} ${styles.error__password}`}>
                            {errors.first_name && errors.first_name?.message}
                        </p>
                    </label>

                    <label className={styles.form__label}>
                        <input {...register("last_name", {
                            required: {
                                message: "Фамилия обязательна к заполнению",
                                value: true
                            },
                            minLength: {
                                message: "Минимум 2 символа",
                                value: 2
                            },
                            pattern: {
                                message: "Напишите правильно своё имя",
                                value: /^[а-яА-ЯёЁa-zA-Z]+$/
                            }
                        })} className={styles.form__labelInput} type="text" placeholder="Фамилия"/>
                        <p className={`${styles.register__labelError} ${styles.error__password}`}>
                            {errors.last_name && errors.last_name?.message}
                        </p>
                    </label>

                    <label className={styles.form__label}>
                        <input className={styles.form__labelInput} type="text" placeholder="Username"/>

                    </label>

                    <label className={styles.form__label}>
                        <p className={`${styles.register__labelError} ${styles.error__password}`}>
                            {errors.birthday && errors.birthday?.message}
                        </p>
                        <input {...register("birth_date", {
                            required: {
                                message: "Напишите дату рождения",
                                value: true
                            },
                            pattern: {
                                message: "Напишите правильно свою дату рождения",
                                value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
                            }
                        })} className={styles.form__labelInput} type="date" placeholder="Дата рождения"/>

                    </label>

                    <Link onClick={()=>setModal(true)} className={styles.form__telInput}>Добавьте номер</Link>

                    <TelNumberModal handleSubmit={handleSubmit} modal={modal} setModal={setModal}>
                        <h4 className={styles.modal__title}>Изменить номер телефона</h4>
                        <svg className={styles.modal__svg} width="60" height="60" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.5 38V34.7081C42.5 33.0725 41.5042 31.6017 39.9856 30.9942L35.9173 29.3669C33.9857 28.5943 31.7844 29.4312 30.854 31.292L30.5 32C30.5 32 25.5 31 21.5 27C17.5 23 16.5 18 16.5 18L17.208 17.646C19.0688 16.7156 19.9057 14.5143 19.1331 12.5827L17.5058 8.51444C16.8983 6.99581 15.4275 6 13.7919 6H10.5C8.29086 6 6.5 7.79086 6.5 10C6.5 27.6731 20.8269 42 38.5 42C40.7091 42 42.5 40.2091 42.5 38Z" fill="white" fillOpacity="0.5" stroke="white" strokeOpacity="0.7" strokeLinejoin="round"/>
                        </svg>
                        <p className={styles.modal__subtitle}>Введите номер телефона</p>
                        <span className={styles.modal__text}>Мы отправим вам СМС с кодом подтверждения</span>

                        <label className={styles.form__label}>
                            <p className={`${styles.register__labelError} ${styles.error__password} ${styles.email__error}`}>
                                {errors.phone && errors.phone?.message}
                            </p>
                            <InputMask mask={`+\\9\\96(999)99-99-99`} {...register("phone", {
                                required: {
                                    message: "Это поле обязательно",
                                    value: true
                                },
                                pattern: {
                                    message: "Заполните номер телефона",
                                    value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/
                                }
                            })} className={`${styles.form__labelInput} ${styles.phone}`} type="tel" placeholder="0(000)00-00-00"/>

                        </label>
                        </TelNumberModal>

                    <label className={styles.form__label}>
                        <input className={`${styles.form__labelInput} ${styles.email}`} type="email" placeholder="Email"/>
                    </label>

                    <button type="submit"
                            className={styles.form__btn}>Далее
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
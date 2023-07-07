import React, {useEffect, useRef,useState} from 'react';
import "./ModalMainPage.css";
import styles from "../Profile/Profile.module.css";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {formPutUSerData} from "../../redux/reducers/formGetDataUser";
import {productPost} from "../../redux/reducers/productsPostSlice";
import {productGet} from "../../redux/reducers/productGetSlice";

const ModalMainPage = ({modal, setModal}) => {
    const imageAddRef = useRef(null)
    const [imageUrl, setImageUrl] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data, status, error} = useSelector((store) => store.productSlice)

    const handleSubmitData = async (event) => {
        event.preventDefault()
       console.log(event.target[1].files[0])
        console.log(imageAddRef.current.files[0])
        try {

            const formData = new FormData()
            const file = event.target[1].files[0]

            const price = event.target[2].value
            const title = event.target[3].value
            const short_description = event.target[4].value
            const long_description = event.target[5].value
            const user_id = window.localStorage.getItem("user_id")
            formData.append('product_image', file)
            formData.append('price', price)
            formData.append('title', title)
            formData.append('short_description', short_description)
            formData.append('long_description', long_description)
            formData.append('user_id', user_id)

            await dispatch(productPost(formData))
            setModal(false)
            await dispatch(productGet())
        }catch (error) {
            console.warn(error)
            alert("Ошибка при загрузке файла")
        }
    }

    // const handleChangeFile = async (event) => {
    //     console.log(event.target.files[0])
        // try {
        //     const formData = new FormData()
        //     const file = event.target.files[0]
        //     formData.append("image", file)
        //     console.log(formData)
        // }catch (error) {
        //     console.warn(error)
        //     alert("Ошибка при загрузке файла")
        // }
    // }

    // if (status === 'done') {
    //     return setModal(false)
    // }

    return (
        <div className={modal ? "modalMain active" : "modalMain"} onClick={()=>setModal(false)}>
            <form onSubmit={handleSubmitData} className={modal ? "modalMain__content active" : "modalMain__content"} onClick={e=>e.stopPropagation()}>
                <div className="modal__image">
                    <div className="modalImage">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.75 6C2.75 4.20507 4.20507 2.75 6 2.75H14C14.4142 2.75 14.75 2.41421 14.75 2C14.75 1.58579 14.4142 1.25 14 1.25H6C3.37665 1.25 1.25 3.37665 1.25 6V18C1.25 20.6234 3.37665 22.75 6 22.75H18C20.6234 22.75 22.75 20.6234 22.75 18V10C22.75 9.58579 22.4142 9.25 22 9.25C21.5858 9.25 21.25 9.58579 21.25 10V13.5091C21.2049 13.473 21.158 13.4387 21.1094 13.4063L18.7285 11.819C17.142 10.7613 15.0295 10.9705 13.6812 12.3188L10.3188 15.6812C8.9705 17.0295 6.85802 17.2387 5.27153 16.181L2.75 14.5V6ZM19.75 2C19.75 1.58579 19.4142 1.25 19 1.25C18.5858 1.25 18.25 1.58579 18.25 2V4.25H16C15.5858 4.25 15.25 4.58579 15.25 5C15.25 5.41421 15.5858 5.75 16 5.75H18.25V8C18.25 8.41421 18.5858 8.75 19 8.75C19.4142 8.75 19.75 8.41421 19.75 8V5.75H22C22.4142 5.75 22.75 5.41421 22.75 5C22.75 4.58579 22.4142 4.25 22 4.25H19.75V2ZM8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z" fill="#5458EA"/>
                        </svg>
                        <button type="button" onClick={(e) => {
                            e.stopPropagation()
                            imageAddRef.current.click()
                        }} className="modalImage__text">Добавить <p>фото</p></button>
                        <input ref={imageAddRef}  type="file" hidden/>
                    </div>
                    <div className="modalImage">
                        <img className="img" src={"https://res.cloudinary.com/dgoklnosr/image/upload/v1/media/products/2023/06/26/20200818_184825_dn0xiy"} alt=""/>
                    </div>
                </div>
                <div className="modal__input">
                    <input className="modal__inputText" type="text" placeholder="Цена"/>
                    <input className="modal__inputText" type="text" placeholder="Название"/>
                    <input className="modal__inputText" type="text" placeholder="Краткое описание"/>
                    <input className="modal__inputText" type="text" placeholder="Полное описание"/>
                </div>
                <div className="modal__button">
                    <button type="submit" className="modal__btn-add" onClick={e=>e.stopPropagation()}>Добавить</button>
                </div>
            </form>
        </div>
    );
};

export default ModalMainPage;
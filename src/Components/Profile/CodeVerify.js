import React,{useState} from 'react';
import { usePinInput, PinInputActions } from 'react-pin-input-hook';
import "./modal.css";
import styles from "./Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {codeVerify} from "../../redux/reducers/codeVerifySlice";
import {useNavigate} from "react-router-dom";
import Profile from "./Profile";
import {statusChange} from "../../redux/reducers/phoneVerify";

const CodeVerify = ({modal, setModal}) => {

    const {data, status, error} = useSelector((store) => store.codeSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState(Array(4).fill(''))
    const { fields } = usePinInput({
        values,
        onChange: setValues,

    })

    const codeSend = async(e) => {
        e.preventDefault()
        const code = values.join("")
       await dispatch(codeVerify({code}))
        if(status === "done") {
       await setModal(false)
            await setValues(["","","",""])
            await dispatch(statusChange())
        }
    }
    console.log(values.join(""))





    return (
        <div className={modal ? "modal active" : "modal"} onClick={()=>setModal(false)}>
            <div className={modal ? "modal__content active" : "modal__content"} onClick={e=>e.stopPropagation()}>
                <h4 className={styles.modal__title}>Изменить номер телефона</h4>
                <svg className={styles.modal__svg} width="60" height="60" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Huge-icon/user/solid/user">
                        <g id="user">
                            <path id="combo shape" fillRule="evenodd" clipRule="evenodd" d="M22.0001 20.1667C26.0502 20.1667 29.3334 16.8834 29.3334 12.8333C29.3334 8.78325 26.0502 5.5 22.0001 5.5C17.95 5.5 14.6667 8.78325 14.6667 12.8333C14.6667 16.8834 17.95 20.1667 22.0001 20.1667ZM22.0001 38.5C29.0877 38.5 34.8334 35.2168 34.8334 31.1667C34.8334 27.1166 29.0877 23.8333 22.0001 23.8333C14.9124 23.8333 9.16675 27.1166 9.16675 31.1667C9.16675 35.2168 14.9124 38.5 22.0001 38.5Z" fill="white"/>
                        </g>
                    </g>
                </svg>

                <p className={styles.modal__subtitle}>Введите код из смс</p>

                    <div className='pin-input'>
                        {fields.map((propsField, index) => (
                            <input key={index} className='pin-input__field' {...propsField} />
                        ))}
                    </div>


                <button onClick={codeSend} className="modal__btn">Далее</button>
            </div>
        </div>
    );
};

export default CodeVerify;
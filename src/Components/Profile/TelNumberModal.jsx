import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./modal.css";
import {phoneVerify} from "../../redux/reducers/phoneVerify";
import {useNavigate} from "react-router-dom";
import CodeVerify from "./CodeVerify";

const TelNumberModal = ({modal, setModal, handleSubmit, children}) => {

    const {data, status, error} = useSelector((store) => store.phoneSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmitPhone = ({phone}) => {
        const phone_num = phone
        const phone_number = phone_num.split("-").join("")
        const code = "stri"
        dispatch(phoneVerify({phone_number, code}))
    }


    if (status === 'done') {
        return <CodeVerify modal={modal} setModal={setModal}/>
    }

    return (
        <div className={modal ? "modal active" : "modal"} onClick={()=>setModal(false)}>
            <div className={modal ? "modal__content active" : "modal__content"} onClick={e=>e.stopPropagation()}>
                {children}
                <button className="modal__btn" onClick={handleSubmit(handleSubmitPhone, (error) => console.log(error))}>Далее</button>
            </div>
        </div>
    );
};

export default TelNumberModal;
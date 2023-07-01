import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./modal.css";
import {phoneVerify} from "../../redux/reducers/phoneVerify";

const TelNumberModal = ({modal, setModal, handleSubmit, children}) => {

    const {data, status, error} = useSelector((store) => store.phoneSlice)
    const dispatch = useDispatch()

    const handleSubmitPhone = (data) =>{
        data.preventDefault()
        const phone_number = data.phone
        const code = "stri"
        dispatch(phoneVerify({phone_number, code}))
    }



    return (
        <div className={modal ? "modal active" : "modal"} onClick={()=>setModal(false)}>
            <form onSubmit={handleSubmit(handleSubmitPhone)} className={modal ? "modal__content active" : "modal__content"} onClick={e=>e.stopPropagation()}>
                {children}
            </form>
        </div>
    );
};

export default TelNumberModal;
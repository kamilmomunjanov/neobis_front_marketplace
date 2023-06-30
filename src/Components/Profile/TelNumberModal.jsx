import React from 'react';
import styles from "./Profile.module.css";
import InputMask from "react-input-mask";
import "./modal.css";

const TelNumberModal = ({register, errors, modal, setModal, children}) => {
    return (
        <div className={modal ? "modal active" : "modal"} onClick={()=>setModal(false)}>
            <form className={modal ? "modal__content active" : "modal__content"} onClick={e=>e.stopPropagation()}>
                {children}
            </form>
        </div>
    );
};

export default TelNumberModal;
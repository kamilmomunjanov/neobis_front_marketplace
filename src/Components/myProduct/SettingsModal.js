import React, {useState} from 'react';
import create from "./myProduct.module.css";
import ChangeModalProduct from "./ChangeModalProduct";
import DeleteProduct from "./DeleteProduct";

const SettingsModal = ({item, modal, setModal}) => {
    const [changeModalProduct, setChangeModalProduct] = useState(false)
    return (
        <div className={modal ? `${create.content__settingsActive}`: `${create.content__settings}`}>
            <div className={create.card__change}>
                <svg className={create.cardSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.419 3.67708C16.3218 2.77431 17.7855 2.77431 18.6883 3.67708L20.3229 5.31171C21.2257 6.21449 21.2257 7.67818 20.3229 8.58096L18.8736 10.0303C18.7598 9.97394 18.6401 9.91302 18.516 9.84767C17.6806 9.40786 16.6892 8.79057 15.9493 8.05069C15.2095 7.31082 14.5922 6.31945 14.1524 5.48403C14.087 5.35989 14.0261 5.24018 13.9697 5.12639L15.419 3.67708ZM14.8887 9.11135C15.7642 9.98687 16.8777 10.6759 17.7595 11.1444L12.06 16.8438C11.7064 17.1975 11.2475 17.4269 10.7523 17.4977L7.31963 17.9881C6.5568 18.097 5.90295 17.4432 6.01193 16.6804L6.50231 13.2477C6.57305 12.7525 6.80248 12.2936 7.15616 11.94L12.8556 6.24053C13.3241 7.12234 14.0131 8.23582 14.8887 9.11135ZM3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" fill="white"/>
                </svg>
                <p onClick={() => setChangeModalProduct(true)} className={create.cardText}>Изменить</p>
                <ChangeModalProduct setModal={setModal} item={item} changeModalProduct={changeModalProduct} setChangeModalProduct={setChangeModalProduct}/>
            </div>
            <div className={create.card__change}>
                <svg className={create.cardSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.40627 2.8906C9.7772 2.3342 10.4017 2 11.0704 2H12.9296C13.5983 2 14.2228 2.3342 14.5937 2.8906L15.5 4.25H19.25C19.6642 4.25 20 4.58579 20 5C20 5.41421 19.6642 5.75 19.25 5.75H4.75C4.33579 5.75 4 5.41421 4 5C4 4.58579 4.33579 4.25 4.75 4.25H8.5L9.40627 2.8906ZM15 22H9C6.79086 22 5 20.2091 5 18V7H19V18C19 20.2091 17.2091 22 15 22ZM10 10.25C10.4142 10.25 10.75 10.5858 10.75 11V18C10.75 18.4142 10.4142 18.75 10 18.75C9.58579 18.75 9.25 18.4142 9.25 18L9.25 11C9.25 10.5858 9.58579 10.25 10 10.25ZM14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V18C14.75 18.4142 14.4142 18.75 14 18.75C13.5858 18.75 13.25 18.4142 13.25 18V11C13.25 10.5858 13.5858 10.25 14 10.25Z" fill="white"/>
                </svg>
                <p onClick={() => setChangeModalProduct(true)} className={create.cardText}>Удалить</p>
                <DeleteProduct setModal={setModal} item={item} changeModalProduct={changeModalProduct} setChangeModalProduct={setChangeModalProduct}/>
            </div>
            <button className={create.close} onClick={()=>setModal(false)}>X</button>
        </div>
    );
};

export default SettingsModal;
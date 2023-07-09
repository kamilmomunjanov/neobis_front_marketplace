import React, {useState} from 'react';
import create from "./myProduct.module.css";
import SettingsModal from "./SettingsModal";


const MyOneProducts = ({item, }) => {
    const [modal, setModal] = useState(false)
    return (
        <div className={create.content__card} >
            <img className={create.cardImg}
                 src={
                     item.product_image || "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                 }
                 alt="foto"/>
            <h4 className={create.cardTitle}>{item.title}</h4>
            <p className={create.cardSubtitle}>{item.price}$</p>
            <div className={create.cardLikes}>
                <div className={create.card__likes}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 8.71004C22 10.13 21.45 11.46 20.45 12.46L12.6 20.31C12.56 20.35 12.45 20.44 12.4 20.47C12.28 20.55 12.14 20.59 12 20.59C11.86 20.59 11.71 20.55 11.59 20.47C11.53 20.43 11.48 20.39 11.42 20.33L3.56 12.46C2.55 11.46 2 10.13 2 8.71004C2 7.29004 2.55 5.96004 3.56 4.96004C5.63 2.90004 8.99 2.90004 11.06 4.96004L12 5.91004L12.95 4.96004C15.02 2.90004 18.38 2.90004 20.44 4.96004C21.45 5.96004 22 7.29004 22 8.71004Z" fill="#C0C0C0"/>
                    </svg>
                    <p className={create.cardLikes}>{item.likes_count}</p>
                </div>
                <svg onClick={()=>setModal(true)} className={create.settingsButton} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11 6.25C11 5.55964 11.5596 5 12.25 5C12.9404 5 13.5 5.55964 13.5 6.25C13.5 6.94036 12.9404 7.5 12.25 7.5C11.5596 7.5 11 6.94036 11 6.25ZM11 11.25C11 10.5596 11.5596 10 12.25 10C12.9404 10 13.5 10.5596 13.5 11.25C13.5 11.9404 12.9404 12.5 12.25 12.5C11.5596 12.5 11 11.9404 11 11.25ZM12.25 15C11.5596 15 11 15.5596 11 16.25C11 16.9404 11.5596 17.5 12.25 17.5C12.9404 17.5 13.5 16.9404 13.5 16.25C13.5 15.5596 12.9404 15 12.25 15Z" fill="#C0C0C0"/>
                </svg>
            </div>
            <SettingsModal item={item} modal={modal} setModal={setModal}/>
        </div>
    );
};

export default MyOneProducts;
import React, {useEffect} from 'react';
import "./ChangeProduct.css";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {changeMyProduct, myProductGet} from "../../redux/reducers/myProductSlice";

const ChangeModalProduct = ({item, setChangeModalProduct, changeModalProduct,setModal}) => {
    const {data, status, error} = useSelector((store) => store.myProductGetSlice)

    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm({values: item,})


    const changeSubmit = async (data) => {
   const newData = {
       title:data.title,
       price:data.price,
       short_description:data.short_description,
       long_description:data.long_description,
   }
        await dispatch(changeMyProduct({data:newData,id:item.id}))
        await dispatch( myProductGet())
        await setChangeModalProduct(false)
        await setModal(false)

    }

    return (
        <div>
            <div onClick={() => setChangeModalProduct(false)}
                 className={changeModalProduct ? "modals active" : "modals"}>
                <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit(changeSubmit)} className={changeModalProduct ? "modals__content active" : "modals__content"}>


                        <div className="modalsImage">
                            <img className="image"
                                 src={item.product_image}
                                 alt=""/>
                    </div>
                    <div className="modals__input">
                        <input {...register("price")} className="modals__inputText" type="text" placeholder="Цена"/>
                        <input {...register("title")} className="modals__inputText" type="text"   placeholder="Название"/>
                        <textarea {...register("short_description")} className="modals__inputText" placeholder="Краткое описание"/>
                        <textarea {...register("long_description")} className="modals__inputText" placeholder="Полное описание"/>
                    </div>


                    <div className="modals__button">
                        <button type="submit" className="modals__btn-add">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangeModalProduct;
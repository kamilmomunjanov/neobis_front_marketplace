import React from 'react';
import {useDispatch} from "react-redux";
import {deleteMyProduct, myProductGet} from "../../redux/reducers/myProductSlice";

const DeleteProduct = ({item, setChangeModalProduct, changeModalProduct, setModal}) => {
    const dispatch = useDispatch()
    const deleteProduct = async() => {
        await dispatch(deleteMyProduct(item.id))
        await dispatch(myProductGet())
        await setChangeModalProduct(false)
        await setModal(false)
    }
    return (
        <div>
            <div onClick={() => setChangeModalProduct(false)}
                 className={changeModalProduct ? "modals active" : "modals"}>
                <div onClick={(e) => e.stopPropagation()}
                     className={changeModalProduct ? "modals__content active" : "modals__content"}>

                    <div className="modals__button">
                        <button onClick={deleteProduct} type="button" className="modals__btn-add">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;
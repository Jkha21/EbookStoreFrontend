import { useEffect, useState } from 'react';
import './SubCart.scss';
import bookIcon from '../../assets/bookicon.png'
import { removeItem } from '../../utils/Store/CartSlice';
import { useDispatch } from 'react-redux';


const SubCart = ({details}) =>{
    let {bookImage, discountPrice, _id, bookName, author, price, quantity} = details;
    const dispatch = useDispatch();
    const [qty, setQuantity] = useState(quantity);
    const handleClick =  (action) =>{
        if(action === "add"){
            setQuantity(qty + 1);
            quantity = qty;
        }else if(action === "remove" && qty>1){
            setQuantity(qty - 1);
            quantity = qty;
        }else if(action === "del"){
            dispatch(removeItem(details));
        }
    }

    return (
        <>
            <div className="ebkStore-bookDetailsOrder-cnt">
            <img src={bookImage?bookImage:bookIcon} alt="book" className="ebkStore-orderImg-cnt" />
            <div className="ebkStore-orderDetailsSubCnt-cnt">
                <span className="ebkStore-nameLabelOrder-cnt">{bookName}</span>
                <span className="ebkStore-authorLabelOrder-cnt">by {author}</span>
                <div className="ebkStore-priceOrderCnt-cnt">
                    <span className="ebkStore-finalPriceOrder-cnt">Rs {price}</span>
                    <span className="ebkStore-originalPriceOrder-cnt">Rs {price+discountPrice}</span>
                </div>
                <div className="ebkStore-quantitybtn-cnt">
                    <button className="ebkStore-removeBtn-cnt" onClick={() => handleClick("remove")}>-</button>
                    <input type="text" className="ebkStore-valInput-cnt" value={qty}/>
                    <button className="ebkStore-addBtn-cnt" onClick={() => handleClick("add")}>+</button>
                    <span className="ebkStore-removeItem-cnt" onClick={() => handleClick("del")}>Remove</span>
                </div>
            </div>
            </div>
        </>
    )
}

export default SubCart;
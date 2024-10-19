import './Cart.scss';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SubCart from './SubCart.jsx';

const Cart = () =>{
    const cartList = useSelector((store) => store.cart.cartlist);
    console.log(cartList);
    
    return (
        <>
            <div className="ebkStore-cartMainWrapper-cnt">
                <div className="ebkStore-mainWrapper-cnt">
                    <div className="ebkStore-cartMainbody-cnt">
                        <div className="ebkStore-cartHeaderLabel-cnt">
                            <span className="ebkStore-mycartlabel-cnt">My cart(1)</span>
                            <select name="location" id="location-cnt" className='ebkStore-locationDropdown-cnt'>
                                <option value="null" className='ebkStore-locationiOptionVal-cnt'>📌 Location</option>
                                <option value="null" className='ebkStore-locationiOptionVal-cnt'>Bridge</option>
                            </select>
                        </div>
                        {cartList.map(cartDetails => <SubCart details = {cartDetails}/>)}
                        <div className="ebkStore-submitCnt-cnt">
                            <button className="ebkStore-orderSubmit-cnt">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
                <CustomerDetails />
                <OrderDetails/>
                </div>
        </>
    )
}

export default Cart;
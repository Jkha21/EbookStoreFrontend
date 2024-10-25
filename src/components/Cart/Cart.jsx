import './Cart.scss';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SubCart from './SubCart.jsx';
import Login_SignUp from '../Login_SignUp/Login_SignUp.jsx'

const Cart = () =>{
    const cartList = useSelector((store) => store.cart.cartlist);
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(false);
    const [order, setOrder] = useState(false);
    let token = null;
    useEffect(() =>{
        console.log(cartList);
    }, [cartList]);
    const handleClick = () =>{
        token = localStorage.getItem("accessToken");
        token?setDetails(true):setOpen(true);
        
    }

    const handleOrder = () =>{
        setOrder(true);
    }
        
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
                        {cartList.map(cartDetails => <SubCart details = {cartDetails} key={cartDetails._id}/>)}
                        <div className="ebkStore-submitCnt-cnt">
                            <button className="ebkStore-orderSubmit-cnt" onClick={handleClick}>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
                {details?<CustomerDetails handleOrder={handleOrder}/>: 
                <div className="ebkStore-DetailsWrapper-cnt">
                    Address Details
                </div>
                }
                {order?<OrderDetails />:
                <div className="ebkStore-orderDetailsConditionWrapper-cnt">
                    Order Details
                </div>
                }
                {open&&<Login_SignUp/>}
                </div>
        </>
    )
}

export default Cart;
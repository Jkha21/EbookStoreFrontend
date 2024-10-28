import { useState } from 'react';
import { AddCustomerList, AddItem, AddOrderItems, CartList, GetOrderItems, GetOrderlist, GetWishlist, LoginUser, UpdateCartItem, WishlistAddItem, WishlistItem } from '../../utils/Api';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../utils/Store/CartSlice';
import { getWishlist } from '../../utils/Store/WishlistSlice';
import { getOrderList } from '../../utils/Store/OrderSlice';

const Login = ({handletoLogin, handleData}) =>{
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleClick = () =>{
        navigate('/forgetPwd', {replace: true});
    };
    let name = "";

    const cartReduxData = useSelector((store) => store.cart.cartlist);
    const wishlistReduxData = useSelector((store) => store.wishlist.wishlist);
    const orderReduxData = useSelector((store) => store.OrderList.orderlist);
    
    const handleLogin = async() =>{
        const token = localStorage.getItem("accessToken");
        if(!token){
            const data = await LoginUser('/login', {EmailId: emailId, Password: password});
            if(data){
                handleData(data);
                localStorage.setItem("accessToken", data.data.data.Token);
                localStorage.setItem("name", data.data.data.FullName);
                handletoLogin();
                const {FullName, EmailId, Password, MobileNo} = data.data.data;
                const customerDetails = await AddCustomerList("/addItem", {FullName, EmailId, Password, MobileNo});
                console.log(customerDetails)
                const cartResponse = (await CartList(data.data.data.Token));
                const cartData = cartResponse.data.data.length?cartResponse.data.data[0].books: [];
                if (cartData.length > 0 && cartReduxData.length > 0) {
                    console.log(cartData, cartReduxData);
                    cartData.forEach(item => {
                        const productInRedux = cartReduxData.find(product => product._id === item.bookId);
                        if (productInRedux){
                            if (productInRedux.quantity > item.quantity) {
                                UpdateCartItem("/updateItem", productInRedux);
                            } else if (item.quantity > productInRedux.quantity) {
                                dispatch(getData(item));
                            }
                        } else {
                            dispatch(getData(item));
                        }
                    });
                
                    cartReduxData.forEach(product => {
                        if (!cartData.find(item => item.bookId === product._id)) {
                            UpdateCartItem("/updateItem", product);
                        }
                    });
                } else if (cartData.length === 0 && cartReduxData) {
                    cartReduxData.forEach(product => AddItem("/addCart", product));
                    const res = await CartList(data.data.data.Token)
                    console.log(res);
                } else if (cartData && cartReduxData.length === 0) {
                    cartData.forEach(item => dispatch(getData(item)));
                }
                
    
    
                const wishlistResponse = await GetWishlist("");
                const wishlistQty = wishlistResponse.data.data.length;
                const wishlistData = wishlistQty?wishlistResponse.data.data[0].books: [];
                if (wishlistData.length > 0 && wishlistReduxData.length > 0) {
                    wishlistData.forEach(item => {
                        if (!wishlistReduxData.find(product => product._id === item._id)) {
                            dispatch(getWishlist(item));
                        }
                    });
                    wishlistReduxData.forEach(product => {
                        if (!wishlistData.find(item => item._id === product._id)) {
                            WishlistAddItem("", product);
                        }
                    });
                } else if (wishlistData.length === 0 && wishlistReduxData.length > 0) {
                    wishlistReduxData.forEach(product => WishlistAddItem("", product));
                } else if (wishlistData.length > 0 && wishlistReduxData.length === 0) {
                    wishlistData.forEach(item => dispatch(getWishlist(item)));
                }
    
    
                const orderResponse = await GetOrderlist("");
                const OrderQty = orderResponse.data.data.length;
                const orderData = OrderQty?orderResponse.data.data[0].books: [];
                if (orderData.length > 0 && orderReduxData.length > 0) {
                    orderData.forEach(item => {
                        if (!orderReduxData.find(product => product._id === item._id)) {
                            dispatch(getOrderList(item));
                        }
                    });
                    orderReduxData.forEach(product => {
                        if (!orderData.find(item => item._id === product._id)) {
                            AddOrderItems("", product);
                        }
                    });
                } else if (orderData.length === 0 && orderReduxData.length > 0) {
                    orderReduxData.forEach(product => AddOrderItems("/addItem", product));
                } else if (orderData.length > 0 && orderReduxData.length === 0) {
                    orderData.forEach(item => dispatch(getOrderList(item)));
                }
                
    
                
            }
        }
        
    }
    
    return (
        <>
            <div className="ebkStore-loginStoreCnt-cnt">
                <div className="ebkStore-emailIdCnt-cnt">
                    <span className="ebkStore-emailIdLabel-cnt">Email Id</span>
                    <input type="text" className="ebkStore-emailIdInput-cnt" onChange={(e) => setEmailId(e.target.value)}/>
                </div>
                <div className="ebkStore-passwordCnt-cnt">
                    <span className="ebkSore-passCntLogin-cnt">Password</span>
                    <input type="text" className="ebkStore-passwordInputCnt-cnt" onChange={(e) => setPassword(e.target.value)}/>
                    <div className="ebkStore-forgetPasswordCnt-cnt" onClick={handleClick}>Forget Password?</div>
                </div>
                <button className="ebkStore-loginBtn-cnt" onClick={handleLogin}>Login</button>
                <div className="ebkStore-orLabelCnt-cnt">OR</div>
                <div className="ebkStore-loginLinkCnt-cnt">
                    <button className="ebkStore-facebookLogin-cnt">Facebook</button>
                    <button className="ebkStore-googleLoginCnt-cnt">Google</button>
                </div>
            </div>
        </>
    )
}

export default Login;
import './BookDashboard.scss';
import education from '../../assets/education.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet, useNavigate } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { CartList, getAllBooks, GetOrderlist, GetWishlist } from '../../utils/Api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBooks } from '../../utils/Store/BookSlice';
import Menu from '@mui/material/Menu';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Login_SignUp from '../Login_SignUp/Login_SignUp';
import Badge from '@mui/material/Badge';
import { getCart, getData, resetCartList } from '../../utils/Store/CartSlice';
import { getWishlist, resetWishList } from '../../utils/Store/WishlistSlice';
import { getOrderList, resetOrderList } from '../../utils/Store/OrderSlice';
import Modal from '@mui/material/Modal';



const BookDashboard = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartQt = useSelector((store) => store.cart.cartlist);
    const [login, setLogin] = useState(true);
    const [open, setOpen] = useState(null);
    const [name, setName] = useState("User");
    const [target, setTarget] = useState(null);
    const [menu, setMenu] = useState(false);
    const [cartQty, setCartQty] = useState();
    const token = localStorage.getItem("accessToken");
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        fetchBooks(); 
        getData();
    }, []); 
    
    
    const getData = async() =>{
        if(token){
            setOpen(true);
            setName(localStorage.getItem("name"));
            const cartResponse = await CartList("");
            const cartLength = cartResponse.data.data.length;
            const cartlist = cartLength?cartResponse.data.data[0].books: [];
            cartlist.forEach((item) => dispatch(getCart(item)));
            setCartQty(cartQt);
            const wishlistResponse = await GetWishlist("");
            const wishlistQty = wishlistResponse.data.data.length;
            const wishlist = wishlistQty?wishlistResponse.data.data[0].books: [];
            wishlist.forEach((item) => dispatch(getWishlist(item)));
            const orderResponse = await GetOrderlist("");
            const OrderQty = orderResponse.data.data.length;
            const orderlist = OrderQty?orderResponse.data.data[0].books: [];
            orderlist.forEach((item) => dispatch(getOrderList(item)));
        }else{
            setCartQty(cartQt.length);
        }

    }

    const fetchBooks = async () => {
        try {
            const books = await getAllBooks('getallbooks');
            dispatch(getBooks(books.data.data)); 
        } catch (error) {
            console.error("Not able to get Books:", error);
        }
    };

    const handleClickModal = () =>{
        setOpenModal(!openModal);
        setOpen(true);
    }
    
    
    const handleClick = () =>{
        navigate("/cart")
    }

    const handleMenu = (event) =>{
        setMenu(!menu);
        setTarget(event.currentTarget)
    }

    const handleLogin = () =>{
        setMenu(!menu);
        setOpenModal(!openModal);
        let token = localStorage.getItem("accessToken");
        token?setOpenModal(false): setOpenModal(true);
    }
    
    const handleLogout = () =>{
        localStorage.removeItem("accessToken");
        setOpen(false);
        setMenu(!menu);
        dispatch(resetCartList());
        dispatch(resetOrderList());
        dispatch(resetWishList());
    }

    const handleClose = () =>{
        setOpenModal(false)
    }

    const handleModal = () =>{  
        if(localStorage.getItem("accessToken")){
            setOpen(!open);
        }
    }

    

    return(
        <>
        <div className="ebkStore-wrapper-cnt">
            <img src={education} alt='book' className='ebkStore-bookImg-cnt' onClick={() => navigate("/book")}/> 
            <span className='ebkStore-bookheader-cnt' onClick={() => navigate("/book")}>Bookstore</span>
            <input type="text" className="ebkStore-Search-cnt" placeholder='Search'/>
            <div className="ebkStore-profileCartlink-cnt">
                <div className="ebkStore-profile-cnt" onClick={handleMenu}>
                    < PersonOutlineOutlinedIcon />
                    <span className="ebkStore-profileHeader-cnt" >Profile</span>
                    <Menu open={menu} anchorEl={target} onClose={handleClose}>
                        {open?
                        <div className="ebkStore-profileMenuCnt-cnt">
                            <div className="ebkStore-nameLabelCntMenu-cnt">Hello, {name}</div>
                            <div className="ebkStore-profileMenuLabel-cnt" onClick={() => navigate("/profile")}>
                                <PersonOutlineOutlinedIcon className='ebkStore-profileMenuIcon-cnt'/>
                                <span className="ebkStore-profileLabelMenu-cnt">Profile</span>
                            </div>
                            <div className="ebkStore-orderMenuCnt-cnt" onClick={() => navigate("/orderlist")}>
                                    <LocalMallOutlinedIcon className="ebkStore-orderIconMenu-cnt"/>
                                <span className="ebkStore-orderMenuLabel-cnt">My Orders</span>
                            </div>
                            <div className="ebkStore-wishlistMenuCnt-cnt" onClick={() => navigate("/wishlist")}>
                                <FavoriteBorderOutlinedIcon className="ebkStore-wishlistIcon-cnt"/>
                                <span className="ebkStore-wishlistLabelMenu-cnt">My Wishlist</span>
                            </div>
                            <div className="ebkStore-logoutCnt-cnt">
                                <button className="ebkStore-linkMenu-cnt" onClick={handleLogout}>Logout</button>
                            </div>
                            </div>:
                            <div className='ebkStore-loginMenu01Cnt-cnt>' style={{padding: "16px 35px 20px 19px", display: "flex", flexDirection: "column", gap: "10px", width: "200px"}}>
                                <div className="ebkStore-welcomeCntMenu-ctn">
                                    <span className="ebkStore-welcomelabelCnt-cnt">Welcome</span>
                                    <div className="ebkStore-welcomeInfo-cnt">To access account and manage orders</div>
                                </div>
                                <button className="ebkStore-loginsignUpbtn-cnt" onClick={handleLogin}>LOGIN/SIGNUP</button>
                                <div className="ebkStore-divider-cnt"></div>
                                <div className="ebkStore-ordersMenu01-cnt">
                                    <LocalMallOutlinedIcon className='ebkStore-orderIconMenuUI-cnt'/>
                                    <span className="ebkStore-orderlabelMenu01-cnt">My Orders</span>
                                </div>
                                <div className="ebkStore-wishlistCnt-cnt" >
                                    <FavoriteBorderOutlinedIcon className='ebkStore-wishlistIconMenuUI-cnt'/>
                                    <span className="ebkStore-wishlistMenuIcon-cnt">Wishlist</span>
                                </div>
                            </div>}
                    </Menu>
                </div>
                <div className="ebkStore-cart-cnt" onClick={handleClick}>
                        <Badge badgeContent={cartQty || undefined} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    <span className='ebkStore-cartHeader-cnt'>Cart</span>
                </div>
            </div>
            <Modal open={openModal} onClose={handleClose} className="ebkStore-modalWrapper-cnt"><Login_SignUp handleModal={handleClickModal}/></Modal>
        </div>
        <Outlet context={handleLogin}/>
        </>
    )
}

export default BookDashboard;



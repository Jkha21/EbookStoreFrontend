import './Wishlist.scss';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import bookIcon from '../../assets/bookicon.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removeItemWishlist } from '../../utils/Store/WishlistSlice';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((store) => store.wishlist.wishlist); 
    const handleClick = (details) =>{
        dispatch(removeItemWishlist(details));        
    }
    
    return (
        <>
            <div className="ebkStore-wishlistLink-cnt">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/book">
                        Home
                    </Link>
                    <Link underline="hover" color="#0A0102">
                        Wishlist
                    </Link>
                </Breadcrumbs>
                <div className="ebkStore-wishlistWrapper-cnt">
                    <div className="ebkStore-wishlistHeader-cnt">My Wishlist({wishlist.length>0&&wishlist.length<10?"0"+`${wishlist.length}`:wishlist.length})</div>
                    {wishlist.map(details => (<div className="ebkStore-wishlistWrapperChildren-cnt">
                        <div className="ebkStore-wishlistDetailsBook-cnt">
                            <img src={details.bookImage?details.bookImage: bookIcon} alt="book" className="ebkStore-wishlistDetailsImgIcon-cnt" />    
         
                            <div className="ebkStore-wishlistDetailsCnt-cnt">
                                <span className="ebkStore-wishlistDetailsNameLabel-cnt">{details.bookName}</span>
                                <span className="ebkStore-wishlistDetailsAuthorLabel-cnt">{details.author}</span>
                                <div className="ebkStore-wishlistDetailsPriceCnt-cnt">
                                    <span className="ebkStore-wishlistDetailsPrice-cnt">Rs {details.price}</span>
                                    <span className="ebkStore-wishlistDetailsTotalPriceCnt-cnt">Rs {details.price+details.discountPrice}</span>
                                </div>
                            </div>            
                        </div>      
                        <div className='ebkStore-delWishlistBtn-cnt' >
                            <DeleteOutlineIcon onClick={() => handleClick(details)} className="ebkStore-delWishlistBtnIcon-cnt"/>
                        </div>
                    </div>))}
                    
                </div>
            </div>
        </>
    );
};

export default Wishlist;

import './BookUI.scss';
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '../../assets/bookicon.png';
import BookIcon02 from '../../assets/book02.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import BookIcon03 from '../../assets/Image 11.png'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../utils/Store/CartSlice'; 

const BookUI = () =>{
    const path = useLocation();
    let res = useSelector((store) => store.cart.cartlist);
    const [{bookImage, discountPrice, _id, bookName, author, description, price}] = path.state|| [{}];
    const [qty, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const handleClick = (action) =>{
        if(action === "add"){
            setQuantity(qty+1);             
            let quantity = qty + 1;
            dispatch(getCart({bookImage, bookName, author, price, discountPrice, _id, quantity}));
            console.log(res);
        }else if(action === "remove"){
            setQuantity(qty-1);
        }
    }
    return (
        <>
            
            <div className="ebkStore-wrapperBookUI-cnt">
                <div className="ebkStore-routeLink-cnt">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" className="ebkStore-link01-cnt" href="/book">
                        Home
                        </Link>
                        <Link underline="hover"  className='ebkStore-link02-cnt'>
                        Book01
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className='ebkStore-bodyWrapper-cnt'>
                    <div className='ebkStore-bookDetailsBody-cnt'>
                        <div className="ebkStore-bookImgCnt-cnt">
                            <img src={BookIcon} alt="book1" className="ebkStore-img01-cnt" />
                            <img src={BookIcon02} alt="book2" className="ebkStore-img02-cnt" />
                        </div>
                        <div className="ebkStore-bookImgLink-cnt">
                            <img src={bookImage?bookImage:BookIcon} alt="book" className="ebkStore-bookImgLarge-cnt" />
                            <div className="ebkStrore-buttonCntlink-cnt">
                                {!qty?<button className="ebkStore-addtoCartbt-cnt" onClick={() => handleClick("add")}>ADD TO BAG</button>:
                                <div className="ebkStore-bookUIQuantityCnt-cnt">
                                    <button className="ebkStore-removeQtyCnt-cnt" onClick={() => handleClick("remove")} >-</button>
                                    <input type="text" className="ebkStore-quantityCnt-cnt" value={qty}/>
                                    <button className="ebkStore-addQtyCnt-cnt" onClick={() => handleClick("add")}>+</button>
                                </div>}
                                <button className="ebkStore-wishlistbt-cnt">
                                    🤍 WISHLIST
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ebookStore-detailsRating-cnt">
                        <div className="ebkStore-bookDetails-cnt">
                            <span className="ebkStore-bookNameData-cnt">{bookName}</span>
                            <span className="ebkStore-authorNameData-cnt">by {author}</span>
                            <div className="ebkStore-starLabel-cnt">
                                <span className="ebkStore-ratingCnt-cnt">4.5</span>
                                <StarIcon className='ebookStore-starLabelicon-cnt' style={{height: '13px'}}/>
                                <span className='ebkStore-ratingCount-cnt'>(20)</span>
                            </div>
                            <div className='ebkStore-bookUIPriceCnt-cnt'>
                                <span className='ebkStore-bookUIpricelLabel-cnt'>Rs {price}</span>
                                <span className='ebkStore-bookUImrplabel-cnt'>Rs {price+discountPrice}</span>
                            </div>
                        </div>
                        <div className='ebookStore-lineBookSeparate-cnt'></div>
                        <div className="ebookStore-bookDescription-cnt">
                            <li className="ebookStore-bookdetailsLabelcnt-cnt">Book Details</li>
                            <div className="ebookStore-bookDesLabel-cnt">{description}</div>
                        </div>
                        <div className='ebookStore-lineBookSeparate-cnt'></div>
                        <div className="ebkStore-feedbackWrapper-cnt">
                            <span className="ebkStore-feedbackcnt-cnt">Customer Feedback</span>
                            <div className="ebokStore-feedbackCnt-cnt">
                                <span className='ebkStore-satisfactionLabel-cnt'>Overall Rating</span>
                                <div className="eboStore-starRating-cnt">
                                    <StarOutlineIcon />                                    
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                </div>
                                <input type="text" className="ebkStore-feedbackInput-cnt" placeholder='Write your Review'/>
                                <div className="ebkStore-submitbtnCnt-ct">
                                    <button className="ebkStore-submitbtn-cnt">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="ebkStore-feedbackCt-cnt">
                            <div className="ebkStore-customerFeedback01-cnt">
                                <div className="ebkStore-profileFeedbackCircle-cnt">RS</div>
                                <div className="ebkStore-feedbackDetailsCnt-cnt">
                                    <span className="ebkStore-namelabel-cnt">Aniket Chile</span>
                                    <div className="ebkStore-ratingStarUser-cnt">
                                        < StarIcon className='ebkStore-filledStar-cnt' style={{color: '#FFCE00'}}/>    
                                        < StarIcon className='ebkStore-filledStar-cnt' style={{color: '#FFCE00'}}/>
                                        < StarIcon className='ebkStore-filledStar-cnt' style={{color: '#FFCE00'}}/>
                                        < StarOutlineIcon className='ebkStore-emptyStar-cnt' style={{color: '#707070'}}/>
                                        < StarOutlineIcon className='ebkStore-emptyStar-cnt' style={{color: '#707070'}}/>
                                    </div>  
                                    <div className="ebkStore-feebackDetails-cnt">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in, quidem eos dicta corrupti dolor iste distinctio quisquam modi excepturi eaque! Quaerat est explicabo iusto itaque? Impedit numquam sed voluptatem!
                                    </div>                                  
                                </div>
                            </div>
                            <div className="ebkStore-customerFeedback01-cnt">
                                <div className="ebkStore-profileFeedbackCircle-cnt">SD</div>
                                <div className="ebkStore-feedbackDetailsCnt-cnt">
                                    <span className="ebkStore-namelabel-cnt">Sharad Boradkar</span>
                                    <div className="ebkStore-ratingStarUser-cnt">
                                        < StarIcon className='ebkStore-filledStar-cnt' style={{color: '#FFCE00'}}/>    
                                        < StarIcon className='ebkStore-filledStar-cnt' style={{color: '#FFCE00'}}/>
                                        < StarIcon className='ebkStore-filledStar-cnt' style={{color: '#FFCE00'}}/>
                                        < StarIcon className='ebkStore-filledStar-cnt' style={{color: '#FFCE00'}}/>
                                        < StarOutlineIcon className='ebkStore-emptyStar-cnt' style={{color: '#707070'}}/>
                                    </div>  
                                    <div className="ebkStore-feebackDetails-cnt">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in, quidem eos dicta corrupti dolor iste distinctio quisquam modi excepturi eaque! Quaerat est explicabo iusto itaque? Impedit numquam sed voluptatem!
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookUI;

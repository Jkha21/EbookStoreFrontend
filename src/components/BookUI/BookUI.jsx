import './BookUI.scss';
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '../../assets/bookicon.png';
import BookIcon02 from '../../assets/book02.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import BookIcon03 from '../../assets/Image 11.png'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const BookUI = () =>{
    return (
        <>
            
            <div className="ebkStore-wrapperBookUI-cnt">
                <div className="ebkStore-routeLink-cnt">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" className="ebkStore-link01-cnt">
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
                            <img src={BookIcon03} alt="book" className="ebkStore-bookImgLarge-cnt" />
                            <div className="ebkStrore-buttonCntlink-cnt">
                                <button className="ebkStore-addtoCartbt-cnt">ADD TO BAG</button>
                                <button className="ebkStore-wishlistbt-cnt">
                                    🤍 WISHLIST
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ebookStore-detailsRating-cnt">
                        <div className="ebkStore-bookDetails-cnt">
                            <span className="ebkStore-bookNameData-cnt">Don't Make me Think</span>
                            <span className="ebkStore-authorNameData-cnt">by Steve Krug</span>
                            <div className="ebkStore-starLabel-cnt">
                                <span className="ebkStore-ratingCnt-cnt">4.5</span>
                                <StarIcon className='ebookStore-starLabelicon-cnt' style={{height: '13px'}}/>
                                <span className='ebkStore-ratingCount-cnt'>(20)</span>
                            </div>
                            <div className='ebkStore-bookUIPriceCnt-cnt'>
                                <span className='ebkStore-bookUIpricelLabel-cnt'>Rs 1500</span>
                                <span className='ebkStore-bookUImrplabel-cnt'>Rs 2000</span>
                            </div>
                        </div>
                        <div className='ebookStore-lineBookSeparate-cnt'></div>
                        <div className="ebookStore-bookDescription-cnt">
                            <li className="ebookStore-bookdetailsLabelcnt-cnt">Book Details</li>
                            <div className="ebookStore-bookDesLabel-cnt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores eveniet ex similique, pariatur animi, nostrum provident rem in facilis aspernatur unde veniam distinctio fuga ad iusto voluptatibus officiis consequuntur debitis.</div>
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

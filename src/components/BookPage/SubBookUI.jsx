import bookIcon from '../../assets/bookicon.png'
import StarIcon from '@mui/icons-material/Star';
import './SubBookUI.scss';

const SubBookUI = ({bookDetails, key, handleClick}) => {
    const {bookImage, discountPrice, _id, bookName, author, quantity, price} = bookDetails;
    

    return (
        <>
            <div className="ebkStore-subBookCnt-cnt" onClick={() => handleClick(_id)}>
                <div className="ebkStore-mainBookWrapper-cnt" >
                    <div className="ebkStore-bookImgLabel-cnt" >
                        <div className="ebkStore-mainBookimglabel-cnt">
                            <img src={bookDetails.bookImage?bookImage: bookIcon} alt='book' className='ebkStore-bookitemImg-cnt'/>
                        </div>
                        <div className="ebkStore-pageBookDetails-cnt">
                            <span className="ebkStore-bookNameLabel-cnt">{bookName}</span>
                            <span className="ebkStore-bookAuthorLabel-cnt">by {author}</span>
                            <div className="ebkStore-starLabel-cnt">
                                <span className="ebkStore-ratingCnt-cnt">4.5</span>
                                <StarIcon className='ebookStore-starLabelicon-cnt' style={{height: '13px'}}/>
                                <span className='ebkStore-ratingCount-cnt'>(20)</span>
                            </div>
                            <div className='ebkStore-priceCnt-cnt'>
                                <span className='ebkStore-pricelLabel-cnt'>Rs {price}</span>
                                <span className='ebkStore-mrplabel-cnt'>Rs {price+discountPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
    
};

export default SubBookUI;

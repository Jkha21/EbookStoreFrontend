import './BookPage.scss';
import bookIcon from '../../assets/bookicon.png'
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';

const BookPage = () =>{
    const booksList = useSelector((store) => store.books.books);
    console.log(booksList);
    return (
        <>
            
            <div className='ebkStore-bookHeader-cnt'>
                <div className="ebkStore-booksCount-cnt">
                    <span className="ebkStore-booklabel-cnt">Books</span>
                    <span className="ebkStore-bookCountlabel-cnt">(128items)</span>
                </div>
                <select name="rank" id="ebkStore-sort-cnt" className="ebkStore-sorting-cnt">
                    <option value="Sort" className="ebkStore-option1-cnt">Sort by relevance</option>
                    <option value="Price: Low to High" className="ebkStore-option1-cnt">Price: Low to High</option>
                    <option value="Price: High to Low" className="ebkStore-option1-cnt">Price: High to Low</option>
                    <option value="Newest Arrivals" className="ebkStore-option1-cnt">Newest Arrivals</option>
                </select>
            </div>
            <div className="ebkStore-mainBookWrapper-cnt">
                <div className="ebkStore-bookImgLabel-cnt">
                    <div className="ebkStore-mainBookimglabel-cnt">
                        <img src={bookIcon} alt='book' className='ebkStore-bookitemImg-cnt'/>
                    </div>
                    <div className="ebkStore-bookDetails-cnt">
                        <span className="ebkStore-bookNameLabel-cnt">Don't Make me Think</span>
                        <span className="ebkStore-bookAuthorLabel-cnt">by Steve King</span>
                        <div className="ebkStore-starLabel-cnt">
                            <span className="ebkStore-ratingCnt-cnt">4.5</span>
                            <StarIcon className='ebookStore-starLabelicon-cnt' style={{height: '13px'}}/>
                            <span className='ebkStore-ratingCount-cnt'>(20)</span>
                        </div>
                        <div className='ebkStore-priceCnt-cnt'>
                            <span className='ebkStore-pricelLabel-cnt'>Rs 1500</span>
                            <span className='ebkStore-mrplabel-cnt'>Rs 2000</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookPage;
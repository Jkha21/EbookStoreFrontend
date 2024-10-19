import './BookPage.scss';
import { useSelector } from 'react-redux';
import SubBookUI from './SubBookUI'; 
import { useNavigate } from 'react-router-dom';

const BookPage = () =>{
    const booksList = useSelector((store) => store.books.book);
    const navigate = useNavigate();
    const handleClick = (id) =>{
        const data = booksList.filter(book => book._id === id);
        console.log(data)
        navigate('/bookNo', {state: data});   
    }

    return (
        <>
            
            <div className='ebkStore-bookHeader-cnt'>
                <div className="ebkStore-booksCount-cnt">
                    <span className="ebkStore-booklabel-cnt">Books</span>
                    <span className="ebkStore-bookCountlabel-cnt">({booksList.length} items)</span>
                </div>
                <select name="rank" id="ebkStore-sort-cnt" className="ebkStore-sorting-cnt">
                    <option value="Sort" className="ebkStore-option1-cnt">Sort by relevance</option>
                    <option value="Price: Low to High" className="ebkStore-option1-cnt">Price: Low to High</option>
                    <option value="Price: High to Low" className="ebkStore-option1-cnt">Price: High to Low</option>
                    <option value="Newest Arrivals" className="ebkStore-option1-cnt">Newest Arrivals</option>
                </select>
            </div>
            <div className="ebkStore-bookPageCnt-cnt">
                {
                    booksList.map((bookList, index) => 
                        <SubBookUI bookDetails = {bookList}  handleClick={handleClick}/>
                    )
                }
            </div>
        </>
    )
}

export default BookPage;
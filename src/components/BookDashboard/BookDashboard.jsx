import './BookDashboard.scss';
import education from '../../assets/education.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { getAllBooks } from '../../utils/Api';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getBooks from '../../utils/Store/BookSlice.js';

const BookDashboard = () =>{
    const dispatch = useDispatch();
    const getBooks = async() =>{
        try{
            const books = await getAllBooks('getallbooks');
            console.log(books.data.data)
            // dispatch(getBooks(books.data.data));
        }catch(error){
            throw new Error("Not able to get Books");
        }
    }
    
    useEffect(() =>{
        getBooks();
    }, []);


    return(
        <>
        <div className="ebkStore-wrapper-cnt">
            <img src={education} alt='book' className='ebkStore-bookImg-cnt' /> 
            <span className='ebkStore-bookheader-cnt'>Bookstore</span>
            <input type="text" className="ebkStore-Search-cnt" placeholder='Search'/>
            <div className="ebkStore-profileCartlink-cnt">
                <div className="ebkStore-profile-cnt">
                    < PersonOutlineOutlinedIcon />
                    <span className="ebkStore-profileHeader-cnt">Profile</span>
                </div>
                <div className="ebkStore-cart-cnt">
                    <ShoppingCartIcon />
                    <span className='ebkStore-cartHeader-cnt'>Cart</span>
                </div>
            </div>
        </div>
        <Outlet/>
        </>
    )
}

export default BookDashboard;

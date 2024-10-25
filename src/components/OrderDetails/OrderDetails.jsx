import './OrderDetails.scss';
import { useNavigate } from 'react-router-dom';
import bookIcon from '../../assets/Image 11.png'
const OrderDetails = () =>{
    const navigate = useNavigate();
    return (
        <>
            <div className="ebkStore-orderWrapper-cnt">
                <div className="ebkStore-orderHeaderLabel-cnt">Order Summary</div>
                <div className="ebkStore-orderDetailsFinal-cnt">
                    <img src={bookIcon} alt="book" className="ebStore-orderImgCnt-cnt" />
                    <div className="orderDetailsLabelCnt-cnt">
                        <span className="ebkStore-orderBookName-cnt">Don't Make Me Think</span>
                        <span className="ebkStore-orderAuthorCnt-cnt">by Steve Kurg</span>
                        <div className='ebkStore-priceCntOrder-cnt'>
                            <span className="ebkStore-orderPriceCnt-cnt">Rs 1500</span>
                            <span className="ebkStore-mrpOrderCnt-cnt">Rs 2000</span>
                        </div>
                    </div>
                </div>
                    <div className="ebkStore-checkoutBtn-cnt">
                        <button className="ebkStore-checkoutOrderBtn-cnt" onClick={() => navigate("/order")} >CHECKOUT</button>
                    </div>
            </div>
        </>

    )
}

export default OrderDetails;
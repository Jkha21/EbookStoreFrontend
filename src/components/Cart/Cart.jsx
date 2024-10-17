import './Cart.scss';
import bookIcon from '../../assets/Image 11.png'
import CustomerDetails from '../CustomerDetails/CustomerDetails';


const Cart = () =>{
    return (
        <>
            <div className="ebkStore-mainWrapper-cnt">
                <div className="ebkStore-cartMainbody-cnt">
                    <div className="ebkStore-cartHeaderLabel-cnt">
                        <span className="ebkStore-mycartlabel-cnt">My cart(1)</span>
                        <select name="location" id="location-cnt" className='ebkStore-locationDropdown-cnt'>
                            <option value="null" className='ebkStore-locationiOptionVal-cnt'>📌 Location</option>
                            <option value="null" className='ebkStore-locationiOptionVal-cnt'>Bridge</option>
                        </select>
                    </div>
                    <div className="ebkStore-bookDetailsOrder-cnt">
                        <img src={bookIcon} alt="book" className="ebkStore-orderImg-cnt" />
                        <div className="ebkStore-orderDetailsSubCnt-cnt">
                            <span className="ebkStore-nameLabelOrder-cnt">Don't Make Me Think</span>
                            <span className="ebkStore-authorLabelOrder-cnt">by Steve Kurg</span>
                            <div className="ebkStore-priceOrderCnt-cnt">
                                <span className="ebkStore-finalPriceOrder-cnt">Rs 1500</span>
                                <span className="ebkStore-originalPriceOrder-cnt">Rs 2000</span>
                            </div>
                            <div className="ebkStore-quantitybtn-cnt">
                                <button className="ebkStore-removeBtn-cnt">-</button>
                                <input type="text" className="ebkStore-valInput-cnt" />
                                <button className="ebkStore-addBtn-cnt">+</button>
                                <span className="ebkStore-removeItem-cnt">Remove</span>
                            </div>
                        </div>
                    </div>
                    <div className="ebkStore-submitCnt-cnt">
                        <button className="ebkStore-orderSubmit-cnt">PLACE ORDER</button>
                    </div>
                </div>
                <CustomerDetails />
            </div>
        </>
    )
}

export default Cart;
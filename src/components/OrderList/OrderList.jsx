import './OrderList.scss';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import bookIcon from '../../assets/bookicon.png'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const OrderList = () => {
    const orderlist = useSelector((store) => store.OrderList.orderlist); 
    
    return (
        <>
            <div className="ebkStore-orderlistWrapper-cnt">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/book">
                        Home
                    </Link>
                    <Link underline="hover" color="#0A0102">
                        My Order
                    </Link>
                </Breadcrumbs>
                {orderlist.forEach(orderDetails => (
                    <div className="ebkStore-orderlistItems-cnt">
                        <div className="ebkStore-orderlistbody-cnt">
                            <div className="ebkStore-orderlistDetails-cnt">
                                <img src={bookIcon} alt="book" className="ebkStore-orderDetailsbookImg-cnt" />
                                <div className="ebkStore-orderDetailsdetailsLabel-cnt">
                                    <span className="ebkStore-orderDetailsNameLabel-cnt">{orderDetails.bookName}</span>
                                    <span className="ebkStore-orderDetailsAuthorLabel-cnt">{orderDetails.author}</span>
                                    <div className="ebkStore-orderDetailsPriceLabel-cnt">
                                        <span className="ebkStore-orderDetailsPrice-cnt">{orderDetails.price}</span>
                                        <span className="ebkStore-orderDetailsDiscountPrice-cnt">{orderDetails.discountPrice+orderDetails.price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ebkStore-orderlistDate-cnt">
                                <div className='ebkStore-liveOrderDetails-cnt'></div> 
                                <span>Order Placed on {orderDetails.createdAt}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OrderList;

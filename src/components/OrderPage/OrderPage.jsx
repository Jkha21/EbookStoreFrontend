import popper from '../../assets/10279256.png';
import subPopper from '../../assets/49862020.jpg'
import './OrderPage.scss';
import { useNavigate } from 'react-router-dom';

const OrderPage = () =>{
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/book');
    }
    return (
        <>
        <div className="ebkStore-orderPageWrapper-cnt">
            <div className="ebkStore-orderPageImgCnt-cnt">
                <img src={subPopper} alt="subpopper" className="ebkStore-orderPageImg02-cnt" />
                <div className="ebkStore-orderPageLabel-cnt">Order Placed Successfully</div>
                <img src={popper} alt="popper" className="ebkStore-orderPage01-cnt" />
                <div className="ebkStore-orderPageId-cnt">hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</div>
            </div>
            <div className="ebkStore-orderImagetableCnt-cnt">
                <table className="ebkStore-tableCnt-cnt">
                    <tr className="ebkStore-tr01Cnt-cnt">
                        <td className="ebkStore-td01Cnt-cnt">Email us</td>
                        <td className="ebkStore-td02Cnt-cnt">Contact us</td>
                        <td className="ebkStore-td03Cnt-cnt">Address</td>
                    </tr>
                    <tr className="ebkStore-tr02Cnt-cnt">
                        <td className="ebkStore-tr1td01Cnt-cnt">admin@bookstore.com</td>
                        <td className="ebkStore-tr1td02Cnt-cnt"> +91 8163476881</td>
                        <td className="ebkStore-tr1td03Cnt-cnt">42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                    </tr>
                </table>
            </div>
            <button className="ebkStore-orderPageContinueBtn-cnt" onClick={handleClick}>CONTINUE SHOPPING</button>
        </div>        
        </>
    )
}


export default OrderPage;
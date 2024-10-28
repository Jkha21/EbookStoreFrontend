import { useEffect, useState } from 'react';
import './CustomerDetails.scss';
import { GetCustomerList } from '../../utils/Api';

const CustomerDetails = ({handleOrder}) =>{
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const getData = async() =>{
        const customerDetails = (await GetCustomerList("")).data.data[0];
        const {FullName, MobileNo, AddressDetails} = customerDetails;
        setName(FullName);
        setMobileNo(MobileNo);

    }
    useEffect(()=>{
        getData();
    }, []);

    return (
        <>
            <div className="ebkStore-cdWrapper-cnt">
                <div className="ebkStore-cdHeader-cnt">
                    <span className="ebkStore-cdlabel-cnt">Customer Details</span>
                    <button className="ebkStore-addAddressBtn-cnt">Add New Address</button>
                </div>
                <div className="ebkStore-nameMobnodetails-cnt">
                    <div className="ebkStore-nameDetails-cnt">
                        <span className="ebkStore-cdNameLabel-cnt">Full Name</span>
                        <input type="text" className="ebkStore-cdNameCnt-cnt" value={name} readOnly/>
                    </div>
                    <div className="ebkStore-nameDetails-cnt">
                        <span className="ebkStore-cdNameLabel-cnt">Mob No</span>
                        <input type="text" className="ebkStore-cdNameCnt-cnt" value={mobileNo} readOnly/>
                    </div>
                </div>
                <div className="ebkStore-addressWrapper-cnt">
                    <form action="submit" name = "address" className='ebkStore-addForm-cnt'>
                        <div className="ebkStore-add01-cnt">
                            <input type='radio' name='addType' className="ebkStore-addHeader-cnt"/>
                            <span className="ebkStore-addHeaderLabel-cnt">1.WORK</span>
                            <span className="ebkStore-editAddress-cnt">Edit</span>
                        </div>
                        <div className="ebkStore-addressLabel-cnt">Address</div>
                        <textarea type="text" className="ebkStore-addInputCd-cnt"></textarea>
                        <div className="ebkStore-stateInput-cnt">
                            <div className="ebkStore-inputLabel01-cnt">
                                <span className="ebkStore-cityLabel-cnt">city/town</span>
                                <input type="text" className="ebkStore-cityInput-cnt" />
                            </div>
                            <div className="ebkStore-inputLabel01-cnt">
                                <span className="ebkStore-cityLabel-cnt">State</span>
                                <input type="text" className="ebkStore-cityInput-cnt" />
                            </div>
                        </div>
                        {/* <div className="ebkStore-addHome-cnt">
                            <div className='ebkStore-homeRadioCnt-cnt'>
                                <input type="radio" className="ebkStore-homeAddCnt-cnt" />
                                <span className="ebkStore-homeLabel-cnt">2.Home</span>
                            </div>
                            <span className="ebkStore-homeAddresslabel-cnt">Address</span>
                            <div className="ebkStore-homeAddressCnt-cnt">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos blanditiis voluptatibus magnam, alias aliquid nesciunt non officia cum, vel nam tenetur accusamus. Quaerat atque possimus cum odit sint enim.
                            </div>
                        </div> */}
                    </form>
                        <div className="ebkStore-continueBtnCnt-cnt">
                            <button className="ebkStore-continueBtn-cnt" onClick={() => handleOrder()}>CONTINUE</button>
                        </div>
                </div>
            </div>            
        </>
    )
}

export default CustomerDetails;
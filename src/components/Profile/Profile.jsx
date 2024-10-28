import './Profile.scss';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';
import {  AddAddressList, EditCustomerList, GetCustomerList } from '../../utils/Api';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const Profile = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const data = location.state;
    const [active, setActive] = useState(false)
    const [activeAddress, setActiveAddress] = useState(false);
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState(data.FullName);
    const [emailId, setEmailId] = useState(data.EmailId);
    const [password, setPassword] = useState("");
    const [mobileNo, setMobileNo] = useState(data.MobileNo);
    const [addresslist, setAddressList] = useState([]);
    const {FullName, EmailId, MobileNo} = data;
    const handleCustomerData = async(action) =>{

        if(action === "address"){
            const addressArray = await AddAddressList("/addAddress", {address, state, city, type});
        }else if(action === "userDetails"){
            const userDetails = await EditCustomerList("/edit", {FullName, EmailId, MobileNo});
        }
        
    };

    const handleAddressData = () =>{
        setActiveAddress(!activeAddress);
    }
    
    const handleUserData = () =>{
        setActive(!active);
    }

    const getData = async() =>{
        const customerData = (await GetCustomerList("")).data.data[0];
        const {FullName, EmailId, MobileNo, AddressDetails} = customerData;
        setName(FullName);
        setEmailId(EmailId);
        setMobileNo(MobileNo);
        setAddressList(AddressDetails);
    }

    useEffect(()=>{
        getData();
    }, []);

    return (
        <>
        <div className="ebkStore-profileWrapperCnt-cnt">
            <div className="ebkStore-profileLinkCnt-cnt">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/book">
                    Home
                    </Link>
                    <Link
                    underline="hover"
                    color="primary"
                    >
                    profile
                    </Link>
                </Breadcrumbs>
            </div>
            
            <div className="ebkStore-profileWrapperCnt-ct">
                <div className="ebkStore-editUserProfile-cnt">
                    <div className="ebkStore-personalProfileHeaderCnt-cnt">
                        <span className="ebkStore-profileSpanLabel-cnt">Personal Profile</span>
                        <span className="ebkStore-profileEditBtn-cnt" onClick={handleUserData}>{active?"Cancel":"Edit"}</span>
                    </div>
                    <button className="ebkStore-editUserSaveBtn-cnt" style={{opacity: active?1:0}} onClick={() => handleCustomerData("userProfile")}>Save</button>
                </div>
                <form action="submit" className="ebkStore-profileEditCnt-cnt" >
                    <div className="ebkStore-profileFullNameCnt-cnt">
                        <span className="ebkStore-profileFullNameLabel-cnt">Full Name</span>
                        <input type="text" className="ebkStore-profileFullNameInput-cnt" value={name} disabled={!active} onChange={!active?(e) => setName(e.target.value):undefined} style={{backgroundColor:active?"#FFFFFF":"#F5F5F5"}}/>
                    </div>
                    <div className="ebkStore-profileEmailIdNameCnt-cnt">
                        <span className="ebkStore-profileEmailidNameLabel-cnt">Email Id</span>
                        <input type="text" className="ebkStore-profileEmailIdInputCnt-cnt" value={emailId} disabled={!active} onChange={!active?(e) => setEmailId(e.target.value):undefined} style={{backgroundColor:active?"#FFFFFF":"#F5F5F5"}}/>
                    </div>
                    <div className="ebkStore-profilePasswordCnt-cnt">
                        <span className="ebkStore-profilePasswordNameLabel-cnt">Password</span>
                        <input type="text" className="ebkStore-profilePasswordInput-cnt" value={password} disabled={!active} onChange={!active?(e) => setPassword(e.target.value):undefined} style={{backgroundColor:active?"#FFFFFF":"#F5F5F5"}}/>
                    </div>
                    <div className="ebkStore-profileMobNoCnt-cnt">
                        <span className="ebkStore-profileMobNoNameLabel-cnt">Mobile Number</span>
                        <input type="text" className="ebkStore-profileMobNoInput-cnt" value={mobileNo} disabled={!active} onChange={!active?(e) => setMobileNo(e.target.value):undefined} style={{backgroundColor:active?"#FFFFFF":"#F5F5F5"}}/>
                    </div>
                </form>
            </div>
            
            <div className="ebkStore-profileAddressDetailsWrapper-cnt">
                <div className="ebkStore-profileAddressHeaderCnt-cnt">
                    <span className="ebkStore-profileAddressHeaderLabel-cnt">Address Details</span>
                    <button className="ebkStore-profileAddAddressBtn-cnt">Add New Address</button>
                </div>

                {addresslist.map((item, index) => (
                    <>
                    <div className="ebkStore-profileTypeAddressLabel-cnt">
                    <div className="ebkStore-editAddressProfile-cnt">
                    <span className="ebkStore-profileTypeAddressNameLabel-cnt">1.Work</span>
                    <span className="ebkStore-profileAddressEditBtn-cnt" onClick={handleAddressData}>{activeAddress?"Cancel":"Edit"}</span>
                    </div>
                    <button className="ebkStore-editSaveAddressProfile-cnt" style={{opacity: activeAddress?1:0}}onClick={() => handleCustomerData("address")}>Save</button>
                    </div>
                    <form action="submit" className="ebkStore-addressEditCnt-cnt">
                        <div className="ebkStore-profileAddressLabelCnt-cnt">
                            <span className="ebkStore-profileAddressNameLabelType-cnt">Address</span>
                            <input type="text" className="ebkStore-profileFullAdddressNameInput-cnt" value={address} disabled={!activeAddress} onChange={activeAddress?undefined:(e) => setAddress(e.target.value)} style={{backgroundColor:activeAddress?"#FFFFFF":"#F5F5F5"}}/>
                        </div>
                        <div className="ebkStore-profileStateTownCnt-cnt">
                            <div className="ebkStore-profileCityCnt-cnt">
                                <span className="ebkStore-profileStateLabelCnt-cnt">city/town</span>
                                <input type="text" className="ebkStore-profileStateInputCnt-cnt" value={city} disabled={!activeAddress} onChange={activeAddress?undefined:(e) => setCity(e.target.value)} style={{backgroundColor:activeAddress?"#FFFFFF":"#F5F5F5"}}/>
                            </div>
                            <div className="ebkStore-profileStateAddressCnt-cnt">
                                <span className="ebkStore-typeAddressLabelNameLabel-cnt">State</span>
                                <input type="text" className="ebkStore-typeStateAddressInputCnt-cnt" value={state} disabled={!activeAddress} onChange={activeAddress?undefined:(e) => setState(e.target.value)} style={{backgroundColor:activeAddress?"#FFFFFF":"#F5F5F5"}}/>
                            </div>
                        </div>
                        <div className="ebkStore-typeAddressRadioCnt-cnt">
                        <span className="ebkStore-typeAddressRadiolabel-cnt">Type</span>
                        <div className="ebkStore-typeAddressRadioBtnCnt-cnt">
                            <label className='ebkStore-homeTypeAddressBtnLabel-cnt'>
                                <input 
                                    type="radio" 
                                    name="addressType" 
                                    value="Home" 
                                    checked={type === "Home"} 
                                    onChange={(e) => { if (activeAddress) setType(e.target.value); }} 
                                    className="ebkStore-homeTypeAddressBtn-cnt" 
                                    disabled={!activeAddress}
                                />
                                Home
                            </label>
                            <label className="ebkStore-workTypeAddressLabel-cnt">
                                <input 
                                    type="radio" 
                                    name="addressType" 
                                    value="Work" 
                                    checked={type === "Work"} 
                                    onChange={(e) => { if (activeAddress) setType(e.target.value); }} 
                                    className="ebkStore-workTypeAddressRadioBtn-cnt" 
                                    disabled={!activeAddress}
                                />
                                Work
                            </label>
                            <label className="ebkStore-otherWorkTypeAddress-cnt">
                                <input 
                                    type="radio" 
                                    name="addressType" 
                                    value="Other" 
                                    checked={type === "Other"} 
                                    onChange={(e) => { if (activeAddress) setType(e.target.value); }} 
                                    className="ebkStore-otherTypeAddressRadioBtn-cnt" 
                                    disabled={!activeAddress}
                                />
                                Other
                            </label>
                        </div>
                    </div>
                    </form>
                    </>
                ))}
            </div>
        </div>
        </>
    )
}

export default Profile;
import './Login_SignUp.scss';
import shoppingIcon from '../../assets/2766594.png';
import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Login_SignUp = () =>{
    const [open, setOpen] = useState(true);
    const handleClick = () =>{
        setOpen(!open);
    }
    return (
        <>
        <div className="ebkStore-loginSignUpWrapper-cnt">
            <div className="ebkStore-onlineShoppingWraper-cnt">
                <img src={shoppingIcon} alt="shop" className="ebkStore-shoppingImg-cnt" />
            </div>
            <div className="ebkStore-loginSignUpCnt-cnt">
                <div className="ebkStore-loginSignUpHeader-cnt">
                    <div className="ebkStore-activeBar-cnt">
                    <span className="ebkStore-loginLabel-cnt" onClick={handleClick} style={{color: open?"#0A0102":"#878787"}}>
                        LOGIN
                    </span>
                    <div className="ebkStore-activeCnt-cnt" style={{backgroundColor: open?"#A03037": "white"}}></div>
                    </div>
                    <div className="ebkStore-activeBar-cnt">
                    <span className="ebkStore-signupLabel-cnt" onClick={handleClick} style={{color: open?"#878787":"#0A0102"}}>
                        SIGNUP
                    </span>
                    <div className="ebkStore-activeCnt-cnt" style={{backgroundColor: open?"white":"#A03037"}}></div>
                    </div>
                </div>
                {
                    open?<Login/>: <SignUp/>
                }
            </div>
        </div>
        
        
        </>
    )
}

export default Login_SignUp;
import { SignUpUser } from '../../utils/Api';
import './SignUp.scss';
import { useState } from 'react';

const SignUp = ({handletoLogin}) =>{
    const [name, setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNo, setMobileNo ] = useState("");
    const handleClick = () =>{
        const data = SignUpUser('', {FullName: name, EmailId: emailId, Password: password, MobileNo: mobileNo});
        if (data){
            handletoLogin();
        }
        console.log(data)
    }

    //Maghi@ajdl.com
    // JSGahkjhs
    return (
        <>
            <div className="ebkStore-signUpCntWrapper-cnt">
                <div className="ebkStore-fullNameSignUpCnt-cnt">
                    <span className="ebkStore-fullNameSignUpLabel-cnt">Full Name</span>
                    <input type="text" className="ebkStore-fullNameInputCnt-cnt" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="ebkStore-emailIdSignUpCnt-cnt">
                    <span className="ebkStore-emailIdLabelCnt-cnt">Email id</span>
                    <input type="text" className="ebkStore-emailIdInputCnt-cnt" onChange={(e) => setEmailId(e.target.value)}/>
                </div>
                <div className="ebkStore-passwordSignUpCnt-cnt">
                    <span className="ebkStore-passwordSignUpLabel-cnt">Password</span>
                    <input type="text" className="ebkStore-passwordSignUpInput-cnt" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="ebkStore-mobileNoSignUpCnt-cnt">
                    <span className="ebkStore-mobileNoSignUpLabel-cnt">Mobile Number</span>
                    <input type="text" className="ebkStore-mobileNoInput-cnt" onChange={(e) => setMobileNo(e.target.value)}/>
                </div>
                <button className="ebkStore-signUpBtn-cnt" onClick={handleClick}>Signup</button>
            </div>
        </>
    )
}

export default SignUp; 
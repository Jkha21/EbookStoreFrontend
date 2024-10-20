import './SignUp.scss';

const SignUp = () =>{
    return (
        <>
            <div className="ebkStore-signUpCntWrapper-cnt">
                <div className="ebkStore-fullNameSignUpCnt-cnt">
                    <span className="ebkStore-fullNameSignUpLabel-cnt">Full Name</span>
                    <input type="text" className="ebkStore-fullNameInputCnt-cnt" />
                </div>
                <div className="ebkStore-emailIdSignUpCnt-cnt">
                    <span className="ebkStore-emailIdLabelCnt-cnt">Email id</span>
                    <input type="text" className="ebkStore-emailIdInputCnt-cnt" />
                </div>
                <div className="ebkStore-passwordSignUpCnt-cnt">
                    <span className="ebkStore-passwordSignUpLabel-cnt">Password</span>
                    <input type="text" className="ebkStore-passwordSignUpInput-cnt" />
                </div>
                <div className="ebkStore-mobileNoSignUpCnt-cnt">
                    <span className="ebkStore-mobileNoSignUpLabel-cnt">Mobile Number</span>
                    <input type="text" className="ebkStore-mobileNoInput-cnt" />
                </div>
                <button className="ebkStore-signUpBtn-cnt">Signup</button>
            </div>
        </>
    )
}

export default SignUp; 
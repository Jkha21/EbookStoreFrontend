import './ForgetPassword.scss';

const ForgetPassword = () =>{
    return (
        <>
            <div className="ebkStore-forgetPasswordSignUpCnt-cnt">
                <div className="ebkStore-forgetPasswordLabel-cnt">
                    Forget Your Password?
                </div>
                <div className="ebkStore-forgetPasswordWrapper-cnt">
                    <div className="ebkStore-resetEmailCnt-cnt">Enter your email address and we'll send you a link to reset your password.</div>
                    <div className='ebkStore-resetEmailLabelCnt-cnt'>
                    <span className="ebkStore-resetEmailLabel-cnt">Email Id</span>
                    <input type="text" className="ebkStore-emailInputfPCnt-cnt" />
                    </div>
                    <button className="ebkStore-resetPasswordBtn-cnt">Reset Password</button>
                </div>
                <button className="ebkStore-createAccBtn-cnt">CREATE ACCOUNT</button>
            </div>
        </>
    )
}

export default ForgetPassword;
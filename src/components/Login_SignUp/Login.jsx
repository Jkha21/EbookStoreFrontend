import './Login.scss';

const Login = () =>{
    return (
        <>
            <div className="ebkStore-loginStoreCnt-cnt">
                <div className="ebkStore-emailIdCnt-cnt">
                    <span className="ebkStore-emailIdLabel-cnt">Email Id</span>
                    <input type="text" className="ebkStore-emailIdInput-cnt" />
                </div>
                <div className="ebkStore-passwordCnt-cnt">
                    <span className="ebkSore-passCntLogin-cnt">Password</span>
                    <input type="text" className="ebkStore-passwordInputCnt-cnt" />
                    <div className="ebkStore-forgetPasswordCnt-cnt">Forget Password?</div>
                </div>
                <button className="ebkStore-loginBtn-cnt">Login</button>
                <div className="ebkStore-orLabelCnt-cnt">OR</div>
                <div className="ebkStore-loginLinkCnt-cnt">
                    <button className="ebkStore-facebookLogin-cnt">Facebook</button>
                    <button className="ebkStore-googleLoginCnt-cnt">Google</button>
                </div>
            </div>
        </>
    )
}

export default Login;
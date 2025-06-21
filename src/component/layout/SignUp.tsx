import LinkCustom from "../ui/LinkCustom";
import '../style/signup.scss'

export default function SignUp() {
    return (
        <div className="login">
            <div className="login_form">
                <p>Sign Up</p>
                <input type="text" placeholder="Your Email Address" />
                <input type="text" placeholder="Email Confirm" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Password Confirm" />
                <button>Sign Up</button>

                <div className="login_container">
                    Create your account?
                    <LinkCustom to='/login' className="login_to_signup">Login</LinkCustom>
                </div>
            </div>

            
        </div>
    )
}
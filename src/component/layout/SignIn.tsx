import LinkCustom from "../ui/LinkCustom";
import '../style/login.scss'

export default function SignIn() {
    return (
        <div className="login">
            <div className="login_form">
                <p>Sign In</p>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Password Confirm" />
                <button>Sign In</button>

                <div className="login_container">
                    Create your account?
                    <LinkCustom to='/signup' className="login_to_signup">Sign Up</LinkCustom>
                </div>
            </div>
        </div>
    )
}
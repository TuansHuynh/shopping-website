import LinkTargetBlank from "../ui/LinkTargetBlank";
import '../style/footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <p>&copy; {new Date().getFullYear()} TunaSia Company</p>
                <div>
                    <LinkTargetBlank to='https://www.facebook.com/tuans.huynh.174'>Facebook</LinkTargetBlank>
                    <LinkTargetBlank to='https://github.com/TuansHuynh/Website-Shop'>Github</LinkTargetBlank>
                    <LinkTargetBlank to='https://www.linkedin.com/'>LinedkIn</LinkTargetBlank>
                </div>
                <div>
                    <a href="/privacy-policy" className="">Privacy Policy</a>
                    <a href="/terms-of-service" className="">Terms of Service</a>
                </div>
            </div>
        </div>
    );
}
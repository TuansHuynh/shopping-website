import { Link } from "react-router-dom";
import '../style/logo.scss'

export default function Logo( { classname='logo', to='/' } ) {
    return (
        <div className={classname}>
            <Link to={to}>
                TunaStore
            </Link>
        </div>
    );
}
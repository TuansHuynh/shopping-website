import '../style/navbar.scss';
import SearchBar from '../ui/SearchBar';
import LinkCustom from '../ui/LinkCustom';
import Logo from '../ui/Logo';

function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Logo/>
            </div>
                <SearchBar />

            <div className="navbar__links">
                <ul>
                    <li><LinkCustom to={`/product`} className="navbar__link">Phone</LinkCustom></li>
                    <li><LinkCustom to={`/product`} className="navbar__link">Laptop</LinkCustom></li>
                    <li><LinkCustom to="/cart" className="navbar__link">Cart</LinkCustom></li>
                    <li><LinkCustom to='/user' className='navbar__link'>User Profile</LinkCustom></li>
                    <li><LinkCustom to="/login" className="navbar__link">Login</LinkCustom></li>
                </ul>
            </div>
    </div>
    );
}

export default Navbar;
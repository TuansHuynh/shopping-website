import '../style/menuBar.scss'
import LinkCustom from '../ui/LinkCustom'
import icon from '../../assets/image/icon/element.svg'
import { useState } from 'react'
import { listProduct } from '../../assets/data/Data';

export default function MenuBar() {
    const [active, setActive] = useState(true);

    const onClicked = () => {
        setActive(prev => !prev);
    };

    return (
        <div className='menuBar'>
            <div className={`menu_bar ${active ? 'active' : 'menu_bar'}`}>
                <LinkCustom className='link' to='/'>Home</LinkCustom>
                <LinkCustom className='link' to={`${listProduct[0]?.group || ''}`}>Phone</LinkCustom>
                <LinkCustom className='link' to={`${listProduct[1]?.group || ''}`}>Laptop</LinkCustom>
            </div>

            <div className='logo' onClick={onClicked}>
                <img src={icon} alt="menu icon" />
            </div>
        </div>
    );
}